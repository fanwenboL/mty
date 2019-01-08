import React from 'react';
import { Table, Popconfirm, Button, Card, Input, Breadcrumb, Form, Row, Col, Menu, Dropdown, Icon, message, } from 'antd';
import styles from './EnterpriseList.less'
import { personalList } from '../../../static/texts';
import moment from 'moment';
import EnterpriseAddEdit from './EnterpriseAddEdit/EnterpriseAddEdit';
import { getData, interfaceUrl } from '../../../utils/request';
const FormItem = Form.Item;
const { TextArea } = Input;
@Form.create()
class EnterpriseList extends React.Component {

    constructor() {
        super();
        //state中data去静态文件中取
        this.state = {
            enterpriseAddEditFlag: false
        };
    };

    componentDidMount() {
    }
    persionDetail(record) {
        console.log(record)
        this.setState({
            enterpriseAddEditFlag: true
        })
    }
    persionDetailClose() {
        this.setState({
            enterpriseAddEditFlag: false
        })
    }
    openModal() {
        this.setState({
            enterpriseAddEditFlag: true
        })
    }
    render() {
        // const { personalList } = this.state;
        // const columns = [{
        //     title: '序号',
        //     dataIndex: 'id',
        //     key: 'id',
        //     width: 70,
        // }, {
        //     title: '企业名称',
        //     dataIndex: 'userId',
        //     key: 'userId',
        // }, {
        //     title: '企业类型',
        //     dataIndex: 'wechtId',
        //     key: 'wechtId',
        // }, {
        //     title: '所属行业',
        //     dataIndex: 'wechtName',
        //     key: 'wechtName',
        // }, {
        //     title: '企业规模',
        //     dataIndex: 'wechtBindPhoneNumber',
        //     key: 'wechtBindPhoneNumber',
        // }, {
        //     title: '企业地址',
        //     dataIndex: 'phoneNumber',
        //     key: 'phoneNumber',
        // }, {
        //     title: '创建时间',
        //     dataIndex: 'creatTime',
        //     key: 'creatTime',
        //     render: text => moment(new Date(text)).format('YYYY-MM-DD HH:mm:ss'),
        // }, {
        //     title: '是否认证企业',
        //     dataIndex: 'states',
        //     key: 'states',
        // }, {
        //     title: '是否优选商家',
        //     dataIndex: 'good',
        //     key: 'good',
        // }, {
        //     title: '操作',
        //     dataIndex: 'action',
        //     key: 'action',
        //     render: (_, record) => {
        //         let menu = (
        //             <Menu>
        //                 <Menu.Item>
        //                     <span onClick={this.persionDetail.bind(this, record)}>查看详情</span>
        //                 </Menu.Item>
        //                 <Menu.Item>
        //                     <span>隐藏</span>
        //                 </Menu.Item>
        //                 <Menu.Item>
        //                     <span onClick={() => { this.props.history.push('/enterpriseManagement/deliveryManager'); }}>投递管理</span>
        //                 </Menu.Item>
        //                 <Menu.Item>
        //                     <span>编辑</span>
        //                 </Menu.Item>
        //             </Menu>
        //         )
        //         return (
        //             <div style={{ textAlign: 'left', fontSize: 12 }}>
        //                 <Dropdown overlay={menu}>
        //                     <Button style={{ marginLeft: 8 }}>
        //                         菜单 <Icon type="down" />
        //                     </Button>
        //                 </Dropdown>
        //             </div>
        //         );
        //     },
        // }];
        const columns = [{
            title: '序号',
            dataIndex: 'id',
            key: 'id',
            width: 70,
        }, {
            title: '企业ID',
            dataIndex: 'userId',
            key: 'userId',
        }, {
            title: '企业简称',
            dataIndex: 'wechtId',
            key: 'wechtId',
        }, {
            title: '企业公司全称',
            dataIndex: 'wechtName',
            key: 'wechtName',
        }, {
            title: '企业联系人',
            dataIndex: 'wechtBindPhoneNumber',
            key: 'wechtBindPhoneNumber',
        }, {
            title: '联系人手机号',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        }, {
            title: '创建时间',
            dataIndex: 'creatTime',
            key: 'creatTime',
            render: text => moment(new Date(text)).format('YYYY-MM-DD HH:mm:ss'),
        }, {
            title: '是否认证',
            dataIndex: 'states',
            key: 'states',
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                let menu = (
                    <Menu>
                        <Menu.Item>
                            <span onClick={this.persionDetail.bind(this, record)}>查看详情</span>
                        </Menu.Item>
                        <Menu.Item>
                            <span>禁用</span>
                        </Menu.Item>
                        <Menu.Item>
                            <span onClick={() => { this.openModal() }}>编辑</span>
                        </Menu.Item>
                    </Menu>
                )
                return (
                    <div style={{ textAlign: 'left', fontSize: 12 }}>
                        <Dropdown overlay={menu}>
                            <Button style={{ marginLeft: 8 }}>
                                菜单 <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </div>
                );
            },
        }];
        const that = this;
        const propsData = {
            persionDetailClose() {
                that.persionDetailClose()
            }
        }
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 22 },
            },
        };
        const item = {}
        return (
            <div style={{ padding: '0px 10px' }}>
                <Breadcrumb className={styles.pathnav}>
                    <Breadcrumb.Item>企业用户后台</Breadcrumb.Item>
                    <Breadcrumb.Item>企业信息管理</Breadcrumb.Item>
                    <Breadcrumb.Item>企业详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card title={'企业详情'} bodyStyle={{ padding: 5 }}>
                    <div>
                        <ul style={{ listStyle: 'none' }}>
                            <li><span>企业名称</span><span>{item.name}</span></li>
                            <li><span>企业状态</span><span>{item.status}</span></li>
                            <li><span>企业类型</span><span>{item.companyType}</span></li>
                            <li><span>所属行业</span><span>{item.industry}</span></li>
                            <li><span>企业规模</span><span>{item.scale}</span></li>
                            <li><span>企业地址</span><span>{item.address}</span></li>
                            <li><span>是否认证企业</span><span>{item.isAuth}</span></li>
                            <li><span>是否优选商家</span><span>{item.isOptimization}</span></li>
                            <li><span>社区二维码</span><span>{item.rqCode}</span></li>
                        </ul>
                    </div>

                </Card>
                <Card title={'企业用户列表'} style={{ marginTop: 20 }}>
                    <Row><div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button style={{ marginLeft: 10 }} type="primary">查询</Button></div></Row>
                    {/* 评估列表 */}
                    <Table
                        style={{ fontSize: 12 }}
                        rowKey="id"
                        dataSource={personalList}
                        columns={columns}
                    // pagination={{
                    //     current: +pageNo,
                    //     pageSize: +pageSize,
                    //     pageSizeOptions: ['10', '20', '30'],
                    //     total: +totalSize,
                    //     onChange: handleChangePage.bind(this),
                    //     // showSizeChanger: true,
                    //     onShowSizeChange: handleChangePage.bind(this),
                    // }}
                    />
                </Card>
                {
                    this.state.enterpriseAddEditFlag ? <EnterpriseAddEdit {...propsData} /> : ''
                }
            </div >
        );
    }
};

export default EnterpriseList;

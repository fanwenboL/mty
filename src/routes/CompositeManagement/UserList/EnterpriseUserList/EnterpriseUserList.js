import React from 'react';
import { Table, Popconfirm, Button, Card, Input, Breadcrumb, Modal, Row, Col, Menu, Dropdown, Icon, message, } from 'antd';
import styles from './EnterpriseUserList.less'
import { personalList } from '../../../../static/texts';
import moment from 'moment';
import EnterpriseAddEdit from './EnterpriseAddEdit/EnterpriseAddEdit';
class EnterpriseUserList extends React.Component {

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
                            <span onClick={() => { this.props.history.push('/compositeManagement/positionManager'); }}  >该公司招聘职位</span>
                        </Menu.Item>
                        <Menu.Item>
                            <span>修改密码</span>
                        </Menu.Item>
                        <Menu.Item>
                            <span>编辑</span>
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
        return (
            <div style={{ padding: '0px 10px' }}>
                <Breadcrumb className={styles.pathnav}>
                    <Breadcrumb.Item>平台运营管理</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>企业用户管理</Breadcrumb.Item>
                </Breadcrumb>
                <Card bodyStyle={{ padding: 5 }}>
                    <div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button style={{ marginLeft: 10 }} type="primary">查询</Button><Button style={{ marginLeft: 10 }} onClick={this.openModal.bind(this)} type="primary">新建企业用户</Button></div>
                </Card>
                <Card>
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

export default EnterpriseUserList;

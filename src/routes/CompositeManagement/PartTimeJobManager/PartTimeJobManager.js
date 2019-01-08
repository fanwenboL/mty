import React from 'react';
import { Table, Popconfirm, Button, message, Card, Input, Breadcrumb, Modal, Row, Col, Dropdown, Menu, Icon } from 'antd';
import styles from './PartTimeJobManager.less'
import { personalList } from '../../../static/texts';
import BannerAddEdit from './BannerAddEdit/BannerAddEdit'
import moment from 'moment';
class PartTimeJobManager extends React.Component {
    constructor() {
        super();
        //state中data去静态文件中取
        this.state = {
            persionDetailFlag: false,
            newBanner: false
        };
    };

    componentDidMount() {
    }
    persionDetail(record) {
        this.setState({
            persionDetailFlag: true
        })
    }
    persionDetailClose() {
        this.setState({
            persionDetailFlag: false
        })
    }
    openNewBanner() {
        this.setState({
            newBanner: true
        })
    }
    closeNewBanner() {
        this.setState({
            newBanner: false
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
            title: '职位ID',
            dataIndex: 'userId',
            key: 'userId',
        }, {
            title: '职位标题',
            dataIndex: 'wechtId',
            key: 'wechtId',
        }, {
            title: '所属企业',
            dataIndex: 'wechtName',
            key: 'wechtName',
        }, {
            title: '最后修改时间',
            dataIndex: 'wechtBindPhoneNumber',
            key: 'wechtBindPhoneNumber',
        }, {
            title: '状态',
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
                            <span>启用</span>
                        </Menu.Item>
                        <Menu.Item>
                            <span>投递管理</span>
                        </Menu.Item>
                        <Menu.Item>
                            <span>投递详情</span>
                        </Menu.Item>
                        <Menu.Item>
                            <span>删除</span>
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
            closeNewBanner() {
                that.closeNewBanner()
            }
        }
        return (
            <div style={{ padding: '0px 10px' }}>
                <Breadcrumb className={styles.pathnav}>
                    {/* <Breadcrumb.Item></Breadcrumb.Item> */}
                    <Breadcrumb.Item>轮播图管理</Breadcrumb.Item>
                </Breadcrumb>
                <Card bodyStyle={{ padding: 5 }}>
                    <div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button style={{ marginLeft: 10 }} type="primary">查询</Button><Button style={{ marginLeft: 10 }} onClick={this.openNewBanner.bind(this)} type="primary">新建简直职位</Button></div>
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
                    this.state.newBanner ? <BannerAddEdit {...propsData} /> : ''
                }
            </div >
        );
    }
};

export default PartTimeJobManager;

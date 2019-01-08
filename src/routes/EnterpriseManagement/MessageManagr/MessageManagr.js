import React from 'react';
import { Table, Popconfirm, Button, message, Card, Input, Breadcrumb, Modal, Row, Col } from 'antd';
import styles from './MessageManagr.less'
import { personalList } from '../../../static/texts';
import BannerAddEdit from './BannerAddEdit/BannerAddEdit'
import moment from 'moment';
class MessageManagr extends React.Component {
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
    closeNewBanner(){
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
            title: '用户ID',
            dataIndex: 'userId',
            key: 'userId',
        }, {
            title: '微信ID',
            dataIndex: 'wechtId',
            key: 'wechtId',
        }, {
            title: '微信昵称',
            dataIndex: 'wechtName',
            key: 'wechtName',
        }, {
            title: '微信绑定手机号',
            dataIndex: 'wechtBindPhoneNumber',
            key: 'wechtBindPhoneNumber',
        }, {
            title: '手机号',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        }, {
            title: '创建时间',
            dataIndex: 'creatTime',
            key: 'creatTime',
            render: text => moment(new Date(text)).format('YYYY-MM-DD HH:mm:ss'),
        }, {
            title: '状态',
            dataIndex: 'states',
            key: 'states',
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ textAlign: 'left' }}>
                        <span onClick={this.persionDetail.bind(this, record)}>查看详情</span>&nbsp;
                        <span>禁用</span>&nbsp;
                        <span>查看简历</span>
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
                    <div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button style={{ marginLeft: 10 }} type="primary">查询</Button><Button style={{ marginLeft: 10 }} onClick={this.openNewBanner.bind(this)} type="primary">新建轮播图</Button></div>
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

export default MessageManagr;

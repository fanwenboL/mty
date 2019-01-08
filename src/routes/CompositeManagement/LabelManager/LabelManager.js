import React from 'react';
import { Table, Popconfirm, Button, message, Card, Input, Breadcrumb, Modal, Row, Col } from 'antd';
import styles from './LabelManager.less'
import { personalList } from '../../../static/texts';
import BannerAddEdit from './BannerAddEdit/BannerAddEdit'
import moment from 'moment';
class LabelManager extends React.Component {
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
            title: '标签名称',
            dataIndex: 'userId',
            key: 'userId',
        }, {
            title: '添加人',
            dataIndex: 'wechtId',
            key: 'wechtId',
        }, {
            title: '状态',
            dataIndex: 'wechtId',
            key: 'wechtId',
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ textAlign: 'left' }}>
                        <span onClick={this.persionDetail.bind(this, record)}>查看详情</span>&nbsp;
                        <span>禁用</span>&nbsp;
                        <span>编辑</span>
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
                    <div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button style={{ marginLeft: 10 }} type="primary">查询</Button><Button style={{ marginLeft: 10 }} onClick={this.openNewBanner.bind(this)} type="primary">新建标签</Button></div>
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

export default LabelManager;

import React from 'react';
import { Table, Popconfirm, Button, message, Card, Input, Breadcrumb, Modal, Row, Col } from 'antd';
import styles from './JobsManager.less'
import { personalList } from '../../../static/texts';
import moment from 'moment';
class JobsManager extends React.Component {

    constructor() {
        super();
        //state中data去静态文件中取
        this.state = {
            persionDetailFlag: false
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
                        <span >公开</span>&nbsp;
                        <span>编辑</span>&nbsp;
                        <span>删除</span>
                    </div>
                );
            },
        }];
        return (
            <div style={{ padding: '0px 10px' }}>
                <Breadcrumb className={styles.pathnav}>
                    <Breadcrumb.Item>个人用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>个人用户列表</Breadcrumb.Item>
                </Breadcrumb>
                <Card bodyStyle={{ padding: 5 }}>
                    <div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button onClick={() => { this.setState({ persionDetailFlag: true }) }} style={{ marginLeft: 10 }} type="primary">上传职业分类</Button></div>
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
                    this.state.persionDetailFlag ?
                        <div><Modal
                            title="用户详情"
                            visible={true}
                            onOk={this.persionDetailClose.bind(this)}
                            onCancel={this.persionDetailClose.bind(this, false)}
                        >
                            <Row>
                                <Col span={6} style={{ float: 'right' }}>用户类别:</Col><Col span={18}>个人用户</Col>
                                <Col span={6}>用户ID:</Col><Col span={18}>个人用户</Col>
                                <Col span={6}>微信ID:</Col><Col span={18}>个人用户</Col>
                                <Col span={6}>微信昵称:</Col><Col span={18}>个人用户</Col>
                                <Col span={6}>微信绑定手机号:</Col><Col span={18}>个人用户</Col>
                                <Col span={6}>手机号码:</Col><Col span={18}>个人用户</Col>
                                <Col span={6}>创建时间:</Col><Col span={18}>个人用户</Col>
                            </Row>
                        </Modal></div> : ''
                }
            </div >
        );
    }
};

export default JobsManager;

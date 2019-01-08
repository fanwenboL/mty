import React from 'react';
import { Table, Popconfirm, Button, message, Card, Input, Breadcrumb, Modal, Row, Col } from 'antd';
import styles from './PartTime.less'
import { personalList } from '../../../static/texts';
import PartTimeAddEdit from './PartTimeAddEdit/PartTimeAddEdit'
import moment from 'moment';
class PartTime extends React.Component {

    constructor() {
        super();
        //state中data去静态文件中取
        this.state = {
            persionDetailFlag: false
        };
    };

    componentDidMount() {
    }
    persionDetail() {
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
            title: '全职岗位ID',
            dataIndex: 'userId',
            key: 'userId',
        }, {
            title: '职位ID',
            dataIndex: 'wechtId',
            key: 'wechtId',
        }, {
            title: '工资',
            dataIndex: 'wechtName',
            key: 'wechtName',
        }, {
            title: '性别要求',
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
                        <span>隐藏</span>&nbsp;
                        <span>查看简历</span>&nbsp;
                        <span onClick={() => { this.props.history.push('/enterpriseManagement/deliveryManagerPart'); }}>投递管理</span>
                    </div>
                );
            },
        }];
        const that = this;
        const props = {
            persionDetailClose() {
                that.persionDetailClose()
            }
        }
        return (
            <div>
                <Card bodyStyle={{ padding: 5 }}>
                    <div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button style={{ marginLeft: 10 }} onClick={this.persionDetail.bind(this)} type="primary">新建兼职简历</Button></div>
                </Card>
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
                {
                    this.state.persionDetailFlag && <PartTimeAddEdit {...props} />
                }
            </div >
        );
    }
};

export default PartTime;

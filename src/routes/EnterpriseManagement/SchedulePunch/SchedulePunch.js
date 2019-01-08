import React from 'react';
import { Table, Dropdown, Button, Radio, Form, Card, Input, Breadcrumb, Modal, Row, Col, Menu, Icon, DatePicker } from 'antd';
import styles from './SchedulePunch.less'
import { personalList } from '../../../static/texts';
import moment from 'moment';
const { RangePicker } = DatePicker;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
@Form.create()
class SchedulePunch extends React.Component {

    constructor() {
        super();
        //state中data去静态文件中取
        this.state = {
            persionDetailFlag: false,
            workDetailFlag: false,
            jobWorkFlag: false
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
    workDetail() {
        this.setState({
            workDetailFlag: true
        })
    }
    workDetailClose() {
        this.setState({
            workDetailFlag: false
        })
    }
    jobWork() {
        this.setState({
            jobWorkFlag: true
        })
    }
    jobWorkClose() {
        this.setState({
            jobWorkFlag: false
        })
    }
    jobDetail(){}
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 19 },
            },
        };
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
                let menu = (
                    <Menu>
                        <Menu.Item>
                            <span onClick={this.persionDetail.bind(this, record)}>排班打卡设置</span>&nbsp;
                        </Menu.Item>
                        <Menu.Item>
                            <span onClick={this.workDetail.bind(this, record)}>查看班次详情</span>&nbsp;
                        </Menu.Item>
                        <Menu.Item>
                            <span onClick={this.jobDetail.bind(this, record)}>查看打卡详情</span>&nbsp;
                        </Menu.Item>
                        <Menu.Item>
                            <span onClick={this.jobWork.bind(this, record)}>打卡审核</span>
                        </Menu.Item>
                    </Menu>
                )
                return (
                    <div style={{ textAlign: 'left' }}>
                        <Dropdown overlay={menu}>
                            <Button style={{ marginLeft: 8 }}>
                                菜单 <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </div>
                );
            },
        }];
        const columns1 = [{
            title: '时间',
            dataIndex: 'id',
            key: 'id',
            width: 70,
        }, {
            title: '上班打卡',
            dataIndex: 'userId',
            key: 'userId',
        }, {
            title: '下班打卡',
            dataIndex: 'wechtId',
            key: 'wechtId',
        }, {
            title: '打卡时间',
            dataIndex: 'wechtName',
            key: 'wechtName',
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {

                return (
                    <div style={{ textAlign: 'left' }}>
                        <span>审核通过</span> <span>拒绝</span>
                    </div>
                );
            },
        }]
        return (
            <div>
                <Card bodyStyle={{ padding: 5 }}>
                    <div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button style={{ marginLeft: 10 }} type="primary">查询</Button></div>
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
                    this.state.jobWorkFlag ?
                        <div><Modal
                            title="排班打卡设置"
                            visible={true}
                            onOk={this.persionDetailClose.bind(this)}
                            onCancel={this.jobWorkClose.bind(this, false)}
                        >
                            <div>
                                <Form>
                                    <FormItem
                                        {...formItemLayout}
                                        label="员工ID"
                                    >
                                        {
                                            getFieldDecorator('userType', {
                                                rules: [{ required: true }],
                                            })(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="员工姓名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="职位ID"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="职位名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="班次名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="时间"
                                    >
                                        {
                                            getFieldDecorator('intern', {})(
                                                <DatePicker />
                                            )
                                        }
                                    </FormItem>
                                    <Row>
                                        <Table
                                            style={{ fontSize: 12 }}
                                            rowKey="id"
                                            dataSource={personalList}
                                            columns={columns1}
                                        />
                                    </Row>
                                </Form>
                            </div>
                        </Modal></div> : ''
                }
                {
                    this.state.persionDetailFlag ?
                        <div><Modal
                            title="排班打卡设置"
                            visible={true}
                            onOk={this.persionDetailClose.bind(this)}
                            onCancel={this.persionDetailClose.bind(this, false)}
                        >
                            <div>
                                <Form>
                                    <FormItem
                                        {...formItemLayout}
                                        label="员工ID"
                                    >
                                        {
                                            getFieldDecorator('userType', {
                                                rules: [{ required: true }],
                                            })(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="员工姓名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="职位ID"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="职位名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="班次名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="时间"
                                    >
                                        {
                                            getFieldDecorator('intern', {})(
                                                <DatePicker />
                                            )
                                        }
                                    </FormItem>
                                </Form>
                            </div>
                        </Modal></div> : ''
                }
                {
                    this.state.workDetailFlag ?
                        <div><Modal
                            title="查看打卡详情"
                            visible={true}
                            onOk={this.persionDetailClose.bind(this)}
                            onCancel={this.workDetailClose.bind(this, false)}
                        >
                            <div>
                                <Form>
                                    <FormItem
                                        {...formItemLayout}
                                        label="员工ID"
                                    >
                                        {
                                            getFieldDecorator('userType', {
                                                rules: [{ required: true }],
                                            })(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="员工姓名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="职位ID"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="职位名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="班次名"
                                    >
                                        {
                                            getFieldDecorator('enterpriseId')(
                                                <Input style={{ width: '80%' }} />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="打卡详情"
                                    >
                                        {
                                            getFieldDecorator('intern', {})(
                                                <DatePicker />
                                            )
                                        }
                                    </FormItem>
                                </Form>
                                <Row><pre>
                                    暂无
                                    </pre></Row>
                            </div>
                        </Modal></div> : ''
                }
            </div >
        );
    }
};

export default SchedulePunch;

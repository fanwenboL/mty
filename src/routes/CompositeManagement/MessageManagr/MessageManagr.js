import React from 'react';
import { Table, Popconfirm, Button, message, Card, Input, Breadcrumb, Form, Row, Col } from 'antd';
import styles from './MessageManagr.less'
import { personalList } from '../../../static/texts';
import BannerAddEdit from './BannerAddEdit/BannerAddEdit'
import moment from 'moment';
const FormItem = Form.Item;
const { TextArea } = Input;
@Form.create()
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
    closeNewBanner() {
        this.setState({
            newBanner: false
        })
    }
    render() {
        // const { personalList } = this.state;
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
                    <div style={{ float: 'right' }}><Input style={{ width: 200 }} /><Button style={{ marginLeft: 10 }} type="primary">查询</Button></div>
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
                    <Row>
                        <Form>
                            <FormItem
                                {...formItemLayout}
                                label="消息"
                            >
                                {
                                    getFieldDecorator('isCertified')(
                                        <TextArea
                                            maxLength={100}
                                            autosize={{ minRows: 5 }}
                                        />
                                    )
                                }
                            </FormItem>
                        </Form>
                    </Row>
                    <Row style={{ textAlign: 'center' }}>
                        <Button style={{ marginLeft: 10 }} type="primary">发送消息</Button>
                    </Row>
                </Card>
            </div >
        );
    }
};

export default MessageManagr;

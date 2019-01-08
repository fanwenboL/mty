import React from 'react';
import {
    Card,
    Row,
    Col,
    Button,
    Input,
    Icon,
    Table,
    Modal,
    Form,
    DatePicker,
    Select,
    Popconfirm,
    Radio,
    Spin,
    Tooltip,
    AutoComplete,
} from 'antd';
import styles from './EnterpriseAddEdit.less'
import moment from 'moment';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const RadioGroup = Radio.Group;
@Form.create()
class EnterpriseAddEdit extends React.Component {

    constructor() {
        super();
        //state中data去静态文件中取
        this.state = {
        };
    };

    componentDidMount() {
    }
    handleOk() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        });
    }
    handleModalClose() {
        this.props.persionDetailClose && this.props.persionDetailClose()
    }
    render() {
        // const { personalList } = this.state;
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
        return (
            <div>
                <Modal
                    title="新建入驻企业"
                    visible={true}
                    width={700}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleModalClose.bind(this, false)}
                >
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="企业名称"
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
                            label=""
                        >
                            {
                                getFieldDecorator('enterpriseId')(
                                    <Input style={{ width: '80%' }} />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="是否认证"
                        >
                            {
                                getFieldDecorator('isCertified')(
                                    <RadioGroup>
                                        <Radio value={0}>非认证会员</Radio>
                                        <Radio value={1}>认证会员</Radio>
                                        <Radio value={2}>优选商家</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="企业简称"
                        >
                            {
                                getFieldDecorator('enterpriseAbbreviation')(
                                    <Input style={{ width: '80%' }} />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="企业公司全称"
                        >
                            {
                                getFieldDecorator('enterpriseName')(
                                    <Input style={{ width: '80%' }} />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="联系人名称"
                        >
                            {
                                getFieldDecorator('contactName')(
                                    <Input style={{ width: '80%' }} />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="企业类型"
                        >
                            {
                                getFieldDecorator('email', {})(
                                    <RadioGroup>
                                        <Radio value={0}></Radio>
                                        <Radio value={1}>100-499</Radio>
                                        <Radio value={2}>500-999</Radio>
                                        <Radio value={3}>1000以上</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="规模"
                        >
                            {
                                getFieldDecorator('scale')(
                                    <RadioGroup>
                                        <Radio value={0}>1-99</Radio>
                                        <Radio value={1}>100-499</Radio>
                                        <Radio value={2}>500-999</Radio>
                                        <Radio value={3}>1000以上</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="企业类型"
                        >
                            {
                                getFieldDecorator('nature')(
                                    <RadioGroup>
                                        <Radio value={0}>外资</Radio>
                                        <Radio value={1}>国企 </Radio>
                                        <Radio value={2}>民营</Radio>
                                        <Radio value={3}>中外合资</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="公司介绍"
                        >
                            {
                                getFieldDecorator('enterpriseProfile', {})(
                                    <Input style={{ width: '80%' }} type='textarea' />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="公司环境"
                        >
                            {
                                getFieldDecorator('enterpriseEnvironment', {})(
                                    <img />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="企业地址"
                        >
                            {
                                getFieldDecorator('inteaddresrn', {})(
                                    <Input style={{ width: '80%' }} type='textarea' />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="社群二维码"
                        >
                            {
                                getFieldDecorator('intern', {})(
                                    <img />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="最后修改时间"
                        >
                            {
                                getFieldDecorator('intern', {})(
                                    <DatePicker />
                                )
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div >
        );
    }
};

export default EnterpriseAddEdit;

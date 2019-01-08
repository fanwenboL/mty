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
    Cascader,
    Tooltip,
    AutoComplete,
    Upload,
} from 'antd';
import styles from './PartTimeAddEdit.less'
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';
const Option = Select.Option;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const RadioGroup = Radio.Group;
@Form.create()
class PartTimeAddEdit extends React.Component {

    constructor() {
        super();
        //state中data去静态文件中取
        this.state = {
            fileList: []
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
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    handleModalClose() {
        this.props.persionDetailClose && this.props.persionDetailClose()
    }
    onChange(value, selectedOptions) {
        console.log(value, selectedOptions);
    }

    filter(inputValue, path) {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
    }
    beforeUpload(info) {
        console.log(info)
    }
    render() {
        // const { personalList } = this.state;
        const props2 = {
            action: '//jsonplaceholder.typicode.com/posts/',
            listType: 'picture',
            defaultFileList: [...this.state.fileList],
            className: 'upload-list-inline',
        };
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
        }; const options = [{
            value: '餐厅',
            label: '餐厅',
            children: [{
                value: '服务员',
                label: '服务员',
            }],
        }, {
            value: '开发',
            label: '开发',
            children: [{
                value: '前端',
                label: '前端',

            }, {
                value: '后台',
                label: '后台',

            }],
        }];
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div>
                <Modal
                    title="新建企业用户"
                    visible={true}
                    width={700}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleModalClose.bind(this, false)}
                >
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="岗位名称"
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
                            label="岗位标题"
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
                            label="所属公司"
                        >
                            {
                                getFieldDecorator('enterpriseId')(
                                    <Select
                                        value={1}
                                        className="headerSelect"
                                    >
                                        <Option key={'1'} value={1}>百度</Option>
                                        <Option key={'2'} value={2}>腾讯</Option>
                                        <Option key={'3'} value={3}>阿里</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="职位具体类别"
                        >
                            {
                                getFieldDecorator('isCertified')(
                                    <Cascader
                                        options={options}
                                        onChange={this.onChange.bind(this)}
                                        placeholder="Please select"
                                        showSearch={this.filter.bind(this)}
                                    />,
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="人数"
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
                            label="工作区"
                        >
                            {
                                getFieldDecorator('enterpriseAbbreviation')(
                                    <Select
                                        value={1}
                                        className="headerSelect"
                                    >
                                        <Option key={'1'} value={1}>前厅</Option>
                                        <Option key={'2'} value={2}>后台</Option>
                                        <Option key={'3'} value={3}>阿里</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="性别"
                        >
                            {
                                getFieldDecorator('enterpriseName')(
                                    <RadioGroup>
                                        <Radio value={0}>男女不限</Radio>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                    </RadioGroup>
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
                            label="邮箱"
                        >
                            {
                                getFieldDecorator('email', {})(
                                    <Input style={{ width: '80%' }} />
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
                            label="性质"
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
                            label="面试地点"
                        >
                            {
                                getFieldDecorator('enterpriseEnvironment', {})(
                                    <Input style={{ width: '80%' }} type='textarea' />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="已有实习生"
                        >
                            {
                                getFieldDecorator('intern', {})(
                                    <Input style={{ width: '80%' }} type='textarea' />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="面试时间"
                        >
                            {
                                getFieldDecorator('intern', {})(
                                    <DatePicker />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="工作时间"
                        >
                            {
                                getFieldDecorator('intern', {})(
                                    <TextArea />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="结算时间"
                        >
                            {
                                getFieldDecorator('intern', {})(
                                    <RadioGroup>
                                        <Radio value={0}>月结</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="薪资标准"
                        >
                            {
                                getFieldDecorator('intern', {})(
                                    <Input />
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="福利"
                        >
                            {
                                getFieldDecorator('awdwad', {})(
                                    <Select
                                        mode="tags"
                                        style={{ width: '100%' }}
                                        tokenSeparators={[',']}
                                    >
                                        {children}
                                    </Select>,
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="上传二维码"
                        >
                            {
                                getFieldDecorator('enterpriseId')(
                                    <Upload {...props2}>
                                        <Button>
                                            <Icon type="upload" /> Upload
                                        </Button>
                                    </Upload>
                                )
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div >
        );
    }
};

export default PartTimeAddEdit;

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
    Upload,
    Radio,
    Spin,
    Tooltip,
    AutoComplete,
} from 'antd';
import styles from './BannerAddEdit.less'
import moment from 'moment';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
@Form.create()
class BannerAddEdit extends React.Component {

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
    handleModalClose() {
        this.props.closeNewBanner && this.props.closeNewBanner()
    }
    beforeUpload(info) {
        console.log(info)
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
        const props2 = {
            action: '//jsonplaceholder.typicode.com/posts/',
            listType: 'picture',
            defaultFileList: [...this.state.fileList],
            className: 'upload-list-inline',
        };
        return (
            <div>
                <Modal
                    title="新建轮播图"
                    visible={true}
                    width={700}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleModalClose.bind(this, false)}
                >
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="轮播图位置"
                        >
                            {
                                getFieldDecorator('userType', {
                                    rules: [{ required: true }],
                                })(
                                    <Select
                                        value={1}
                                        className="headerSelect"
                                    >
                                        <Option key={'1'} value={1}>aaaaaa</Option>
                                        <Option key={'2'} value={2}>bbbbbb</Option>
                                        <Option key={'3'} value={3}>cccccc</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="选择图片上传"
                        >
                            {
                                getFieldDecorator('enterpriseId')(
                                    <Upload {...props2} beforeUpload={this.beforeUpload.bind(this)}>
                                        <Button>
                                            <Icon type="upload" /> Upload
                                        </Button>
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="轮播图指向内容"
                        >
                            {
                                getFieldDecorator('isCertified')(
                                    <RadioGroup value={0}>
                                        <Radio value={0}>内部跳转</Radio>
                                        <Radio value={1}>外部链接</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="轮播图指向内容"
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
                    <Row>

                    </Row>
                </Modal>
            </div >
        );
    }
};

export default BannerAddEdit;

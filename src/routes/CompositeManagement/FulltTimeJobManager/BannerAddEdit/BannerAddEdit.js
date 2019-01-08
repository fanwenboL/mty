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
                            label="职位分类"
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
                            label="全职职位名称"
                        >
                            {
                                getFieldDecorator('isCertified')(
                                    <Input />
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

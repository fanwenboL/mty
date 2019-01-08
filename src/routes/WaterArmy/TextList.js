import React from 'react';
import { connect } from 'dva';
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
  Popconfirm,
  Upload,
} from 'antd';
import styles from './WaterArmyList.less';
import { textList } from  '../../static/texts';

const FormItem = Form.Item;
// const { RangePicker } = DatePicker;

const host = "http://meeme-public-opinion.prefromoffice.alipay.net";
export default class TextList extends React.PureComponent {
  constructor() {
    super();
    this.columns = [{
      title: 'id',
      dataIndex: 'id',
      width: 300,
      key: 'id',
    }, {
      title: '题目',
      dataIndex: 'title',
      key: 'title',
    },{
      title: '操作',
      dataIndex: 'action',
      width: 100,
      key: 'action',
      render: (_, record) => (
        <div>
          <span className={styles.action} onClick={() => { this.props.history.push(`/waterarmy/textDetail/${record.id}`); }}>详情</span>
        </div>
      ),
    }];
    this.state = {
      textLists:[],
    };
  }
  componentDidMount() {
    this.setState({textLists: textList});
  }
  // 普通搜索
  handleSearch(e) {
    // 判断是否为回车
    if (e.keyCode === 13) {
      const newtextList = this.state.textList;
      if(e.target.value){
        this.setState({
          textList:newtextList.filter((item) => {
              return item.weibo_name.indexOf(e.target.value) > -1;
          }),
        })
      }else{
        this.setState({
          textList,
        });
      }
    }
  }

  parseText(file){
    const {textLists} = this.state;
    var reader = new FileReader();
    reader.onload = function() {
      const newText = {
        id:textLists.length + 1,
        title:file.name.substring(0,file.name.length-4),
        source:"",
        content:this.result,
      };
      textLists.push(newText);
    };
    reader.readAsText(file);
  }


  handleClickSearch(){
    const searchValue = document.getElementById('search').value;
    const newtextList = this.state.textList;
    if(searchValue){
      this.setState({
        textList:newtextList.filter((item) => {
            return item.weibo_name.indexOf(searchValue) > -1;
        }),
      })
    }else{
      this.setState({
        textList,
      });
    }
  }


  render() {
    const { textLists } = this.state;
    const {
      columns,
      changeModal,
      handleSearch,
    } = this;
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

    const props = {
      action: '',
      multiple: true,
      beforeUpload: (file) => {
        if(file.name.indexOf(".txt") == -1){
          message.error("只支持txt文件类型!");
          return;
        }
        this.parseText(file);
        this.setState({
          textLists,
        });
        console.log(textLists);
        return false;
      },
    }

    return (
      <div>
        <Card>
          <Row>
            <Col span={8} offset={16}>
              <Input id='search' onKeyDown={handleSearch.bind(this)} addonAfter={<Icon type="search" onClick={this.handleClickSearch.bind(this)}/>} placeholder="请输入微博名称" />
            </Col>
          </Row>
        </Card>
        <Card className={styles.table}>
          <Table
            rowKey="id"
            pagination={false}
            dataSource={this.state.textLists}
            columns={columns}
          />
          <Row>
            <Col span={2} offset={22}>
              <Upload {...props}>
                <Button style={{ marginTop: 20, backgroundColor: '#1890ff', color: 'white'}}>上传</Button>
              </Upload>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

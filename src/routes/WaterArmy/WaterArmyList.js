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
} from 'antd';
import styles from './WaterArmyList.less';
import { weiboList } from  '../../static/weibos';

const FormItem = Form.Item;
// const { RangePicker } = DatePicker;


export default class WaterArmyList extends React.PureComponent {
  constructor() {
    super();
    this.columns = [{
      title: 'id',
      dataIndex: 'id',
      width: 300,
      key: 'id',
    }, {
      title: '微博名',
      dataIndex: 'weibo_name',
      key: 'weibo_name',
    },{
      title: '操作',
      dataIndex: 'action',
      width: 100,
      key: 'action',
      render: (_, record) => (
        <div>
          <span className={styles.action} onClick={() => { this.props.history.push(`/waterarmy/waterArmyDetail/${record.id}`); }}>详情</span>
        </div>
      ),
    }];
    this.state = {
      visible: false,
      weiboList:[],
    };
  }
  componentDidMount() {
    this.setState({weiboList:weiboList});
  }
  // 更改模态框显示状态
  changeModal(visible) {
    this.setState({
      visible,
    });
  }
  // 普通搜索
  handleSearch(e) {
    // 判断是否为回车
    if (e.keyCode === 13) {
      const newWeiboList = this.state.weiboList;
      if(e.target.value){
        this.setState({
          weiboList:newWeiboList.filter((item) => {
              return item.weibo_name.indexOf(e.target.value) > -1;
          }),
        })
      }else{
        this.setState({
          weiboList,
        });
      }
    }
  }

  handleClickSearch(){
    debugger;
    const searchValue = document.getElementById('search').value;
    const newWeiboList = this.state.weiboList;
    if(searchValue){
      this.setState({
        weiboList:newWeiboList.filter((item) => {
            return item.weibo_name.indexOf(searchValue) > -1;
        }),
      })
    }else{
      this.setState({
        weiboList,
      });
    }
  }

  render() {
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
    return (
      <div>
        {/* 创建评估  高级搜索 */}
        <Card>
          <Row>
            <Col span={8} offset={16}>
              <Input id='search' onKeyDown={handleSearch.bind(this)} addonAfter={<Icon type="search" onClick={this.handleClickSearch.bind(this)}/>} placeholder="请输入微博名称" />
            </Col>
          </Row>
        </Card>
        {/* 评估列表 */}
        <Card className={styles.table}>
          <Table
            rowKey="id"
            pagination = {false}
            dataSource={this.state.weiboList}
            columns={columns}
          />
        </Card>
      </div>
    );
  }
}

import React from 'react';
import { connect } from 'dva';
import {
  Card,
  Row,
  Col,
  Breadcrumb,
  Radio,
  Tag,
  Table,
} from 'antd';
import { weiboList } from '../../static/weibos';
import styles from './WaterArmyDetail.less';
class WaterArmyDetail extends React.PureComponent {
  constructor() {
    super();
    this.columns = [{
      title: '微博内容',
      dataIndex: 'weibo_detail',
      width: 300,
      key: 'weibo_detail',
    }]
    this.state = {
      visible: false,
      data:{},
    };
  }
  componentDidMount(){
    console.log(weiboList);
    const { id } = this.props.match.params;
    weiboList.map((item)=>{
      if(id == item.id){
        this.setState({data:item});
        return;
      }
    })
  }
  render() {
    const { data } = this.state;
    const { columns } = this;
    console.log(data.recent);
    return (
      <div>
        <Card>
          <h1>微博昵称：<span>{data.weibo_name}</span></h1>
          <p>微博ID：<span>{data.weibo_id}</span> 支付宝ID： <span>{data.alipay_id}</span></p>
          <p>微博类型：<span>{data.微博类型}</span> 微博影响力：<span>{data.weibo_influence}</span></p>
          <h2>水军标签：<span>{data.navy_tag}</span></h2>
          <ul>
            <li>最近一月微博活动情况
              <ul>
                <li>原创帖数：<span>{data.original_count}</span> 转发帖数：<span>{data.transpond_count}</span> 原创帖数：<span>{data.focused_count}</span></li>
                <li>多次转发关系：<span>{data.multiple_transpond_relation}</span></li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>支付宝活动情况
              <ul>
                <li>支付宝交易关系：<span>{data.alipay_trade_relation}</span></li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>其他相关情况
              <ul>
                <li>s2v相似度：<span>{data.s2v}</span></li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              近期微博发帖内容
            </li>
          </ul>
        <Table
          rowKey="weibo_detail"
          columns={columns}
          dataSource={data.recent}
        />
        </Card>
      </div>
    );
  }
}
export default WaterArmyDetail;

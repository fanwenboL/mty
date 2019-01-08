import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const { Header } = Layout;

@connect()
export default class Welcome extends React.PureComponent {
  constructor() {
    super(); 
    this.state = {
      type: 0,
    };
  }
  render() {
    const { history } = this.props;
    const { type } = this.state;
    return (
      <div className={styles.background}>
        <Header className={styles.header}>
          <Row className={styles.headerInner}>
            <Col span={8}>
              <div>
                {/* <img style={{ height: 47 }} src={img} alt="" /> */}
              </div>
            </Col>
            <Col style={{ textAlign: 'right', color: '#ccc', fontSize: 13 }} span={16}>
              {/* <Select
                onChange={this.handleChangeDepartment.bind(this)}
                value={bizGroup.name}
                className="headerSelect"
              >
                {
                  bizGroupList.map(item => (
                    <Option key={item.code}>{item.name}</Option>
                  ))
                }
              </Select> */}
              {/* 帮助 */}
              {/* <a className={styles.help} onClick={() => { this.props.history.push('/help'); }} >帮助</a>
              <span className={styles.userName}>{userName}</span>
              <a className={styles.help} onClick={this.logOut.bind(this)} >退出</a> */}
            </Col>
          </Row>
        </Header>
            <div>
              <div className={styles.text}>欢迎使用 猫头鹰</div>
              <p className={styles.content}>给你完美的求职解决方案</p>
              <div className={styles.btn}><Button onClick={() => { history.push('/compositeManagement/positionManager'); }} type="primary" size="large">开始使用</Button></div>
            </div>
      </div>
    );
  }
}

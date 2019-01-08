import React from 'react';
import { Tabs, Popconfirm, Button, message, Card, Input, Breadcrumb, Modal, Row, Col } from 'antd';
import styles from './PositionManager.less'
import PartTime from './PartTime/PartTime';
import FullTime from './FullTime/FullTime';
const TabPane = Tabs.TabPane;
import moment from 'moment';
import { debug } from 'util';
class PositionManager extends React.Component {
    constructor() {
        super();
        //state中data去静态文件中取
        this.state = {
            persionDetailFlag: false,
            newBanner: false
        };
    };

    componentDidMount() {
        // this.get();
        this.onSubmit('mty/collCompany/create',111)
    }
    // get() {
    //     fetch('mty/collCompany/create').then((res) => {
            
    //         if (res.ok) {
    //             res.text().then((data) => {
    //                 console.log(data);
    //             })
    //         }
    //     }).catch((res) => {
    //         console.log(res.status);
    //     });
    // }
    onSubmit(url, {data}) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data)
        })
            // .then(response => response.json())
            // .then(result => {
            //     this.setState({
            //         hot1: JSON.stringify(result)
            //     })
            // })
            // .catch(error => {
            //     this.setState({
            //         hot1: JSON.stringify(error)
            //     })
            // })

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
                return (
                    <div style={{ textAlign: 'left' }}>
                        <span onClick={this.persionDetail.bind(this, record)}>查看详情</span>&nbsp;
                        <span>禁用</span>&nbsp;
                        <span>查看简历</span>
                    </div>
                );
            },
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
                    <Breadcrumb.Item>企业用户列表</Breadcrumb.Item>
                    <Breadcrumb.Item>简历详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card bodyStyle={{ padding: 5 }}>
                    <Tabs>
                        <TabPane tab="兼职管理" key="1"><PartTime /></TabPane>
                        <TabPane tab="全职管理" key="2"><FullTime /></TabPane>
                    </Tabs>
                </Card>
                <Card>
                </Card>
            </div >
        );
    }
};

export default PositionManager;

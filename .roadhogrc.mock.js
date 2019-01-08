import mockjs from 'mockjs';
import { getRule, postRule } from './mock/rule';
import { getActivities, getNotice, getFakeList } from './mock/api';
import { getFakeChartData } from './mock/chart';
import { imgMap } from './mock/utils';
import { getProfileBasicData } from './mock/profile';
import { getProfileAdvancedData } from './mock/profile';
import { getNotices } from './mock/notices';
import { format, delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    $desc: "获取当前用户接口",
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eHBsAsOrrJcnvFlnzNTT.png',
      userid: '00000001',
      notifyCount: 12,
    },
  },
  // GET POST 可省略
  'GET /api/users': [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }],
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'GET /api/rule': getRule,
  'POST /api/rule': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postRule,
  },
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }]
  }),
  'GET /api/fake_list': getFakeList,
  'GET /api/fake_chart_data': getFakeChartData,
  'GET /api/profile/basic': getProfileBasicData,
  'GET /api/profile/advanced': getProfileAdvancedData,
  'POST /api/login/account': (req, res) => {
    const { password, userName } = req.body;
    res.send({ status: password === '888888' && userName === 'admin' ? 'ok' : 'error', type: 'account' });
  },
  'POST /api/login/mobile': (req, res) => {
    res.send({ status: 'ok', type: 'mobile' });
  },
  'POST /api/register': (req, res) => {
    res.send({ status: 'ok' });
  },
  'GET /api/notices': getNotices,

  // 权限组
  'GET /api/authority/queryDepartmentList.json': (req, res) => {
    res.send({
      data: [
        {
          name: "游客",
          code: "visitor"
        }
      ],
      success: true,
    })
  },

  // 评估列表mock
  'GET /api/evaluation/queryEvaluationForPage.json': (req, res) => {
    res.send({
      success: true,
      message: '成功',
      items: [
        {id:1,"微博昵称":"王嘉尔的巧克瓅","微博ID":"12345", "支付宝ID":"67890","微博类型":"普通用户","微博影响力":"较低(分值：25.67)","水军标签":"疑似水军 (置信度:0.723)","原创帖数":2,"转发帖数":89,"被关注人数":56,"多次转发关系":"ABC","支付宝交易关系":"DEF","s2v":0.92,"近期":[{"微博内容":"下午五现场的没带王牌快去找火腿～一起给王嘉尔王海@王嘉尔","微博内容":"王嘉尔。多么美好的存在"}]},
        {id:2,"微博昵称":"王嘉尔ABC","微博ID":"12348","支付宝ID":"67891","微博类型":"普通用户","微博影响力":"较低(分值：25.67)","水军标签":"水军(置信度:0.923)","原创帖数":2,"转发帖数":89,"被关注人数":56,"多次转发关系":"GHI","支付宝交易关系":"JKL","s2v":0.12,"近期":[{"微博内容":"aaabbbccc","微博内容":"dddeeefff"}]}
      ]
    })
  },
  //创建评估mock
  'GET /api/evaluation/getInnerEvaluationSelectorsInfo.json': (req, res) => {
    res.send({
      success: true,
      message: '成功',
      itemsc: [
        'a1','a2','a3'
      ]
    })
  },

};

export default noProxy ? {
  // 'GET /api/(.*)': 'https://your.server.com/api/',
} : delay(proxy, 1000);

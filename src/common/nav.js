import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: '综合管理后台',
        path: 'compositeManagement',
        children: [{
          name: '用户列表',
          path: 'userList',
          children: [
            {
              name: '个人用户列表',
              path: 'personalUserList',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/UserList/PersonalUserList/PersonalUserList')),
            },
            {
              name: '企业用户列表',
              path: 'enterpriseList',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/UserList/EnterpriseUserList/EnterpriseUserList')),
            },
            {
              name: '平台用户管理',
              path: 'platformUserlist',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/UserList/PlatformUserlist/PlatformUserlist')),
            }
          ]
        }, {
          name: '企业管理',
          path: 'enterpriseManager',
          children: [
            {
              name: '企业信息管理',
              path: 'personalUserList',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/EnterpriseList/EnterpriseList')),
            },{
              name: '全职岗位管理',
              path: 'fullTime',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/FullTime/FullTime')),
            },
            {
              name: '兼职职位管理',
              path: 'partTime',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/PartTime/PartTime')),
            },
            // {
            //   name: '企业用户列表',
            //   path: 'enterpriseList',
            //   component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/UserList/EnterpriseUserList/EnterpriseUserList')),
            // }
          ]
        }, {
          name: '综合管理',
          path: 'comprehensiveManager',
          children: [
            {
              name: '轮播图管理',
              path: 'bannerManager',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/BannerManager/BannerManager')),
            }, {
              name: '标签管理',
              path: 'labelManager',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/LabelManager/LabelManager')),
            }, {
              name: '关于我们',
              path: 'aboutUs',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/AboutUs/AboutUs')),
            }
          ]
        }, {
          name: '职位管理',
          path: 'JobManager',
          children: [
            {
              name: '兼职职位管理',
              path: 'partTimeJobManager',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/PartTimeJobManager/PartTimeJobManager')),
            },
            {
              name: '职位分类管理',
              path: 'jobClassManager',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/JobClassManager/JobClassManager')),
            },
            {
              name: '职位分类管理',
              path: 'fulltTimeJobManager',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/FulltTimeJobManager/FulltTimeJobManager')),
            },
          ]
        }, {
          name: '院校管理',
          path: 'schoolManagr',
          children: [
            {
              name: '院校信息管理',
              path: 'schoolListManagr',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/SchoolListManagr/SchoolListManagr')),
            },
          ]
        }, {
          name: '消息管理',
          path: 'messageManagr',
          children: [
            {
              name: '消息列表管理',
              path: 'messageListManagr',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/MessageManagr/MessageManagr')),
            },
          ]
        }, {
          name: '评论管理',
          path: 'commentManager',
          children: [
            {
              name: '评论列表管理',
              path: 'commentListManager',
              component: dynamicWrapper(app, [], () => import('../routes/CompositeManagement/CommentManager/CommentManager')),
            },
          ]
        }
        ]
      },
      {
        name: '企业用户后台',
        path: 'postManager',
        children: [{
          name: '企业信息管理',
          path: 'enterpriseManager', children: [
            {
              name: '企业信息维护',
              path: 'enterpriseList',
              component: dynamicWrapper(app, [], () => import('../routes/EnterpriseManagement/EnterpriseList/EnterpriseList')),
            },
          ],
        }, {
          name: '岗位管理',
          path: 'postListManager',
          children: [
            {
              name: '全职岗位管理',
              path: 'fullTime',
              component: dynamicWrapper(app, [], () => import('../routes/EnterpriseManagement/FullTime/FullTime')),
            },
            {
              name: '兼职职位管理',
              path: 'partTime',
              component: dynamicWrapper(app, [], () => import('../routes/EnterpriseManagement/PartTime/PartTime')),
            },
          ],
        }, {
          name: '员工管理',
          path: 'staffManager',
          children: [
            {
              name: '员工信息列表',
              path: 'staffListManager',
              component: dynamicWrapper(app, [], () => import('../routes/EnterpriseManagement/StaffListManager/StaffListManager')),
            }, {
              name: '消息管理',
              path: 'messageManagr',
              children: [
                {
                  name: '消息列表管理',
                  path: 'messageListManagr',
                  component: dynamicWrapper(app, [], () => import('../routes/EnterpriseManagement/MessageManagr/MessageManagr')),
                },
              ]
            },
            {
              name: '排班打卡管理',
              path: 'schedulePunch',
              component: dynamicWrapper(app, [], () => import('../routes/EnterpriseManagement/SchedulePunch/SchedulePunch')),
            },
          ],
        }]
      },{
        name: '院校管理',
        path: 'schoolManager',
        children: [{
          name: '院校基本信息',
          path: 'schoolDetailManager', children: [
            {
              name: '基本信息管理',
              path: 'schoolDetailListManager',
              component: dynamicWrapper(app, [], () => import('../routes/SchoolManager/SchoolDetailManager/SchoolDetailManager')),
            },
            {
              name: '在校生管理',
              path: 'studentManager',
              component: dynamicWrapper(app, [], () => import('../routes/SchoolManager/StudentManager/StudentManager')),
            },
            {
              name: '往届生管理',
              path: 'pastStudentsManager',
              component: dynamicWrapper(app, [], () => import('../routes/SchoolManager/PastStudentsManager/PastStudentsManager')),
            },
          ],
        }]
      },
    ],
  },
];

module.exports = {
  name: 'FE-GUIDE',
  homeConfig: {
    title: 'FE-GUIDE —— 前端代码规范',
    version: '0.0.1',
    git: 'http://git.lianjia.com/plat-fe/FE-GUIDE', // 点击【安装】的跳转 位置1所示
    guide: '/FE-GUIDE/Guide', // 点击【开始】跳转 位置2的跳转
    home: '/FE-GUIDE'        // 点击【logo】跳转 位置3的跳转
  },
  docHeader: [{ // 顶部菜单 位置4所示 
    name: '首页',
    url: '/FE-GUIDE'
  }, {
    name: '指南',
    url: '/FE-GUIDE/Guide'
  }],
  typeOrder: { // 左侧菜单 位置5所示 格式[name]:[order]
    'FE-GUIDE/Guide': {
      '概述': 0,
      'HTML 规范': 1,
      '图片规范': 2,
      'CSS 规范': 3,
      '命名规范': 4,
      'JS 规范': 5
    }
  },
  // 路由配置，其中：
  // 首页通用模版：'./template/CustHome/index'
  // 文档说明通用模版：'./template/Page/index'
  // 组件展示通用模板：'./template/Component/index'  
  routes: [{
    path: '/FE-GUIDE',
    component: './template/CustHome/index'
  }, {
    path: '/FE-GUIDE/',
    component: './template/CustHome/index'
  }, {
    path: '/FE-GUIDE/Guide',
    component: './template/Page/index'
  }, {
    path: '/FE-GUIDE/Guide/*',
    component: './template/Page/index'
  }]
}
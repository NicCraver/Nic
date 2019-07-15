---
title: vue-admin-layout使用方法
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-07-15
date: 2019-07-15
tags:
  - vue
  - admin
  - element-ui
categories:
  - 摘要
--- 

> vue-admin-layout-template使用方法 
## 下载
``` sh
//使用Git Bash
git clone https://github.com/NicCraver/vue-admin-layout-template.git
```
或直接去GitHub里下载
[vue-admin-layout-template](https://github.com/NicCraver/vue-admin-layout-template)
## 安装
``` sh
yarn
//or
npm i
```

## 目录
```
.                   
│  App.vue            
│  main.js            
│  promission.js      //登录拦截 --- router.beforeEach 如果没有登录则跳转到login页面
│                     
├─api                 
│      index.js       //axios请求封装、请求拦截
│                     
├─assets              //图片资源
│                     
├─components          //公共组件
│  ├─PageHeader       //返回+标题
│  │      index.js    
│  │      index.vue   
│  │                  
│  └─Pointwave        //登录页动态点阵效果
│          index.vue  
│                     
├─layout              //布局
│  │  AppMain.vue     //右侧主要内容
│  │  index.vue       
│  │  Navbar.vue      //导航栏（面包屑、个人信息、退出）
│  │                  
│  └─components       
│      ├─Breadcrumb   //面包屑组件
│      │      index.vue
│      │              
│      ├─Hamburger    //控制菜单栏伸缩按钮组件
│      │      index.vue
│      │              
│      └─Sidebar      //菜单栏组件，根据路由生成对应菜单（只支持最多二级菜单）
│              index.vue
│              Logo.vue//菜单栏logo（logo及标题信息）
│                     
├─router              //路由信息
│      index.js       
│                     
├─store               //vuex
│  │  getters.js      //封装所有getters
│  │  index.js        
│  │                  
│  └─modules          //封装的模块
│          app.js     //里面有：控制菜单栏伸缩按钮的开关值（注意，这个值是储存在Cookies中的，退出时应清空这个Cookies
                      //方法为：Cookies.remove('sidebarStatus');
│                     
├─styles              //全局样式
│      element-ui.scss//重置一些element-ui样式
│      index.scss     
│      sidebar.scss   //菜单栏样式
│      transition.scss//全局动画样式
│      variables.scss //一些基础颜色（菜单栏的所有颜色都在这里设置）
│                     
└─views               //页面
    ├─dashboard       
    │      index.vue  
    │                 
    ├─element         
    │      index.vue  
    │                 
    ├─error-page      
    │      401.vue    
    │      404.vue    
    │                 
    ├─login           
    │      index.vue  
    │                 
    ├─menu1           
    │      demo1.vue  
    │      demo2.vue  
    │      demo3.vue  
    │                 
    ├─menu2           
    │      demo1.vue  
    │      demo2.vue  
    │      demo3.vue  
    │                 
    └─menu3           
            demo1.vue 
            demo2.vue 
            demo3.vue 
```

### main.js
``` js
import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";//引入vuex
import ElementUI from "element-ui";//引入element-ui
Vue.use(ElementUI);

import "@/styles/index.scss"; //引入全局样式
import "element-ui/lib/theme-chalk/index.css";//引入element-ui样式
import "./promission";//引入登录拦截js（可控制权限信息，及动态路由）

import PageHeader from '@/components/PageHeader/index.js'//引用全局组件PageHeader
Vue.use(PageHeader);//使用全局组件PageHeader

import api from "./api"; // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

```

### 路由结构
``` js
//第一种，不需要在侧标菜单栏中出现，使用hidden: true
{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
}

//第二种
{
    path: '',
    component: Layout,//此路由拥有Layout组件（菜单栏、导航栏）不写这个则没有Layout组件
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),//引入页面所在路径
      meta: { title: '首页', icon: 'el-icon-my-branchOffice' }
      //title：菜单栏标题、页签中标题、面包屑中标题
      //icon：菜单栏中icon---图标使用，在stylesel中ement-ui.scss46行之后都是图标样式。
    }]
}
//第三种，有子页面的路由
{
    path: '/menu1',
    component: Layout,
    redirect: '/menu1/doem1',
    name: 'Menu1',
    meta: { title: 'Menu1', icon: 'el-icon-my-medicalExamination' },
    children: [
        {
        path: 'doem1',
        name: 'Menu1Doem1',
        component: () => import('@/views/menu1/demo1.vue'),
        meta: { title: 'Menu1Doem1' }
        },
        {
        path: 'doem2',
        name: 'Menu1Doem2',
        component: () => import('@/views/menu1/demo2.vue'),
        meta: { title: 'Menu1Doem2' }
        },
        {
        path: 'doem3',
        name: 'Menu1Doem3',
        component: () => import('@/views/menu1/demo3.vue'),
        meta: { title: 'Menu1Doem3' }
        },
    ]
}
// 404页面,配合*号，如在页面中输入不存在的路由，则会跳转到到*号路由，redirect（重定向到404页面）
{
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
},
{ path: '*', redirect: '404', hidden: true }
```


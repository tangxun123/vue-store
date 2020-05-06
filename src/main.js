// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import nprogress from "nprogress"; // 导入网页加载进度条
import 'nprogress/nprogress.css';　// 导入网页加载进度条
import ElementUi from 'element-ui' // 导入elm
import 'element-ui/lib/theme-chalk/index.css';
import D2Crud from '@d2-projects/d2-crud' // 导入d2
import store from "./store/index" // 引入store

import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api'  //关键代码

if (process.env.MOCK) {    // 判断是否为mock模式
  require('./mock/index.js')
}

import qs from 'qs'
Vue.prototype.qs = qs;

Vue.use(ElementUi)  // 导入elm
Vue.use(D2Crud)  // 导入d2

Vue.config.productionTip = false

// 动态注册modules
// store.unregisterModule("name") 动态卸载模块
store.registerModule("newModule",{
  state: {
    newData: "someNew"
  },
  mutations: {
  },
  actions: {},
  getters: {}
})
store.unregisterModule("newModule"); // 不能卸载静态模块


// 路由跳转　显示　进度条
router.beforeEach((to,from,next)=>{
  let routerName = [];
  router.options.routes.forEach(item => {
    routerName.push(item.path);
  })
  if(routerName.includes(to.fullPath)){
    console.log(to.fullPath);
  }else{
    next({path:"/p404"});
    return;
  }
  nprogress.start();
  next();
})
router.afterEach( () => {
  nprogress.done();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

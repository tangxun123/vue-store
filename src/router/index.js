import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import index from '@/myFile/index'
import info from '@/myFile/info'
import StoreVue from '@/components/store-vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/One',
      name: 'One',
      component: One
    },
    {
      path: '/Two',
      name: 'Two',
      component: Two
    },
    {
      path: '/Store-vue',
      name: 'StoreVue',
      component: StoreVue
    },
    {
      path: '/Three',
      name: 'Three',
      component: Three
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/',
      redirect: 'index',
      component: index
    }
  ]
})

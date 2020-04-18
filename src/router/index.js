import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import state from '@/components/state'
import mutation from '@/components/mutation'
import action from '@/components/action'
import getters from '@/components/getters'
import modules from '@/components/modules'
import hotReload from '@/components/hotReload'
import StoreVue from '@/components/store-vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/state',
      component: state
    },
    {
      path: '/mutation',
      component: mutation
    },
    {
      path: '/action',
      component: action
    },
    {
      path: '/getters',
      component: getters
    },
    {
      path: '/modules',
      component: modules
    },
    {
      path: '/hotReload',
      component: hotReload
    },
    {
      path: '/Store-vue',
      name: 'StoreVue',
      component: StoreVue
    },
    {
      path: '/',
      redirect: 'state',
      component: state
    }
  ]
})

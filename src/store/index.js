// https://www.cnblogs.com/xihao/p/11420884.html#4520331 // vuex实例
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', false, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

// // 将modules注册到根store
// // console.log(modules)
// const store = new Vuex.Store({
//   modules
// })

// export default store


// 第二种导出方式　可自定义命名空间前缀
import demo from "./modules/demo"
import some from "./modules/some"
const store = new Vuex.Store({
  // strict: true, // 严格模式　无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
  modules: {
    demo,
    some
    // mySome: some
  }
})
// 热重载 或者说 热加载
// 注意：state模块是没法进行热重载的
// if (module.hot) {
//   // 使 some 和 demo 成为可热重载模块 热重载增删模块内部方法不会刷新页面　而是加载一段js片段
//   module.hot.accept(['./modules/some'], () => {
//     // 获取更新后的模块
//     // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
//     const newSome = require('./modules/some').default
//     // 加载新模块
//     store.hotUpdate({
//       modules: {
//         // 此处的命名空间前缀要求与上面store变量一致
//         some: newSome
//       }
//     })
//   })
// }
export default store
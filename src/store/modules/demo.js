const state = {
  name: "大斌子",
  history:[]
};
/*
  mutation--更改store中状态的唯一方法,vuex中规定mutation中不能包含异步操作
  vuex中规定只能通过提交mutation的方式去更改store中的状态，
  包括action中的操作，也是通过提交mutation去修改
*/
// ✦.mutation下事件的调用是通过 this.$store.commit 传入对应的type调用
// ✦.mutation下事件的定义分为无参的和有参的两种形式
// ✦.mutation事件的调用有两种形式，载荷和对象
const mutations = {
  // 不带参数
  noParamsChangeName(state) {
    state.name = "小斌子";
    // state.history.push(state.name);
  },
  // 带参数修改store的name
  hasParamsChangeName(state, params) {
    console.log(params)
    state.name = params.name;
    // state.history.push(state.name);
  }
};
// 1.action 与 mutation 除了使用了异步操作和调用mutation，其它使用并无差别
/*
  action中不能直接更改状态，它是通过提交mutation来实现操作
  action的调用使用 $.store.dispatch
*/
const actions = {
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  noParamsChangeNameAsync(context){
    // console.log(context);
    setTimeout(() => {
      context.commit("noParamsChangeName")
    }, 1000);
  },
  // action的调用使用 $.store.dispatch, 异步更改状态
  hasParamsChangeNameAsync(context, params) {
      console.log(context);
    setTimeout(() => {
      context.commit("hasParamsChangeName", params);
    }, 1000);
  }
};
//  ✦.getter类似计算属性，是对store中state的一些派生状态，可以简化代码、便于维护
//  ✦.getter的使用方法 this.$store.getters.属性名
//  ✦.getter的定义可以带参可以不带参
const getters = {
  // 不带参数
  setNameDescription: state => {
    let description = "";
    if (state.name === "小四"){ description = "真好11"};
    return state.name + description;
  },
  // 带参数
  setNameDescriptionParams: state => val => {
    let description = "";
    if (state.name === "tx") description = val;
    return state.name + description;
  }
};
export default {
  // 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};

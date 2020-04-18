const state = {
  time: "2020",
  name: "哈哈",
//   da: ""
};
export const mutations = {
  // 不带参数
  setTime(state, params) {
    state.time = "2021" + params.num;
  }
};

const actions = {
  setTimeAsync(context, params) {
    console.log(params);
    setTimeout(() => {
      context.commit("setTime", params);
    }, 1000);
  },
//   getDemoMeth(context) {
//    context.commit("noParamsChangeName");
//   }
};
// 在带命名空间的模块注册全局 action，你可添加 root: true
// const actions = {
//   someAction: {
//     root: true,
//     handler(context) {
//       setTimeout(() => {
//         context.commit("noParamsChangeName");
//       }, 1000);
//     }
//   }
// };
const getters = {
  // 带参数
  setTimeGetter: state => val => {
    let description = "";
    if (state.time === "2023") description = val;
    return state.name + description;
  }
};
export default {
  // 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions,
  getters
};

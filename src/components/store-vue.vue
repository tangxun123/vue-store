<template>
  <!-- store -->
  <!-- https://www.cnblogs.com/xihao/p/11420884.html#4520331 -->
  <div>
    <h3>demo模块name：{{ this.$store.state.demo.name }}</h3>
    <el-input v-model="name" clearable></el-input>
    <el-button type="primary" @click="noParamsChangeName"
      >mutation不带参数</el-button
    >
    <el-button type="primary" @click="hasParamsChangeName"
      >mutation带参数</el-button
    >
    <el-button type="primary" @click="noParamsChangeNameAsync"
      >action不带参数</el-button
    >
    <el-button type="primary" @click="hasParamsChangeNameAsync"
      >action带参数</el-button
    >
    <div style="margin-top:20px">
      <b>getters不带参：{{ this.$store.getters.setNameDescription }}</b>
      <br />
      <b
        >getters带参：{{
          this.$store.getters.setNameDescriptionParams("我是个参数")
        }}</b
      >
    </div>
    <div>
      <h2>vuex的辅助函数有：mapState、mapMutations、mapGetters、mapActions</h2>
      <h6>"mapState：" {{ getName }}</h6>
      <el-button type="primary" @click="noParamsMapMu"
        >mapMutations不带参</el-button
      >
      <el-button type="primary" @click="hasParamsMapMu"
        >mapMutations带参</el-button
      >
      <el-button type="primary" @click="noParamsMapMuAsync"
        >mapActions不带参</el-button
      >
      <el-button type="primary" @click="hasParamsMapMuAsync"
        >mapActions带参</el-button
      >
      <div>mapGetters不带参: {{ setNameDescription }}</div>
      <div>mapGetters带参: {{ setNameDescriptionParams("我是参数") }}</div>
    </div>
    <div>
      <h2>关于刷新页面store数据初始化问题</h2>
      <p>
        在页面刷新或离开之前将store中的数据保存到sessionStorage 或
        localStorage中， 在页面重新加载后再将数据取出，
        通过vuex的$store.replaceState 将数据替换到store中
      </p>
    </div>
    <h3>some模块time：{{ this.$store.state.some.time }}</h3>
    <el-button @click="someChange">someChange</el-button>

    <!-- 严格模式下直接修改store.state的值会报错 -->
    <!-- <el-input v-model="newString"></el-input> -->

    <div>{{getHistory}}</div>
  </div>
</template>
<script>
// vuex的辅助函数
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
// 通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。
// 返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
// import { createNamespacedHelpers } from 'vuex';
// const { mapState } = createNamespacedHelpers("some")
export default {
  data() {
    return {
      name: ""
      // some: {},
      // arr: []
    };
  },
  computed: {
    ...mapState({
      getName: state => {
        return state.demo.name;
      },
      getHistory(state){
        return state.demo.history;
      }
    }),
    ...mapGetters(["setNameDescription", "setNameDescriptionParams"]),
    // newString: {
    //   get(){
    //     return this.getName
    //   },
    //   set(value){
    //     // 因为不能直接跳过mutation修改store的状态
    //     this.$store.commit({
    //       type: "hasParamsChangeName",
    //       name: value
    //     })
    //   }
    // }
    // newString() {
    //   return this.getName
    // }
  },
  mounted() {
    console.log(this.$store);
    // this.$store.state.demo.name="1223"; // 严格模式下直接修改store状态 会报错

    // console.log(document.cookie)
    // 存
    // window.addEventListener("beforeunload", () => {
    //   sessionStorage.setItem("storeName", JSON.stringify(this.$store.state.demo));
    // });
    // 取
    if (sessionStorage.getItem("storeName")) {
        // this.$store.replaceState({},this.$store.state.demo,JSON.parse(sessionStorage.getItem("storeName")));
        this.$store.state.demo = JSON.parse(sessionStorage.getItem("storeName"));
    }
  },
  methods: {
      // mutation 支持　荷载方式及对象方式分发
    noParamsChangeName() {
      this.$store.commit("noParamsChangeName");
      console.log(this.$store)
    },
    hasParamsChangeName() {
      this.$store.commit({
        type: "hasParamsChangeName",
        name: this.name
      });
      console.log(this.$store)
      // this.$store.commit("hasParamsChangeName", {
      //   // 可以多个参数字段
      //   name: this.name,
      //   some: ""
      // });
    },

      // action 支持　荷载方式及对象方式分发
    noParamsChangeNameAsync() {
      this.$store.dispatch("noParamsChangeNameAsync");
    },
    hasParamsChangeNameAsync() {
      this.$store.dispatch({
        type: "hasParamsChangeNameAsync",
        name: this.name
      });
    },

    // 辅助函数
    ...mapMutations({
      noPa: "noParamsChangeName",
      hasPa: "hasParamsChangeName"
    }),
    noParamsMapMu() {
      this.noPa();
    },
    hasParamsMapMu() {
      this.hasPa({ name: this.name });
    },

    ...mapActions({
        noPaAs:"noParamsChangeNameAsync", 
        hasPaAs:"hasParamsChangeNameAsync"
    }),
    noParamsMapMuAsync() {
      this.noPaAs();
    },
    hasParamsMapMuAsync() {
      this.hasPaAs({ name: this.name });
    },

    ...mapActions({getTime: "mySome/setTimeAsync", getMe: "getDemoMeth"}),
    someChange(){
      this.getTime({num: "0416"})
    },

    // 命名空间 使得每个modules都能独立起来 action ,mutation, getter会根据模块注册的路径自动调整命名　不同模块添加空间名前缀
    // ...mapActions({getTime: "some/setTimeAsync"}),
    // someChange(){
    //   this.getTime({num: "参数"})
    // }

    // 在带命名空间的模块注册全局 action，你可添加 root: true
    // ...mapActions({getTime: "someAction"}),
    // someChange(){
    //   this.getTime({num: "参数"})
    // }
  }
};
</script>
<style scoped lang="scss">
.el-input {
  width: 320px;
}
</style>

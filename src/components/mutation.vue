<template>
  <div class="app">
    <h3>demo模块name：{{ this.$store.state.demo.name }}</h3>
    <el-input v-model="name" placeholder="请输入参数" clearable></el-input>
    <el-button type="primary" @click="noParamsChangeName"
      >mutation不带参数</el-button
    >
    <el-button type="primary" @click="hasParamsChangeName"
      >mutation带参数</el-button
    >
      <el-button type="primary" @click="noParamsMapMu"
        >mapMutations不带参</el-button
      >
      <el-button type="primary" @click="hasParamsMapMu"
        >mapMutations带参</el-button
      >
  </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
  name: "One",
  data() {
    return {
      name: ""
    };
  },
  mounted () {
    console.log(this.$store)
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
  }
};
</script>
<style scoped>
.el-input {
  width: 320px;
}
</style>
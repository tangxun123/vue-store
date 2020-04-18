<template>
  <div class="app">
    <h3>demo模块name：{{ this.$store.state.demo.name }}</h3>
    <el-input v-model="name" placeholder="请输入参数" clearable></el-input>
    <el-button type="primary" @click="noParamsChangeNameAsync"
      >action不带参数</el-button
    >
    <el-button type="primary" @click="hasParamsChangeNameAsync"
      >action带参数</el-button
    >
    <el-button type="primary" @click="noParamsMapMuAsync"
      >mapActions不带参</el-button
    >
    <el-button type="primary" @click="hasParamsMapMuAsync"
      >mapActions带参</el-button
    >
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  name: "Two",
  data() {
    return {
      name: ""
    };
  },
  mounted () {
    console.log(this.$store)
  },
  methods: {
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


    ...mapActions({
        noPaAs:"noParamsChangeNameAsync", 
        hasPaAs:"hasParamsChangeNameAsync"
    }),
    noParamsMapMuAsync() {
      this.noPaAs();
    },
    hasParamsMapMuAsync() {
      this.hasPaAs({ name: this.name });
    }
  }
};
</script>
<style scoped lang="scss">
.el-input {
  width: 320px;
}
</style>
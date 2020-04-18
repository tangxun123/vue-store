<template>
  <div class="app">
    <h3>demo模块name：{{ this.$store.state.demo.name }}</h3>
    <div style="margin-top:20px">
      <b>getters不带参：{{ this.$store.getters.setNameDescription }}</b>
      <br />
      <b
        >getters带参：{{
          this.$store.getters.setNameDescriptionParams("我是个参数")
        }}</b
      >
    </div>
    <br><br>
    <el-input v-model="name" placeholder="请输入参数" clearable></el-input>
    <el-button type="primary" @click="noParamsChangeNameAsync"
      >action不带参数</el-button
    >
    <el-button type="primary" @click="hasParamsChangeNameAsync"
      >action带参数</el-button
    >
  </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  name: "Three",
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapGetters(["setNameDescription", "setNameDescriptionParams"]),
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
  }
};
</script>
<style scoped>
.el-input {
  width: 320px;
}
</style>
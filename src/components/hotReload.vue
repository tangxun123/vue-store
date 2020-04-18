<template>
  <div class="app">
    热重载增删模块内部方法不会刷新页面　而是加载一段js片段
    <br>
    state模块是没法进行热重载的
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "hotReload",
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$store)
  },
  methods: {}
};
</script>
<style scoped >
</style>
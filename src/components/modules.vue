<template>
  <div class="app">
    <div>
      由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
      <br>
      为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "modules",
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
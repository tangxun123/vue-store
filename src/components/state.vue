<template>
  <div class="app">
    <h3>demo模块name：{{ this.$store.state.demo.name }}</h3>
    <h3>mapState：{{getName}}</h3>

    <br><br><br><br>
    <el-button type="primary" @click="goStore">store</el-button>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "state",
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState({
      getName: state => {
        return state.demo.name;
      },
      // getHistory(state){
      //   return state.demo.history;
      // }
    })
  },
  mounted () {
    console.log(this.$store)
  },
  methods: {
    goStore(){
      this.$router.push({
        name: "StoreVue"
      })
    },
  }
};
</script>
<style scoped >
</style>
<template>
  <div class="app">
    <div style="height:100px;">
      <el-button type="primary" @click="goStore">store页面</el-button>
    </div>
    <el-steps :active="activeStep" class="no-center">
      <el-step title="首页" icon="el-icon-edit"></el-step>
      <el-step title="购物车" icon="el-icon-upload"></el-step>
      <el-step title="个人中心" icon="el-icon-picture"></el-step>
    </el-steps>
    <!-- <el-button @click="changeStep">切换step</el-button> -->

    <br><br><br>
    <template v-if="home">
      <Home></Home>
      <el-button type="primary" @click="cancle" key="info1">取 消</el-button>
      <el-button type="primary" @click="nextStep" key="info2">下一步</el-button>
    </template>
    <template v-if="car">
      <Car></Car>
      <el-button type="primary" @click="preStep" key="info3">上一步</el-button>
      <el-button type="primary" @click="nextStep" key="info4">下一步</el-button>
    </template>
    <template v-if="center">
      <Center></Center>
      <el-button type="primary" @click="preStep" key="info5">上一步</el-button>
      <el-button type="primary" @click="save" key="info6">保 存</el-button>
    </template>

    <br><br><br><br>
    <!-- 实现子组件刷新方法 -->
    <keep-alive v-if="isRouterAlive">
      <Change></Change>
    </keep-alive>
  </div>
</template>
<script>
import Home from "./childFile/Home";
import Car from "./childFile/Car";
import Center from "./childFile/Center";
import Change from "./childFile/Change";
export default {
  name: "Two",
  components: {
    Home,Car,Center,Change
  },
  data() {
    return {
      activeStep:1,
      home:true,
      car:false,
      center:false,

      isRouterAlive:true,

      name:""
    };
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  methods: {

    goStore(){
      this.$router.push({
        name: "StoreVue"
      })
    },
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(()=>{
        this.isRouterAlive = true;
      })
    },
    changeStep(){
      // this.activeStep++;
      if(this.activeStep===4){
        this.activeStep = 1;
      }
      this.home=false;
      this.car=false;
      this.center=false;
      switch (this.activeStep) {
        case 1:
          this.home=true;
          break;
        case 2:
          this.car=true;
          break;
        case 3:
          this.center=true;
          break;
        default:
          break;
      }
    },
    // 取消按钮
    cancle(){
      this.activeStep = 1;
      this.changeStep();
    },
    // 下一步按钮
    nextStep(){
      this.activeStep ++;
      this.changeStep();
    },
    // 上一步按钮
    preStep(){
      this.activeStep --;
      this.changeStep();
    },
    // 保存按钮
    save(){
      this.activeStep = 1;
      this.changeStep();
    }
  }
};
</script>
<style scoped lang="scss">
.app {
  .no-center{
    text-align: left;
  }
}
.el-input{
  width: 320px;
}
</style>
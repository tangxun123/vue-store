<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header class="header-bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">state</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/mutation' }">mutation</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/action' }">action</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/getters' }">getters</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/modules' }">modules</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/hotReload' }">hotReload</el-breadcrumb-item>
        <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header-bread{
  margin-bottom: 60px;
}
</style>

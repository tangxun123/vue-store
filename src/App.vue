<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header class="header-bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/One' }">One</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Two' }">Two</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Three' }">Three</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <nav class="bottom-nav">
      <!-- <ul>
        <li>
          <router-link to="index">111</router-link>
        </li>
        <li>
          <router-link to="One">222</router-link>
        </li>
        <li>
          <router-link to="Two">333</router-link>
        </li>
        <li>
          <router-link to="Three">444</router-link>
        </li>
      </ul> -->
    </nav>
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
.bottom-nav{
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.bottom-nav>ul{
  width: 100%;
  padding: 0px;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  list-style: none;
  border: 1px solid #ccc;
}
.bottom-nav>ul>li{
  width: 100%;
  line-height: 35px;
  border: 1px solid #bbb;
  cursor: pointer;
}
.header-bread{
  margin-bottom: 60px;
}
</style>

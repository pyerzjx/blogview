<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :xs="1" :sm="1" :md="1" :lg="3" :xl="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="22" :sm="22" :md="22" :lg="18" :xl="16">
        <div id="logo"><img src="./assets/logo.jpg"></div>
        <h2>分享 & 技术</h2>
        <h5>golang & python</h5>
        <div id="router">
          <div><router-link  to="/Home">首页</router-link></div>
          <div><router-link  to="/Column">专栏</router-link></div>
          <div><router-link  to="/Blog">博客</router-link></div>
          <div><router-link  to="/Open" >开源</router-link></div>
          <div><router-link  to="/Team">团队</router-link></div>
        </div>
        <router-view/>
      </el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="3" :xl="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
    height: 1000px;
  }
  .bg-purple {
    background: #FFF;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo{
width: 100%
}
#logo img{
  margin: 0 auto;
  height: 160px;
}
#router{
  border-top:1px solid #000;
  padding-top:10px;
  width: 100%;
  margin: 0 auto;
  display:flex;
  align-items: center;
  justify-content: center;
}
#router div{
  width: 100px;
}
#router a{
  text-decoration:none;
  color: black
}
</style>

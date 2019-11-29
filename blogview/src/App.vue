<template>
  <div id="app">
    <img src="./assets/logo.jpg">
    <h2>分享 & 技术</h2>
    <h5>golang & vue</h5>

    <div id="router">
			<div><router-link  to="/home">首页</router-link></div>
			<div><router-link  to="/blog">博客</router-link></div>
			<div><router-link  to="/column">专栏</router-link></div>
			<div><router-link  to="/open" >开源</router-link></div>
			<div><router-link  to="/team">团队</router-link></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app>img{
  width: 200px;
}
#router{
  border-top:1px solid #000;
  padding-top:10px ;
  width: 1200px;
  margin: 0 auto;
  display:flex;
  align-items: center;
  justify-content: center;
}
#router div{
  width: 200px;
}
#router a{
  text-decoration:none;
  color: black
}
</style>

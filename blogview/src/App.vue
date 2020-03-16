<template>
<div id='app'>
    <el-container>
      <el-header>
        <bheader></bheader>
      </el-header>

      <el-container>
        <el-main></el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>
</div>
</template>

<script>
import Bheader from "./components/Bheader";
import Home from "./components/Home"
export default {
  name: "App",
  components: {
    bheader: Bheader,
    home:Home,
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: calc(100vh - 120px);
  line-height: 600px;
  font-size: 60px;
}

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

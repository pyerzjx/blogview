<template>
  <el-container>
    <el-header><bheader></bheader></el-header>
    
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
      
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Bheader from './components/Bheader'
export default {
  name: "App",
  conponents:{
    bheader:Bheader
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: calc(100vh - 120px)
}

</style>

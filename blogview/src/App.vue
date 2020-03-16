<template>
<div id='app'>
    <el-container>
      <el-header>
        <bheader></bheader>
      </el-header>

      <el-container>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
</div>
</template>

<script>
import Bheader from "./components/Bheader";
export default {
  name: "App",
  components: {
    bheader: Bheader
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

<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="rgb(15, 149, 226)"
  >
    <el-menu-item index="1" style="width:200px;font-size:24px">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><span class="el-menu-title">Python</span></template>
      <el-menu-item index="2-1">教程</el-menu-item>
      <el-menu-item index="2-2">博文</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><span class="el-menu-title">GoLang</span></template>
      <el-menu-item index="3-1">教程</el-menu-item>
      <el-menu-item index="3-2">博文</el-menu-item>
    </el-submenu>
    <el-menu-item index="4"><span class="el-menu-title">Team</span></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Bheader",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu-title{
    font-size: 16px;
    /* padding: 42px; */
}
</style>
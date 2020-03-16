<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Python</template>
      <el-menu-item index="2-1">教程</el-menu-item>
      <el-menu-item index="2-2">博文</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">GoLang</template>
      <el-menu-item index="2-1">教程</el-menu-item>
      <el-menu-item index="2-2">博文</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
    name: 'Bheader'
}
</script>
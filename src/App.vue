<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="isRouter">
          <el-menu-item index="1">旅游网</el-menu-item>
          <el-menu-item index="2">乘客信息</el-menu-item>
          <el-menu-item index="3">增值信息</el-menu-item>
          <el-menu-item index="4">核对支付</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      activeIndex: '2',
      isRouter:true
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
}

</style>

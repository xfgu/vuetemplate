<template>
  <div id="app">
    <el-container class="h-100 d-flex flex-d">
      <el-header class="d-flex ai-center bb bs">
        <h1>Header</h1>
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item index="/base" class="pl-70">
            <span class="text-black2 tit">等值线绘制-简化</span>
          </el-menu-item>
          <el-menu-item index="/high" class="pl-70">
            <span class="text-black2 tit">等值线绘制-高级</span>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container class="flex-1">
        <el-aside class="h-100" width="200px">
          <el-scrollbar class="h-100">
            <div class="box">Aside</div>
          </el-scrollbar>
        </el-aside>
        <el-main class="p-0">
          <g-map />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import gMap from "@/components/map.vue";
export default {
  name: "app",
  created() {},
  mounted() {},
  components: {
    gMap,
  },
};
</script>

<style lang="stylus">
#app {
  height: 100vh;

  main.p-0 {
    padding: 0;
  }

  .box {
    height: 1300px;
  }
}
</style>

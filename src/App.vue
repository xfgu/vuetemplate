<template>
  <div id="app">
    <el-container class="h-100 d-flex flex-d">
      <el-header class="d-flex ai-center bb bs">Header</el-header>
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

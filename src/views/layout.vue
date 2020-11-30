<template>
  <el-container class="h-100 d-flex flex-d">
    <el-header class="d-flex ai-center bb bs">
      <h1>Header</h1>
      <el-menu :default-active="$route.path" mode="horizontal" router>
        <el-menu-item
          v-for="(item, index) in menuList"
          :key="index"
          :index="item.path"
          class="pl-70"
        >
          <span class="black tit">{{ item.name }}</span>
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
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      menuList: [
        { name: "首页", path: "/home" },
        { name: "关于", path: "/two" },
        { name: "用户", path: "/user" },
      ],
    };
  },
  components: {},
};
</script>

<style lang="stylus" scoped>
main.p-0 {
  padding: 0;
}

.box {
  height: 1300px;
}
</style>
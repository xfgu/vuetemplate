<template>
  <div id="app">
    <el-container class="h-100 d-flex flex-d">
      <el-header class="d-flex ai-center bb bs">
        <h1 class="w-240 d-flex ai-center">检疫检测管理系统</h1>
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item
            text-color="#54647d"
            v-for="(item, index) in menuList"
            :key="index"
            :index="item.link"
            class="ml-85"
          >
            <span class="text-black2 tit">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
        <div class="right">
          <el-dropdown
            trigger="click"
            class="dropdown"
            @command="handleCommand"
          >
            <span class="el-dropdown-link dropdownIcon">
              <i class="el-icon-user-solid mr-4" style="color: #c2c2c2"></i>
              <span class="name">{{ userInfo.username }}</span>
              <i
                class="el-icon-caret-bottom el-icon--right"
                style="color: #c2c2c2"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="changePass">修改密码</el-dropdown-item>
              <el-dropdown-item command="logOut">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container class="flex-1">
        <el-aside class="h-100 br" width="240px">
          <el-scrollbar class="h-100">
            <div class="box">
32
            </div>
          </el-scrollbar>
        </el-aside>
        <el-main class="p-0">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import gMap from "@/components/map.vue";
export default {
  name: "app",
  data() {
    return {
      userInfo: {
        username: "admin",
      },
      menuList: [
        {
          title: "统计分析",
          link: "/home",
        },
        {
          title: "溯源追踪",
          link: "/two",
        },
        {
          title: "信息管理",
          link: "/three",
        },
        {
          title: "后台管理",
          link: "/four",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleCommand(command) {
      if (command == "logOut") {
        //退出登录
        this.$confirm("此操作将退出当前登录的账户, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$axios({
              method: "post",
              url: this.$config.baseUrl + "comm/logout",
            }).then((res) => {
              if (res.data.code == 0) {
                this.$router.replace("/login");
                localStorage.clear();
                location.reload();
                this.$message({
                  message: "注销登录成功",
                  type: "success",
                });
              } else {
                this.$message({
                  message: res.data.msg,
                  type: "error",
                });
              }
            });
          })
          .catch(() => {});
      } else {
        //修改密码
        this.dialogVisible = true;
      }
    },
  },
  components: {
    gMap,
  },
};
</script>

<style lang="stylus">
@import './assets/css';

#app {
  height: 100vh;

  .el-header {
    padding: 0;

    .right {
      // justify-self: flex-end;
      max-width: 200px;
      margin-right: 20px;
      margin-left: auto;

      .mr-4 {
        margin-right: 6px;
      }
    }

    .ml-85 {
      margin-left: 85px;
    }

    .el-menu--horizontal>.el-menu-item.is-active {
      border-bottom-color: transparent;

      .tit {
        padding: 4px 12px;
        background: bg['primary'];
        border-radius: 15px;
        color: #fff;
      }
    }
  }

  main.p-0 {
    padding: 0;
  }

  .box {
    height: 1300px;
  }
}
</style>

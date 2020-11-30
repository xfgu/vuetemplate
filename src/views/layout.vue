<template>
<<<<<<< HEAD
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
=======
  <div id="app">
    <el-container class="h-100 d-flex flex-d">
      <el-header class="d-flex ai-center bb bs">
        <h1 class="w-240 d-flex ai-center">检疫检测管理系统</h1>
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item text-color="#54647d" index="/home" class="ml-85">
            <span class="text-black2 tit">统计分析</span>
          </el-menu-item>
          <el-menu-item text-color="#54647d" index="/two" class="ml-85">
            <span class="text-black2 tit">溯源追踪</span>
          </el-menu-item>
          <el-menu-item text-color="#54647d" index="/three" class="ml-85">
            <span class="text-black2 tit">信息管理</span>
          </el-menu-item>
          <el-menu-item text-color="#54647d" index="/user" class="ml-85">
            <span class="text-black2 tit">后台管理</span>
          </el-menu-item>
          <!-- <el-menu-item
            text-color="#54647d"
            v-show="ismanage"
            index="/user"
            class="ml-85"
          >
            <span class="text-black2 tit">后台管理</span>
          </el-menu-item> -->
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
      <el-container class="flex-1 d-flex">
        <el-aside class="h-100 br" width="240px">
          <el-scrollbar class="h-100">
            <div class="box">32</div>
          </el-scrollbar>
        </el-aside>
        <el-main class="p-0 h-100 flex-1">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { logout } from "@/api/request.js";
import gMap from "@/components/map.vue";
export default {
  name: "app",
  data() {
    return {
      userInfo: {
        username: "",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    async handleCommand(command) {
      if (command == "logOut") {
        //退出登录
        await this.$confirm("此操作将退出当前登录的账户, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        });
        let { code, data, msg } = await this.$axios(logout());
        if (code == 0) {
          this.$router.replace({ name: "login" });
          this.$mstore.clear();
          this.$message({
            message: "注销登录成功",
            type: "success",
          });
        } else {
          this.$message({
            message: msg,
            type: "error",
          });
        }
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
@import '../assets/css';

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
>>>>>>> 3ebe8de1f10b355a77acd8c75fd2690509531783

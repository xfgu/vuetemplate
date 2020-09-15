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
        <el-main class="p-0 bg-gray text-info">
          <g-map />
          <!-- <el-upload
            style="padding:20px"
            class="upload-demo"
            ref="upload"
            :before-upload="beforeUpload"
            list-type="picture-card"
            action
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :on-error="handleError"
            :file-list="fileList"
            :auto-upload="false"
            :limit="1"
            :data="formdata"
            accept=".jpeg, .jpg, .png, .gif"
          >
            <i class="el-icon-plus"></i>
          </el-upload> -->
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
  data() {
    return {
      formdata: { type: 0 }, //是否携带参数
      fileList: [],
      url: "/api/upload/uploadppt",
    };
  },
  methods: {
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file.name);
    },
    handleSuccess(res, file) {
      this.$message.success(file.name + " 上传成功！");
      this.$refs.upload.clearFiles();
    },
    handleError(err, file) {
      // console.log(err,file)
      this.$message.error(file.name + " 上传失败！");
    },
    beforeUpload(file) {
      console.log(432423423);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 0.2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 200kb!");
      }
      return isJPG && isLt2M;
    },
  },
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

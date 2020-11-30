<template>
  <div class="upload">
    <el-upload
      class="avatar-uploader"
      :action="action"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import {importExcel} from '@/request';
export default {
  name: "info",
  data() {
    return {
      imageUrl: "",
    };
  },
  computed: {
    action() {
      return process.env.VUE_APP_baseURL + importExcel();
    },
  },
  methods: {
     async uploadFile(file, fileList) {
      let files = file.raw;
      if (!files) return;
      let data = await this.upload(files);
      let readData = xlsx.read(data, { type: "binary", cellDates: true });
      console.log(readData);
      let work = readData.Sheets[readData.SheetNames[0]];
      let workJson = xlsx.utils.sheet_to_json(work);
      console.log(workJson);
      let values = [];
      workJson.map((v) => {
        let keys = Object.keys(v);
        values.push({
          name: Object.values(v)[1],
          // date: this.formatDate(Object.values(v)[0], "-"),
          date: moment(Object.values(v)[0]).format("YYYY-MM-DD"),
        });
      });
      this.tableData = values;
      console.log(values);
    },
    upload(file) {
      return new Promise((resolve, reject) => {
        let fr = new FileReader();
        fr.readAsBinaryString(file);
        fr.onload = (e) => {
          resolve(e.target.result);
        };
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="stylus" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
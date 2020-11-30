<template>
  <section class="bg">
    <div class="login" :style="loginPadding">
      <div class="loginHeader">
        <div class="headerLogo">
          <!-- <img src="../assets/headerLogo.png" /> -->
          检疫检测管理系统
        </div>
      </div>
      <div class="loginWrap">
        <div class="loginBox">
          <div class="loginBoxHeader">
            <span>用户登录</span>
          </div>
          <el-form
            :model="userInfo"
            status-icon
            :rules="rules"
            ref="userInfoForm"
            class="userInfoForm"
            size="medium "
          >
            <el-form-item prop="username">
              <el-input
                v-model="userInfo.username"
                clearable
                autocomplete="off"
                prefix-icon="el-icon-user-solid"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                clearable
                show-password
                v-model="userInfo.password"
                autocomplete="off"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="imageCode" class="codeFormItem">
              <el-input
                v-model="userInfo.imageCode"
                clearable
                autocomplete="off"
                placeholder="请输入验证码"
              ></el-input>
            </el-form-item>
            <img :src="codeImg" alt class="codeImg" @click="getCode" />
          </el-form>
          <el-button
            type="primary"
            class="loginBtn"
            @click="loginBtn('userInfoForm')"
            :loading="loading"
            >登录</el-button
          >
        </div>
        <div class="loginImg">
          <img src="../assets/loginImg_03.png" />
        </div>
      </div>
      <div class="loginFooter">技术支持：浙江大学</div>
    </div>
  </section>
</template>

<script>
import { dyroute } from "@/router";
import { mapState, mapMutations } from "vuex";
import { login, code } from "@/api/request.js";
import qs from "qs";
export default {
  data() {
    let validateusername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    let validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      loginPadding: {
        paddingTop: null,
        paddingBottom: null,
      },
      loading: false,
      allOrdinaryUser: [],
      timeout: null,
      codeImg: null,
      userInfo: {
        username: null,
        password: null,
        imageCode: null,
      },
      rules: {
        username: [
          {
            validator: validateusername,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
        userInfo: [
          {
            validator: validateCode,
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {},
  computed: {
    // ...mapState(["btnLoading"]),
  },
  beforeCreate() {
    // let _this = this;
    // document.addEventListener("keydown", (e) => {
    //   if (e.keyCode == 13) {
    //     this.loginBtn();
    //   }
    // });
  },
  mounted() {
    this.getCode();
    this.getPadding();
  },
  methods: {
    // ...mapMutations(["saveUser"]),
    async getCode() {
      //获取验证码
      // this.codeImg = await this.$axios.get(code(), {
      //   responseType: "arraybuffer",
      // });

      this.codeImg = await axios
        .get(code(), {
          responseType: "arraybuffer",
        })
        .then((res) => {
          return (
            "data:image/jpeg;base64," +
            btoa(
              new Uint8Array(res).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            )
          );
        })
        .catch((err) => {
          console.log(err);
        });

      // console.log(this.codeImg)
      // this.codeImg = process.env.VUE_APP_baseURL + `/comm/code`;
      console.log(this.codeImg);
    },
    getPadding() {
      let $height = document.documentElement.offsetHeight;
      let $padding = ($height - 600) / 2 + "px";
      this.loginPadding.paddingTop = $padding;
      this.loginPadding.paddingBottom = $padding;
    },
    loginBtn(formName) {
      //登录
      this.loading = true;
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let { code, data, msg } = await this.$axios.post(login(), {
            ...this.userInfo,
            password: this.$sha1(this.userInfo.password),
          });
          console.log(data);
          if (code !== 0) {
            this.getCode();
            this.$message.error(data);
            // this.saveUser(res.data.data);

            // let $userInfo = res.data.data;
            // this.$utils.storageUtil.setLocal(this.$config.userKey,JSON.stringify(res.data.data));
            // this.$utils.storageUtil.setSession('pathUrl',`/index/mapDataQuery`);
            // this.$router.push('/index').catch(err => {console.log(err)})
          } else {
            this.$mstore.set("userInfo", data);
            dyroute();
            this.$router.push({ name: "home" });
          }

          this.loading = false;
        } else {
          return false;
        }
      });
    },
    loginFn() {
      let $userInfo = {
        username: "admin",
        status: 1,
      };
      // this.$utils.sessionUtil.setSession("userInfo", JSON.stringify($userInfo));
      this.$router.push("/index");
    },
  },
};
</script>

<style lang="stylus" scoped>
.bg {
  background: #f0f1f3;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  box-sizing: initial;
  width: 1100px;
  height: 600px;
  box-sizing: initial;
  padding: 0 calc(~'50% - 550px');

  .loginHeader {
    width: 100%;
    height: 60px;

    .headerLogo {
      float: left;
      font: bold 18px / 60px '微软雅黑';

      img {
        width: 24px;
        height: 24px;
        float: left;
        margin: 18px;
      }
    }
  }

  .loginWrap {
    width: 100%;
    height: 480px;
    background: #ffffff;

    .loginBox {
      float: left;
      height: 100%;
      width: 680px;
      box-sizing: border-box;
      padding: 100px 150px;

      .loginBoxHeader {
        height: 50px;
        width: 100%;

        span {
          padding: 0 5px;
          font: 400 16px / 50px '微软雅黑';
          border-bottom: 3px solid #2bc047;
          float: left;
        }
      }

      .userInfoForm {
        margin-top: 20px;

        .el-autocomplete {
          width: 100%;
        }

        .codeFormItem {
          float: left;
          width: 200px;
        }

        .codeImg {
          float: right;
          width: 120px;
          height: 40px;
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }

    .loginImg {
      float: right;
      width: 420px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .loginBtn {
    width: 100%;
    height: 50px;
    font-size: 17px;
    margin-top: 20px;
  }

  .loginFooter {
    width: 100%;
    height: 60px;
    font: 400 13px / 60px '微软雅黑';
    color: #a2abc6;
    text-align: center;
  }
}
</style>

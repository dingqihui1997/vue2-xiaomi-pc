<template>
  <div class="flex heivh100">
    <div class="left"><img src="../../assets/login.jpg" class="img100" /></div>
    <div class="wi100">
      <div class="heads flex-sba">
        <div class="font20 font-w7 flex-a">
          <img src="../../assets/logp.png" class="imglogo" />小米账号
        </div>
        <div class="flex">
          <div v-for="(item, index) in arr" :key="index" class="rightItem">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="mi-layout__toast flex-ja wi100">
        <div class="card">
          <div class="flex font22">
            <!-- 登录注册 -->
            <div
              v-for="(item, index) in list"
              :key="index"
              class="marr10 margin-b30"
              :class="index === active ? 'activeborder' : 'color3b'"
              @click="rightItem(index)"
            >
              {{ item }}
            </div>
          </div>
          <!-- 用户名登录 -->
          <div v-if="!active">
            <div class="formValidate-view" v-if="!show">
              <Form
                ref="formValidate"
                :model="formValidate"
                :rules="ruleValidate"
              >
                <FormItem prop="username">
                  <Input
                    v-model="formValidate.username"
                    placeholder="邮箱/手机号码/小米ID"
                  ></Input>
                </FormItem>
                <FormItem prop="password">
                  <Input
                    v-model="formValidate.password"
                    type="password"
                    password
                    placeholder="密码"
                  ></Input>
                </FormItem>
                <FormItem>
                  <button
                    @click="handleSubmit('formValidate')"
                    style="width: 100%; height: 60px"
                    :disabled="!formValidate.password || !formValidate.username"
                    class="color3f"
                    :class="
                      !formValidate.password || !formValidate.username
                        ? 'ipt'
                        : 'ipt1'
                    "
                  >
                    登录
                  </button>
                </FormItem>
              </Form>
            </div>
            <!-- 手机号登录 -->
            <div v-if="show" class="formValidate-view">
              <Form ref="formMobile" :model="formMobile" :rules="ruleMobile">
                <FormItem prop="mobile">
                  <Input v-model="formMobile.mobile" placeholder="请输入手机号">
                  </Input>
                </FormItem>
                <FormItem prop="password">
                  <Input v-model="formMobile.code" placeholder="请输入验证码">
                    <template #append>
                      <div class="Themecolor">获取验证码</div>
                    </template></Input
                  >
                </FormItem>
                <FormItem>
                  <button
                    type="primary"
                    @click="handleSubmit('formValidate')"
                    style="width: 100%; height: 60px"
                    :disabled="formValidate.password || formValidate.username"
                    class="color3f"
                    :class="
                      !formValidate.password || !formValidate.username
                        ? 'ipt'
                        : 'ipt1'
                    "
                  >
                    登录
                  </button>
                </FormItem>
              </Form>
            </div>
            <div class="flex-sb Themecolor">
              <div>{{ show ? "收不到验证码?" : "忘记账号" }}</div>
              <div @click="change">{{ show ? "密码登录" : "手机号登录" }}</div>
            </div>
          </div>
          <!-- 注册 -->
          <div v-if="active" class="formValidate-view">
            <Form ref="register" :model="register" :rules="ruleRegister">
              <FormItem prop="username">
                <Input v-model="register.username" placeholder="用户名"></Input>
              </FormItem>
              <FormItem prop="password">
                <Input
                  v-model="register.password"
                  placeholder="密码"
                  type="password"
                  password
                ></Input>
              </FormItem>
              <FormItem prop="mobile">
                <Input v-model="register.mobile" placeholder="手机号"></Input>
              </FormItem>
              <FormItem prop="code">
                <Input v-model="register.code" placeholder="验证码">
                  <template #append>
                    <div class="Themecolor">获取验证码</div>
                  </template></Input
                >
              </FormItem>
              <FormItem>
                <button
                  @click.prevent="registerSubmit('register')"
                  style="width: 100%; height: 60px"
                  :disabled="
                    !(
                      register.password &&
                      register.username &&
                      register.mobile &&
                      register.code
                    )
                  "
                  class="color3f"
                  :class="
                    register.password &&
                    register.username &&
                    register.mobile &&
                    register.code
                      ? 'ipt1'
                      : 'ipt'
                  "
                >
                  注册
                </button>
              </FormItem>
            </Form>
          </div>
          <div class="foot wi100">
            <div class="flex-ja b0b0b0 margin-b20">
              <Checkbox v-model="single"
                >已阅读并同意小米帐号<span class="color333 font14"
                  >用户协议</span
                >和<span class="color333 font14">隐私政策</span></Checkbox
              >
            </div>
            <div class="b0b0b0 flex-ja">其他方式登录</div>
            <div class="flex-ja">
              <img src="../../assets/1-91.png" class="assets" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      single: false,
      show: false,
      arr: ["用户协议", "隐私政策", "帮助中心", "中文(简体)▼"],
      list: ["登录", "注册"],
      active: 0,
      lvaliMobile: (rule, value, callback) => {
        if (
          !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
            value
          )
        ) {
          console.log(1234);
          return callback(new Error("请输入正确电话"));
        } else {
          callback();
        }
      },
      //注册
      register: {
        username: "",
        password: "",
        mobile: "",
        code: "",
      },
      ruleRegister: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur",
          },
          { validator: lvaliMobile, trigger: "blur" },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur",
          },
        ],
      },
      //用户名登录
      formValidate: {
        username: "",
        password: "",
      },
      ruleValidate: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
      // 手机号登录
      formMobile: { mobile: "", code: "" },
      ruleMobile: {
        mobile: [
          {
            required: true,
            message: "电话不能为空",
            trigger: "blur",
          },
          { validator: this.lvaliMobile, trigger: "blur" },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(222);
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    //注册
    registerSubmit(name) {
      // console.log(name);
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(9999);
        }
      });
    },
    change() {
      //切换手机号密码登录
      this.show = !this.show;
    },
    //切换注册和登录
    rightItem(index) {
      this.active = index;
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.left {
  width: 375px;
  height: 100%;
}
.heads {
  height: 80px;
  padding: 20px;
}
.imglogo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.rightItem {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #838383;
}
.mi-layout__toast {
  width: 100%;
  padding-top: 20px;
  padding: 20px 0;
}
.card {
  box-sizing: border-box;
  border-radius: 4px;
  padding: 40px 45px;
  min-width: 450px;
  box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
}
.activeborder {
  border-bottom: 5px #ff6900 solid;
  color: #333333;
  border-radius: 0 0 2px 2px;
}
.ipt {
  background: #ffbe99;
  border: none;
}
.ipt1 {
  background: #ff7e29;
  border: none;
  border-radius: 4px;
}
.foot {
  height: 96px;
  margin-top: 50px;
}
.assets {
  height: 70px;
}
</style>
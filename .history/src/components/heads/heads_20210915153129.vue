<template>
  <div class="top">
    <div class="container hei100 flex-sba font12 b0b0b0">
      <div class="flex-ja">
        <div v-for="(item, index) in list" :key="index">
          <span class="title">{{ item }}</span>
          <span class="margin5" v-if="index < list.length - 1">|</span>
        </div>
      </div>
      <div class="flex-ja">
        <div v-for="(item, index) in rightlist" :key="index">
          <span class="title">{{ item }}</span>
          <span class="margin5" v-if="index < rightlist.length - 1">|</span>
        </div>
        <div class="cart flex-a">
          <i class="iconfont icon-gouwuchekong"></i>&nbsp;购物车 (0)
        </div>
      </div>
    </div>
    <!-- 头部logo -->
    <div class="head">
      <div class="container hei100 headbox flex-a">
        <div class="headleft">
          <img src="../../assets/logp.png" class="img100" />
        </div>
        <div class="flex navbox">
          <div
            v-for="(item, index) in navlist"
            :key="index"
            class="padlr10 fon14 color333"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="headright">
          <Input v-model="value" size="large">
            <Button slot="append" icon="ios-search"></Button>
          </Input>
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
      value: "",
      list: [
        "小米商城",
        "MIUI",
        " IoT",
        "云服务",
        "天星数科",
        "有品",
        "小爱开放平台",
        "企业团购",
        "资质证照",
        "协议规则",
        "下载app",
        "智能生活",
        " Select Location",
      ],
      rightlist: ["登录", "注册", "消息通知"],
      navlist: [],
    };
  },
  components: {},
  methods: {
    getdata() {
      this.$api
        .getRecommendNav()
        .then((res) => {
          this.navlist = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.top {
  height: 40px;
  width: 100%;
  background: #333333;
}
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  background: pink;
}
.cart {
  height: 40px;
  padding: 0 10px;
  background: #424242;
  margin-left: 10px;
}
.cart:hover {
  color: #ff6a00;
  background: #ffffff;
}
.head {
  height: 100px;
}
.title:hover {
  color: #ffffff;
}
.headbox {
  position: relative;
}
.headright {
  position: absolute;
  right: 0;
}
.headleft {
  width: 56px;
  height: 56px;
}
</style>
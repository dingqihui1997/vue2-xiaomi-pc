<template>
  <div class="top">
    <div class="container hei100 flex-sba font12">
      <div class="flex-ja">
        <div v-for="(item, index) in list" :key="index">
          <span>{{ item }}</span>
          <span class="margin5" v-if="index < list.length - 1">|</span>
        </div>
      </div>
      <div class="flex-ja">
        <div v-for="(item, index) in rightlist" :key="index">
          <span>{{ item }}</span>
          <span class="margin5" v-if="index < rightlist.length - 1">|</span>
        </div>
        <div><i class="iconfont icon-gouwuchekong"></i>购物车(0)</div>
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
    };
  },
  components: {},
  methods: {},
  mounted() {},
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
  background: yellowgreen;
}
</style>
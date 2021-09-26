<template>
  <div class="head flex-ja">
    <div class="containerAuto flex-sb">
      <div class="flex-a">
        <div><img src="../../assets/logp.png" class="log" /></div>
        <div class="font28">我的购物车</div>
        <div class="mal10">
          温馨提示:产品是否购买成功，以最终下单为准哦，请尽快结算
        </div>
      </div>
      <div class="flex">
        <div>登录</div>
        <div>注册</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.log {
  width: 48px;
  height: 48px;
  margin-right: 30px;
}
.head {
  width: 100%;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  position: relative;
  height: 100px;
}
</style>
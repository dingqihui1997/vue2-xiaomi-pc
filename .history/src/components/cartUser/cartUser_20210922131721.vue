<template>
  <div class="flex-ja backf5">
    <div><img src="../../assets/cart.png" alt="" /></div>
    <div>
      <div>您的购物车还是空的</div>
      <div>登录后将显示您之前加入的商品</div>
      <div class="flex-ja">
        <div class="ipt">立即登录</div>
        <div class="ipt1">马上去购物</div>
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
.ipt {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
  width: 158px;
  height: 38px;
  margin-top: 10px;
}
.ipt1 {
  color: #fff;
  width: 158px;
  height: 38px;
  border: 1px solid #ff6700;
  font-size: 14px;
  text-align: center;
  color: #b0b0b0;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
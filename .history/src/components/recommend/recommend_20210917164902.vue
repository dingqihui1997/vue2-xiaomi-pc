<template>
  <div class="backf5 pang38">
    <div class="containerAuto">
      <div class="buy-scc flex-sb">
        <div class="flex">
          <div><img src="../../assets/success.png" class="success" /></div>
          <div class="margin-l10">
            <div class="font24">已成功加入购物车!</div>
            <div>{{ goods.name }}</div>
          </div>
        </div>
        <div class="flex">
          <div class="btn-line-gray flex-ja">返回上一级</div>
          <div class="flex-ja buy-succ-box">去购物车结算</div>
        </div>
      </div>
      <Divider plain
        ><div class="color75 font30 font-w4">
          买购物车中商品的人还买了
        </div></Divider
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goods: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.goods);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.buy-scc {
  margin-bottom: 26px;
  padding: 0 0 28px 0;
  height: 68px;
}
.success {
  width: 64px;
  height: 64px;
}

.btn-line-gray {
  background: #fff;
  color: #b0b0b0;
  width: 158px;
  height: 38px;
  border: 1px solid #b0b0b0;
  cursor: pointer;
}
.buy-succ-box {
  width: 158px;
  height: 38px;
  margin-left: 12px;
  background: #ff6700;
  border: 1px solid #ff6700;
  color: #fff;
}
</style>
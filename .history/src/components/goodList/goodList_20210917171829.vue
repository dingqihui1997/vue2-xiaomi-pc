<template>
  <div>
    <Divider plain
      ><div class="color75 font30 font-w4">
        买购物车中商品的人还买了
      </div></Divider
    >
    <div class="rec-box flex-w">
      <div
        v-for="(item, index) in goodsList"
        :key="index"
        class="goodsBox flex-dji"
      >
        <div><img :src="item.cover" class="cover" /></div>
        <div>{{ item.name }}</div>
        <div>{{ item.presentPrice }}元</div>
        <div class="addcart">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return { goodsList: [] };
  },
  components: {},
  methods: {
    getGoods() {
      this.$api
        .getGoods()
        .then((res) => {
          this.goodsList = res.data;
          console.log(this.goodsList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getGoods();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.rec-box {
  margin-top: 20px;
}
.goodsBox {
  width: 234px;
  margin-right: 10px;
  height: 300px;
  margin-bottom: 10px;
  background: #fff;
  &:last-child {
    margin-right: 0px !important;
  }
}
.cover {
  margin: 40px auto 20px;
  width: 140px;
  height: 140px;
}
.addcart {
  border: 1px solid #ff6700;
  background: #fff;
  color: #ff6700;
  width: 120px;
  height: 28px;
}
</style>
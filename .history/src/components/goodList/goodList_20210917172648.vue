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
        <div class="addcart flex-ja">加入购物车</div>
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
  position: relative;
  &:last-child {
    margin-right: 0px !important;
  }
}
.goodsBox:hover {
  .addcart {
    display: block;
    transition: all 0.4s;
    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-delay: 0s;
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
  display: none;
  position: absolute;
  bottom: 20px;
  webkit-transition: all 0.4s;
}
.addcart:hover {
  color: #fff;
  background-color: #f25807;
  border-color: #f25807;
}
</style>
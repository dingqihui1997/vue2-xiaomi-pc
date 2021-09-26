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
        <div class="Themecolor">{{ item.presentPrice }}元</div>
        <div class="addcart flex-ja" @click="gotobuy(item)">加入购物车</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Message } from "view-design";
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
          let sku = [];
          this.goodsList = res.data;
          console.log(this.goodsList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    gotobuy(item) {
      console.log(item);
      let sku = [];
      item.spec.map((item) => {
        this.$set(item, "showflag", 0);
        sku.push({ name: item.name, checked: item.spec_item[0] });
      });
      this.$set(item, "sku", sku);
      console.log(item);
    },
    // 加入购物车
    addCart() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.$api
          .addCart({
            user_id: user._id,
            count: 1,
            goods: this.goods,
            spec: this.goods.sku,
          })
          .then((res) => {
            console.log(res);
            if (res.code === 200) {
              Message.success(res.msg);
              this.$emit("send", false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
  bottom: 18px;
  text-align: center;
  line-height: 28px;
}
.addcart:hover {
  color: #fff;
  background-color: #f25807;
  border-color: #f25807;
}
</style>
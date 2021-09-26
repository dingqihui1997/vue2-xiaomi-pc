<template>
  <div>
    <catr-top></catr-top>
    <div class="backf5 box">
      <div class="containerAuto back3f container">
        <div class="font18 margin-b10">收货地址</div>
        <div class="flex-w">
          <div
            class="address"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
          >
            <div class="name">
              <div class="font18 margin-b10">小丁</div>
              <div>18281236375</div>
              <div>四川成都市锦江区春熙路街道</div>
              <div>新时代广场</div>
            </div>
            <div class="Themecolor edit" v-if="show">修改</div>
          </div>
        </div>
        <!-- 商品 -->
        <div class="font18">商品及优惠券</div>
        <div v-for="(item, index) in goods" :key="index" class="flex goods">
          <div class="flex2">
            <img :src="item.goods.cover" alt="" />
          </div>
          <div class="flex1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatrTop from "../../components/catrTop/catrTop.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      show: false,
      goods: [],
    };
  },
  components: { CatrTop },
  methods: {
    mouseenter() {
      this.show = true;
    },
    mouseleave() {
      this.show = false;
    },
  },
  mounted() {
    this.goods = JSON.parse(localStorage.getItem("goods"));
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  padding: 48px 20px 0 20px;
}
.box {
  padding: 40px 0 60px;
}
.address {
  width: 268px;
  height: 178px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;
  margin-right: 17px;
  margin-bottom: 20px;
}
.name {
  padding: 15px 24px 0;
}
.edit {
  position: absolute;
  right: 24px;
  bottom: 10px;
}
.goods {
  height: 60px;
}
</style>
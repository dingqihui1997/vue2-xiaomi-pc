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
          <!-- 新增地址 -->
          <div class="address-item">
            <i class="iconfont icon-tianjia"></i>
          </div>
        </div>
        <!-- 商品 -->
        <div class="font18">商品及优惠券</div>
        <div v-for="(item, index) in goods" :key="index" class="flex goods">
          <div class="flex2 flex-a">
            <div>
              <img :src="item.goods.cover" class="imgcover" />
            </div>
            <div class="mal5">{{ item.goods.name }}</div>
            <div
              v-for="(item, index1) in item.goods.sku"
              :key="index1"
              class="mal5"
            >
              {{ item.checked }}
            </div>
          </div>
          <div class="flex1 flex-sba">
            <div>{{ `${item.goods.presentPrice}x${item.count}` }}</div>
            <div class="Themecolor">
              {{ item.goods.presentPrice * item.count }}元
            </div>
          </div>
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
.imgcover {
  width: 30px;
  height: 30px;
}
.address-item {
  width: 268px;
  height: 178px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;
  margin-right: 17px;
  margin-bottom: 20px;
  vertical-align: top;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
</style>
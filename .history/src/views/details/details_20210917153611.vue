<template>
  <div>
    <div class="nav-bar flex-a">
      <div class="containerAuto flex-sb">
        <div class="font18">{{ goods.name }}</div>
        <div class="flex-a">
          <div v-for="(item, index) in arr" :key="index" class="flex">
            <div>{{ item }}</div>
            <div class="mal10 margin-r10" v-if="index < arr.length - 1">|</div>
          </div>
        </div>
      </div>
    </div>
    <product :goods="goods" v-if="Object.values(goods).length > 0"></product>
    <div class="textcenter Themecolor mt10">商品详情</div>
    <div v-html="goods.detail" class="textcenter"></div>
  </div>
</template>

<script>
import Product from "../../components/product/product.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      goodsID: "",
      goods: {},
      arr: ["概述页", "参数页", "F码通道", "咨询客服", "用户评价"],
    };
  },
  components: { Product },
  methods: {},
  mounted() {
    this.goodsID = this.$route.query.goodsID;
    this.$api
      .goodsDetail({ id: this.goodsID })
      .then((res) => {
        this.goods = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.nav-bar {
  height: 63px;
  width: 100%;
  margin-top: 0;
  color: #616161;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  -webkit-box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
  box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
}
</style>
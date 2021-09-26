<template>
  <div>
    <div v-if="show">
      <div class="nav-bar flex-a">
        <div class="containerAuto flex-sb">
          <div class="font18">{{ goods.name }}</div>
          <div class="flex-a">
            <div v-for="(item, index) in arr" :key="index" class="flex">
              <div>{{ item }}</div>
              <div class="mal10 margin-r10" v-if="index < arr.length - 1">
                |
              </div>
            </div>
          </div>
        </div>
      </div>
      <product
        @send="send"
        :goods="goods"
        v-if="Object.values(goods).length > 0"
      ></product>
      <div class="textcenter Themecolor mt20">商品详情</div>
      <div v-html="goods.detail" class="textcenter font0"></div>
    </div>
    <div v-if="!show">
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
              <div class="btn-line-gray flex-ja" @click="back">返回上一级</div>
              <div class="flex-ja buy-succ-box">去购物车结算</div>
            </div>
          </div>
          <good-list @send="send"></good-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../components/product/product.vue";
import { Message } from "view-design";
import GoodList from "../../components/goodList/goodList.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      goodsID: "",
      goods: {},
      arr: ["概述页", "参数页", "F码通道", "咨询客服", "用户评价"],
      show: true,
    };
  },
  components: { Product, GoodList },
  methods: {
    //   获取详情
    getgoodsDetail() {
      this.$api
        .goodsDetail({ id: this.goodsID })
        .then((res) => {
          this.goods = res.data;
          //选择规格,默认选第一项,新增属性,showflag绑定类名,
          // 当前选择的规格
          let sku = [];
          this.goods.spec.map((item) => {
            this.$set(item, "showflag", 0);
            sku.push({ name: item.name, checked: item.spec_item[0] });
          });
          this.$set(this.goods, "sku", sku);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    send(e) {
      this.show = e;
    },
    back() {
      //返回上一级
      this.show = true;
    },
  },
  mounted() {
    this.goodsID = this.$route.query.goodsID;
    this.getgoodsDetail();
  },
  computed: {},
  watch: {
    $route: {
      handler() {
        this.goodsID = this.$route.query.goodsID;
        this.name = this.$route.query.name;
        this.getgoodsDetail();
      },
      immediate: true,
    },
  },
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
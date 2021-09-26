<template>
  <div>
    <catr-top></catr-top>
    <div class="containerAuto">
      <!-- <Table border ref="selection" :columns="columns1" :data="goods"></Table> -->
      <!-- <img src="../../assets/icon_close.png" alt="" /> -->
      <div>
        <div class="flex" style="height: 70px">
          <div class="check">
            <Checkbox :indeterminate="indeterminate" :value="checkAll"
              >全选</Checkbox
            >
          </div>
          <div class="img"></div>
          <div class="name">商品名称</div>
          <div class="price">单价</div>
          <div class="num">数量</div>
          <div class="total">小计</div>
          <div class="col">操作</div>
        </div>
        <div
          v-for="(item, index) in goods"
          :key="index"
          style="height: 70px"
          class="flex"
        ></div>
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
      user: {},
      goods: [],
      indeterminate: true,
      checkAll: false,
      columns1: [
        {
          title: "商品名称",
          key: "goods.name",
          render: (h, params) => {
            return "div", [params.row.goods.name];
          },
        },
        {
          title: "商品图片",
          key: "goods",
          render: (h, params) => {
            return h("img", {
              attrs: {
                src: params.row.goods.cover,
              },
              style: {
                width: "80px",
                height: "80px",
              },
            });
          },
        },
        {
          title: "单价",
          key: "goods",
          render: (h, params) => {
            return "div", [`${params.row.goods.presentPrice}元`];
          },
        },
        {
          title: "数量",
          key: "count",
          render: (h, params) => {
            return "div", [params.row.count];
          },
        },
        {
          title: "小计",
          key: "count",
          className: "Themecolor",
          render: (h, params) => {
            return (
              "div", [`${params.row.count * params.row.goods.presentPrice}元`]
            );
          },
        },
        {
          title: "操作",
          key: "params",
          render: (h, params) => {
            return h("img", {
              attrs: {
                src: "../../assets/icon_close.png",
              },
              style: {
                width: "80px",
                height: "80px",
              },
            });
          },
        },
      ],
    };
  },
  components: { CatrTop },
  methods: {
    getCart() {
      this.$api
        .getCart(this.user._id)
        .then((res) => {
          this.goods = res.data;
          console.log(this.goods);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getCart();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.check {
  width: 110px;
  height: 70px;
}
.img {
  width: 70px;
}
.name {
  width: 380px;
}
.price {
  width: 160px;
}
.num {
  width: 150px;
}
.total {
  width: 200px;
}
.col {
  width: 80px;
}
</style>
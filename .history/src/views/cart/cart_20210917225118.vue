<template>
  <div class="containerAuto">
    <catr-top></catr-top>
    <Table border ref="selection" :columns="columns1" :data="goods"></Table>
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
            return h("div", [
              h("img", {
                attrs: {
                  src: params.row.goods.cover,
                },
                style: {
                  width: "40px",
                  height: "40px",
                },
              }),
            ]);
          },
        },
        {
          title: "Address",
          key: "address",
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
</style>
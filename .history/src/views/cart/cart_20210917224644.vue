<template>
  <div class="containerAuto">
    <catr-top></catr-top>
    <Table border ref="selection" :columns="columns1" :data="data1"></Table>
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
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
          render: (h, params) => {
            return h("div", [
              h("img", {
                attrs: {
                  src: params.row.avatar,
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
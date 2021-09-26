<template>
  <div class="containerAuto">
    <catr-top></catr-top>
    <!-- <img src="../../assets/icon_close.png" alt="" /> -->
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
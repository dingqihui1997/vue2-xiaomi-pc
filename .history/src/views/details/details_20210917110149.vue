<template>
  <div>
    <div class="nav-bar">
      <div class="container flex-sb">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return { goodsID: "", goods: {} };
  },
  components: {},
  methods: {},
  mounted() {
    this.goodsID = this.$route.query.goodsID;
    this.$api
      .goodsDetail({ id: this.goodsID })
      .then((res) => {
        console.log(res);
        this.goods = res.data;
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
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
}
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
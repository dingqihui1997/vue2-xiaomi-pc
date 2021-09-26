<template>
  <div>
    <div class="nav-bar">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return { goodsID: "" };
  },
  components: {},
  methods: {},
  mounted() {
    this.goodsID = this.$route.query.goodsID;
    this.$api
      .goodsDetail({ id: this.goodsID })
      .then((res) => {
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
}
</style>
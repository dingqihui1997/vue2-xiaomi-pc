<template>
  <div>详情</div>
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
    this.goodsID = this.$route.query;
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
</style>
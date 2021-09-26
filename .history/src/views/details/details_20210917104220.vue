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
    console.log();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
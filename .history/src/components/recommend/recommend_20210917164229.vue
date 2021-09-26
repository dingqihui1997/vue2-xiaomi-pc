<template>
  <div class="backf5"></div>
</template>

<script>
export default {
  name: "",
  props: {
    goods: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.goods);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.buy-scc {
  margin-bottom: 26px;
  padding: 0 0 28px 0;
  height: 68px;
  border-bottom: 1px solid #e0e0e0;
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
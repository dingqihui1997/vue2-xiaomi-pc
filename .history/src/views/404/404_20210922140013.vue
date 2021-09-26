<template>
  <div class="container flex-dji">
    <div><img src="../../assets/404.jpg" /></div>
    <div class="sorry" style="font-size: 45px">咦~页面不见了~</div>
    <div class="font30">返回首页</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  width: 100%;
  height: 6rem;
  position: absolute;
  margin: -3rem 0 0 -50%;
  top: 50%;
  left: 50%;
}
.sorry {
  margin-top: 20px;
}
</style>
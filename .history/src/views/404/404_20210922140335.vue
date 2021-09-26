<template>
  <div class="container flex-dji">
    <div class="img404"><img src="../../assets/404.jpg" class="img100" /></div>
    <div class="sorry" style="font-size: 45px">咦~页面不见了~</div>
    <div class="font30 back" @click="back">返回首页</div>
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
  methods: {
    back() {
      this.$router.push("/");
    },
  },
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
.img404 {
  width: 467px;
  height: 400px;
}
.back {
  color: #0b72a4;
}
</style>
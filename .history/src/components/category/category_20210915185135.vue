<template>
  <div class="home-hero container">
    <div class="homeSwiper flex-sb">
      <div class="site-category"></div>
      <div></div>
    </div>
    <div class="home-hero-sub"></div>
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
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  height: 643px;
  margin-bottom: 26px;
}
.homeSwiper {
  height: 460px;
  background: violet;
}
.home-hero-sub {
  margin-top: 15px;
  height: 165px;
  background-color: yellowgreen;
}
.site-category {
  width: 234px;
  background: yellowgreen;
}
</style>
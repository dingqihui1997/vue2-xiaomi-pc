<template>
  <div class="home-hero container">
    <div class="homeSwiper flex-sb">
      <div class="site-category flex-d color3f">
        <div
          v-for="(item, index) in category"
          :key="index"
          class="flex-sba flex1"
        >
          <div>{{ item.name }}</div>
          <div><i class="iconfont icon-youjiantou font12"></i></div>
        </div>
      </div>
      <div>lunbotu</div>
    </div>
    <div class="home-hero-sub"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      category: [],
    };
  },
  components: {},
  methods: {
    // 获取分类
    getcategory() {
      this.$api
        .getCategory()
        .then((res) => {
          this.category = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取轮播图
    getBanner() {},
  },
  mounted() {
    this.getcategory();
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
  background: rgba(105, 101, 101, 0.6);
  padding: 0 10px;
}
</style>
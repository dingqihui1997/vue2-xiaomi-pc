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
      <div class="Carousel">
        <Carousel v-model="value1" loop>
          <CarouselItem v-for="(item, index) in Banner" :key="index">
            <img :src="item.url" />
          </CarouselItem>
        </Carousel>
      </div>
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
      Banner: [],
      value1: 0,
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
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取轮播图
    getBanner() {
      this.$api
        .getBanner()
        .then((res) => {
          console.log(res);
          this.Banner = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getcategory();
    this.getBanner();
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
  position: relative;
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
  z-index: 9999;
}
.Carousel {
  //轮播图
  width: 1226px;
  height: 460px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
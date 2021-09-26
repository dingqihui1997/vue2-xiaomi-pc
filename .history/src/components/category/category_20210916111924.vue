<template>
  <div class="home-hero container">
    <div class="homeSwiper flex-sb">
      <div class="site-category flex-d color3f">
        <div
          v-for="(item, index) in category"
          :key="index"
          class="flex-sba flex1 categoryItem"
          @mouseover="Move(item)"
        >
          <div>{{ item.name }}</div>
          <div><i class="iconfont icon-youjiantou font12"></i></div>
        </div>
        <!-- hover -->
        <div class="categoryhover flex-d flex-w">
          <!-- <div v-for="(item.)"></div> -->
        </div>
      </div>
      <div class="Carousel-box">
        <Carousel v-model="value1" loop autoplay :autoplaySpeed="5000">
          <CarouselItem v-for="(item, index) in Banner" :key="index">
            <img :src="item.url" class="img100" />
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
      show: false,
      data: [],
    };
  },
  components: {},
  methods: {
    // 获取分类
    getcategory() {
      this.$api
        .getCategory()
        .then((res) => {
          console.log(res.data);
          this.category = res.data;
          console.log(res.data);
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
          this.Banner = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 鼠标移入
    Move(item) {
      // console.log(item);
      this.show = true;
      this.data = item.list;
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
  position: relative;
}
.home-hero-sub {
  margin-top: 15px;
  height: 165px;
}
.site-category {
  width: 234px;
  background: rgba(105, 101, 101, 0.6);
  z-index: 9999;
  position: relative;
}
.categoryhover {
  position: absolute;
  left: 234px;
  top: 0;
  bottom: 0;
  max-width: 992px;
  background: skyblue;
  height: 100%;
}
.Carousel-box {
  //轮播图
  width: 1226px;
  height: 460px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.ivu-carousel-arrow.left {
  left: 240px !important;
}
.categoryItem {
  padding: 0 10px;
}
.categoryItem:hover {
  background: #ff6700;
}
</style>
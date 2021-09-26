<template>
  <div>
    <div class="containerAuto product flex">
      <div class="flex1">
        <div class="imgbox">
          <Carousel v-model="value1" loop autoplay :autoplay-speed="5000">
            <CarouselItem v-for="(item, index) in goods.pic" :key="index">
              <img :src="item" class="img100" />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
      <div class="flex1 mal20">
        <div class="font24 color21">{{ goods.name }}</div>
        <div class="b0b0b0 pad-t10">{{ goods.introduction }}</div>
        <div class="Themecolor xiaomi">小米自营</div>
        <div class="flex-a">
          <div class="Themecolor font18">{{ goods.originalPrice }}元</div>
          <div class="b0b0b0 text-li font14 mal5">{{ goods.presentPrice }}</div>
        </div>
        <Divider />
        <div class="address">
          <i class="iconfont icon-dingwei"></i>

          {{ province }}
        </div>
      </div>
    </div>
  </div>
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
    return {
      value1: 0,
      province: "", //省
      city: "", //市
      district: "", //区
      township: "", //街道
    };
  },
  components: {},
  methods: {
    getLocation() {
      let that = this;
      AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB",
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          console.log(data);
          this.province = data.addressComponent.province;
          this.city = data.addressComponent.city;
          this.district = data.addressComponent.district;
          this.township = data.addressComponent.township;
        }
        function onError(data) {
          // 定位出错
        }
      });
    },
  },
  mounted() {
    console.log(this.goods);
    this.getLocation();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.product {
  height: 850px;
  padding-top: 32px;
  padding-bottom: 12px;
}
.imgbox {
  width: 560px;
  height: 560px;
}
.xiaomi {
  margin: 10px 0;
}
.address {
  height: 100px;
  padding: 30px 50px;
  background: #fafafa;
  border: 1px solid #e0e0e0;
}
</style>
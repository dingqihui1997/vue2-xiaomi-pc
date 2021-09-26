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
          {{ `${province} ${city} ${district} ${township}` }}
          <span class="Themecolor">修改</span>
        </div>
        <!-- 规格 -->
        <div v-for="(item, index) in goods.spec" :key="index">
          <div class="font18 mat10">选择{{ item.name }}</div>
          <div class="flex-w">
            <div
              v-for="(item1, index1) in item.spec_item"
              :key="index1"
              class="buygoods"
              :class="index1 === item.showflag ? 'sku' : ''"
              @click="choice(item, item1, index, index1)"
            >
              {{ item1 }}
            </div>
          </div>
        </div>
        <!-- 已选 -->
        <div class="selected">
          <div class="flex-sb">
            <div>
              {{ goods.name }}
              <span
                v-for="(item, index) in goods.sku"
                :key="index"
                class="mar5"
                >{{ item.checked }}</span
              >
            </div>
            <div class="b0b0b0">
              {{ goods.originalPrice }}元
              <span class="text-li"> {{ goods.presentPrice }}元</span>
            </div>
          </div>
          <div class="Themecolor font24">总计: {{ goods.originalPrice }}元</div>
        </div>
        <!-- 加入购物车 -->
        <div class="flex-a color3f margin-b10">
          <div class="btn flex-ja" @click="gotobuy">加入购物车</div>
          <div class="btn-like flex-ja">喜欢</div>
        </div>
        <!-- 自营规格 -->
        <div class="flex-a">
          <div
            v-for="(item, index) in goods.params"
            :key="index"
            class="flex-a mar5"
          >
            <img :src="item.url" class="imgitem" />{{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <address :></address>
  </div>
</template>

<script>
import { Message } from "view-design";
import Address from "../address/address.vue";
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
      show: false,
    };
  },
  components: { Address },
  methods: {
    choice(item, item1, index, index1) {
      this.goods.sku[index] = { name: item.name, checked: item1 };
      item.showflag = index1;
    },
    //   获取定位
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
          that.province = data.addressComponent.province;
          that.city = data.addressComponent.city;
          that.district = data.addressComponent.district;
          that.township = data.addressComponent.township;
        }
        function onError(data) {
          // 定位出错
        }
      });
    },
    addCart() {
      let a = JSON.parse(localStorage.getItem("user"));
      if (a) {
        let user = JSON.parse(localStorage.getItem("user"));
        this.$api
          .addCart({
            user_id: user._id,
            count: 1,
            goods: this.goods,
            spec: this.goods.sku,
          })
          .then((res) => {
            console.log(res);
            if (res.code === 200) {
              Message.success(res.msg);
              this.$emit("send", false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Message.error("请登录");
      }
    },
    // 加入购物车
    gotobuy() {
      this.addCart();
    },
  },
  mounted() {
    this.getLocation();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.product {
  //   height: 850px;
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
  margin: 20px 0;
}
.buygoods {
  margin-right: 10px;
  margin-top: 10px;
  line-height: 42px;
  height: 42px;
  border: 1px solid #e0e0e0;
  list-style: none;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  float: left;
  width: 290px;
  font-size: 16px;
  text-align: center;
}
.sku {
  border: 1px solid #ff6700;
  color: #ff6700;
}
.selected {
  background: #f9f9fa;
  padding: 30px;
  margin-bottom: 30px;
}
.imgitem {
  width: 20px;
  height: 20px;
}
.btn {
  width: 298px;
  height: 52px;
  font-size: 16px;
  background: #ff6700;
}
.btn-like {
  width: 140px;
  height: 52px;
  padding: 0;
  margin: 0;
  background: #b0b0b0;
  border: 1px solid #b0b0b0;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  font-size: 16px;
  margin-left: 10px;
}
</style>
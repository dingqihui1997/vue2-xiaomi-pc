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
        <div class="flex">
          <div>{{goods.}}</div>
          <div></div>
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
    return { value1: 0 };
  },
  components: {},
  methods: {},
  mounted() {
    console.log();
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
</style>
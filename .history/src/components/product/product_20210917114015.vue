<template>
  <div>
    <div class="containerAuto product flex">
      <div class="flex1">
        <div class="imgbox">
          <Carousel v-model="value1" loop>
            <CarouselItem v-for="(item, index) in goods.pic" :key="index">
              <img :src="item" />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
      <div class="flex1"></div>
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
  mounted() {},
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
</style>
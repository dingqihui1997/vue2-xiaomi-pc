<template>
  <div>
    <div class="containerAuto product flex">
      <div class="flex1">
        <div class="imgbox"></div>
        <Carousel v-model="value1" loop>
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">4</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="flex1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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
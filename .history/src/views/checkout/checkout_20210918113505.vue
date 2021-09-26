<template>
  <div>
    <catr-top></catr-top>
    <div class="backf5 box">
      <div class="containerAuto back3f container">
        <div class="font18 margin-b10">收货地址</div>
        <div class="flex-w">
          <div class="address"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatrTop from "../../components/catrTop/catrTop.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { CatrTop },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  padding: 48px 20px 0 20px;
}
.box {
  padding: 40px 0 60px;
}
.address {
  width: 268px;
  height: 178px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;
  margin-right: 17px;
  margin-bottom: 20px;
}
</style>
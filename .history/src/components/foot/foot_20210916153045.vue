<template>
  <div class="backfff container">
    <div class="flex footnav">
      <div v-for="(item, index) in arr" :key="index" class="flex1">
        <i :class="item.icon" class="iconfont"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [
        { name: "预约维修服务", icon: "icon-weixiu46" },
        { name: "七天无理由退货", icon: "icon-qitian" },
        { name: "15天免费退换货", icon: "icon-shiwu" },
        { name: "满69元包邮", icon: "icon-liwu" },
        { name: "520余家售后网点", icon: "icon-dingwei" },
      ],
    };
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
  height: 330px;
  margin-top: 10px;
}
.footnav {
  height: 80px;
}
</style>
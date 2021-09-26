<template>
  <div>
    <category></category>
    <floor></floor>
  </div>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div><i :class="item.icon" class="iconfont"></i></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import Category from "../components/category/category.vue";
import Floor from "../components/floor/floor.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [
        { name: "手机APP", icon: "icon-shouji" },
        { name: "个人中心", icon: "icon-yonghutouxiang" },
        { name: "售后服务", icon: "icon-weixiu46" },
        { name: "人工客服", icon: "icon-kefu" },
        { name: "购物车", icon: "icon-gouwuchekong" },
        { name: "回顶部", icon: "icon-huidingbu" },
      ],
    };
  },
  components: { Category, Floor },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>

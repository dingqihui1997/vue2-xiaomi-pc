<template>
  <div>
    <category></category>
    <floor></floor>
    <div class="right flex-dji">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="flex1 wi100 flex-dji rightone"
      >
        <div><i :class="item.icon" class="iconfont"></i></div>
        <div>{{ item.name }}</div>
      </div>
      <div class="gotoTop">
        <div><i class="iconfont icon-huidingbu"></i></div>
        <div>回顶部</div>
      </div>
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
        // { name: "回顶部", icon: "icon-huidingbu" },
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
.right {
  width: 85px;
  height: 455px;
  position: fixed;
  bottom: 70px;
  right: 0;
  z-index: 99;
  color: #757575;
}
.rightone {
  margin-top: -1px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
}
.gotoTop {
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  width: 85px;
  height: 78px;
}
</style>

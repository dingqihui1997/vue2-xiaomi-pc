<template>
  <div>
    <Divider plain
      ><div class="color75 font30 font-w4">
        买购物车中商品的人还买了
      </div></Divider
    >
    <div class="rec-box flex-w">
      <div v-for="(item, index) in goodsList" :key="index" class="goodsBox">
        <div><img :src="item.cover" class="cover" /></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
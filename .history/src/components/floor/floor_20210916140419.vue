<template>
  <div class="container">
    <div v-for="(item, index) in category" :key="index">
      <div class="flex-sba">
        <div class="font22 color333 name">{{ item.name }}</div>
        <div class="font16">
          查看更多<i class="iconfont icon-youjiantou1 font22"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return { category: [] };
  },
  components: {},
  methods: {
    getcategory() {
      this.$api
        .getCategory()
        .then((res) => {
          console.log(res.data);
          this.category = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getcategory();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  background: springgreen;
}
.name {
  height: 58px;
}
</style>
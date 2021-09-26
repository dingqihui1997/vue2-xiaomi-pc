<template>
  <div class="backf5">
    <div class="containerAuto">
      <div class="flex">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="mar10 padtb10"
          :class="index === 0 ? 'Themecolor' : ''"
        >
          {{ item }}
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
    return {
      word: "",
      list: ["综合", "新品", "销量", "价格"],
    };
  },
  components: {},
  methods: {
    getsearch(e) {
      this.$api
        .search({ current: 1, pageSize: 99999, query: e })
        .then((res) => {
          console.log(res);
          this.searchList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.word = this.$route.query.value;
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
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
      <div class="flex-w">
        <div
          v-for="(item, index) in searchList"
          :key="index"
          class="searchList"
        ></div>
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
      list: ["综合", "新品", "销量", "价格"],
      searchList: [],
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
    let word = this.$route.query.value;
    this.getsearch(word);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.searchList {
  position: relative;
  float: left;
  width: 296px;
  height: 430px;
  margin-right: 14px;
  margin-bottom: 14px;
  text-align: center;
  background: #fff;
}
</style>
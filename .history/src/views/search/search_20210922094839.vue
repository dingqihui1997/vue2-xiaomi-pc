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
          class="searchList flex-ja"
        >
          <div class="searchImg"><img :src="item.cover" class="img100" /></div>
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
  width: 295px;
  height: 430px;
  margin-right: 12px;
  margin-bottom: 14px;
  text-align: center;
  background: #fff;
  &:nth-child(4n) {
    margin-right: 0;
  }
}
.searchImg {
  height: 200px;
  width: 200px;
  padding-top: 47px;
}
</style>
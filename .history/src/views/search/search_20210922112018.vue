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
      <div class="flex-w" v-if="searchList.length">
        <div
          v-for="(item, index) in searchList"
          :key="index"
          class="searchList flex-dji"
        >
          <div class="searchImg"><img :src="item.cover" class="img100" /></div>
          <div class="name">{{ item.name }}</div>
          <div class="flex">
            <div class="Themecolor">{{ item.presentPrice }}元</div>
            <div class="text-li">{{ item.originalPrice }}元</div>
          </div>
          <div><img :src="item.cover" class="thumbs" /></div>
          <div><img src="../../assets/jiajiagou.png" class="price" /></div>
        </div>
      </div>
      <div v-if="!searchList.length" class="textcenter font14 pad10">
        暂无数据
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
  watch: {
    $route: {
      handler() {
        let word = this.$route.query.value;
        this.getsearch(word);
      },
      immediate: true,
    },
  },
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
.name {
  margin: 0 auto;
  width: 230px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.thumbs {
  height: 37px;
  width: 37px;
  border: 1px solid #eee;
  margin-top: 10px;
}
.thumbs:hover {
  border: 1px solid #ff6700;
}
.price {
  width: 55px;
  height: 18px;
  margin-top: 10px;
}
</style>
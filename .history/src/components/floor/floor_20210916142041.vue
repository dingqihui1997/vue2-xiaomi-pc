<template>
  <div style="background: #f5f5f5; padding-top: 20px">
    <div class="container">
      <div v-for="(item, index) in category" :key="index">
        <div class="flex-sba">
          <div class="font22 color333 name flex-a">{{ item.name }}</div>
          <div class="font16">
            查看更多<i class="iconfont icon-youjiantou1 font22"></i>
          </div>
        </div>
        <div class="flex-w">
          <div
            class="flex-dji goods"
            v-for="(item1, index1) in Object.values(item.list[0].list[0])[0]"
            :key="index1"
          >
            <div><img :src="item1.cover" class="coverimg" /></div>
            <div>{{ item1.name }}</div>
            <div class="introduction overhidden">{{ item1.introduction }}</div>
            <div>{{ item1.presentPrice }}</div>
          </div>
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
.coverimg {
  width: 160px;
  height: 160px;
}
.goods {
  width: 234px;
  background: #fff;
}
.introduction {
  width: 150px;
}
</style>
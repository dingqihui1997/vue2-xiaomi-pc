<template>
  <div class="top">
    <div class="container hei100 flex-sba font12 b0b0b0">
      <div class="flex-ja">
        <div v-for="(item, index) in list" :key="index">
          <span class="title">{{ item }}</span>
          <span class="margin5" v-if="index < list.length - 1">|</span>
        </div>
      </div>
      <div class="flex-ja">
        <div v-for="(item, index) in rightlist" :key="index" @>
          <span class="title">{{ item }}</span>
          <span class="margin5" v-if="index < rightlist.length - 1">|</span>
        </div>
        <div class="cart flex-a">
          <i class="iconfont icon-gouwuchekong"></i>&nbsp;购物车 (0)
        </div>
      </div>
    </div>
    <!-- 头部logo -->
    <div class="head">
      <div class="container hei100 headbox flex-a">
        <div class="headleft">
          <img src="../../assets/logp.png" class="img100" />
        </div>
        <div class="flex navbox" ref="content" @mouseleave="removebox">
          <div
            v-for="(item, index) in navlist"
            :key="index"
            class="padlr10 font16 color333"
            @mouseover="move(item)"
            @mouseleave="remove"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="headright">
          <Input v-model="value" size="large">
            <Button slot="append" icon="ios-search"></Button>
          </Input>
        </div>
      </div>
    </div>
    <!-- hover -->
    <div class="navhover" v-if="show">
      <div class="container flex">
        <div
          v-for="(item, index) in goods"
          :key="index"
          class="flex-a color333"
        >
          <div class="imgbox flex-dji">
            <div><img :src="item.cover" class="imgcover" /></div>
            <div>{{ item.name }}</div>
            <div class="price">{{ item.presentPrice }}起</div>
          </div>
          <div class="rightline"></div>
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
      show: false,
      value: "",
      list: [
        "小米商城",
        "MIUI",
        " IoT",
        "云服务",
        "天星数科",
        "有品",
        "小爱开放平台",
        "企业团购",
        "资质证照",
        "协议规则",
        "下载app",
        "智能生活",
        " Select Location",
      ],
      rightlist: ["登录", "注册", "消息通知"],
      navlist: [], //导航
      goods: [], //商品
    };
  },
  components: {},
  methods: {
    getdata() {
      //获取推荐导航
      this.$api
        .getRecommendNav()
        .then((res) => {
          this.navlist = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取推荐导航商品
    getnavgoods(e) {
      this.$api
        .getNavGoods({ id: e })
        .then((res) => {
          console.log(res);
          this.goods = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    move(item) {
      //鼠标移入
      this.show = true;
      this.getnavgoods(item._id);
    },
    remove(e) {
      //item鼠标移除
      // console.log(e);

      let top = this.$refs.content.getBoundingClientRect().top;
      console.log(Math.abs(top - e.pageY));
      if (Math.abs(top - e.pageY) > 40) this.show = false;
    },
    // 大盒子移除
    removebox(e) {
      let top = this.$refs.content.getBoundingClientRect().top;
      console.log(Math.abs(top - e.pageY));
      if (Math.abs(top - e.pageY) > 10) this.show = false;
    },
  },
  mounted() {
    this.getdata();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.top {
  height: 40px;
  width: 100%;
  background: #333333;
}
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
}
.cart {
  height: 40px;
  padding: 0 10px;
  background: #424242;
  margin-left: 10px;
}
.cart:hover {
  color: #ff6a00;
  background: #ffffff;
}
.head {
  height: 100px;
}
.title:hover {
  color: #ffffff;
}
.headbox {
  position: relative;
}
.headright {
  position: absolute;
  right: 0;
}
.headleft {
  width: 56px;
  height: 56px;
}
.navbox {
  position: absolute;
  left: 240px;
}
.navhover {
  height: 200px;
  border-top: 1px solid #eee;
  padding: 20px;
  -webkit-box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
  box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
}
.imgcover {
  width: 120px;
  height: 120px;
}

.imgbox {
  padding: 0 30px;
}
.rightline {
  width: 1px;
  height: 110px;
  margin-top: -40px;
  background: #eee;
}
.price {
  color: #ff6a00;
}
</style>
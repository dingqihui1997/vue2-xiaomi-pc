<template>
  <div>
    <div class="top">
      <div class="container hei100 flex-sba font12 b0b0b0">
        <div class="flex-ja">
          <div v-for="(item, index) in list" :key="index">
            <span class="title">{{ item }}</span>
            <span class="margin5" v-if="index < list.length - 1">|</span>
          </div>
        </div>
        <div class="flex-ja">
          <!-- 没登录 -->
          <div v-if="!user" class="flex">
            <div v-for="(item, index) in rightlist" :key="index">
              <span>{{ item }}</span>
              <span class="margin5" v-if="index < rightlist.length - 1">|</span>
            </div>
          </div>
          <!-- 已经登录 -->
          <div v-if="user">
            <Dropdown>
              <span class="b0b0b0 username">
                {{ user.username }}
                <Icon type="ios-arrow-down"></Icon>
              </span>
              <DropdownMenu slot="list">
                <DropdownItem
                  v-for="(item, index) in DropdownItem"
                  :key="index"
                  >{{ item }}</DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
            <span class="mal20">消息通知</span>
            <span class="mal20 margin-r20">我的订单</span>
          </div>
          <div class="cart flex-a">
            <i class="iconfont icon-gouwuchekong"></i>&nbsp; 购物车(0)
          </div>
        </div>
      </div>
    </div>
    <!-- 头部logo -->
    <div class="head">
      <div class="container hei100 headbox flex-a">
        <div class="headleft">
          <img src="../../assets/logp.png" class="img100" />
        </div>
        <div class="flex navbox" ref="content" @mouseleave="remove">
          <div
            v-for="(item, index) in navlist"
            :key="index"
            class="padlr10 font16 color333 navcontent"
            @mouseover="move(item)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="headright">
          <Input v-model="value" size="large" :placeholder="hotword">
            <Button slot="append" icon="ios-search"></Button>
          </Input>
        </div>
      </div>
      <div class="navhover back3f" v-if="show" @mouseleave="removebox">
        <div class="container flex back3f">
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
            <div class="rightline" v-if="index < goods.length - 1"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- hover -->
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
      hotword: "",
      user: {},
      DropdownItem: [
        "个人中心",
        "评价晒单",
        "我的喜欢",
        "小米账户",
        "退出登录",
      ],
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
          // console.log(res);
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
      let top = this.$refs.content.getBoundingClientRect().top;
      let width = this.$refs.content.getBoundingClientRect().width; //元素的宽度
      if (
        Math.abs(top - e.pageY) > 50 ||
        top - e.pageY >= 1 ||
        width - e.pageX > 81 ||
        width - e.pageX < -588
      )
        this.show = false;
    },
    // 大盒子移除
    removebox(e) {
      let top = this.$refs.content.getBoundingClientRect().top;
      if (Math.abs(top - e.pageY) > 70) this.show = false;
    },
    // 获取搜索热词
    gethotword() {
      this.$api
        .getSearchWords()
        .then((res) => {
          let num = res.data.length;
          setInterval(() => {
            num--;
            this.hotword = res.data[num].name;
            if (num === 0) {
              num = res.data.length;
            }
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
    this.gethotword();
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
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
.navcontent:hover {
  color: #ff6a00;
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
  position: absolute;
  left: 0;
  right: 0;
  height: 200px;
  border-top: 1px solid #eee;
  padding: 20px;
  -webkit-box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
  box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
  background: #ffffff;
  z-index: 99999;
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
.username:hover {
  color: #ff6a00;
  background: #ffffff;
}
</style>
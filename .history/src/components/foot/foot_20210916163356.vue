<template>
  <div>
    <div class="backfff container">
      <div class="flex footnav">
        <div
          v-for="(item, index) in arr"
          :key="index"
          class="flex1 flex-ja foot1"
        >
          <div
            class="flex-ja"
            :class="index < arr.length - 1 ? 'iconnoe' : 'iconnoe1'"
          >
            <i :class="item.icon" class="iconfont font24"></i>
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="flex-sb">
        <div class="left flex">
          <div v-for="(item, index) in list" :key="index" class="flex1">
            <div class="nameItem">{{ item.name }}</div>
            <div
              v-for="(item1, index1) in item.listItem"
              :key="index1"
              class="listItem"
            >
              {{ item1 }}
            </div>
          </div>
        </div>
        <div class="right flex-dji">
          <div class="flex-dji rightbox">
            <div class="Themecolor font24">400-100-5678</div>
            <div>8:00-18:00(仅收市话费)</div>
            <div class="Themecolor ximirengong flex-ja">
              <i class="iconfont icon-xinxi"></i>人工客服
            </div>
            <div class="flex-a">
              关注小米: <i class="iconfont icon-weibo font24"></i
              ><i class="iconfont icon-weixin font24"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backfa">
      <div class="container1">
        <div class="info wi100 flex">
          <div><img src="../../assets/logp.png" class="login" /></div>
          <div class="flex">
            <div v-for="(item, index) in foot" :key="index">
              <span></span>
              <span></span>
            </div>
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
    return {
      arr: [
        { name: "预约维修服务", icon: "icon-weixiu46" },
        { name: "七天无理由退货", icon: "icon-qitian" },
        { name: "15天免费退换货", icon: "icon-shiwu" },
        { name: "满69元包邮", icon: "icon-liwu" },
        { name: "520余家售后网点", icon: "icon-dingwei" },
      ],
      list: [
        { name: "帮助中心", listItem: ["账户管理", "购物指南", "订单操作"] },
        { name: "服务支持", listItem: ["售后政策", "自助服务", "相关下载"] },
        { name: "线下门店", listItem: ["小米之家", "服务网点", "授权体验店"] },
        {
          name: "关于小米",
          listItem: [
            "了解小米",
            "加入小米",
            "投资者关系",
            "企业社会责任",
            "廣洁举报",
          ],
        },
        {
          name: "关于小米",
          listItem: [
            "关注我们",
            "新浪微博",
            "官方微信",
            "联系我们",
            "公益基金会",
          ],
        },
        {
          name: "特色服务",
          listItem: ["特色服务", "F码通道", "礼物码", "防伪查询"],
        },
      ],
      foot: [
        "小米商城",
        "MIUI",
        " IoT",
        "米家",
        "米聊",
        "多看",
        "游戏",
        "政企服务",
        "小米天猫店",
        "小米集团隐私政策",
        "小米商城用户协议",
        "问题反馈",
        " Select Location",
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  height: 330px;
  margin-top: 10px;
}
.footnav {
  height: 80px;
  border-bottom: 1px solid #e0e0e0;
}
.iconnoe {
  width: 100%;
  border-right: 1px solid #e0e0e0;
}
.iconnoe1 {
  border-right: none;
}
.left {
  width: 975px;
  height: 250px;
  padding: 40px 0;
}
.right {
  width: 250px;
  padding: 40px 0;
}
.nameItem {
  margin: -1px 0 26px;
  font-size: 14px;
  line-height: 1.25;
  color: #424242;
}
.listItem {
  margin: 10px 0 0;
  font-size: 12px;
}
.ximirengong {
  width: 120px;
  height: 30px;
  border: 1px solid #ff6700;
  margin: 10px 0;
}
.rightbox {
  border-left: 1px solid #e0e0e0;
  padding-left: 50px;
}
.container1 {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  height: 260px;
  padding: 30px 0;
  font-size: 12px;
}
.info {
  height: 110px;
}
.login {
  width: 56px;
  height: 56px;
}
</style>
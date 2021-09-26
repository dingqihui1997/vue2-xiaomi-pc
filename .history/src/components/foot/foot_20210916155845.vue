<template>
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
      <div class="left">
        <div v-for="(item, index) in list" :key="index" class="flex1"></div>
      </div>
      <div class="right"></div>
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
</style>
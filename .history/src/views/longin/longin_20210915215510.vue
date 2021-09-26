<template>
  <div class="flex heivh100">
    <div class="left"><img src="../../assets/login.jpg" class="img100" /></div>
    <div class="wi100">
      <div class="heads flex-sba">
        <div class="font20 font-w7 flex-a">
          <img src="../../assets/logp.png" class="imglogo" />小米账号
        </div>
        <div class="flex">
          <div v-for="(item, index) in arr" :key="index" class="rightItem">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="mi-layout__toast"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: ["用户协议", "隐私政策", "帮助中心", "中文(简体)▼"],
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
.left {
  width: 375px;
  height: 100%;
}
.heads {
  height: 80px;
  padding: 20px;
}
.imglogo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.rightItem {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #838383;
}
.mi-layout__toast {
  width: 100%;
  height: 627px;
  padding-top: 20px;
}
</style>
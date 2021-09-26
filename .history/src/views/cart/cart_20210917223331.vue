<template>
  <div class="containerAuto">
    <catr-top></catr-top>
  </div>
</template>

<script>
import CatrTop from "../../components/catrTop/catrTop.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      user: {},
    };
  },
  components: { CatrTop },
  methods: {
    getCart(){
      let 
      this.$api.getCart()
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));

  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
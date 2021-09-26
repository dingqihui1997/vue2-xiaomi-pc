<template>
  <div>
    <heads></heads>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Foot from "../../components/foot/foot.vue";
import Heads from "../../components/heads/heads.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { Heads, Foot },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
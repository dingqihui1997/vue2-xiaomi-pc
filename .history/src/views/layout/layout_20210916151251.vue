<template>
  <div>
    <heads></heads>
    <router-view></router-view>
    <floor></floor>
  </div>
</template>

<script>
import Floor from "../../components/floor/floor.vue";
import Heads from "../../components/heads/heads.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { Heads, Floor },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
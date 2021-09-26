<template>
  <div>
    <!-- <div style="height: 100px"></div> -->
    <category></category>
    <floor></floor>
  </div>
</template>

<script>
import Category from "../components/category/category.vue";
import Floor from "../components/floor/floor.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { Category, Floor },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>

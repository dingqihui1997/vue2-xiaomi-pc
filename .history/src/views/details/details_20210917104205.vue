<template>
  <div>详情</div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return { goodsID: "" };
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.$route.query);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
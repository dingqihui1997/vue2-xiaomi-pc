<template>
  <div>搜索</div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      word: "",
    };
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.$route.query.value);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
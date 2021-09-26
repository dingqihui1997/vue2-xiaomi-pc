<template>
  <div>
    <div class="containerAuto backf5">
      <div></div>
    </div>
  </div>
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
  methods: {
    getsearch(e) {
      this.$api
        .search({ current: 1, pageSize: 99999, query: e })
        .then((res) => {
          console.log(res);
          this.searchList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.word = this.$route.query.value;
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
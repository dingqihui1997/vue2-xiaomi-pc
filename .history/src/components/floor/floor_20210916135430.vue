<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    getcategory() {
      this.$api
        .getCategory()
        .then((res) => {
          console.log(res.data);
          this.category = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getcategory();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  background: springgreen;
}
</style>
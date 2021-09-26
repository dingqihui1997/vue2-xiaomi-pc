<template>
  <div>
    <catr-top></catr-top>
    <div class="containerAuto">
      <!-- <Table border ref="selection" :columns="columns1" :data="goods"></Table> -->
      <!-- <img src="../../assets/icon_close.png" alt="" /> -->
      <div>
        <div class="flex-ja" style="height: 70px">
          <div class="check">
            <Checkbox v-model="checkAll" @on-change="allcheck">全选</Checkbox>
          </div>
          <div class="img"></div>
          <div class="name">商品名称</div>
          <div class="price">单价</div>
          <div class="num">数量</div>
          <div class="total">小计</div>
          <div class="col">操作</div>
        </div>
        <div
          v-for="(item, index) in goods"
          :key="index"
          style="height: 115px; border-top: 1px solid #e0e0e0"
          class="flex-ja"
        >
          <div class="check flex-a">
            <Checkbox
              v-model="item.checked"
              @on-change="handleCheck(item, $event)"
            ></Checkbox>
          </div>
          <div class="img">
            <img :src="item.goods.cover" class="imgcover" />
          </div>
          <div class="name font18">{{ item.goods.name }}</div>
          <div class="price font16">{{ item.goods.presentPrice }}</div>
          <div class="num">
            <InputNumber
              v-model="item.count"
              controls-outside
              :min="1"
              @on-change="edit(item)"
            ></InputNumber>
          </div>
          <div class="total Themecolor font16">
            {{ item.goods.presentPrice * item.count }}元
          </div>
          <div class="col">
            <img src="../../assets/icon_close.png" class="icon_close" />
          </div>
        </div>
      </div>
    </div>
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
      goods: [],
      indeterminate: true,
      checkAll: false,
      checkItem: false,
      columns1: [
        {
          title: "商品名称",
          key: "goods.name",
          render: (h, params) => {
            return "div", [params.row.goods.name];
          },
        },
        {
          title: "商品图片",
          key: "goods",
          render: (h, params) => {
            return h("img", {
              attrs: {
                src: params.row.goods.cover,
              },
              style: {
                width: "80px",
                height: "80px",
              },
            });
          },
        },
        {
          title: "单价",
          key: "goods",
          render: (h, params) => {
            return "div", [`${params.row.goods.presentPrice}元`];
          },
        },
        {
          title: "数量",
          key: "count",
          render: (h, params) => {
            return "div", [params.row.count];
          },
        },
        {
          title: "小计",
          key: "count",
          className: "Themecolor",
          render: (h, params) => {
            return (
              "div", [`${params.row.count * params.row.goods.presentPrice}元`]
            );
          },
        },
        {
          title: "操作",
          key: "params",
          render: (h, params) => {
            return h("img", {
              attrs: {
                src: "../../assets/icon_close.png",
              },
              style: {
                width: "80px",
                height: "80px",
              },
            });
          },
        },
      ],
    };
  },
  components: { CatrTop },
  methods: {
    getCart() {
      this.$api
        .getCart(this.user._id)
        .then((res) => {
          res.data.map((item) => {
            this.$set(item, "checked", false);
          });
          this.goods = res.data;
          console.log(this.goods);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 全选
    allcheck(e) {
      this.goods.map((item) => {
        item.checked = e;
      });
    },
    // 单选
    handleCheck(item, e) {
      this.checkAll = this.goods.every((item) => {
        return item.checked;
      });
    },
    // 修改数量
    edit(item) {
      console.log(item);
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getCart();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.check {
  width: 100px;
  height: 70px;
}
.img {
  width: 120px;
}
.name {
  width: 380px;
}
.price {
  width: 150px;
}
.num {
  width: 200px;
}
.total {
  width: 180px;
}
.col {
  width: 70px;
}
.imgcover {
  width: 80px;
  height: 80px;
}
.icon_close {
  width: 16px;
  height: 16px;
}
</style>
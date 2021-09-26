<template>
  <div>
    <catr-top></catr-top>
    <div class="backf5 padt30">
      <div class="containerAuto">
        <div class="back3f">
          <div class="flex-ja" style="height: 70px">
            <div class="check flex-a">
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
              <img
                :src="item.goods.cover"
                class="imgcover"
                @click="gotodetails(item.goods._id)"
              />
            </div>
            <div class="name font18" @click="gotodetails(item.goods._id)">
              {{ item.goods.name }}
            </div>
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
              <img
                src="../../assets/icon_close.png"
                class="icon_close"
                @click="del(item)"
              />
            </div>
          </div>
        </div>
        <div class="addcart flex-sb">
          <div class="flex-a">
            <div class="color75 next">继续购物</div>
            <div class="margin5">|</div>
            <div>
              共<span class="Themecolor">{{ goods.length }}</span
              >件商品,已选择<span class="Themecolor">{{ num.length }}</span
              >件
            </div>
          </div>
          <div class="flex">
            <div class="Themecolor flex-a">
              合计:&nbsp;<span class="font30"> {{ price }}</span>
            </div>
            <div class="color3f gotobuy flex-ja">
              <Poptip v-model="visible" content="请勾选需要结算的商品">
                去结算
              </Poptip>
            </div>
          </div>
        </div>
        <good-list></good-list>
      </div>
    </div>
  </div>
</template>

<script>
import CatrTop from "../../components/catrTop/catrTop.vue";
import { Message } from "view-design";
import GoodList from "../../components/goodList/goodList.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      user: {},
      goods: [],
      visible: false,
      indeterminate: true,
      checkAll: false,
      checkItem: false,
    };
  },
  components: { CatrTop, GoodList },
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
      this.$api
        .updateCart({
          id: item._id,
          user_id: this.user._id,
          count: item.count,
        })
        .then((res) => {
          if (res.code === 200) {
            Message.success(res.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除
    del(item) {
      this.$api
        .delCart({ user_id: this.user._id, id: item._id })
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            Message.success(res.msg);
            this.getCart();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转详情
    gotodetails(id) {
      this.$emit("send", true);
      this.$router.push({
        path: "/details",
        query: {
          goodsID: id,
        },
      });
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getCart();
  },
  computed: {
    num() {
      let arr = this.goods.filter((item) => {
        return item.checked;
      });
      return arr;
    },
    price() {
      let sum = 0;
      this.goods.map((item) => {
        if (item.checked) {
          sum += item.count * item.goods.presentPrice;
        }
      });
      return sum;
    },
  },

  watch: {
    num(val) {
      if (val.length > 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      console.log(this.visible);
    },
  },
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
.addcart {
  margin-top: 20px;
  height: 50px;
  background-color: #fff;
  -webkit-transition: background 0.3s ease, top 0.3s ease;
  transition: background 0.3s ease, top 0.3s ease;
  box-shadow: 0 -3px 6px rgb(0 0 0 / 10%);
}
.next {
  margin-left: 32px;
}
.gotobuy {
  background: #ff6700;
  width: 200px;
  font-size: 18px;
  margin-left: 50px;
}

.ivu-poptip-content {
  border: 1px solid #ff6700 !important;
}
.btn {
  background: #e0e0e0;
  color: #b0b0b0;
}
</style>
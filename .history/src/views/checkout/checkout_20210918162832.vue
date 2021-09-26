<template>
  <div>
    <catr-top></catr-top>
    <div class="backf5 box">
      <div class="containerAuto back3f container">
        <div class="font18 margin-b10">收货地址</div>
        <div class="flex-w">
          <div v-if="addresList.length > 0" class="flex">
            <div
              class="address"
              @mouseenter="mouseenter"
              @mouseleave="mouseleave"
              v-for="(item, index) in addresList"
              :key="index"
              @click="choiceAddress(item, index)"
              :class="active === index ? 'addressList' : 'address1'"
            >
              <div class="name">
                <div class="font18 margin-b10">{{ item.username }}</div>
                <div>{{ item.mobile }}</div>
                <div>{{ item.address }}</div>
                <div>{{ item.detailAddress }}</div>
              </div>
              <div
                class="Themecolor edit"
                :class="active === index ? 'editblock' : ''"
              >
                修改
              </div>
            </div>
          </div>
          <!-- 新增地址 -->
          <div class="address-item address1 flex-dji color75" @click="add">
            <div>
              <i class="iconfont icon-tianjia font30 color75"></i>
            </div>
            <div>添加新地址</div>
          </div>
        </div>
        <!-- 商品 -->
        <div class="font18">商品及优惠券</div>
        <div v-for="(item, index) in goods" :key="index" class="flex goods">
          <div class="flex2 flex-a">
            <div>
              <img :src="item.goods.cover" class="imgcover" />
            </div>
            <div class="mal5">{{ item.goods.name }}</div>
            <div
              v-for="(item, index1) in item.goods.sku"
              :key="index1"
              class="mal5"
            >
              {{ item.checked }}
            </div>
          </div>
          <div class="flex1 flex-sba">
            <div>{{ `${item.goods.presentPrice}x${item.count}` }}</div>
            <div class="Themecolor">
              {{ item.goods.presentPrice * item.count }}元
            </div>
          </div>
        </div>
        <div class="section flex-a">
          <div class="font20 margin-r55">配送方式</div>
          <div class="Themecolor">包邮</div>
        </div>
        <!-- 总金额 -->
        <div class="miniprice flex-sba">
          <div>
            <div class="flex-ja">
              <i class="iconfont icon-tianjia font28 Themecolor"></i>使用优惠券
            </div>
          </div>
          <div class="" style="width: 150px">
            <div class="flex-sb">
              <div class="flex1">商品件数:</div>
              <div class="Themecolor flex1">4件</div>
            </div>
            <div class="flex">
              <div class="flex1">商品总价:</div>
              <div class="Themecolor flex1">1146元</div>
            </div>
            <div class="flex">
              <div class="flex1">优惠券抵扣:</div>
              <div class="Themecolor flex1">-70</div>
            </div>
            <div class="flex">
              <div class="flex1">商品件数:</div>
              <div class="Themecolor flex1">4件</div>
            </div>
            <div class="flex-ja">
              应付金额<span class="Themecolor font30">1146</span>
            </div>
          </div>
        </div>
      </div>
      <Modal v-model="modal" title="添加收货地址" width="640">
        <Form ref="formInline1" :model="formInline" :rules="ruleInline">
          <div class="flex-ja">
            <FormItem prop="username" class="margin-r20">
              <Input
                type="text"
                v-model="formInline.username"
                placeholder="姓名"
                style="width: 295px"
              >
              </Input>
            </FormItem>
            <FormItem prop="mobile">
              <Input
                v-model="formInline.mobile"
                placeholder="手机号"
                style="width: 295px"
              >
              </Input>
            </FormItem>
          </div>
          <FormItem prop="address1">
            <Cascader
              :data="area"
              v-model="formInline.address1"
              placeholder="请选择省 / 市 / 区"
            ></Cascader>
          </FormItem>
          <FormItem prop="detailAddress">
            <Input
              v-model="formInline.detailAddress"
              type="textarea"
              placeholder="详细地址"
            />
          </FormItem>
          <FormItem prop="descr">
            <Input v-model="formInline.descr" placeholder="地址标签" />
          </FormItem>
        </Form>
        <div slot="footer" class="flex-ja color3f">
          <div class="sure flex-ja mar5" @click="determine">确定</div>
          <div class="cancel flex-ja mal5">取消</div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import CatrTop from "../../components/catrTop/catrTop.vue";
import city from "../../lib/city";
import { Message } from "view-design";

export default {
  name: "",
  props: {},
  data() {
    let lvaliMobile = (rule, value, callback) => {
      if (value) {
        if (
          /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
            value
          )
        ) {
          callback();
        } else {
          return callback(new Error("请输入正确电话"));
        }
      } else {
        return callback(new Error("手机号不能为空"));
      }
    };
    return {
      show: false,
      goods: [],
      modal: false,
      area: city,
      addresList: [],
      active: -1,
      formInline: {
        user_id: JSON.parse(localStorage.getItem("user"))._id,
        username: "",
        mobile: "",
        address: "",
        address1: [],
        isDefault: false,
        descr: "",
        detailAddress: "",
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        mobile: [{ validator: lvaliMobile, trigger: "blur" }],
        address1: [
          {
            transform: (value) => String(value),
            required: true,
            message: "地址不能为空",
            trigger: "blur",
          },
        ],
        detailAddress: [
          {
            required: true,
            message: "详细地址不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: { CatrTop },
  methods: {
    //   选择地址
    choiceAddress(item, index) {
      this.active = index;
      this.show = true;
    },
    //   显示修改按钮
    mouseenter() {
      //   this.show = true;
    },
    mouseleave() {
      //   this.show = false;
    },
    // 新增收货地址
    add() {
      this.modal = true;
    },
    // 确定新增按钮
    determine() {
      this.$refs.formInline1.validate((valid) => {
        if (valid) {
          this.formInline.address = this.formInline.address1.join("");
          this.$api.addAddress(this.formInline).then((res) => {
            console.log(res);
            if (res.code === 200) {
              Message.success(res.msg);
              this.modal = false;
            }
          });
        }
      });
    },
    // 获取地址列表
    getAppAddress() {
      this.$api
        .getAppAddress(JSON.parse(localStorage.getItem("user"))._id)
        .then((res) => {
          this.addresList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.goods = JSON.parse(localStorage.getItem("goods"));
    this.getAppAddress();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  padding: 48px 20px 0 20px;
}
.box {
  padding: 40px 0 60px;
}
.address {
  width: 268px;
  height: 178px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;
  margin-right: 17px;
  margin-bottom: 20px;
}
.address:hover {
  .edit {
    display: block;
  }
}
.name {
  padding: 15px 24px 0;
}
.edit {
  position: absolute;
  right: 24px;
  bottom: 10px;
  display: none;
}
.editblock {
  display: block;
}
.goods {
  height: 60px;
}
.imgcover {
  width: 30px;
  height: 30px;
}
.address-item {
  width: 268px;
  height: 178px;
  cursor: pointer;
  position: relative;
  margin-right: 17px;
  margin-bottom: 20px;
  vertical-align: top;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.sure {
  width: 160px;
  height: 40px;
  background: #ff6700;
}
.cancel {
  width: 160px;
  height: 40px;
  background: #b0b0b0;
}
.addressList {
  border: 1px solid #ff6700;
}
.address1 {
  border: 1px solid #e0e0e0;
}
.section {
  height: 100px;
  padding: 25px 0;
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
}
.miniprice {
  min-height: 200px;
  padding: 20px 0;
  margin: 0 48px;
}
</style>
<template>
  <div>
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
</template>

<script>
import city from "../../lib/city";

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
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
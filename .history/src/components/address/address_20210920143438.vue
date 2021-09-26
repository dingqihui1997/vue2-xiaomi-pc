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
export default {
  name: "",
  props: {},
  data() {
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
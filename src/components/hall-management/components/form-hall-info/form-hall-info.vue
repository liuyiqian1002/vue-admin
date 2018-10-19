<template>
  <div class='form-hall-info'>
    <Row class="hall-list-title"><h4>厅主基础信息</h4></Row>
    <Row>
      <Col span='3'>厅主名称：</Col>
      <col span="6">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </col>
    </Row>
    <Row>
      <Col span='3'>后台账号：</Col>
      <col span="6">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </col>
    </Row>
    <Row>
      <Col span='3'>登录密码：</Col>
      <col span="6">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </col>
    </Row>
    <Row class="hall-list-title"><h4>厅后台信息设置</h4></Row>
    <Row>
      <Col span='3'>后台访问域名1：</Col>
      <col span="6">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </col>
    </Row>
    <Row>
      <Col span='3'>登录LOGO：</Col>
      <col span="6">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </col>
    </Row>
    <Row>
      <Col span='3'>导航LOGO：</Col>
      <col span="6">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </col>
    </Row>
    <Row>
      <Col span='3'>标题LOGO：</Col>
      <col span="6">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </col>
    </Row>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      value: ''
    }
  },
  methods: {}
}
</script>

<style lang="less">
.form-hall-info {
  width: 100%;
  .hall-list-title {
    width: 100%;
  }
}
</style>

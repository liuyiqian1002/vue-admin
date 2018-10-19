<template>
  <div ref="filter-draw" class="filter-draw">
    <Row>
      <Col span='6'>
        厅主：<Select v-model="status" style="width:200px">
                <Option v-for="item in hallList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
      </Col>
      <Col span='6'>
        状态：<Select v-model="status" style="width:200px">
                <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
      </Col>
      <Col span='6'>
        <Button type="primary">查询</Button>
      </Col>
      <Col span='1' offset="4">
        <Button type="primary">新建厅主</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'FilterDraw',
  data () {
    return {
      issueNo: '',
      saleTime: ['2016-01-01', '2016-02-15'],
      statusList: [{value: 111, label: 222}],
      hallList: [{value: 111, label: '蚂蚁娱乐'}, {value: 222, label: '永盛娱乐'}],
      status: 111
    }
  },
  computed: {
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less">
.filter-draw{
  height: 64px;
  line-height: 56px;
  margin-top: 10px;
  i{
    cursor: pointer;
  }
}
</style>

<template>
  <div ref="filter-draw" class="filter-draw">
    <Row>
      <Col span='6'>
        期号：<Input v-model="issueNo" placeholder="Enter something..." style="width: 200px" />
      </Col>
      <Col span='6'>
        销售时间：<DatePicker :value="saleTime" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
      </Col>
      <Col span='6'>
        状态：<Select v-model="status" style="width:200px">
                <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
      </Col>
      <Col span='6'>
        <Button type="primary">查询</Button>
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

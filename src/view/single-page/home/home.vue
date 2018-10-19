<template>
  <div>
    <Table :columns="columns1" :data="data1"></Table>
    <Row :gutter="20">
        <p>home page</p>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow>
          <!-- <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie> -->
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          <!-- <chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量"/> -->
        </Card>
      </i-col>
    </Row>
    <Row>
      <Card shadow>
        <!-- <example style="height: 310px;"/> -->
      </Card>
    </Row>
  </div>
</template>

<script>
// import InforCard from '_c/info-card'
// import CountTo from '_c/count-to'
// import { ChartPie, ChartBar } from '_c/charts'
// import Example from './example.vue'
import { Table } from 'iview'
export default {
  name: 'home',
  components: {
    Table
    // CountTo,
    // ChartPie,
    // ChartBar,
    // Example
  },
  data () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
</style>

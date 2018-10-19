<template>
  <div ref="table-draw">
    <tables ref="tables" editable v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getTableData } from '@/api/data'

export default {
  name: 'TableDraw',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '彩种名称', key: 'name', sortable: true},
        {title: '期号', key: 'email', editable: true},
        {title: '销售时间', key: 'saleTime'},
        {title: '开奖时间', key: 'drawTime'},
        {title: '开奖号码', key: 'result'},
        {title: '销售状态', key: 'saleStaus'},
        {title: '开奖方式', key: 'drawStyle'},
        {title: '开奖进度', key: 'drawProcess'},
        {title: '取消状态', key: 'cancelStatus'},
        {
          title: '操作',
          width: 200,
          align: 'center',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '开奖')
              ])
            }
          ]
        }
      ],
      tableData: []
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
    handleDelete (params) {
      console.log(params)
    }
  },
  mounted () {
    getTableData && getTableData().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style lang="less">
.draw-a-lottery .ivu-tooltip-rel{
  height: 64px;
  line-height: 56px;
  i{
    cursor: pointer;
  }
}
</style>

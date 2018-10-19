<template>
  <div ref="table-draw">
    <tables ref="tables" editable v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getTableDataHall } from '@/api/data'

export default {
  name: 'TableDraw',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '厅主名称', key: 'name', sortable: true},
        {title: '建厅时间', key: 'createAt', editable: true},
        {title: '状态', key: 'status'},
        {title: '收费模式', key: 'chargeMode'},
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
                h('Button', '修改')
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
    getTableDataHall && getTableDataHall().then(res => {
      console.log(res.data)
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

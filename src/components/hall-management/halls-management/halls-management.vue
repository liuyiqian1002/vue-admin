<template>
  <div class="halls-management">
    <FilterDraw></FilterDraw>
    <TableDraw></TableDraw>
    <FormHallInfo></FormHallInfo>
  </div>
</template>

<script>
import FilterDraw from '../components/filter-draw'
import TableDraw from '../components/table-draw'
import FormHallInfo from '../components/form-hall-info'
export default {
  components: {
    FilterDraw,
    TableDraw,
    FormHallInfo
  },
  data () {
    return {
      lotteryData: [
        { name: '幸运28', seedNo: 701 },
        { name: '时时彩', seedNo: 702 },
        { name: '快三', seedNo: 703 },
        { name: '六合彩', seedNo: 704 },
        { name: '11选5', seedNo: 705 }
      ],
      lotteryChildData: [
        { name: 'PC蛋蛋', seedNo: 701 },
        { name: '加拿大28', seedNo: 702 }
      ]
    }
  },
  name: 'drawALottery',
  computed: {
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      // this.$refs.child.$emit('childMethod') // 方法1
      // this.$refs.child.callMethod() // 方法2
      console.log(111)
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.halls-management{
  height: 64px;
  line-height: 56px;
  i{
    cursor: pointer;
  }
}
</style>

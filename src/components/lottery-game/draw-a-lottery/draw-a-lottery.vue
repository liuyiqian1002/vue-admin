<template>
  <div class="draw-a-lottery">
    <RadioLottery :data="lotteryData" @click="click"></RadioLottery>
    <br/>
    <RadioLottery :data="lotteryChildData"></RadioLottery>
    <FilterDraw></FilterDraw>
    <TableDraw></TableDraw>
  </div>
</template>

<script>
import RadioLottery from '../components/radio-lottery'
import FilterDraw from '../components/filter-draw'
import TableDraw from '../components/table-draw'
export default {
  components: {
    RadioLottery,
    FilterDraw,
    TableDraw
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
.draw-a-lottery .ivu-tooltip-rel{
  height: 64px;
  line-height: 56px;
  i{
    cursor: pointer;
  }
}
</style>

<template>
  <div ref="radio-lottery">
    <RadioGroup type="button" v-model="value" @on-change="onChange" value='0'>
       <Radio  v-for="(item) in data" :label="item.name" :key="item.seedNo"></Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  name: 'RadioLottery',
  data () {
    return {
      listData: [],
      value: ''
    }
  },
  computed: {},
  // props: {
  //   data: {
  //     type: Array
  //   }
  // },
  props: ['data'],
  methods: {
    callMethod () {
      console.log('调用成功')
    },
    onChange (value) {
      console.log(value)
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.$on('childMethod', function () {
        console.log('监听成功')
      })
    })
  }
}
</script>

<style lang="less">
.draw-a-lottery .ivu-tooltip-rel {
  height: 64px;
  line-height: 56px;
  i {
    cursor: pointer;
  }
}
</style>

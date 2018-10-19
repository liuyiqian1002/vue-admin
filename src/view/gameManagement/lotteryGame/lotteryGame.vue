<template>
  <div class="split-pane-page-wrapper">
    <Tabs value="name1">
        <TabPane label="开奖管理" name="name1">
          <DrawALottery></DrawALottery>
        </TabPane>
        <TabPane label="销售管理" name="name2">销售管理</TabPane>
        <TabPane label="六合彩彩期管理" name="name3">六合彩彩期管理</TabPane>
        <TabPane label="注单管理" name="name4">注单管理</TabPane>
    </Tabs>
  </div>
</template>

<script>
import DrawALottery from '_c/lottery-game/draw-a-lottery'
import Icons from '_c/icons'
export default {
  name: 'split_pane_page',
  components: {
    DrawALottery,
    Icons
  },
  data () {
    return {
      offset: 0.6,
      offsetVertical: '250px'
    }
  },
  methods: {
    handleMoving (e) {
      console.log(e.atMin, e.atMax)
    }
  }
}
</script>

<style lang="less">
.center-middle{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.split-pane-page-wrapper{
  height: 600px;
  .pane{
    width: 100%;
    height: 100%;
    &.left-pane{
      background: sandybrown;
    }
    &.right-pane{
      background: palevioletred;
    }
    &.top-pane{
      background: sandybrown;
    }
    &.bottom-pane{
      background: palevioletred;
    }
  }
  .custom-trigger{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000000;
    position: absolute;
    .center-middle;
    box-shadow: 0 0 6px 0 rgba(28, 36, 56, 0.4);
    i.trigger-icon{
      .center-middle;
    }
  }
}
</style>

<template>
  <div class='hall-management'>
    <div class="hall-list-title">厅主列表</div>
    <HallManagement></HallManagement>
  </div>
</template>

<script>
import HallManagement from '_c/hall-management/halls-management'
export default {
  components: {
    HallManagement
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
.hall-management{
  width: 100%;
  .hall-list-title{
    width: 100%;
  }
}
</style>

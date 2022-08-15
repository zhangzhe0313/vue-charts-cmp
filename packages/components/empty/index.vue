<template>
  <div class="chart-empty" ref="reverseBar">
    暂无数据
  </div>
</template>

<script>
export default {
  name: 'EmptyData'
}
</script>

<style scoped>
.chart-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 250px;
  opacity: 0.4;
}
</style>
<template>
  <div v-if="source.length > 1" class="chart-wrap" ref="reverseBar"></div>
  <div v-else class="chart-empty" ref="reverseBar">
    暂无数据
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'VccReversebar',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    colors: {
      type: Array,
      default() {
        return ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];
      }
    },
    source: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      chartDom: null,
      reverseChart: null,
      defaultOption: {
        grid: {
          top: 10,
          bottom: 30,
          left: 50,
          right: 50
        },
        xAxis: {
          max: 'dataMax',
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: [],
          animationDuration: 300,
          animationDurationUpdate: 300
        },
        series: [
          {
            realtimeSort: true,
            type: 'bar',
            data: [],
            barWidth: 25,
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              color: 'inherit'
            },
            encode: {
              x: 0,
              y: 3
            }
          }
        ],
        animationDuration: 1000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
      }
    }
  },
  mounted() {
    if (this.source.length > 1) {
      this.init();
    }
  },
  methods: {
    keysData() {
      return this.source && this.source.map(ele => ele.name) || []
    },
    init() {
      const _that = this;

      _that.chartDom = _that.$refs.reverseBar;
      if (_that.chartDom) {
        _that.reverseChart = echarts.init(_that.chartDom, null, {
          renderer: 'canvas'
        });

        _that.defaultOption.yAxis.data = _that.keysData();
        _that.defaultOption.series[0].data = _that.source;

        _that.defaultOption.series[0].itemStyle = {
          color: function (param) {
            return _that.colors[param.dataIndex % _that.colors.length] || '#5470c6';
          }
        };

        _that.reverseChart.resize({height: _that.source.length * 3 * 20 + 20});

        _that.reverseChart.setOption(Object.assign({}, _that.defaultOption, _that.options))
      }
    }
  }
}
</script>

<style>
.chart-wrap {
  width: auto;
  height: 100%;
  min-height: 200px;
}

.chart-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 250px;
  opacity: 0.4;
}
</style>
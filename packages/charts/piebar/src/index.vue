<template>
  <div v-if="source && source.length > 0"  class="chart-wrap" ref="pieBar"></div>
  <empty-data-cmp v-else />
</template>

<script>
import * as echarts from 'echarts';
import EmptyDataCmp from '../../../components/empty/index.vue';
import { composeOptionsSource } from '../../../tools';

export default {
  name: 'VccPiebar',
  components: {
    EmptyDataCmp
  },
  props: {
    source: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
    subTitle: {
      type: String,
      default() {
        return ''
      }
    },
    ring: {
      type: Boolean,
      default() {
        return false
      }
    },
    chartHeight: {
      type: Number,
      default() {
        return 300
      }
    },
    labelled: {
      type: Boolean,
      default() {
        return true
      }
    },
    colors: {
      type: Array,
      default() {
        return ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];
      }
    }
  },
  data(){
    return {
      piebarDom: null,
      piebarChart: null,
      defaultOptions: {
        legend: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            type: 'pie',
            data: [],
            label: {
              show: true,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    composeOptions() {
      const _that = this;

      if (!_that.ring) { // 实心饼图
        _that.defaultOptions.series[0].radius = '50%';
      } else {
        _that.defaultOptions.series[0].radius = ['45%', '60%'];
      }
      _that.defaultOptions.series[0].data = _that.source;
      _that.defaultOptions.series[0].label.show = _that.labelled;

      if (_that.colors.length >= _that.source.length) {
        _that.defaultOptions.series[0].itemStyle = {
          color: function (param) {
            return _that.colors[param.dataIndex % _that.colors.length] || '#5470c6';
          }
        };
      }
    },
    init() {
      this.piebarDom = this.$refs.pieBar;
      if (this.piebarDom) {
        this.piebarChart = echarts.init(this.piebarDom, null, { renderer: 'svg' });

        this.composeOptions();

        this.piebarChart.resize({height: this.chartHeight});

        this.piebarChart.setOption(composeOptionsSource(this.defaultOptions, this.options));
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
</style>
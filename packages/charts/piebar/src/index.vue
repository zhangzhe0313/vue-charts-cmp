<template>
  <div v-if="source && source.length > 0"  class="chart-wrap" ref="pieBar"></div>
  <empty-data-cmp v-else />
</template>

<script>
import * as echarts from 'echarts';
import EmptyDataCmp from '../../../components/empty/index.vue';

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
      if (!this.ring) { // 实心饼图
        this.defaultOptions.series[0].radius = '50%';
      } else {
        this.defaultOptions.series[0].radius = ['45%', '60%'];
      }
      this.defaultOptions.series[0].data = this.source;
      this.defaultOptions.series[0].label.show = this.labelled;
    },
    init() {
      this.piebarDom = this.$refs.pieBar;
      if (this.piebarDom) {
        this.piebarChart = echarts.init(this.piebarDom, null, { renderer: 'canvas' });

        this.composeOptions();

        this.piebarChart.resize({height: this.chartHeight});

        this.piebarChart.setOption(Object.assign({}, this.defaultOptions, this.options));
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
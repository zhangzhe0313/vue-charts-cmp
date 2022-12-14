<template>
  <layout :source="source">
    <div class="chart-wrap" ref="verticalBar"></div>
  </layout>
</template>

<script>
import * as echarts from 'echarts';
import Layout from '../../../components/layout/index.vue';
import { composeOptionsSource } from '../../../tools';
import { markRaw } from 'vue';


export default {
  name: 'VccVerticalbar',
  components: {
    Layout
  },
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    color: {
      type: String,
      default() {
        return '#5470c6'
      }
    },
    source: {
      type: Array,
      default() {
        return [];
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
    }
  },
  data() {
    return {
      verticalDom: null,
      verticalChart: null,
      defaultOptions: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '4%',
          right: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: []
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    composeOptions() {
      const axisData = [];
      const yxisData = [];
      this.defaultOptions.xAxis[0].data = [];
      this.defaultOptions.series = [];

      this.source.forEach(ele => {
        axisData.push(ele.name);
        yxisData.push(ele.value);
      })

      this.defaultOptions.xAxis[0].data = axisData;

      if (this.color.length > 1) {
        this.defaultOptions.series.push({
          type: 'bar',
          barWidth: '25px',
          data: yxisData,
          itemStyle: {
            color: this.color
          }
        })
      } else {
        this.defaultOptions.series.push({ 
          type: 'bar',
          barWidth: '25px',
          data: yxisData
        })
      }
    },
    init() {
      this.verticalDom = this.$refs.verticalBar;
      if (this.verticalDom) {
        this.verticalChart = markRaw(echarts.init(this.verticalDom, null, {renderer: 'svg'}));

        this.composeOptions();
        this.verticalChart.setOption(composeOptionsSource(this.defaultOptions, this.options));
      }
    }
  },
  watch: {
    source: {
      handler() {
        this.composeOptions();
        this.verticalChart.setOption(composeOptionsSource(this.defaultOptions, this.options));
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.chart-wrap {
  width: auto;
  height: 450px;
}
</style>
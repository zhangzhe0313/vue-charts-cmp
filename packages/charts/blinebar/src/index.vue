<template>
  <div v-if="source && source.length > 0" class="chart-wrap" ref="blineBar"></div>
  <empty-data v-else />
</template>

<script>
import * as echarts from 'echarts';
import EmptyData from '../../../components/empty/index.vue';
import { composeOptionsSource } from '../../../tools';
import { markRaw } from 'vue';

export default {
  name: 'VccBlinebar',
  components: {
    EmptyData
  },
  props: {
    source: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default(){
        return ''
      }
    },
    subTitle: {
      type: String,
      default(){
        return ''
      }
    },
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
    }
  },
  data() {
    return {
      chartDom: null,
      blineChart: null,
      defaultOptions: {
        title: {
          text: '',
          subtext: '',
          left: 'left'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: []
        },
        grid: {
          left: '6%',
          right: '4%',
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: []
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    composeData() {
      const _that = this;

      const seriesData = [];
      const xAxisData = _that.source.length > 0 && _that.source[0].data.map(ele => ele.name) || [];
      const kinds = [];

      _that.source.forEach((ele, index) => {
        let values = ele.data.map(inner => inner.value);

        if (_that.colors.length >= _that.source.length ) {
          seriesData.push({
            name: ele.name,
            type: 'line',
            smooth: true,
            data: values,
            itemStyle: {
              color: _that.colors[index % _that.colors.length] || '#5470c6'
            }
          });
        } else {
          seriesData.push({
            name: ele.name,
            type: 'line',
            smooth: true,
            data: values
          });
        }

        kinds.push(ele.name);
      })

      _that.defaultOptions.xAxis.data = xAxisData;
      _that.defaultOptions.series = seriesData;
      _that.defaultOptions.legend.data = kinds;

    },
    init() {
      this.chartDom = this.$refs.blineBar;
      if (this.chartDom) {
        this.blineChart = markRaw(echarts.init(this.chartDom, null, { renderer: 'svg' })); 

        if (this.blineChart) {
          this.composeData();
          this.blineChart.setOption(composeOptionsSource(this.defaultOptions, this.options));
        }
      }
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
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
        return [];
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
      const seriesData = [];
      const xAxisData = this.source.length > 0 && this.source[0].data.map(ele => ele.name) || [];
      const kinds = [];

      this.source.forEach(ele => {
        let values = ele.data.map(inner => inner.value);

        seriesData.push({
          name: ele.name,
          type: 'line',
          smooth: true,
          data: values
        });

        kinds.push(ele.name);
      })

      this.defaultOptions.xAxis.data = xAxisData;
      this.defaultOptions.series = seriesData;
      this.defaultOptions.legend.data = kinds;
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
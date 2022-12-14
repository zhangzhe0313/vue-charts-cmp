<template>
  <layout :source="source">
    <div class="chart-wrap" ref="reverseBar"></div>
  </layout>

</template>

<script>
import * as echarts from 'echarts';
import Layout from '../../../components/layout/index.vue';
import { composeOptionsSource } from '../../../tools';

export default {
  name: 'VccReversebar',
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
      chartDom: null,
      reverseChart: null,
      defaultOption: {
        title: {
          text: null,
          subtext: null,
          left: 'center'
        },
        grid: {
          top: '3%',            
          left: '6%',
          right: '4%',
          bottom: '3%',
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
    composeOptions() {
      const _that = this;

      _that.defaultOption.yAxis.data = [];
      _that.defaultOption.series[0].data = [];

      _that.defaultOption.title.text = this.title;
      _that.defaultOption.title.subtext = this.subTitle;

      _that.defaultOption.yAxis.data = _that.keysData();
      _that.defaultOption.series[0].data = _that.source;

      if (_that.colors.length >= _that.source.length) {
        _that.defaultOption.series[0].itemStyle = {
          color: function (param) {
            return _that.colors[param.dataIndex % _that.colors.length] || '#5470c6';
          }
        };
      }
    },
    init() {
      this.chartDom = this.$refs.reverseBar;
      if (this.chartDom) {
        this.reverseChart = echarts.init(this.chartDom, null, {
          renderer: 'svg'
        });

        this.composeOptions();
        this.reverseChart.resize({height: this.source.length * 3 * 20 + 20});

        this.reverseChart.setOption(composeOptionsSource(this.defaultOption, this.options));
      }
    }
  },
  watch: {
    source: {
      handler() {
        this.composeOptions();
        this.reverseChart.setOption(composeOptionsSource(this.defaultOption, this.options));
      },
      deep: true
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
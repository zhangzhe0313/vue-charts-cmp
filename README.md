# vue-charts-cmp


### 引入文件
```
import XXX from 'vue-charts-cmp/dist/vcc-chart.umd';
import "vue-charts-cmp/dist/vcc-chart.css";
```

### 横向竖状图
```
<vcc-reversebar
      :source="testData"
      :colors="colors"
      :options="options"
      :title="title"
      :subTitle="subTitle"
    />

数据源格式:  
testData=[{name: 'A', value: 20}, {name: 'B', value: 10}]

基色：
colors=['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4','#ea7ccc'] 

图表配置项：
options

图表主标题：
title

图表副标题：
subtitle
```

<template>
  <div id="main4"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main4")); // 指定图表的配置项和数据
    var option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        name: '预警值',
        type: 'gauge',
        progress: {
            show: true
        },
        detail: {
            valueAnimation: true,
            formatter: '{value}'
        },
        data: [{
            value: 23,
            name: 'Normal Value'
        }]
    }]
};
    myChart.setOption(option);
  },
};
</script>

<style>
#main4 {
  width: 50%;
  height: 400px;
  float: right;
}
</style>
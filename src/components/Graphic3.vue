<template>
  <div id="main3"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main3")); // 指定图表的配置项和数据
    var option = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 78212, 'TEST1'],
            [57.1, 38254, 'TEST2'],
            [74.4, 41032, 'TEST3'],
            [50.1, 12755, 'TEST4'],
            [89.7, 20145, 'TEST5'],
        ]
    },
    grid: {containLabel: true},
    xAxis: {name: 'amount'},
    yAxis: {type: 'category'},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
            }
        }
    ]
};
    myChart.setOption(option);
  },
};
</script>

<style>
#main3 {
  width: 50%;
  height: 300px;
  float: left;
}
</style>
<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    let chartDom = document.getElementById("main");
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style>
#main {
  width: 50%;
  height: 50%;
  float: left;
}
</style>
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
        data: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00","14:00","16:00","18:00","20:00","22:00"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224,468, 135, 147, 260,300,542,642,351,245],
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
  height: 400px;
  float: left;
}
</style>
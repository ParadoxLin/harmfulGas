<template>
  <div id="main2"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main2")); // 指定图表的配置项和数据
    var option = {
      title: {
        // text: "年龄比例",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {d}%",
      },
      series: [
        {
          startAngle: "0",
          name: "占比",
          type: "pie",
          radius: "80%",
          data: [
            { value: 20.95, name: "O₂" },
            { value: 77.05, name: "N₂" },
            { value: 1.00, name: "其他" },
            { value: 0.95, name: "粉尘" },
            { value: 0.03, name: "CO₂" },
            { value: 0.02, name: "CH4" },
          ],
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style>
#main2 {
  width: 50%;
  height: 300px;
  float: right;
}
</style>
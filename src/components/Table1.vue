<template>
  <div>
    <el-table :data="tableData">
      <el-table-column
        prop="substation"
        label="分站序号"
        align="center"
      ></el-table-column>
      <el-table-column prop="sensor1" label="O2传感器" align="center">
      </el-table-column>
      <el-table-column prop="sensor2" label="N2传感器" align="center">
      </el-table-column>
      <el-table-column prop="sensor3" label="CO2传感器" align="center">
      </el-table-column>
      <el-table-column prop="sensor4" label="传感器4" align="center">
      </el-table-column>
      <el-table-column prop="sensor5" label="传感器5" align="center">
      </el-table-column>
      <el-table-column prop="sensor6" label="传感器6" align="center">
      </el-table-column>
      <el-table-column prop="sensor7" label="传感器7" align="center">
      </el-table-column>
      <el-table-column prop="sensor8" label="传感器8" align="center">
      </el-table-column>
      <el-table-column prop="sensor9" label="传感器9" align="center">
      </el-table-column>
      <el-table-column prop="sensor10" label="传感器10" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          substation: 1,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 2,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 3,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 4,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 5,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 6,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 7,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 8,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 9,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 10,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 11,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 12,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 13,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 14,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 15,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 16,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 17,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        },
        {
          substation: 18,
          sensor1: "20.8%",
          sensor2: "77.5%",
          sensor3: "0.02%",
          sensor4: "0.35%",
          sensor5: "0.52%",
          sensor6: "1.35%",
          sensor7: "2.47%",
          sensor8: "0.06%",
          sensor9: "2.58%",
          sensor10: "0.03%",
        }
      ]
    }
  }
}
</script>

<style>
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 60px;
  line-height: 60px;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 40px;
  line-height: 40px;
}
</style>
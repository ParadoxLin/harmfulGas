<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="userName" label="姓名" align="center">
      </el-table-column>

      <el-table-column prop="userNum" label="工号" align="center">
      </el-table-column>

      <el-table-column prop="userSex" label="性别" align="center">
      </el-table-column>

      <el-table-column prop="userDepartment" label="部门" align="center">
      </el-table-column>

      <el-table-column prop="userPosition" label="职位" align="center">
      </el-table-column>

      <el-table-column align="center">
        <template slot="header">
          <el-button type="success" @click="addRow()">添加用户</el-button>
        </template>
        <template slot-scope="scope">
        <el-button-group>
          <el-button type="info" icon="el-icon-edit"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click.native.prevent="deleteRow(scope.$index, tableData)"></el-button>
        </el-button-group>
        </template>
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
          userName: '林一',
          userNum: "001",
          userSex: "男",
          userDepartment: "机电部",
          userPosition: "部长"
        },
        {
          userName: '王二',
          userNum: "002",
          userSex: "女",
          userDepartment: "机电部",
          userPosition: "部员"
        },
        {
          userName: '张三',
          userNum: "003",
          userSex: "男",
          userDepartment: "机电部",
          userPosition: "部员"
        },
        {
          userName: '李四',
          userNum: "004",
          userSex: "男",
          userDepartment: "生产部",
          userPosition: "部长"
        },
        {
          userName: '刘五',
          userNum: "005",
          userSex: "男",
          userDepartment: "生产部",
          userPosition: "部员"
        },
        {
          userName: '赵六',
          userNum: "006",
          userSex: "男",
          userDepartment: "生产部",
          userPosition: "部员"
        },
        {
          userName: '蔡七',
          userNum: "007",
          userSex: "女",
          userDepartment: "后勤中心",
          userPosition: "部长"
        },
        {
          userName: '陈八',
          userNum: "008",
          userSex: "女",
          userDepartment: "后勤中心",
          userPosition: "部员"
        },
        {
          userName: '李九',
          userNum: "009",
          userSex: "女",
          userDepartment: "后勤中心",
          userPosition: "部员"
        },
        {
          userName: '程十',
          userNum: "010",
          userSex: "女",
          userDepartment: "后勤中心",
          userPosition: "部员"
        },
      ]
    }
  },
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      addRow(){
        this.tableData.splice(0,0,{});
      }
  },
}
</script>

<style>
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 60px;
  line-height: 80px;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 60px;
  line-height: 60px;
}
</style>
<template>
  <div id="app">
    <el-container>
      <!-- 左侧导航 -->
      <el-aside width="200px">
        <el-menu default-active="1-1" class="el-menu-vertical-demo">
          <!-- 一 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>实时数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="GraphicShow"
                >图形展示</el-menu-item
              >
              <el-menu-item index="1-2" @click="TableShow"
                >表格展示</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 二 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-search"></i>
              <span>数据查询</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click= "MonitoringDataShow">监测数据查询</el-menu-item>
              <el-menu-item index="2-2" @click= "HistoryDataShow">历史数据分析</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 三 -->
          <el-menu-item index="3" @click="reportFormShow">
            <template slot="title">
              <i class="el-icon-s-claim"></i>
              <span>报表查询</span>
            </template>
          </el-menu-item>
          <!-- 四 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>预警管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">预警信息查询</el-menu-item>
              <el-menu-item index="4-2">预警设置</el-menu-item>
              <el-menu-item index="4-3">应急预案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 五 -->
          <el-menu-item index="5">
            <i class="el-icon-user"></i>
            <span slot="title">关于我们</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区 -->
      <el-container>
        <!-- 右侧头部 -->
        <el-header>
          <span
            class="el-icon-s-promotion"
            style="font-size: 30px; color: blue"
          ></span>
          <h2>有害气体检测实时数据</h2>
          <el-button type="primary" class="exit" @click="goBack"
            >退出</el-button
          >
        </el-header>
        <!-- 右侧主体区 -->
        <el-main>
          <router-view></router-view>
            <!-- <router-view name="graphic"></router-view>
            <router-view name="table"></router-view> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:''
    }
  },
  methods: {
    goBack() {
      this.$router.push("/login");
    },
    GraphicShow() {
      this.$router.push('/index/graphic');
    },
    TableShow() {
      this.$router.push('/index/table');
    },
    MonitoringDataShow() {
      this.$router.push('/index/monitoringdata');
    },
    HistoryDataShow(){
      this.$router.push('/index/historydata');
    },
    reportFormShow(){
      this.$router.push('/index/reportform');
    }
  },
};
</script>

<style lang='less'>
body {
  margin: 0;
  padding: 0;
  background-color: white;
}
.el-container {
  height: 800px;
}

.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  h2 {
    margin: 0 1100px 0 0;
    color: #1589f5;
  }
  .el-icon-s-promotion {
    padding-top: 15px;
  }
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 800px;
  .el-submenu__title {
    height: 60px;
  }
}
.el-main {
  margin: 0px;
  padding: 0px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

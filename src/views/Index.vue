<template>
  <div id="app">
    <el-container>
      <!-- 左侧导航 -->
      <el-aside width="200px">
        <el-menu default-active="1-1" class="el-menu-vertical-demo">
          <!-- 一、实时数据模块 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>实时数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click= "graphicShow"
                >图形展示</el-menu-item
              >
              <el-menu-item index="1-2" @click= "tableShow"
                >表格展示</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 二、数据查询模块 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-search"></i>
              <span>数据查询</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click= "monitoringDataShow">监测数据查询</el-menu-item>
              <el-menu-item index="2-2" @click= "historyDataShow">历史数据分析</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 三、报表查询模块 -->
          <el-menu-item index="3" @click="reportFormShow">
            <template slot="title">
              <i class="el-icon-s-claim"></i>
              <span>报表查询</span>
            </template>
          </el-menu-item>
          <!-- 四、预警管理模块 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>预警管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" @click= "alertShow1">预警信息查询</el-menu-item>
              <el-menu-item index="4-2" @click= "alertShow2">预警设置</el-menu-item>
              <el-menu-item index="4-3" @click= "alertShow3">应急预案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 五、设备管理模块 -->
          <el-menu-item index="5">
            <template slot="title">
              <i class="el-icon-cpu"></i>
              <span @click= "deviceManagement">设备管理</span>
            </template>
          </el-menu-item>
          <!-- 六、设备查询分析模块 -->
          <el-menu-item index="6">
            <template slot="title">
              <i class="el-icon-data-analysis"></i>
              <span @click= "deviceQuery">设备查询分析</span>
            </template>
          </el-menu-item>
          <!-- 七、系统管理模块 -->
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1" @click= "userSetting">用户管理</el-menu-item>
              <el-menu-item index="7-2" @click= "departmentSetting">部门管理</el-menu-item>
              <el-menu-item index="7-3" @click= "authoritySetting">权限管理</el-menu-item>
              <el-menu-item index="7-4" @click= "help">帮助</el-menu-item>
              <el-menu-item index="7-5" @click= "aboutUs">关于我们</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


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
          <h2>有害气体检测系统</h2>
          <el-button type="primary" class="exit" @click="goBack">退出</el-button>
        </el-header>
        <!-- 右侧主体区 -->
        <el-main>
          <router-view></router-view>
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
    graphicShow() {
      this.$router.push('/index/graphic');
    },
    tableShow() {
      this.$router.push('/index/table');
    },
    monitoringDataShow() {
      this.$router.push('/index/monitoringdata');
    },
    historyDataShow(){
      this.$router.push('/index/historydata');
    },
    reportFormShow(){
      this.$router.push('/index/reportform');
    },
    alertShow1(){
      this.$router.push('/index/alertinfo');
    },
    alertShow2(){
      this.$router.push('/index/alertsetting');
    },
    alertShow3(){
      this.$router.push('/index/emergencyplan');
    },
    deviceManagement(){
      this.$router.push('/index/devicemanagement');
    },
    deviceQuery(){
      this.$router.push('/index/devicequery');
    },
    userSetting(){
      this.$router.push('/index/usersetting');
    },
    departmentSetting(){
      this.$router.push('/index/departmentsetting');
    },
    authoritySetting(){
      this.$router.push('/index/authoritysetting');
    },
    help(){
      this.$router.push('/index/help');
    },
    aboutUs(){
      this.$router.push('/index/aboutus');
    },
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
    margin: 0 1153px 0 0;
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

.el-menu-item, .el-submenu__title{
  text-align: left;
  margin-left: 15px;
}
</style>

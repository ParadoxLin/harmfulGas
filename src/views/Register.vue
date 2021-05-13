<template>
  <div class = "register">
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="账号">
      <el-input v-model="form.user"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="工号">
      <el-input v-model="form.number"></el-input>
    </el-form-item>
    <el-form-item label="部门">
      <el-select v-model="form.region" placeholder="请选择您的部门" id="department_inner">
        <el-option label="部门一" value="1">部门一</el-option>
        <el-option label="部门二" value="2">部门二</el-option>
        <el-option label="部门三" value="3">部门三</el-option>
        <el-option label="部门四" value="4">部门四</el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
        <el-button type="" @click="registerCancel()">取消</el-button>
        <el-button type="primary" @click="registerOK()">确定</el-button>
      </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{}
    }
  },
  methods:{
    registerCancel(){
      this.$router.push('/login');  
    },
    registerOK(){
      this.$router.push('/login');  
    },
  }
};
</script>

<style lang='less'>
html{
  background-color: #34495e;
}
body{
  margin: 0;
  padding: 0;
  // background-image:url('../assets/bg.jpg');
  .register{
    text-align: center; /*让div内部文字居中*/
    border: solid 2px lightblue;
    border-radius: 20px ;
    width: 700px;
    height: 500px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    h1{
      color: white;
    }
  }
  .el-form{
    margin-top: 53px;
  }
  .el-form-item__label{
    color: white;
  }
  .el-form-item{
      color: white;
      margin-top: 30px;
  }
  .el-input__inner{
    width: 400px;
  }
}
</style>
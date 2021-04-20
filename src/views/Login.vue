<template>
  <div class="login">
    <h1>有害气体检测管理系统</h1>
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="密 码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

       <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ruleForm: {
          name:'',
          password:''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    login(){
      this.$router.push('/index');  
    }
  }
}
</script>

<style lang='less'>
html{
  background-color: #34495e;
}
body{
  margin: 0;
  padding: 0;
  // background-image:url('../assets/bg.jpg');
  .login{
    text-align: center; /*让div内部文字居中*/
    border: solid 2px lightblue;
    border-radius: 20px ;
    width: 800px;
    height: 300px;
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

  .el-form-item__label{
      color: white;
  }
  .el-input__inner{
    width: 90%;
  }
  .el-form-item__content{
    margin-right: 100px;
  }
  .el-form-item__error{
    left: 30px;
    color: lightblue;
  }
}
  
</style>
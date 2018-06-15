<template>
<div class="ht-page-content-wrap">
  <div class="banner">
	  登录入口
	</div>
  <el-card class="box-card">
    	<div slot="header" class="title">
				用户登录
			</div>
			<el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="90px">
				<el-form-item label="账号" prop="username">
					<el-input type="text" v-model="loginForm.username" placeholder="请输入账号" style="width: 84%;" @keyup.enter.native="handleSubmit"></el-input>
				</el-form-item>

				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="loginForm.password" placeholder="请输入密码" style="width: 84%;" @keyup.enter.native="handleSubmit"></el-input>
				</el-form-item>
				<div class="remember">
					<el-checkbox v-model="loginForm.remember">记住我</el-checkbox>
				</div>
				<el-form-item class="submitBtn">
					<el-button type="primary" size="large" @click="handleSubmit">登录</el-button>
				</el-form-item>
			</el-form>
  </el-card>
</div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      loginForm:{
        username:'',
        password:'',
        remember:''
      },
      rules:{

      }
    }
  },
  methods:{
    handleSubmit(){
      var userData ={
        name:this.loginForm.username,
        password:this.loginForm.password
      }
      this.$http({
        url:'/api/login',
        method:'post',
        data:userData
      })
      .then(res=>{
        console.log(res,'userData')
        if(res.data.code === 9000){
          axios.defaults.headers.common['acessToken'] = res.data.accessToken;
          localStorage.setItem('name',res.data.account)        
          this.$router.push({path:'/'})  
        }else{
          this.$message({
            type:'warn',
            message:res.message
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
	.banner {
		font-size: 60px;
		text-align: center;
		padding-top: 100px;
	}
	.box-card {
		margin: 0px auto;
		margin-top: 100px;
		width: 480px;
  }
  
  	.title {
		text-align: center;
		font-size: 20px;
	}
	
	.submitBtn {
		margin: 0px;
		margin-top: 10px;
	}
	.submitBtn button {
		width: 84%;
	}
	.remember {
		padding-left: 90px;
	}
	
</style>
<style>
.ht-page-content-wrap{
  width:100%;
  height: 100%;
  background: cyan;
  min-width: 1010px;
}
</style>




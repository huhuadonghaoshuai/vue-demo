<template>
  <ht-dialog ref="dialog" @confirm="handleConfirm" :confirm-label="confirmLabel" :title="title" size="small">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
      <el-form-item label="客户编号" prop="custNum">
        <el-row>
          <el-col :span="24">
            <el-input v-model="ruleForm.custNum"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="客户名称" prop="custName">
        <el-row>
          <el-col :span="24">
            <el-input v-model="ruleForm.custName"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="产品名称" prop="proName">
        <el-row>
          <el-col :span="24">
            <el-input v-model="ruleForm.proName"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="进件方式" prop="otherWay">
        <el-row>
          <el-col :span="24">
            <el-input v-model="ruleForm.otherWay"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </ht-dialog>
</template>
<script>
  export default{
    data(){
      return{
        title:'编辑任务',
        confirmLabel:'确定',
        ruleForm:{
          custNum:'',
          custName:'',
          proName:'',
          otherWay:''
        },
        rules:{
           custNum:{ required: true, message: '请输入客户编号', trigger: 'blur' },
           custName:{ required: true, message: '请输入客户名称', trigger: 'blur' },
           proName:{ required: true, message: '请输入产品名称', trigger: 'blur' },
           otherWay:{ required: true, message: '请输入进件方式', trigger: 'blur' },           
        }
      }
    },
    methods:{
      show(){
        this.$refs.dialog.show()
      },
      handleConfirm(){
        console.log('保存')
      }
    }
  }
</script>

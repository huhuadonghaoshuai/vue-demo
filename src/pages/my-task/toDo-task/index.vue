<template>
  <ht-page title="已办任务">
    <ht-control-bar>
      <el-input v-model="ruleForm.creditNum" placeholder="额度编号" class="search-input-condition"></el-input>
      <el-input v-model="ruleForm.custNum" placeholder="客户编号" class="search-input-condition"></el-input> 
      <el-button round type="primary" @click="search">搜索</el-button>   
      <el-button round type="primary" @click="reset">重置</el-button>             
    </ht-control-bar>
    <div class="ht-paged-table-wrap" style="margin-top:10px">
      <el-table ref="htTable" class="table-demo" :data="tableData">
        <el-table-column prop="creditNum" label="额度编号" align="center"></el-table-column>
        <el-table-column prop="custNum" label="客户编号" align="center"></el-table-column>
        <el-table-column prop="custName" label="客户名称" align="center"></el-table-column>  
        <el-table-column prop="proName" label="产品明称" align="center"></el-table-column>   
        <el-table-column prop="otherWay" label="进件方式" align="center"></el-table-column>  
         <el-table-column label="操作" align="center">                  
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
              <i class="el-icon-edit" @click="handleEdit(scope)" style="margin-right:10px;"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">            
              <i class="el-icon-delete" @click="handleDelete(scope)"></i>
            </el-tooltip>
          </template>
        </el-table-column>                                                           
      </el-table>
    </div>
  </ht-page>
</template>
<script>
export default {
  data(){
    return{
      ruleForm:{
        creditNum:'',
        custNum:''
      },
      tableData:[],
    }
  },
  methods:{
    handleGetPageination(param){
      this.$http({
        url:'/api/toDo-list',
        params:param?param:{}
      })
      .then(res=>{
        console.log(res,'res')
        this.tableData = res.data.content
        console.log(this.tableData,31)
      })
      .catch(console.log.bind(console))
    },
    search(){
      this.handleGetPageination(this.ruleForm)
    },
    reset(){
      for(var k in this.ruleForm){
        this.ruleForm[k] = ''
      }
    },
    handleEdit(){
      
    },
    handleDelete(){

    }
  },
  beforeMount(){
    this.handleGetPageination()
  }
}
</script>
<style lang="less">
  .ht-paged-table-wrap{
    background: white;
    border: solid 1px #ddd;
  }
</style>



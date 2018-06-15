<template>
  <el-container>
    <el-header>
      <div class="align-right"> 
        <div class="company-name"> 
          喜之郎科技有限公司
        </div>   
        <el-dropdown>
          <span class="el-dropdown-link">
            你好,{{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  <el-container>
    <el-aside width="220px">
      <ht-menu :menus="menus" router unique-opened></ht-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  </el-container>
</template>
<script>
import menuConfig from '@/components/menuConfig';
import htMenu from '@/components/ht_menu';
export default {
  components:{
    htMenu
  },
  data(){
    return{
      menus:menuConfig,
      userName:''
    }
  },
  methods:{
    logOut(){
      console.log('out')
      this.$router.push({
        path:'/login'
      })
    }
  },
  beforeMount(){
    this.userName = localStorage.getItem('name')
  }
}
</script>
<style>
  
</style>
<style lang="less">
html,
body,
.el-container {
  height: 100%;
}
.el-header {
  background-color: cyan;
  color: #333;
  // text-align: center;
  line-height: 60px;
}

.el-dropdown{
  font-size: 20px;
}

.el-header .align-right{
  text-align: right;
}

.company-name{
  display: inline-block;
  position: absolute;
  left:20px;
  font-size: 20px;
  color:red;
}

.el-aside {
  background-color:rgb(46, 46, 60);
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #F7F8FC;
  color: #333;
  width: calc(90% - 200);
  min-width: 1000px;
}
.el-menu-vertical{
  text-align: left;
}
.el-menu .el-submenu .el-submenu__title{
  text-align: left;
}
body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}
.el-menu-item.is-active {
  background-color: #252734 !important;
  color: #fff !important;
}
</style>



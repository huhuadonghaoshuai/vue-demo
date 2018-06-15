<template>
  <div class="control-bar-wrap">    
    <div class="content-wrap">
      <slot></slot>
    </div>
    <div class="slot-center">
      <slot name="center"></slot>
    </div>
    <div class="slot-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>  
  .control-bar-wrap {     
    color: gray;    
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .search-input-condition {
      width: 200px;
    }
  }
</style>
<style lang="less">
  .control-bar-wrap {
    input {      
      border-style: none;      
      background: #EBECF2;
    }

    .el-input, .el-select {
      margin-right: 5px;
    }

    .content-wrap>span {
      margin-right: 5px;
    }
  }
</style>


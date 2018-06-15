<template>
  <div>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage() }}"</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:'hi'
    }
  },
  // computed:{
  //   reversedMessage:function(){
  //     return this.message.split('').reverse().join('')
  //   }
  // },
  methods:{
    reversedMessage(){
      return this.message.split('').reverse().join('')
    }
  },

}
</script>
<style lang="less">

</style>



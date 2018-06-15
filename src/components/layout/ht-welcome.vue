<template>
	<div class="page-content-wrap flex-center">
		<div>
			<img src="/static/img/logo-welcome.jpg" width=400>
			<div class="title">{{title}}</div>	
		</div>
	</div>
</template>

<script>
  export default {
    props: ['title'],
    data() {
      return {}
    },
    methods: {},
}
</script>

<style lang="less" scoped="scoped">
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-content-wrap {
  width: 100%;
  min-width: 1010px;
  height: 100%;
  background: #fff;
  overflow: auto;
  box-sizing: border-box;
  /* 页面组件index.vue下的页面的标题, 没有tabs的标题用这个样式，标题右端也可以放按钮 */
}
.title {
  font-size: 30px;
  text-align: center;
}
.current {
  margin-top: 20px;
  width: 400px;
  text-align: center;
  span {
    background: orange;
    border-radius: 20px;
    padding: 1px 10px;
    color: #eee;
  }
}
</style>
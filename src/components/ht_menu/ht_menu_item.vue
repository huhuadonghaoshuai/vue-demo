<template>
	<div>
		<template v-for="menu in menus">
			<template v-if="!menu.children">
				<el-menu-item :index="menu.path" :disabled="menu.disabled" :key="menu.path"><i class="icon-dot" :style="{background: menu.dotColor || '#3b8eda'}"></i>{{menu.title}}</el-menu-item>
			</template>
			<template v-else>
				<el-submenu :index="menu.path" :disabled="menu.disabled" :key="menu.path">
					<template slot="title"><i class="icon-circle" :style="{borderColor: menu.circleColor || '#3b8eda'}"></i>{{menu.title}}</template>
					<ht-menu-item :menus="menu.children"></ht-menu-item>
				</el-submenu>
			</template>
		</template>
	</div>
</template>

<script>
	export default {
		name: "ht-menu-item",
		props: ["menus"]
	}
</script>

<style scoped>
	.icon-circle {
		display: inline-block;
		border-style: solid;
		border-width: 2px;
		width: 12px;
		height: 12px;
		border-radius: 12px;
		margin-top: -1px;
		margin-right: 10px;
	}
	
	.icon-dot {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 6px;
		margin-top: -1px;
		margin-right: 10px;
		opacity: 0.5;
	}
	
	.is-active > .icon-dot {
		opacity: 1;
	}
</style>
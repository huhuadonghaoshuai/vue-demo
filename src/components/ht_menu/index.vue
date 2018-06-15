<template>
	<el-menu
		class="el-menu-vertical-demo"
		:mode="mode"
		:background-color="backgroundColor"
		:textColor="textColor"
		:activeTextColor="activeTextColor"
		:router="router"
		:unique-opened="uniqueOpened"
		@select="handleSelect"
		@open="handleOpen"
		@close="handleClose"
		>
		<ht-menu-item :menus="menus"></ht-menu-item>
	</el-menu>
</template>

<script>
	import HtMenuItem from "./ht_menu_item.vue"
	export default {
		props: {
			menus: {
				type: Array,
				required: true,
				validator(value){
					var pass = true
					function valid(menus){
						for(var i = 0; i < menus.length; i++){
							if(!menus[i].title || !menus[i].path) return pass = false
							if(menus[i].children) valid(menus[i].children)
						}
					}
					valid(value)
					return pass
				}
			},
			mode: {
				type: String,
				default: "vertical"
			},
			router: {
				type: Boolean,
				default: false
			},
			uniqueOpened: {
				type: Boolean,
				default: false
			},
			backgroundColor: {
				type: String,
				default: "#2e2e3c"
			},
			textColor: {
				type: String,
				default: "#aaa"
			},
			activeTextColor: {
				type: String,
				default: "#fff"
			}
		},
		components: {
			HtMenuItem
		},
		methods: {
			handleSelect(index, indexPath){
				this.$emit("select", index, indexPath)
			},
			handleOpen(index, indexPath){
				this.$emit("open", index, indexPath)
			},
			handleClose(index, indexPath){
				this.$emit("close", index, indexPath)
			}
		}
	}
</script>

<style>
	.el-menu {
		height: 100%;
		border-radius: 0px;
		background-color: #333744;
		overflow: auto;
	}
	.el-submenu.is-opened .el-submenu__title {
		color: #fff !important;
	}
	.el-menu-item.is-active {
		background-color: #252734 !important;
	}
</style>
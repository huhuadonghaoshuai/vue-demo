<template>
	<div>
		<transition name="el-fade-in">
			<div v-if="showSkeleton" :style="{height: height, background: bgColor}"></div>
			<slot v-else></slot>
		</transition>
	</div>
</template>

<script>
	export default {
		props: {
			height: {
				type: String,
				default: "300px"
			},
			bgColor: {
				type: String,
				default: "#f5f5f5"
			}
		},
		data() {
			return {
				showSkeleton: true
			}
		},
		methods: {
			ele() {
				return this.$el.getBoundingClientRect()
			},
			isRender() {
				if(this.ele().top < window.innerHeight) {
					this.showSkeleton = false
				}
			},
			scrollHandler(e) {
				if(this.showSkeleton) return this.isRender()
				window.removeEventListener("scroll", this.scrollHandler, true)
			}
		},
		mounted() {
			this.isRender()
			if(window.addEventListener) {
				window.addEventListener("scroll", this.scrollHandler, true)
			}else {
				this.showSkeleton = false
			}
		}
	}
</script>

<style>

</style>
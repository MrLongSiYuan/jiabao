<template>
	<div class="page-cover"  v-show="coverShow" v-on:click="hideMenu"></div>
	<div class="header">
		<span class="logo">佳保保险</span>
		<span class="left-menu" v-on:click="showMenu"></span>
	</div>
	<nv-menu :showm="menuShow"></nv-menu>
</template>
<script>
	export default {
		data : function() {
			return {
				coverShow : false,
				menuShow : false
			}
		},
		methods : {
			showMenu : function() {
				this.coverShow = true;
				this.menuShow = true;
			},
			hideMenu : function() {
				this.coverShow = false;
				this.menuShow = false;
			}

		},
		components : {
            'nv-menu' : require('./menu.vue')
        }
	}
</script>
<style lang="sass">
	.page-cover {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		z-index: 98;
	}
	.header {
		position: fixed;
		top : 0px;
		width: 100%;
		height: 0.9rem;
		top: 0px;
		left: 0px;
		background: #fff;
		z-index: 10;
		.logo{
			width:40%;
			height:0.45rem;
			position:absolute;
			top: 0.23rem;
			left:2.4rem;
			box-sizing: border-box;
			padding-left: 0.66rem;
			font-size: 0.34rem;
			color: #4a4a4a;
			line-height: 0.45rem;
			/*background:url('../img/logo.png') no-repeat left center;*/
			/*background-size: 0.55rem 0.45rem;*/
		}
		.left-menu {
			position: absolute;
			width: 0.42rem;
			height: 0.44rem;
			top: 0.23rem;
			left: 0.35rem;
			background: url('../img/rentou.png') no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
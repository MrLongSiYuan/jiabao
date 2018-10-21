<template>
	<nv-header></nv-header>
	<div class="about">
		<img src="../img/APPlogo.png" alt="">
		<h2>E佳保</h2>
		<p>
			<a href="http://www.tou360.com">深圳市投360科技有限公司</a>
		</p>
	</div>
</template>
<script>
	import store from '../vuex/store';
	import nvHeader from '../components/header.vue';
	export default {
		ready : function(){

		},
		components : {
			'nv-header' : nvHeader
		},
		store : store
	}
</script>
<style lang="sass">
	.about {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		margin: auto;
		width: 100%;
		height: 200px;
		img {
			display: block;
			width: 100px;
			height: 100px;
			border-radius: 50px;
			margin: 0 auto;
		}
		h2 {
			width: 100%;
			height: 50px;
			font-size: 20px;
			text-align: center;
			line-height: 50px;
		}
		p {
			width: 100%;
			height: 30px;
			text-align: center;
			line-height: 30px;
		}
	}
</style>
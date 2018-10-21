<template>
	<div class="return-top" v-show="showTop" v-on:click="returnTop"></div>
</template>
<script>
	export default {
		data : function() {
			return {
				showTop : false
			}
		},
		ready : function() {
			$(window).on('scroll', () => {
				if($(window).scrollTop() > 150){
					this.showTop = true;
				}else{
					this.showTop = false;
				}	
			})
		},
		methods : {
			returnTop : function() {
				$(window).scrollTop(0);
				this.showTop = false;
			}
		}
	}
</script>
<style lang="sass">
	.return-top {
		position: fixed;
		width: 0.7rem;
		height: 0.7rem;
		right: 15px;
		bottom: 2rem;
		background: #e1e1e1 url('../img/returnTop.png') no-repeat;
		background-size: 0.7rem 0.7rem;
		border-radius: 0.7rem;
		z-index: 9;
	}
</style>
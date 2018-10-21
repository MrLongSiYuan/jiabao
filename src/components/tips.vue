<template>
	<div v-if="tipsShow" class="tips-con">{{tipContent}}</div>
</template>
<script>
	import {setTipShow, setTipContent} from '../vuex/actions';
	import {getTipShow, getTipContent} from '../vuex/getters';
	export default {
		methods : {
			isHide : function() {
				this.setTipShow(false);
				this.setTipContent('');
			}
		},
		vuex : {
			actions : {
				setTipShow : setTipShow,
				setTipContent : setTipContent
			},
			getters : {
				tipShow : getTipShow,
				tipContent : getTipContent
			}
		}

	}
</script>
<style>
	.tips-con {
		width: 4.8rem;
		height:0.8rem;
		position: absolute;
		top:0;
		right:0;
		left:0;
		bottom:0;
		margin:auto;
		z-index: 5000;
		background:rgba(64,64,64,0.7);
		font-size:0.28rem;
		text-align:center;
		line-height:0.8rem;
		color:white;
		border-radius:8px;
		-webkit-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
		transition-property: transform,opacity,-webkit-transform!important;
	}
	.tips-con-transition {
		opacity: 1;
		webkit-transition-duration: .4s;
		transition-duration: .4s;
	}
	.tips-leave {
		opacity : 0;
	}
</style>
<template>
	<div class="loading">
		<div class="dropload-refresh" v-show="loaddata.showRefresh">↑&nbsp;上拉加载更多</div>
		<div class="dropload-load" v-show="loaddata.showLoad"><span class="loading"></span>加载中...</div>
		<div class="dropload-noData" v-show="loaddata.showNoData">没有更多了~</div>	
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['loaddata'],
		data:function(){
			return{
				 
			}
		},
		ready:function(){
			// console.log(this.loaddata)
		}
	}
</script>
<style type="text/css">
	.dropload-refresh,.dropload-update,.dropload-load,.dropload-noData{
	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	    font-size: 14px;
	    color: #404040;
	    background: #fff;
	    border-top: 1px solid #f3f3f3;
	}
	.dropload-load .loading{
	    display: inline-block;
	    height: 15px;
	    width: 15px;
	    border-radius: 100%;
	    margin: 6px;
	    border: 2px solid #666;
	    border-bottom-color: transparent;
	    vertical-align: middle;
	    -webkit-animation: rotate 0.75s linear infinite;
	    animation: rotate 0.75s linear infinite;
	}
	@-webkit-keyframes rotate {
	    0% {
	        -webkit-transform: rotate(0deg);
	    }
	    50% {
	        -webkit-transform: rotate(180deg);
	    }
	    100% {
	        -webkit-transform: rotate(360deg);
	    }
	}
	@keyframes rotate {
	    0% {
	        transform: rotate(0deg);
	    }
	    50% {
	        transform: rotate(180deg);
	    }
	    100% {
	        transform: rotate(360deg);
	    }
	}
</style>
<template>
	<div class="swiper-container1">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" v-for="imgInfor in imgInfors"><a v-bind:href="imgInfor.linkUrl"><img v-bind:src="imgInfor.imgUrl"></a></div>
	    <!-- <div class="swiper-slide">slider2</div>
	    <div class="swiper-slide">slider3</div> -->
	  </div>
	  <div class="swiper-pagination"></div>
	</div>
</template>
<script type="text/javascript">
	var Swiper = require('swiper');
	import store from '../vuex/store';
	export default{
		data:function(){
			return {
				imgInfors:[],
			}
		},
		ready:function(){
			this.getBannerData();
		},
		watch: {
		    imgInfors: function () {
		        this.swiperInit();
		    }
		},
		methods:{
			getBannerData:function(){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"indexbanner",
					cache:false,
					data:{
					},
					complete:function(status){
						// console.log("complete")
					},
					error:function(){
						// console.log("error")
					},
					success:(res)=>{
						var res = eval(res);
						for(let i=0;i<res.data.list.length;i++){
							let linkUrl = res.data.list[i].linkUrl;
							if(linkUrl.split("?")[1]){
								res.data.list[i].linkUrl = res.data.list[i].linkUrl+"&tag=outer"
							}else{
								res.data.list[i].linkUrl = res.data.list[i].linkUrl+"?tag=outer"
							}
						}
						this.imgInfors = res.data.list;
					}
				});	
			},
			swiperInit:function(){
				var mySwiper1 = new Swiper('.swiper-container1', {
					pagination: '.swiper-pagination',
					paginationClickable :true,
					paginationElement : 'span',
					autoplayDisableOnInteraction : true,
					direction : 'horizontal',
					paginationClickable :false,
					autoplay : 2000,
					touchRatio : 2,
					speed:1000,
					loop:true,
				})
			}
		},
		store : store
	}
</script>
<style type="text/css" lang="sass">
	@import '../css/swiper.css';
	.swiper-container1{
		width:100%;
		height:2.8rem;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		overflow: hidden;
		/* Fix of Webkit flickering */
		z-index: 1;
		.swiper-pagination{
			position:absolute;
			width: 100%;
			height: 0rem;
			line-height: 0.1rem;
			bottom: 0.9rem;
		}
		.swiper-wrapper{
			.swiper-slide a{
				display: block;
				width:100%;
				height:100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
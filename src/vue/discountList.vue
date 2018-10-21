<template>
	<div class="discount-list">
		<div class="discount-header">
			<div class="goback-Btn" v-link="{name:'artlist'}"></div>
			优惠秒购
		</div>
		<div class="discount-box">
			<div class="discount-content" v-for="discountList in discountLists">
				<a v-bind:href="discountList.linkUrl"><img v-bind:src="discountList.listImg" v-bind:alt="discountList.title"></a>
				<div class="discount-describe">{{discountList.title}}</div>
			</div>
			<loading v-bind:loaddata="loaddata"></loading>
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store';
	import loading from '../components/loading.vue';
	export default{
		data:function(){
			return {
				discountLists:[],
				loaddata:{
					showRefresh:false,
					showLoad:true,
					showNoData:false,
				},
				pageNo:1,
				noMoreData:false,
			}
		},
		ready:function(){
			this.getDiscountListData();
			$(window).on('scroll',() => {
                this.scrollDislist();
            });
		},
		methods:{
			getDiscountListData:function(){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"discountlist",
					cache:false,
					data:{
						pageNo:this.pageNo,
					},
					complete:function(status){
						// console.log("complete")
					},
					error:function(){
						// console.log("error")
					},
					success:(res)=>{
						var res = eval(res);
						// console.log(res)
						if(res.data){
							if(res.data.list) {
								this.discountLists = this.discountLists.concat(res.data.list);
								this.pageNo++;	
							};
							this.scroll = true;
							if(res.data.lastPage){
								this.noMoreData = true;
								this.loaddata.showRefresh = false;
								this.loaddata.showLoad = false;
								this.loaddata.showNoData = true;
							}else{
								this.loaddata.showRefresh = true;
								this.loaddata.showLoad = false;
								this.loaddata.showNoData = false;
							}
						}else{
							this.noMoreData = true;
							this.loaddata.showRefresh = false;
							this.loaddata.showLoad = false;
							this.loaddata.showNoData = true;	
						}
					}
				});	
			},
			scrollDislist:function(){
				if(this.scroll){
					let totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
					// console.log($(window).height())
					// console.log($(window).scrollTop())
					// console.log($(document).height())
	          		if (($(document).height() <= totalheight)&&(!this.noMoreData)) {
	                    this.scroll = false;
	                    this.loaddata.showRefresh = false;
						this.loaddata.showLoad = true;
						this.loaddata.showNoData = false;
                    	this.getDiscountListData();
	                }
				}
			}
		},
		components:{
			'loading':loading,
		},
		store:store,
	}
</script>
<style type="text/css" lang="sass">
	.discount-list{
		background:#f8f8f8;
		.discount-header{
			width: 100%;
			height: 0.9rem;
			font-size: 0.34rem;
			color: #404040;
			text-align: center;
			box-sizing: border-box;
			line-height: 0.9rem;
			border-bottom: 1px solid #e6e6e6;
			background: #fff;
			position: fixed;
			top: 0;
			z-index: 99;
			.goback-Btn{
				position:absolute;
				width: 0.9rem;
				height:0.9rem;
				left: 0;
				top: 0;
				background: url('../img/topbar_back@3x.png') no-repeat center center;
				background-size: 80% 80%;
			}
		}
		.discount-box{
			width: 100%;
			overflow: hidden;
			margin-top: 0.9rem;
			.discount-content{
				padding: 0 0.25rem;
				box-sizing: border-box;
				width: 100%;
				margin-top: 0.2rem;
				background:#fff;
				a{
					display: block;
					box-sizing: border-box;
					width: 100%;
					height: 2.8rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.discount-describe{
					width: 100%;
					height: 0.9rem;
					font-size:0.28rem;
					color: #404040;
					line-height: 0.9rem;
					white-space: nowrap;
					overflow:hidden;
					text-overflow:ellipsis; 
				}
			}
		}
	}
</style>
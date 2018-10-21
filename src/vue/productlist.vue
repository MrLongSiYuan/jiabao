<template>
	<div class="productlist">
		<div class="pro-header">
			<div class="goback-Btn" v-link="{name:'artlist'}"></div>
			{{proVarietyName}}
		</div>
		<div class="productlist-box">
			<div class="prolist-banner">
				<img v-bind:src="productListBanner" alt="proVarietyName">
			</div>
			<div class="product-list">
				<div class="product-infor" v-for="proList in proLists">
					<a v-bind:href="proList.prodHref+'&sign='+signToken" class="jumpPordetail">
						<div class="product-infor-header">
							{{proList.prodName}}
							<img v-bind:src="proList.companyLogo">
						</div>
						<div class="product-infor-describe">
							{{proList.prodIntro}}
						</div>
						<div class="fixed-describe">
							<div class="appropriate-age"><i>适保年龄：</i>{{proList.insuredAge}}</div>
							<div class="term"><i>保障期限：</i>{{proList.bzq}}</div>
						</div>
						<div class="change-describe" v-if="(articleId == 5)&&(proList.bzqylist)">
							<div class="change-describe-box" v-for="qyxlist in proList.bzqylist">
								<span class="describe-name" >{{qyxlist.qyx}}：</span>
								<span class="describe-text" >{{qyxlist.pce}}</span>
							</div>
						</div>
						<div class="change-describe" v-else>
							<div class="change-describe-box">
								<span class="describe-name" v-if="articleId == 1" v-show="proList.zgbe">最高保障：</span>
								<span class="describe-name" v-if="articleId == 2" v-show="proList.bzfw">保障范围：</span>
								<span class="describe-name" v-if="articleId == 3" v-show="proList.sgpc">身故赔偿：</span>
								<span class="describe-name" v-if="articleId == 4" v-show="proList.yqnhsy">预期年化收益：</span>
								<span class="describe-text" v-if="articleId == 1">{{proList.zgbe}}</span>
								<span class="describe-text" v-if="articleId == 2">{{proList.bzfw}}</span>
								<span class="describe-text" v-if="articleId == 3">{{proList.sgpc}}</span>
								<span class="describe-text" v-if="articleId == 4">{{proList.yqnhsy}}</span>
							</div>
							<div class="change-describe-box">
								<span class="describe-name" v-if="articleId == 1" v-show="proList.bzfw">保障范围：</span>
								<span class="describe-name" v-if="articleId == 2" v-show="proList.zdjblp">重大疾病理赔：</span>
								<span class="describe-name" v-if="articleId == 3" v-show="proList.cfzz">财富增值：</span>
								<span class="describe-name" v-if="articleId == 4" v-show="proList.cfzz">财富增值：</span>
								<span class="describe-text" v-if="articleId == 1">{{proList.bzfw}}</span>
								<span class="describe-text" v-if="articleId == 2">{{proList.zdjblp}}</span>
								<span class="describe-text" v-if="articleId == 3">{{proList.cfzz}}</span>
								<span class="describe-text" v-if="articleId == 4">{{proList.cfzz}}</span>
							</div>
						</div>
						<div class="product-infor-footer">
							<div class="payment-term">
								<i class="money-year">{{proList.bfPrice}}</i><i class="currency">{{proList.bfCurrencyName}}</i>/{{proList.bfCycle}}
								<span class="total-year">{{proList.bfPeriod}}</span>
							</div>
							<div class="ordered">
								<i class="ordered-number">{{proList.saleCount}}</i>人预约
							</div>
						</div>
					</a>
				</div>
			</div>	
			<loading v-bind:loaddata="loaddata"></loading>		
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store';
	import loading from '../components/loading.vue'
	import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
	export default {
		data : function() {
			return {
				articleId : '',
				proVarietyName:'',
				productListBanner:"",
				proLists:[],
				scroll : true,
				loaddata:{
					showRefresh:false,
					showLoad:true,
					showNoData:false,
				},
				pageNo:1,
				noMoreData:false,
				firstGetData:true,
				signToken:'product',
			}
		},
		route : {
			data (transition){
				this.articleId = transition.to.params.id;
			}
		},
		ready : function() {
			// console.log(this.articleId)
			this.getProVarietyName(this.articleId-0);
			this.getProListData();
			$(window).on('scroll',() => {
                this.scrollProlist();
            });
            if(getCookieResult("sign_token")){
				this.signToken = getCookieResult("sign_token");
			}
		},
		methods : {
			getProVarietyName:function(articleId){
				switch(articleId){
					case 2:
					  	this.proVarietyName = "重疾险";
					  	this.productListBanner = 'src/img/zhongji@3x.png';
						break;
					case 1:
						this.proVarietyName = "医疗险";
						this.productListBanner = 'src/img/yiliao@3x.png';
						break;
					case 5:
						this.proVarietyName = "意外险";
						this.productListBanner = 'src/img/yiwai@3x.png';
						break;
					case 3:
						this.proVarietyName = "人寿险";	
						this.productListBanner = 'src/img/renshou@3x.png';
						break;
					case 4	:
						this.proVarietyName = "理财险";	
						this.productListBanner = 'src/img/licai@3x.png';
						break;	
					default:
						break;
				}
			},
			getProListData:function(){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"productlist",
					cache:false,
					data:{
						riskClass:this.articleId,
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
						this.firstGetData = false;
						// console.log(res)
						if(res.data){
							if(res.data.list) {
								this.proLists=this.proLists.concat(res.data.list);
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
			scrollProlist:function(){
				if(this.scroll){
					let totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
					// console.log($(window).height())
					// console.log($(window).scrollTop())
					// console.log($(document).height())
	          		if (($(document).height() <= totalheight)&&(!this.noMoreData)&&(!this.firstGetData)) {
	                    this.scroll = false;
	                    this.loaddata.showRefresh = false;
						this.loaddata.showLoad = true;
						this.loaddata.showNoData = false;
                    	this.getProListData();
	                }
				}
			}
		},
		components:{
			'loading':loading,
		}
	}
</script>
<style type="text/css" lang="sass">
	.productlist{
		background: #f8f8f8;
		.pro-header{
			width: 100%;
			height: 0.9rem;
			background:#fff;
			position: fixed;
			top: 0;
			font-size: 0.34rem;
			color: #404040;
			text-align: center;
			line-height: 0.9rem;
			z-index: 99;
			.goback-Btn{
				position:absolute;
				width: 0.9rem;
				height:100%;
				left: 0;
				top: 0;
				background: url('../img/topbar_back@3x.png') no-repeat center center;
				background-size: 80% 80%;
			}
		}
		.productlist-box{
			width: 100%;
			margin-top: 0.9rem;
			.prolist-banner{
				width: 100%;
				height: 2.4rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.product-infor{
				width: 100%;
				margin-top: 0.2rem;
				background: #fff;
				padding: 0 0.35rem;
				box-sizing: border-box;
				.jumpPordetail{
					display: block;
				}
				.product-infor-header{
					width:100%;
					height: 0.73rem;
					padding-top: 0.1rem;
					font-size:0.3rem;
					color:#424242;
					line-height:0.73rem;
					position: relative;
					img{
						width: 1.2rem;
						height: 0.52rem;
						position:absolute;
						right: 0;
						top: 0.2rem;
					}
				}
				.product-infor-describe{
					font-size:0.26rem;
					color: #7c7c7c;
					line-height:0.38rem;
				}
				.fixed-describe{
					width:7rem;
					height: 0.54rem;
					position:relative;
					right: 0.1rem;
					background: #f8f8f8;
					font-size: 0.26rem;
					line-height: 0.54rem;
					margin-top: 0.06rem;
					margin-bottom: 0.1rem;
					div{
						width: 50%;
						box-sizing: border-box;
						padding:0 0.1rem;
						color: #683a19;
						float: left;
						overflow: hidden; 
						white-space: nowrap;
						text-overflow: ellipsis;
						i{
							color: #a48974;
						}
					}
					.term{
						text-align: right;
					}
				}
				.change-describe{
					width: 100%;
					font-size:0.26rem;
					line-height: 0.46rem;
					color: #404040;
					.describe-text{
						color: #7c7c7c;
					}
				}
				.product-infor-footer{
					width: 100%;
					height: 0.8rem;
					position: relative;
					font-size:0.26rem;
					color: #424242;
					line-height: 0.8rem;
					.payment-term{
						height: 100%;
						position:absolute;
						left:0;
						padding-right: 0.75rem;
						.money-year{
							font-size:0.48rem;
							color: #e93b32;
							font-weight: 600;
						}
						.currency{
							color: #404040;
						}
						.total-year{
							display: block;
							width: 1.5rem;
							text-align: center;
							height: 0.52rem;
							font-size:0.4rem;
							line-height: 0.52rem;
							color: #7c7c7c;
							border: 1px solid;
							border-radius: 0.05rem;
							-webkit-transform: scale(0.5);
							transform: scale(0.5);
							position:absolute;
							right: -0.55rem;;
							top: 0.22rem;
						}
					}
					.ordered{
						position: absolute;
						right: 0;
						height: 0.8rem;
						line-height: 0.98rem;
						color: #909090;
						padding-left: 0.36rem;
						background: url('../img/ordered.png') no-repeat left 0.35rem;
						background-size: 0.28rem 0.28rem;
						.ordered-number{
							color: #424242;
						}
					}
				}
			}
		}
	}
</style>
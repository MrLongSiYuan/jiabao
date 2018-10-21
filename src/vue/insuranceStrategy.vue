<template>
	<div class="insurance-strategy">
		<div class="Ins-header-box">
			<div class="ins-header">
				<div class="goback-Btn" v-link="{name:'artlist'}"></div>
				投保攻略
			</div>
			<div class="ins-tap-box">
				<ul class="ins-tap clearfloat">
					<li class="active">购险必读</li>
					<li>选择指南</li>
					<li>理赔攻略</li>
					<li>保险资讯</li>
					<div class="tap-footer-bar"></div>
				</ul>
			</div>
		</div>
		<div class="Ins-content-box">
			<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide">
					<div id="wrapper1" class="ins-scroll">
						<div class="Ins-content clearfloat">
							<div class="strategy-list" v-for="strategy1 in strategyList1">
								<a v-bind:href="strategy1.href">
									<div class="strategy-list-img">
										<img v-bind:src="strategy1.titleImg">
									</div>
									<div class="strategy-list-describe">{{strategy1.title}}</div>
									<div class="strategy-list-infor">
										<div class="list-infor-date">{{strategy1.createDate}}</div>
										<div class="list-infor-watch">{{strategy1.readQty}}</div>
									</div>
								</a>	
							</div>
							<loading v-bind:loaddata="loaddata1"></loading>
						</div>
					</div>
			    </div>
			    <div class="swiper-slide">
					<div id="wrapper2" class="ins-scroll">
						<div class="Ins-content clearfloat">
							<div class="strategy-list" v-for="strategy2 in strategyList2">
								<a v-bind:href="strategy2.href">
									<div class="strategy-list-img">
										<img v-bind:src="strategy2.titleImg">
									</div>
									<div class="strategy-list-describe">{{strategy2.title}}</div>
									<div class="strategy-list-infor">
										<div class="list-infor-date">{{strategy2.createDate}}</div>
										<div class="list-infor-watch">{{strategy2.readQty}}</div>
									</div>
								</a>	
							</div>
							<loading v-bind:loaddata="loaddata2"></loading>
						</div>
					</div>
			    </div>
			    <div class="swiper-slide">
			    	<div id="wrapper3" class="ins-scroll">
						<div class="Ins-content clearfloat">
							<div class="strategy-list" v-for="strategy3 in strategyList3">
								<a v-bind:href="strategy3.href">
									<div class="strategy-list-img">
										<img v-bind:src="strategy3.titleImg">
									</div>
									<div class="strategy-list-describe">{{strategy3.title}}</div>
									<div class="strategy-list-infor">
										<div class="list-infor-date">{{strategy3.createDate}}</div>
										<div class="list-infor-watch">{{strategy3.readQty}}</div>
									</div>
								</a>	
							</div>
							<loading v-bind:loaddata="loaddata3"></loading>
						</div>
					</div>
			    </div>
			    <div class="swiper-slide">
			    	<div id="wrapper4" class="ins-scroll">
						<div class="Ins-content clearfloat">
							<div class="strategy-list" v-for="strategy4 in strategyList4">
								<a v-bind:href="strategy4.href">
									<div class="strategy-list-img">
										<img v-bind:src="strategy4.titleImg">
									</div>
									<div class="strategy-list-describe">{{strategy4.title}}</div>
									<div class="strategy-list-infor">
										<div class="list-infor-date">{{strategy4.createDate}}</div>
										<div class="list-infor-watch">{{strategy4.readQty}}</div>
									</div>
								</a>	
							</div>
							<loading v-bind:loaddata="loaddata4"></loading>
						</div>
					</div>
			    </div>
			  </div>
			</div>
		</div>
	</div>
</template>
<script>
	var Swiper = require('swiper');
	import store from '../vuex/store';
	import loading from '../components/loading.vue';
	var IScroll = require('iscroll');
	var myScroll1;
	var myScroll2;
	var myScroll3;
	var myScroll4;
	export default{
		data:function(){
			return {
				mustRead:[],
				strategyList1:[],
				strategyList2:[],
				strategyList3:[],
				strategyList4:[],
				loaddata1:{
					showRefresh:false,
					showLoad:true,
					showNoData:false,
				},
				loaddata2:{
					showRefresh:false,
					showLoad:true,
					showNoData:false,
				},
				loaddata3:{
					showRefresh:false,
					showLoad:true,
					showNoData:false,
				},
				loaddata4:{
					showRefresh:false,
					showLoad:true,
					showNoData:false,
				},
				getDataPageNo:[1,1,1,1],
				noMoreData:[false,false,false,false],
			}
		},
		watch: {
		    strategyList1: function () {
		        myScroll1.refresh();
		    },
		    strategyList2: function () {
		        myScroll2.refresh();
		    },
		    strategyList3: function () {
		        myScroll3.refresh();
		    },
		    strategyList4: function () {
		        myScroll4.refresh();
		    },
		},
		ready:function(){
			var firstClick = {
				'firstClick1':false,
				'firstClick2':true,
				'firstClick3':true,
				'firstClick4':true,
			};
			var iscrollOption = {
				click:true,
			}
			var pageNoArr = this.getDataPageNo;
			var mySwiper = new Swiper('.swiper-container', {
				direction : 'horizontal',
				onTransitionStart: (swiper)=>{
					let linum = mySwiper.activeIndex+1;
					$(".ins-tap-box .ins-tap li").eq(linum-1).attr({class:"active"}).siblings("li").attr({class:""});
					$(".ins-tap-box .ins-tap .tap-footer-bar").css({'left':(linum-1)*25+"%"})
					if((linum == 2)&& firstClick.firstClick2){
						this.getStrategyData(2,pageNoArr[1]);
						firstClick.firstClick2 = false;
					}else if((linum == 3)&& firstClick.firstClick3){
						this.getStrategyData(3,pageNoArr[2]);
						firstClick.firstClick3 = false;	
					}else if((linum == 4)&& firstClick.firstClick4){
						this.getStrategyData(4,pageNoArr[3]);
						firstClick.firstClick4 = false;	
					}
				},
			})
			$(".ins-tap-box .ins-tap li").on("click",function(){
				var thisNum = $(this).index();
				mySwiper.slideTo(thisNum, 500, true);
				$(this).attr({class:"active"}).siblings('li').attr({class:""});
				if((thisNum+1 == 2)&& firstClick.firstClick2){
					this.getStrategyData(2,pageNoArr[1]);
					firstClick.firstClick2 = false;
				}else if((thisNum+1 == 3)&& firstClick.firstClick3){
					this.getStrategyData(3,pageNoArr[2]);
					firstClick.firstClick3 = false;	
				}else if((thisNum+1 == 4)&& firstClick.firstClick4){
					this.getStrategyData(4,pageNoArr[3]);
					firstClick.firstClick4 = false;	
				}
			});
			this.setIscrollHeight();
			this.getStrategyData(1,pageNoArr[0]);
			myScroll1 = new IScroll('#wrapper1',iscrollOption);
			myScroll2 = new IScroll('#wrapper2',iscrollOption);
			myScroll3 = new IScroll('#wrapper3',iscrollOption);
			myScroll4 = new IScroll('#wrapper4',iscrollOption);
			myScroll1.on("scrollEnd",()=>{
				let totalheight = Math.ceil($('#wrapper1 .Ins-content').height()-$("#wrapper1").height());
				if((-myScroll1.y<=totalheight)&&(!this.noMoreData[0])){
					this.getStrategyData(1,pageNoArr[0]);
					this.loaddata1.showRefresh = false;
					this.loaddata1.showLoad = true;
					this.loaddata1.showNoData = false;
				};
			});
			myScroll2.on("scrollEnd",()=>{
				let totalheight = Math.ceil($('#wrapper2 .Ins-content').height()-$("#wrapper2").height());
				if((-myScroll2.y<=totalheight)&&(!this.noMoreData[1])){
					this.getStrategyData(2,pageNoArr[1]);
					this.loaddata2.showRefresh = false;
					this.loaddata2.showLoad = true;
					this.loaddata2.showNoData = false;
				};
			});
			myScroll3.on("scrollEnd",()=>{
				let totalheight = Math.ceil($('#wrapper2 .Ins-content').height()-$("#wrapper2").height());
				if((-myScroll3.y<=totalheight)&&(!this.noMoreData[2])){
					this.getStrategyData(3,pageNoArr[2]);
					this.loaddata3.showRefresh = false;
					this.loaddata3.showLoad = true;
					this.loaddata3.showNoData = false;
				};
			});
			myScroll4.on("scrollEnd",()=>{
				let totalheight = Math.ceil($('#wrapper2 .Ins-content').height()-$("#wrapper2").height());
				if((-myScroll4.y<=totalheight)&&(!this.noMoreData[3])){
					this.getStrategyData(4,pageNoArr[3]);
					this.loaddata4.showRefresh = false;
					this.loaddata4.showLoad = true;
					this.loaddata4.showNoData = false;
				};
			});
			
		},
		methods:{
			setIscrollHeight:function(){
				var browser = {
				    versions: function () {
				        var u = navigator.userAgent, app = navigator.appVersion;
				        return {         //移动终端浏览器版本信息
				            trident: u.indexOf('Trident') > -1, //IE内核
				            presto: u.indexOf('Presto') > -1, //opera内核
				            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
				            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				            iPad: u.indexOf('iPad') > -1, //是否iPad
				            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
				        };
				    }(),
				    language: (navigator.browserLanguage || navigator.language).toLowerCase()
				}
				if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
				        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
				        if (ua.match(/MicroMessenger/i) == "micromessenger") {
				    
				        }
				        if (ua.match(/WeiBo/i) == "weibo") {
				                alert("微博")
				        }
				        if (ua.match(/QQ/i) == "qq") {
				                $(".Ins-content-box").css({"height":"9.2rem"})
				        }
				}  
			},
			getStrategyData:function(strategyType,pageNo){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"strategylist",
					cache:false,
					data:{
						strategyType:strategyType,
						pageNo:pageNo,
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
							if(strategyType == 1){
								this.strategyList1 = this.strategyList1.concat(res.data.list);
								this.getDataPageNo[0] +=1;
								this.loaddata1.showRefresh = true;
								this.loaddata1.showLoad = false;
								this.loaddata1.showNoData = false;
								if(res.data.lastPage){
									this.noMoreData[0] = true;
									this.loaddata1.showRefresh = false;
									this.loaddata1.showLoad = false;
									this.loaddata1.showNoData = true;
								};
							}else if(strategyType == 2){
								this.strategyList2 = this.strategyList2.concat(res.data.list);
								this.getDataPageNo[1] +=1;
								this.loaddata2.showRefresh = true;
								this.loaddata2.showLoad = false;
								this.loaddata2.showNoData = false;
								if(res.data.lastPage){
									this.noMoreData[1] = true;
									this.loaddata2.showRefresh = false;
									this.loaddata2.showLoad = false;
									this.loaddata2.showNoData = true;
								};
							}else if(strategyType == 3){
								this.strategyList3 = this.strategyList3.concat(res.data.list);
								this.getDataPageNo[2] +=1;
								this.loaddata3.showRefresh = true;
								this.loaddata3.showLoad = false;
								this.loaddata3.showNoData = false;
								if(res.data.lastPage){
									this.noMoreData[2] = true;
									this.loaddata3.showRefresh = false;
									this.loaddata3.showLoad = false;
									this.loaddata3.showNoData = true;
								};
							}else if(strategyType == 4){
								this.strategyList4= this.strategyList4.concat(res.data.list);
								this.getDataPageNo[3] +=1;
								this.loaddata4.showRefresh = true;
								this.loaddata4.showLoad = false;
								this.loaddata4.showNoData = false;
								if(res.data.lastPage){
									this.noMoreData[3] = true;
									this.loaddata4.showRefresh = false;
									this.loaddata4.showLoad = false;
									this.loaddata4.showNoData = true;
								};
							}
						}else{
							if(strategyType == 1){
								this.noMoreData[0] = true;
								this.loaddata1.showRefresh = false;
								this.loaddata1.showLoad = false;
								this.loaddata1.showNoData = true;
							}else if(strategyType == 2){
								this.noMoreData[1] = true;
								this.loaddata2.showRefresh = false;
								this.loaddata2.showLoad = false;
								this.loaddata2.showNoData = true;
							}else if(strategyType == 3){
								this.noMoreData[2] = true;
								this.loaddata3.showRefresh = false;
								this.loaddata3.showLoad = false;
								this.loaddata3.showNoData = true;
							}else if(strategyType == 4){
								this.noMoreData[3] = true;
								this.loaddata4.showRefresh = false;
								this.loaddata4.showLoad = false;
								this.loaddata4.showNoData = true;
							}
						}
					}
				});
			}
		},
		components:{
			'loading':loading,
		},
		store : store
	}
</script>
<style lang="sass">
	@import '../css/swiper.css';
	.insurance-strategy{
		background: #f8f8f8;
		width: 100%;
		.Ins-header-box{
			position: fixed;
			width: 100%;
			top: 0;
			background:#fff;
			z-index: 99;
			.ins-header{
				width: 100%;
				height: 0.9rem;
				font-size: 0.34rem;
				color: #404040;
				text-align: center;
				box-sizing: border-box;
				line-height: 0.9rem;
				border-bottom: 1px solid #e6e6e6;
				background: #fff;
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
			.ins-tap-box{
				width: 100%;
				height: 0.9rem;
				border-bottom: solid 1px #f3f3f3;
				padding: 0 0.25rem;
				box-sizing: border-box;
				background: #fff;
				position:absolute;
				top: 0.9rem;
				.ins-tap{
					display: block;
					box-sizing: border-box;
					height: 100%;
					width: 100%;
					position: relative;
					li{
						width: 25%;
						float: left;
						height: 100%;
						display: block;
						font-size: 0.28rem;
						text-align: center;
						line-height: 0.9rem;
						box-sizing: border-box;
					}
					li.active{
						color: #0e94f7;
					}
					.tap-footer-bar{
						width: 25%;
						border-bottom:3px solid #0e94f7;
						position: absolute;
						left: 0;
						bottom: 0;
						transition:left 0.5s;
					}
				}
			}
		}
		.Ins-content-box{
			width: 100%;
			height: 10.22rem;
			margin-top:1.8rem;
			.swiper-container{
				width: 100%;
				height: 100%;
				.swiper-wrapper{
					.swiper-slide{
						.ins-scroll{
							width: 100%;
							height: 100%;
							overflow: hidden;
							.Ins-content{
								.strategy-list{
									width: 100%;
									height: 2.12rem;
									box-sizing: border-box;
									background: #fff;
									padding:0.3rem 0.3rem 0;
									a{
										display:block;
										width: 100%;
										height: 100%;
										border-bottom:1px solid #f3f3f3;
										box-sizing: border-box;
									}
									.strategy-list-img{
										width: 2rem;
										height: 1.5rem;
										float:left;
										img{
											width: 100%;
											height: 100%;
										}				
									}
									.strategy-list-describe{
										width: 4.52rem;
										height: 0.98rem;
										margin-left: 0.35rem;
										font-size: 0.28rem;
										color: #424242;
										line-height: 0.48rem;
										float:left;
										overflow: hidden;
									    display: -webkit-box;
									    -webkit-line-clamp: 2;
									    -webkit-box-orient: vertical;
									    text-overflow: ellipsis;
									}
									.strategy-list-infor{
										font-size: 0.24rem;
										color: #909090;
										float: left;
										width: 4.52rem;
										height: 0.6rem;
										margin-left: 0.35rem;
										.list-infor-date{
											height: 100%;
											line-height: 0.6rem;
											float: left;
										}
										.list-infor-watch{
											height: 100%;
											line-height: 0.6rem;
											float: right;
											box-sizing:border-box;
											padding-left: 0.4rem;
											background: url('../img/gl_read@3x.png') no-repeat left;
											background-size:0.32rem 0.2rem;
										}
									}
								}
							}
						}
					}
				}
			} 
		}
	}
</style>
<template>
	<nv-header></nv-header>
	<div class="artlist">
		<swiper-slide></swiper-slide>
		<ul class="insurance-entry clearfloat">
			<li v-link="{name:'productlist',params:{id:2}}">重疾险</li>
			<li v-link="{name:'productlist',params:{id:1}}">医疗险</li>
			<li v-link="{name:'productlist',params:{id:5}}">意外险</li>
			<li v-link="{name:'productlist',params:{id:3}}">人寿险</li>
			<li v-link="{name:'productlist',params:{id:4}}">理财险</li>
		</ul>
		<ul class="function-entry clearfloat">
			<li v-link="{name: isLoginFlag?'require-assess':'login'}">
				<span class="function-name">需求测评</span>
				<span class="function-describe">30秒完成测评</span>
			</li>
			<li v-link="{name:'solution-made'}">
				<span class="function-name">方案定制</span>
				<span class="function-describe">为你量身定制</span>
			</li>
			<li v-link="{name:'insurance-strategy'}">
				<span class="function-name">投保攻略</span>
				<span class="function-describe">买对保险必读</span>
			</li>
		</ul>
		<div class="purchase-discount">
			<div class="index-more" v-link="{name:'discount-list'}">购险优惠<i>更多</i></div>
			<div class="discount-box clearfloat">
				<div class="discount" v-for="indexDis in discountArr">
					<a v-bind:href="indexDis.linkUrl"><img v-bind:src="indexDis.imgUrl"></a>
				</div>
			</div>
		</div>
		<div class="insurance-ask">
			<div class="index-more" v-link="{name:'question-answer-list'}">保险问答<i>更多</i></div>
			<div class="questions-and-answers-list" v-for="queAndAnsList in queAndAnsLists" >
				<div class="questions-and-answers">
					<div class="link-wrapper" v-link="{name:'question-and-answer-detail',params:{id:queAndAnsList.qstId+',index'}}">
						<div class="question-information clearfloat">
							<div class="questioner-name" v-if="queAndAnsList.asker">{{queAndAnsList.asker}}</div>
							<div class="questioner-name" v-else>匿名用户</div>
							<div class="question-watch">
								浏览<i class="question-watch-time">{{queAndAnsList.readQty}}</i>次
							</div>
							<div class="question-date">{{queAndAnsList.askDate}}</div>
						</div>
						<div class="question">
							<i></i><span>{{queAndAnsList.askContent}}</span>
						</div>
						<div class="answer">
							<img src="../img/home_da.png"><span>{{queAndAnsList.replyContent}}</span>
						</div>
					</div>
					<div class="answer-information">
						<div class="answer-name">{{queAndAnsList.agentName}}</div>
						<div class="answer-occupation">{{queAndAnsList.titleName}}</div>
						<div class="demote" v-bind:opFlag="queAndAnsList.opFlag"><i v-bind:class="[((queAndAnsList.opFlag == '2')&&isLoginFlag)?'active':'']"></i><span>{{queAndAnsList.cpCnt}}</span></div>
						<div class="fabulous" v-bind:replyId = "queAndAnsList.replyId"><i v-bind:class="[((queAndAnsList.opFlag == '1')&&isLoginFlag)?'active':'']"></i><span>{{queAndAnsList.dzCnt}}</span></div>
					</div>
				</div>
			</div>
		</div>
		<div class="our-advantage">
			<div class="index-more" v-on:click="moreAdvantage()">平台优势<i>更多</i></div>
			<div class="advantage-box" id="wrapper">
				<ul class="clearfloat">
					<li v-on:click="jumpAdvantage(index)" v-for="(index,advantageArr) in advantageArrs">
						<img v-bind:src="advantageArr.imgsrc" v-bind:alt="advantageArr.text">
						<!-- <span>{{advantageArr.text}}</span> -->
					</li>
				</ul>
			</div>
		</div>
		<div class="loadingbox" v-show="showLoading">
			<div class="loading"></div>
		</div>
	</div>
</template>
<script>
	import store from '../vuex/store';
	import nvHeader from '../components/header.vue';
	import nvTop from '../components/returnTop.vue';
	import swiperSlide from '../components/swiper-slide.vue';
	import {isLogin, setUserInfo,setSignToken} from '../vuex/actions'
    import {getLoginState, getUserInfo,getSignToken} from '../vuex/getters';
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'

	var IScroll = require('iscroll');
	export default {
		data : function() {
			return {
				initIndex : 0,
				scroll : true,
				isLoginFlag:false,
				advantageArrs : [
					{'imgsrc' : 'src/img/chanpingyoushi.png', 'text' : '产品优势'},
					{'imgsrc' : 'src/img/fuwuyoushi.png', 'text' : '服务优势'},
					{'imgsrc' : 'src/img/anquanyoushi.png', 'text' : '安全优势'},
					{'imgsrc' : 'src/img/lipeiyoushi.png', 'text' : '理赔优势'},
				],
				queAndAnsLists : [],
				searchKey : {
					page : 1,
					limit : 20, //每页加载20条
					tab : 'all' //分页 有all ask share job good
				},
				userInfo : {
					'nickName' : '',          // 昵称
					'password' :'',           // 是否有密码
					'gender' : '',			  // 性别
					'avatar' : '',			  // 头像
					'userAccount' : '',		  // 账号
					'birthday' : '',		  // 出生日期
					'cityName' : '',		  // 城市
					'email' : '',			  // 邮箱
					'mobile' : '',            // 手机号
					'userId' : ''    		  // 用户id
				},
				discountArr:[],
				signToken:''
			}
		},
		watch:{
			queAndAnsLists:function(){
				$(".fabulous").on("click",(e)=>{
					let dom = e.target;
					let noOperation = $(dom).siblings('.demote').attr('opflag') == "0";
					let theReplyId = $(dom).attr('replyid');
					let text = $(dom).find('span').text()-0+1;
					if(this.signToken && noOperation){
						// console.log(this.signToken+':'+theReplyId+':'+noOperation)
						$(dom).find("i").css({'-webkit-animation':'carousel 1s forwards','animation':'carousel 1s forwards'});
						$(dom).css({"background":"url('./src/img/home_zan copy.png') no-repeat left center",'background-size':'0.3rem 0.26rem'})
						$(dom).find('span').text(text);
						this.postOperationData(theReplyId,'1');
						$(dom).siblings('.demote').attr('opflag','1');
					}
				});
				$(".demote").on("click",(e)=>{
					let dom = e.target;
					let noOperation = $(dom).attr('opflag') == "0";
					let theReplyId = $(dom).siblings('.fabulous').attr('replyid');
					let text = $(dom).find('span').text()-0+1;
					if(this.signToken && noOperation){
						$(dom).find("i").css({'-webkit-animation':'carousel 1s forwards','animation':'carousel 1s forwards'});
						$(dom).css({"background":"url('./src/img/home_cai copy.png') no-repeat left center",'background-size':'0.3rem 0.26rem'})
						$(dom).find('span').text(text);
						this.postOperationData(theReplyId,'2');
						$(dom).attr('opflag','1');
					}
				});
			}
		},
		ready : function() {
			if(getCookieResult("sign_token")){
				this.signToken = getCookieResult("sign_token");
				this.getQueAndAnsData(this.signToken);
			}else{
				this.getQueAndAnsData()
			}
			// console.log(getCookieResult("sign_token"))
			if(this.signToken&&!this.isLoginFlag){
				this.hand_userLogin();
				this.getUserInforData();
			}
			var myScroll;
			this.userInfo = this.ache_getUserInfo;
			myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, click: true });
			
			this.getDiscountIndex();
			this.isLoginFlag = this.ache_userLoginState;
		},
		methods :  {
			jumpAdvantage:function(index){
				// console.log(index);
				switch(index){
					case 0:
						window.location.href='http://jx.tou360.com/v1/advantageview?index=0'; 
						break;
					case 1:
						window.location.href='http://jx.tou360.com/v1/advantageview?index=1'; 
						break;
					case 2:
						window.location.href='http://jx.tou360.com/v1/advantageview?index=2'; 
						break;
					case 3:
						window.location.href='http://jx.tou360.com/v1/advantageview?index=3'; 
						break;
					default:
						break;
				}
			},
			getQueAndAnsData:function(token){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"questionlist",
					cache:false,
					data:{
						isIndex:'1',
						loginType:'1',
						sign:token,
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
						if(res.data) this.queAndAnsLists = res.data.list;
					}
				});	
			},
			moreAdvantage:function(){
				window.location.href='http://jx.tou360.com/v1/advantageview?index=0';
			},
			getDiscountIndex:function(){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"indexdiscount",
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
						if(res.data){
							this.discountArr = this.discountArr.concat(res.data.list);
						}
						// console.log(res)
					}
				});	
			},
			getUserInforData:function(){
				 $.ajax({
	                type : 'post',
	                url : store.state.hostUrl+'userinfo',
	                data : {
	                    loginType : 1,
	                    sign : this.signToken,
	                },
	                success: (res) => {
	                    // console.log(res);
	                    if(res.data){
	                    	if(res.data.userAccount) this.userInfo.userAccount = res.data.userAccount;	
	                    	if(res.data.avatar) this.userInfo.avatar = res.data.avatar;
	                        if(res.data.nickName) this.userInfo.nickName = res.data.nickName;
	                        if(res.data.birthday) this.userInfo.birthday = res.data.birthday;
	                        if(res.data.gender) this.userInfo.gender = res.data.gender;
	                        if(res.data.cityName) this.userInfo.cityName = res.data.cityName;
	                        if(res.data.email) this.userInfo.email = res.data.email;
	                        if(res.data.mobile) this.userInfo.mobile = res.data.mobile;
	                        this.tabSetUserInfo(this.userInfo);
	                    }
	                    // console.log(this.ache_getUserInfo);
	                }
	            })
			},
			postOperationData:function(replyId,opType){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"operatereply",
					cache:false,
					data:{
						replyId:replyId,
						opType:opType,
						loginType:'1',
						sign:this.signToken,
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
							this.discountArr = this.discountArr.concat(res.data.list);
						}
						// console.log(res)
					}
				});	
			}
		},
		components : {
			'nv-header' : nvHeader,
			'nv-top' : nvTop,
			'swiper-slide':swiperSlide,
		},
		destroyed : function() {
			// 退出组件解除window的scroll事件,防止别的页面下拉加载。
			$(window).off('scroll');
		},
		store : store,	//在组件加入store，让它的子组件和store连接
		vuex : {
            actions : {
                hand_userLogin : isLogin,
                tabSetUserInfo : setUserInfo,
                hand_setSignTiken : setSignToken,
            },
            getters : {
                ache_userLoginState : getLoginState,
                ache_getUserInfo :  getUserInfo,
                ache_getSignToken : getSignToken,
            }
        }
	}
</script>
<style lang="sass">
	@-webkit-keyframes carousel{
		0%{
			opacity: 1;
			z-index: 2;
		}
		99%{
			opacity: 0;
			z-index: 2;
			top: -0.6rem;
		}
		100%{
			opacity: 0;
			z-index: -1;
			top: 0;
		}
	}
	@keyframes carousel{
		0%{
			opacity: 1;
			z-index: 2;
		}
		99%{
			opacity: 0;
			z-index: 2;
			top: -0.6rem;
		}
		100%{
			opacity: 0;
			z-index: -1;
			top: 0;
		}
	}
	.artlist{
		overflow: hidden;
		width:100%;
		padding-top : 0.9rem;
		.insurance-entry {
			display: block;
			width:100%;
			height:2.06rem;
			background:#fff;
			li{
				display:block;
				float: left;
				width:20%;
				font-size: 0.26rem;
				color: #404040;
				box-sizing: border-box;
				text-align: center;
				padding-top:1.4rem;
				background:url('../img/zhongji.png') no-repeat 0.4rem 0.4rem;
				background-size: 0.8rem 0.8rem;
			}
			li:nth-child(2){
				background:url('../img/yiliao.png') no-repeat 0.4rem 0.4rem;
				background-size: 0.8rem 0.8rem;
			}
			li:nth-child(3){
				background:url('../img/yiwai.png') no-repeat 0.4rem 0.4rem;
				background-size: 0.8rem 0.8rem;
			}
			li:nth-child(4){
				background:url('../img/renshou.png') no-repeat 0.4rem 0.4rem;
				background-size: 0.8rem 0.8rem;
			}
			li:nth-child(5){
				background:url('../img/licai.png') no-repeat 0.4rem 0.4rem;
				background-size: 0.8rem 0.8rem;
			}
		}
		.function-entry{
			width:100%;
			height:1.85rem;
			margin-top: 0.2rem;
			background:#fff;
			li{
				display:block;
				float: left;
				width:33.33%;
				font-size: 0.26rem;
				color: #404040;
				box-sizing: border-box;
				text-align: center;
				padding-top:1.02rem;
				background:url('../img/xqcp.png') no-repeat 0.9rem 0.22rem;
				background-size: 0.7rem 0.7rem;
				.function-name{
					width:100%;
					height:0.36rem;
					display:block;
					line-height: 0.36rem;
					font-size:0.28rem;
				}
				.function-describe{
					display:block;
					width:100%;
					font-size:0.22rem;
					color:#ababab;
					line-height:0.34rem;
				}
			}
			li:nth-child(2){
				background:url('../img/fadz.png') no-repeat 0.9rem 0.22rem;
				background-size: 0.7rem 0.7rem;
			}
			li:nth-child(3){
				background:url('../img/glnb.png') no-repeat 0.9rem 0.22rem;
				background-size: 0.7rem 0.7rem;
			}
		}
		.index-more{
			width:100%;
			height:0.88rem;
			text-align:center;
			line-height:0.88rem;
			font-size:0.3rem;
			color: #404040;
			background:url('../img/more.png') no-repeat right center;
			background-size: 0.18rem 0.31rem;
			position:relative;
			i{
				display:block;
				width: 0.7rem;
				height: 100%;
				line-height:0.92rem;
				position:absolute;
				font-size:0.26rem;
				top: 0;
				right: 0.5rem;
			}
		}
		.purchase-discount{
			width:100%;
			height:4rem;
			background:#fff;
			margin-top: 0.2rem;
			box-sizing:border-box;
			padding: 0 0.25rem;
			.index-more{
				
				i{
					
					right: 0.22rem;
				}
			}
			.discount-box{
				width:100%;
				height:2.9rem;
				.discount{
					float:left;
					a{
						display: block;
						width: 100%;
						height: 100%;
						box-sizing: border-box;
						img{
							width:100%;
							height:100%;
							float: left;
						}
					}
				}
				.discount:nth-child(1){
					width:3.45rem;
					height:2.9rem;
					margin-right: 0.1rem;
				}
				.discount:nth-child(2){
					width:3.45rem;
					height:1.4rem;
				}
				.discount:nth-child(3){
					width:3.45rem;
					height:1.4rem;
					margin-top: 0.1rem;
				}
			}
		}
		.insurance-ask{
			width:100%;
			background:#fff;
			margin-top: 0.2rem;
			.index-more{
				padding:0 0.25rem;
				box-sizing:border-box;
				background:url('../img/more.png') no-repeat 96.1% center;
				background-size: 0.18rem 0.31rem;
			}
			.questions-and-answers-list{
				width:100%;
				box-sizing:border-box;
				padding: 0 0.25rem;
				border-top: 2px solid #f2f2f2;
				.questions-and-answers{
					width:100%;
					.question-information{
						width:100%;
						padding-top:0.25rem;
						div{
							font-size:0.24rem;
							color: #ababab;
						}
						.questioner-name{
							float:left;
						}
						.question-date{
							float:right;
							margin-right: 0.25rem;
						}
						.question-watch{
							float:right;
						}
					} 
					.question{
						width:100%;
						padding: 0.2rem 0rem;
						font-size: 0.28rem;
						min-height: 0.45rem;
						line-height:0.45rem;
						color:#404040;
						border-bottom: 1px solid #f2f2f2;
						i{
							display:block;
							float: left;
							width:0.42rem;
							height:0.42rem;
							background:#9dd2fe;
							font-size:0.26rem;
							text-align:center;
							color: #fff;
							margin-right: 0.1rem;
							background:url('../img/home_wen.png') no-repeat;
							background-size:100% 100%;
						}
					}
					.answer{
						width:100%;
						margin: 0.2rem 0rem;
						font-size: 0.28rem;
						height: 0.9rem;
						line-height:0.45rem;
						color:#7c7c7c;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						img{
							width:0.42rem;
							height:0.42rem;
							margin-right: 0.1rem;
						}
						i{
							display:block;
							float: left;
							width:0.42rem;
							height:0.42rem;
							background:#d0beb2;
							font-size:0.26rem;
							text-align:center;
							color: #fff;
							background:url('../img/home_da.png') no-repeat;
							background-size:100% 100%;
							margin-right: 0.1rem;
						}
					}
					.answer-information{
						width:100%;
						height:0.3rem;
						padding-bottom: 0.2rem;
						div{
							font-size:0.24rem;
							color: #ababab;
							line-height: 0.26rem;
							height:0.26rem;	
						}
						.answer-name{
							float:left;
							margin-right: 0.1rem;
						}
						.answer-occupation{
							float:left;
						}
						.demote{
							float: right;
							padding-left: 0.4rem;
							background:url('../img/demote.png') no-repeat left center;
							background-size:0.3rem 0.26rem;
							position:relative;
							i{
								display:block;
								position:absolute;
								width: 0.3rem;
								height: 0.26rem;
								left:0;
								top: 0;
								background: url('../img/home_cai copy.png') no-repeat;
								background-size: 100% 100%;
								z-index: -1;
							}
							i.active{
								z-index: 2;
							}
						}
						.fabulous{
							float:right;
							padding-left: 0.4rem;
							margin-right: 0.2rem;
							background:url('../img/fabulous.png') no-repeat left center;
							background-size:0.3rem 0.26rem;
							position: relative;
							i{
								display:block;
								position:absolute;
								width: 0.3rem;
								height: 0.26rem;
								left:0;
								top: 0;
								background: url('../img/home_zan copy.png') no-repeat;
								background-size: 100% 100%;
								z-index: -1;
							}
							i.active{
								z-index: 2;
							}
						}
					}
				}
			}
		}
		.our-advantage{
			width:100%;
			background:#fff;
			margin-top: 0.2rem;
			.index-more{
				padding:0 0.25rem;
				box-sizing:border-box;
				background:url('../img/more.png') no-repeat 96.1% center;
				background-size: 0.18rem 0.31rem;
			}
			.advantage-box{
				width:100%;
				height:2.35rem;
				overflow:hidden;
				position: absolute;
				z-index: 1;
				ul{
					display:block;
					width:11.68rem;
					position: absolute;
					z-index: 1;
					background:#fff;
					li{
						text-align:center;
						color: #ababab;
						font-size:0.28rem;
						display:block;
						float:left;
						width:2.84rem;
						margin-right: 0.1rem;
						img{
							width:2.8rem;
							height:1.6rem;
							border:1px solid #e9e9e9;
						}
						span{
							display:block;
							width:100%;
							line-height:0.72rem;
						}
					}
					li:nth-child(4){
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
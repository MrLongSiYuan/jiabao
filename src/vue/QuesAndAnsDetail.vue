<template>
	<div class="question-and-answer-detail">
		<div class="ask-detail-header">
			<div class="goback-Btn" v-link="{name:'question-answer-list'}" v-if="source == 'queslist'"></div>
			<div class="goback-Btn" v-link="{name:'artlist'}" v-if="source == 'index'"></div>
			<div class="goback-Btn" v-link="{name:'my-question'}" v-if="source == 'myquestion'"></div>
			问答详情
		</div>
		<div class="questions-and-answers-list" v-for="queAndAnsList in queAndAnsLists">
			<div class="questions-and-answers">
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
				<div class="answer" v-if="queAndAnsList.replyContent">
					<img src="../img/home_da.png"><span>{{queAndAnsList.replyContent}}</span>
				</div>
				<div class="answer" style="margin-bottom: 0;" v-else>暂时还没有顾问回答您的问题，请稍等...</div>
				<div class="answer-information" v-if="queAndAnsList.replyContent">
					<div class="answer-name">{{queAndAnsList.agentName}}</div>
					<div class="answer-occupation">{{queAndAnsList.titleName}}</div>
					<div class="demote" v-bind:opFlag="queAndAnsList.opFlag"><i v-bind:class="[((queAndAnsList.opFlag == '2')&&isLoginFlag)?'active':'']"></i><span>{{queAndAnsList.cpCnt}}</span></div>
					<div class="fabulous" v-bind:replyId = "queAndAnsList.replyId"><i v-bind:class="[((queAndAnsList.opFlag == '1')&&isLoginFlag)?'active':'']"></i><span>{{queAndAnsList.dzCnt}}</span></div>
				</div>
			</div>
		</div>
		<!-- <loading v-bind:loaddata="loaddata"></loading>	 -->
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store';
	import loading from '../components/loading.vue'
	import {isLogin, setUserInfo} from '../vuex/actions'
    import {getLoginState, getUserInfo,getSignToken} from '../vuex/getters';
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
	export default{
		data:function(){
			return {
				queAndAnsLists:[],
				questionInfor:'',
				questionId:'',
				source:'',
				signToken:'',
				isLoginFlag:false,
			}
		},
		watch:{
			queAndAnsLists:function(){
				$(".fabulous").on("click",(e)=>{
					let dom = e.target;
					let noOperation = $(dom).siblings('.demote').attr('opflag') == "0";
					let theReplyId = $(dom).attr('replyid');
					let text = $(dom).find('span').text()-0+1;
					// console.log(noOperation)
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
					// console.log(noOperation)
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
		route : {
			data (transition){
				this.questionInfor = transition.to.params.id;
			}
		},
		ready:function(){
			this.questionId = this.questionInfor.split(",")[0];
			this.source = this.questionInfor.split(",")[1];
			if(getCookieResult("sign_token")){
				this.signToken = getCookieResult("sign_token");
				this.hand_userLogin();
				this.isLoginFlag = this.ache_userLoginState;
				this.getQueDetail(this.questionId,this.signToken);
			}else{
				this.getQueDetail(this.questionId);
			}
			// console.log(this.source)
		},
		methods:{
			getQueDetail:function(id,token){
				var obj;
				if(token){
					obj = {
						qstId:id,
						loginType:'1',
						sign:token,
					}
				}else{
					obj={
						qstId:id,
						loginType:'1',
					}
				}
				console.log(store.state.hostUrl+"questiondetail?sign="+token+"&loginType=1&qstId="+id)
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"questiondetail",
					cache:false,
					data:obj,
					complete:function(status){
						// console.log("complete")
					},
					error:function(){
						// console.log("error")
					},
					success:(res)=>{
						var res = eval(res);
						// console.log(res)
						let dataArr = [{}];
						if(res.data){
							dataArr[0] = res.data;
							this.queAndAnsLists = this.queAndAnsLists.concat(dataArr);
						}
						
					}
				});	
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
		store : store,	//在组件加入store，让它的子组件和store连接
		vuex : {
            actions : {
                hand_userLogin : isLogin,
                tabSetUserInfo : setUserInfo
            },
            getters : {
                ache_userLoginState : getLoginState,
                ache_getUserInfo :  getUserInfo,
                ache_getSignToken : getSignToken,
            }
        }
	}
</script>
<style type="text/css" lang="sass">
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
	.question-and-answer-detail{
		.ask-detail-header{
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
		.questions-and-answers-list{
			width:100%;
			box-sizing:border-box;
			padding: 0 0.25rem;
			border-top: 2px solid #f2f2f2;
			background:#fff;
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
					min-height: 0.9rem;
					line-height:0.45rem;
					color:#7c7c7c;
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
</style>
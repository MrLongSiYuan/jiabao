<template>
	<div class="ask-question">
		<div class="ask-header">
			<div class="goback-Btn" v-link="{name:'question-answer-list'}"></div>
			我要提问
		</div>
		<textarea placeholder="请写下你的问题并用问号结尾。"></textarea>
		<div class="post-btn">
			提交
		</div>
		<div class="prompt"></div>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store';
	import {isLogin, setUserInfo} from '../vuex/actions'
    import {getLoginState, getUserInfo,getSignToken} from '../vuex/getters';
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
	export default{
		data:function(){
			return {
				signToken:'',
				isLoginFlag:false,
			}
		},
		ready:function(){
			if(getCookieResult("sign_token")){
				this.signToken = getCookieResult("sign_token");
				this.hand_userLogin();
				this.isLoginFlag = this.ache_userLoginState;
			}
			$('.post-btn').on('click',()=>{
				let quesContent = $('.ask-question textarea').val();
				if(quesContent.length > 0){
					this.submitQuestion(quesContent);
				}else{
					$(".prompt").text("请填写问题！");
					$(".prompt").fadeIn();
					setTimeout(function(){
						$(".prompt").fadeOut();
					},1000);
				}
			});
		},
		methods:{
			submitQuestion:function(questionContent){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"askquestion",
					cache:false,
					data:{
						askContent:questionContent,
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
						$('.ask-question textarea').val("");
						$(".prompt").text("提交成功！");
						$(".prompt").fadeIn();
						setTimeout(function(){
							$(".prompt").fadeOut();
						},1000);
					}
				});	
			}
		},
		store:store,
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
	.ask-question{
		.ask-header{
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
		textarea{
			display: block;
			width: 7rem;
			height: 3.2rem;
			background: #fff;
			border:none;
			outline: none;
			line-height: 1.5;
			margin: 0.2rem auto 0;
			font-size:0.28rem;
			color: #404040;
			resize: none;
		}
		.post-btn{
			width: 6.4rem;
			height: 0.8rem;
			font-size:0.32rem;
			color: #fff;
			text-align: center;
			line-height: 0.8rem;
			background: #008bfa;
			margin:0.6rem auto 0;
			border-radius: 0.08rem;
			position: relative;
		}
		.prompt{
			width: 2.6rem;
			height: 0.9rem;
			font-size:0.28rem;
			color: #fff;
			text-align: center;
			line-height: 0.9rem;
			position: absolute;
			background: rgba(0,0,0,0.7);
			border-radius: 0.08rem;
			left: 2.4rem;
			top:4.94rem;
			display:none;
		}
	}
</style>
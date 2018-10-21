<template>
	<div class="menu" :class="{'showMenu':showm}">
		<div class="user-info clearfix" v-link="this.ache_userLoginState ? {name : 'personaldata'} : {name : 'login'}">
			<div class="user-img">
				<img v-bind:src="userInfo.avatar" v-if="userInfo.avatar" alt=""/>
				<img src="../img/nologin.png" v-else alt=""/>
			</div>
			<div class="user-name">
				<p>{{userInfo.nickName}}</p>
			</div>
			<div class="user-more">
				<img src="../img/menu-more.png" alt=""/>
			</div>
		</div>
		<div class="insurer clearfix" v-show="insurerShow">
			<p class="insurer-private">专属顾问</p>
			<div class="insurer-tel insurer-box">
				<span>{{ privateInsurerInfo.agentName }}</span>
				<span class="btn-call-insurer" @click="callInsurerTel">{{ privateInsurerInfo.mobile}}</span>
				<img src="../img/insurer-img@3x.png" alt=""/>
			</div>
			<!--<div class="insurer-evaluate insurer-box">-->
				<!--<img src="../img/evaluate.png" alt=""/>评价顾问-->
			<!--</div>-->
		</div>
		<ul class="menu-ul">
			<li v-link="this.ache_userLoginState ? {name : 'advanceorder'} : {name : 'login'}">
				<img class="menu-ul-order" src="../img/order.png" alt="" v-if="isLoginFlag"/>
				<img class="menu-ul-order" src="../img/no-order.png" alt="" v-else/>预约订单
			</li>
			<li v-link="this.ache_userLoginState ? {name : 'testreport'} : {name : 'login'}">
				<img src="../img/report.png" alt="" v-if="isLoginFlag"/>
				<img src="../img/no-report.png" alt="" v-else/>测评报告
			</li>
			<li class="invite-friends" @click="inviteFriends">
				<img src="../img/invite.png" alt="" v-if="isLoginFlag"/>
				<img src="../img/no-invite.png" alt="" v-else/>邀请好友
			</li>
			<!--<li v-link="{name : 'referopinion'}">-->
				<!--<img src="../img/suggest.png" alt="" v-if="isLoginFlag"/>-->
				<!--<img src="../img/no-suggest.png" alt="" v-else/>意见反馈-->
			<!--</li>-->
			<li v-link="{name : 'userset'}">
				<img src="../img/set.png" alt="" v-if="isLoginFlag"/>
				<img src="../img/no-set.png" alt="" v-else/>设置
			</li>
		</ul>
		<div class="copyright">
			<p>深圳市投三六零信息科技有限公司版权所有</p>
			<p>粤ICP备14088810号-1</p>
			<p>@2013 tou360.All Rights Reserved.</p>
		</div>
	</div>
</template>
<script>
	import store from '../vuex/store';
	import {getLoginState, getUserInfo} from '../vuex/getters';
	import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
	export default {
		props : ['showm'],
		store : store,
		data : function() {
			return {
				// user_name : this.ache_userLoginState ? store.state.userInfo.nickName : '登录',
				isLoginFlag:false,   // 判断 登录之后 图标变化
				privateInsurerInfo : {},
				userInfo : {
                    'nickName' : '',          // 昵称
                    'password' :'',           // 是否有密码
                    'gender' : '',            // 性别
                    'avatar' : '',            // 头像
                    'userAccount' : '',       // 账号
                    'birthday' : '',          // 出生日期
                    'cityName' : '',          // 城市
                    'email' : '',             // 邮箱
                    'mobile' : '',            // 手机号
                    'userId' : ''             // 用户id
                },
                signToken:'',
				insurerShow : false
			}
		},
		watch:{
			isLoginFlag:function(){
				// console.log("iam change")
			}
		},
		ready : function() {
			// console.log(this.ache_userLoginState);
			// 设置 登录之后 的状态
			this.userInfo = this.ache_getUserInfo;
			this.isLoginFlag = this.ache_userLoginState;
			this.signToken = getCookieResult("sign_token");
			if(this.signToken){
				this.isLoginFlag = true;
			}
			// 获取 绑定顾问
			$.ajax({
				type : 'post',
				url : store.state.hostUrl + 'getbindingagent',
				data : {
					loginType : 1,
					sign : this.signToken
				},
				success : (res) => {
					var res = eval(res);
					if(res.data){
						//console.log(res.data);
						// 显示 专属顾问
						if(this.isLoginFlag){
							this.insurerShow = true;
							this.privateInsurerInfo = res.data;
						}
					}else{
						this.insurerShow = false;
					}
				}
			});
			//console.log(this.ache_userLoginState+"zhuye ");
			//console.log(this.getCookie('sign_token'));
			// console.log(this.ache_userLoginState+"zhuye ");
			//console.log(this.getCookie('sign_token'));
		},
		methods : {
			// 邀请好友
			inviteFriends : function (){
				if(this.signToken){
					$.ajax({
						type : 'post',
						url : store.state.hostUrl + 'invitefriend',
						data : {
							loginType : 1,
							sign : this.signToken
						},
						success : (res) => {
							var res = eval(res);
							//console.log(res);
							var shareUrlWeb = res.data.shareUrl;
							window.location.href = shareUrlWeb;
						}
					});
				}else{
					this.$router.go({name : 'login'});
				}
				//window.location.href='http://jx.tou360.com/v1/invitefriendview?invitecode=7727&from=singlemessage&isappinstalled=1';
			},
			callInsurerTel : function() {
				var callTelValue = $('.btn-call-insurer').html();
				window.location.href = "tel:" + callTelValue;
			}
		},
		vuex : {
			getters : {
				ache_userLoginState : getLoginState,
				ache_getUserInfo :  getUserInfo
			}
		}
	}
</script>
<style>
	.menu {
		position: fixed;
		left: -6rem;
		top: 0;
		padding:0 0.25rem;
		width:5.5rem;
		height: 100%;
		background: #ffffff;
		transition: all .3s ease;
		z-index: 99;
	}
	.user-info{
		width:100%;
		height:1.38rem;
		border-bottom:1px solid #e9e7e7;
	}
	.user-img{
		width:0.8rem;
		height:0.8rem;
		padding:0.4rem 0.2rem 0 0.1rem;
		float:left;
	}
	.user-img img{
		width:0.8rem;
		height:0.8rem;
		display:block;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
	}
	.user-name p{
		font-size:0.32rem;
		color:#424242;
		padding-top:0.6rem;
		float:left;
	}
	.user-more{
		width:0.54rem;
		height:0.54rem;
		padding-top:0.59rem;
		float:right;
	}
	.user-more img{
		display:block;
		width:0.46rem;
		height:0.46rem;
	}
	.insurer{
		width:100%;
		height:1.7rem;
		border-bottom:1px solid #e9e7e7;
		font-size:0.25rem;
	}
	.insurer-private{
		width:100%;
		height:0.82rem;
		line-height:1rem;
		color:#7c7c7c;
	}
	.insurer-box{
		width:100%;
		height:0.56rem;
		/*background:rgba(59,172,238,0.6);*/
		line-height:0.56rem;
		color:white;
	}
	.insurer-box img{
		display:block;
		height:0.34rem;
		margin:0.1rem;
		float:right;
	}
	.insurer .insurer-tel{
		float:left;
		/*margin-right:0.5rem;*/
		/*background:#59aeff;*/
		/*background: -webkit-linear-gradient(left top, #4abdee, #3bacee);*/
		/*background: -o-linear-gradient(bottom right, #4abdee, #3bacee);*/
		/*background: -moz-linear-gradient(bottom right, #4abdee, #3bacee);*/
		/*background: linear-gradient(to bottom right, #4abdee, #3bacee);*/
	}
	.insurer-tel span{
		color:#404040;
		float:left;
		font-size:0.25rem;
	}
	.insurer-tel span:nth-of-type(2){
		color:#0089fd;
		float:right;
	}
	.insurer .insurer-evaluate{
		float:left;
		/*background:rgba(255,136,24,0.6);*/
		background: -webkit-linear-gradient(left, #FFBB19 , #FF8614);
		background: -o-linear-gradient(right, #FFBB19 , #FF8614);
		background: -moz-linear-gradient(right, #FFBB19 , #FF8614);
		background: linear-gradient(to right, #FFBB19 , #FF8614);
	}
	.insurer .insurer-evaluate img{
		margin-left:0.4rem;
	}
	.menu-ul li{
		width:100%;
		height:0.66rem;
		font-size:0.28rem;
		color:#404040;
		margin-top:0.4rem;
		line-height:0.66rem;
	}
	.menu-ul li img{
		width:0.66rem;
		height:0.66rem;
		float:left;
		padding-right:0.35rem;
	}
	.menu-ul .menu-ul-order{
		margin-left:0.07rem;
		padding-right:0.29rem;
	}
	.copyright{
		margin-top:1.8rem;
	}
	.copyright p{
		color:#ababab;
		line-height:0.4rem;
		text-align:center;
		font-size:0.23rem;
	}
	.showMenu {
		transform: translateX(6rem);
	}
</style>
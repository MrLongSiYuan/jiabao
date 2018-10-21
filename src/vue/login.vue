<template>
	<div class="ins-header">
		<div class="goback-Btn" v-link="{name:'artlist'}"></div>
		登录
	</div>
	<div class="login-con">
		<ul class="login-way">
			<li><a class="login-way-border" href="javascript:void(0);" @click="toggleTabs(accountLogin)" :class="[currentTab=='tab-account' ?'login-way-border':'']"> {{ accountLogin }}</a></li>
			<li><a href="javascript:void(0);" @click="toggleTabs(phoneLogin)" :class="[currentTab=='tab-telephone' ?'login-way-border':'']">{{ phoneLogin }}</a></li>
		</ul>
		<div class="tab-content">
			<component :is="currentTab" transition="fade" transition-mode="out-in" keep-alive></component>
		</div>
		<div class="login-box">
			<span class="register" v-link="{name:'register'}">立即注册</span>
			<span class="forget" v-link="{name:'forget'}">忘记密码？</span>
		</div>
	</div>
</template>
<script>
	import nvHeader from '../components/header.vue';
	import tabTelephone from '../components/tabTelephone.vue';
	import tabAccount from '../components/tabAccount.vue';
	export default {
		data : function(){
			return {
				phoneLogin : '短信验证码登录',
				accountLogin : '账号密码登录',
				currentTab : 'tab-account'  // 默认选中的 Tab
			}
		},
		components : {
			nvHeader,
			tabTelephone,
			'tab-account' : tabAccount
		},
		methods : {
			// 绑定 Tab 切换事件
			toggleTabs : function(tabText) {
				if(tabText === "短信验证码登录"){
					this.currentTab = 'tab-telephone';
				}else{
					this.currentTab = 'tab-account'
				}

			}
		}
	}
</script>
<style>
	.login-con {
		background: #fff;
		font-size: 0.28rem;
		margin-top:1.2rem;
	}
	.login-way{
		width:100%;
		height:0.8rem;
		border-bottom:1px solid #dddada;
	}
	.login-way li{
		float:left;
		width:2.1rem;
	}
	.login-way a{
		display:block;
		width:2.1rem;
		height:0.75rem;
		line-height:0.75rem;
		color:#c3c3c3;
		text-align:center;
	}
	.login-way li:first-child{
		margin-left:1.35rem;
		margin-right:0.92rem;
	}
	.login-way .login-way-border{
		border-bottom:3px solid #0088fe;
		color:#0088fe;
	}
	.login-box{
		padding:0 0.35rem;
		width:6.8rem;
		height:0.96rem;
		line-height:0.96rem;
	}
	.login-box span{
		font-size:0.24rem;
		color:#7c7c7c;
	}
	.register{
		float:left;
	}
	.forget{
		float:right;
	}
	.fade-transition {
		transition: opacity .2s ease;
	}
	.fade-enter,.fade-leave {
		opacity: 0;
	}
	.ins-header {
		position:fixed;
		top:0;
		left:0;
		width: 100%;
		height: 0.9rem;
		font-size: 0.34rem;
		color: #404040;
		text-align: center;
		box-sizing: border-box;
		line-height: 0.9rem;
		border-bottom: 1px solid #e6e6e6;
		background: #fff;
	}
	.goback-Btn{
		position:absolute;
		width: 0.9rem;
		height:0.9rem;
		left: 0;
		top: 0;
		background: url('../img/topbar_back@3x.png') no-repeat center center;
		background-size: 80% 80%;
	}

</style>
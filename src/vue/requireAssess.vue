<template>
	<div class="require-assess">
		<div class="require-assess-header">
			<div class="goback-Btn" v-link="{name:'artlist'}"></div>
			需求测评
		</div>
		<div class="procedure-box-wrapper">
			<div class="prompt"></div>
			<ul class="procedure-box">
				<div class="age-cover">
					<div class="procedure-begin-box">
						<div class="procedure-begin-title">需求测评</div>
						<div class="procedure-begin-describe">一分钟得到你的投保建议</div>
						<div class="procedure-begin-img"></div>
						<div class="procedure-begin-btn">开始测评</div>
					</div>
				</div>
				<li class="age-box">
					<div class="procedure-logo"></div>
					<div class="procedure-question">1.您的年龄区间？</div>
					<ul class="answer-box">
						<li class="answer-list">
							<label for="age-one" v-bind:class="{ active: (requireData.age == 'A') }">18-28岁</label>
							<input type="radio" name="age" id="age-one" v-model="requireData.age" value="A">
						</li>
						<li class="answer-list">
							<label for="age-two" v-bind:class="{ active: (requireData.age == 'B') }">28-35岁</label>
							<input type="radio" name="age" id="age-two" v-model="requireData.age" value="B">
						</li>
						<li class="answer-list">
							<label for="age-three" v-bind:class="{ active: (requireData.age == 'C') }">35-50岁</label>
							<input type="radio" name="age" id="age-three" v-model="requireData.age" value="C">
						</li>
						<li class="answer-list">
							<label for="age-four" v-bind:class="{ active: (requireData.age == 'D') }">50-65岁</label>
							<input type="radio" name="age" id="age-four" v-model="requireData.age" value="D">
						</li>
					</ul>
				</li>
				<li class="income-box">
					<div class="procedure-logo"></div>
					<div class="procedure-question">2.您的家庭年总收入？</div>
					<ul class="answer-box">
						<li class="answer-list">
							<label for="income-one" v-bind:class="{ active: (requireData.income == 'A') }">0-30万</label>
							<input type="radio" name="income" id="income-one" v-model="requireData.income" value="A">
						</li>
						<li class="answer-list">
							<label for="income-two" v-bind:class="{ active: (requireData.income == 'B') }">30-50万</label>
							<input type="radio" name="income" id="income-two" v-model="requireData.income" value="B">
						</li>
						<li class="answer-list">
							<label for="income-three" v-bind:class="{ active: (requireData.income == 'C') }">50-100万</label>
							<input type="radio" name="income" id="income-three" v-model="requireData.income" value="C">
						</li>
						<li class="answer-list">
							<label for="income-four" v-bind:class="{ active: (requireData.income == 'D') }">100万以上</label>
							<input type="radio" name="income" id="income-four" v-model="requireData.income" value="D">
						</li>
					</ul>
				</li>
				<li class="child-age-box">
					<div class="procedure-logo"></div>
					<div class="procedure-question">3.您子女的年龄区间？</div>
					<ul class="answer-box">
						<li class="answer-list">
							<label for="childAge-one" v-bind:class="{ active: (requireData.childAge == 'A') }">无子女</label>
							<input type="radio" name="childAge" id="childAge-one" v-model="requireData.childAge" value="A">
						</li>
						<li class="answer-list">
							<label for="childAge-two" v-bind:class="{ active: (requireData.childAge == 'B') }">0-10岁</label>
							<input type="radio" name="childAge" id="childAge-two" v-model="requireData.childAge" value="B">
						</li>
						<li class="answer-list">
							<label for="childAge-three" v-bind:class="{ active: (requireData.childAge == 'C') }">10-18岁</label>
							<input type="radio" name="childAge" id="childAge-three" v-model="requireData.childAge" value="C">
						</li>
						<li class="answer-list">
							<label for="childAge-four" v-bind:class="{ active: (requireData.childAge == 'D') }">18岁以上</label>
							<input type="radio" name="childAge" id="childAge-four" v-model="requireData.childAge" value="D">
						</li>
					</ul>
				</li>
				<li class="social-security-box">
					<div class="procedure-logo"></div>
					<div class="procedure-question">4.您本人是否已购买社保？</div>
					<ul class="answer-box">
						<li class="answer-list">
							<label for="socialSec-one" v-bind:class="{ active: (requireData.socialSec == 'A') }">已购买</label>
							<input type="radio" name="socialSec" id="socialSec-one" v-model="requireData.socialSec" value="A">
						</li>
						<li class="answer-list">
							<label for="socialSec-two" v-bind:class="{ active: (requireData.socialSec == 'B') }">未购买</label>
							<input type="radio" name="socialSec" id="socialSec-two" v-model="requireData.socialSec" value="B">
						</li>
					</ul>
				</li>
				<li class="insurance-box">
					<div class="procedure-logo"></div>
					<div class="procedure-question">5.您购买过哪些商业保险？</div>
					<ul class="answer-box">
						<li class="answer-list">
							<label for="buyBefore-one" v-bind:class="{ active: buyBefore.zhongji }">重疾险</label>
							<input type="checkbox" name="buyBefore" id="buyBefore-one" value="A">
						</li>
						<li class="answer-list">
							<label for="buyBefore-two" v-bind:class="{'active' : buyBefore.licai }">理财险</label>
							<input type="checkbox" name="buyBefore" id="buyBefore-two" value="B">
						</li>
						<li class="answer-list">
							<label for="buyBefore-three" v-bind:class="{'active' : buyBefore.renshou}">人寿险</label>
							<input type="checkbox" name="buyBefore" id="buyBefore-three" value="C" >
						</li>
						<li class="answer-list">
							<label for="buyBefore-four" v-bind:class="{'active' : buyBefore.yiliao}">医疗险</label>
							<input type="checkbox" name="buyBefore" id="buyBefore-four" value="D">
						</li>
						<li class="answer-list">
							<label for="buyBefore-five" v-bind:class="{'active' : buyBefore.yiwai}">意外险</label>
							<input type="checkbox" name="buyBefore" id="buyBefore-five" value="E">
						</li>
						<li class="answer-list">
							<label for="buyBefore-six" v-bind:class="{'active' : buyBefore.nothing}">以上都无</label>
							<input type="checkbox" name="buyBefore" id="buyBefore-six" value="F">
						</li>
					</ul>
				</li>
			</ul>
			<div v-bind:class="[firstClick.firstClickFlag ? 'next-step next-step-active' : 'next-step']">下一步</div>
			<div class="previous-next-step">
				<div class="previous-step">上一步</div>
				<div class="next-step-old">下一步</div>
			</div>
		</div>
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
				requireData:{
					age:'',
					income:'',
					childAge:'',
					socialSec:'',
					purchaseType:'',
				},
				buyBefore:{
					zhongji:false,
					licai:false,
					renshou:false,
					yiliao:false,
					yiwai:false,
					nothing:false,
				},
				firstClick:{firstClickFlag:false},
				clickNextNum:0,
				signToken:'',
				isLoginFlag:false,
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
                lastResult:'',
			}
		},
		watch:{
			userInfo:function(){

			}
		},
		ready:function(){
			if(getCookieResult("sign_token")){
				this.signToken = getCookieResult("sign_token");
				// console.log(getCookieResult("sign_token"))
				if(!this.isLoginFlag){
					this.hand_userLogin();
					this.getUserInforData();
				}
				this.hand_userLogin();
				this.isLoginFlag = this.ache_userLoginState;
				this.userInfo = this.ache_getUserInfo;
			}
			var temp1,temp2,temp3,temp4,temp5,temp6;
			$('.insurance-box .answer-box .answer-list input').on("click",(e)=>{
				// console.log($(e.target)[0].value)
				let clickedVal = $(e.target)[0].value;
				temp1 = $('#buyBefore-one').prop('checked');
				temp2 = $('#buyBefore-two').prop('checked');
				temp3 = $('#buyBefore-three').prop('checked');
				temp4 = $('#buyBefore-four').prop('checked');
				temp5 = $('#buyBefore-five').prop('checked');
				temp6 = $('#buyBefore-six').prop('checked');
				if(clickedVal == "F"){
					temp1 = temp2 = temp3 = temp4 = temp5 = false;
					$('#buyBefore-one').prop('checked',temp1);
					$('#buyBefore-two').prop('checked',temp2);
					$('#buyBefore-three').prop('checked',temp3);
					$('#buyBefore-four').prop('checked',temp4);
					$('#buyBefore-five').prop('checked',temp5);
					$('#buyBefore-six').prop('checked',temp6);
				}else{
					temp6 = false;
					$('#buyBefore-one').prop('checked',temp1);
					$('#buyBefore-two').prop('checked',temp2);
					$('#buyBefore-three').prop('checked',temp3);
					$('#buyBefore-four').prop('checked',temp4);
					$('#buyBefore-five').prop('checked',temp5);
					$('#buyBefore-six').prop('checked',temp6);
				}
				this.requireData.purchaseType = '';
				this.buyBefore.zhongji = temp1;
				this.buyBefore.licai = temp2;
				this.buyBefore.renshou = temp3;
				this.buyBefore.yiliao = temp4;
				this.buyBefore.yiwai = temp5;
				this.buyBefore.nothing = temp6;
				if(temp1)this.requireData.purchaseType += "A";
				if(temp2)this.requireData.purchaseType += "B";
				if(temp3)this.requireData.purchaseType += "C";
				if(temp4)this.requireData.purchaseType += "D";
				if(temp5)this.requireData.purchaseType += "E";
				if(temp6)this.requireData.purchaseType += "F";
			})
			$(".answer-box li").on('click',()=>{this.firstClick.firstClickFlag = true;});
			$(".procedure-begin-btn").on("click",function(){
				$('.age-cover').hide();	
			});
			$('.next-step').on('click',()=>{
				if(this.firstClick.firstClickFlag){
					this.clickNextNum += 1;
					$('.procedure-box').css({'left':-this.clickNextNum*7.5+"rem"})
					$('.next-step').hide();
					$('.previous-next-step').show();
				}
			});
			$('.next-step-old').on('click',()=>{
				// console.log(this.clickNextNum)
				if(this.clickNextNum == 1){
					if(this.requireData.income){
						this.clickNextNum += 1;
					}else{
						this.propmtText();
					}
				}else if(this.clickNextNum == 2){
					if(this.requireData.childAge){
						this.clickNextNum += 1;
					}else{
						this.propmtText();
					}
				}else if(this.clickNextNum == 3){
					if(this.requireData.socialSec){
						this.clickNextNum += 1;
						$('.next-step-old').text("完成");
					}else{
						this.propmtText();
					}
				}else if(this.clickNextNum == 4){
					if(temp1 || temp2 || temp3 || temp4 || temp5 || temp6){
						// console.log(this.requireData.age+","+this.requireData.income+","+this.requireData.childAge+","+this.requireData.socialSec+","+this.requireData.purchaseType)
						// console.log(this.userInfo.nickName)
						this.completeRequire();	
					}else{
						this.propmtText();
					}
				}

				$('.procedure-box').css({'left':-this.clickNextNum*7.5+"rem"})
			});
			$('.previous-step').on('click',()=>{
				if(this.clickNextNum != 0){
					this.clickNextNum -= 1;
					$('.next-step-old').text("下一步");
					if(this.clickNextNum == 0){
						$('.next-step').show();
						$('.previous-next-step').hide();
					}
					$('.procedure-box').css({'left':-this.clickNextNum*7.5+"rem"})
				}
			});
		},
		methods:{
			completeRequire:function(){
				this.lastResult = this.requireData.age+","+this.requireData.income+","+this.requireData.childAge+","+this.requireData.socialSec+","+this.requireData.purchaseType;
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"finishrequire",
					cache:false,
					data:{
						result:this.lastResult,
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
							var hrefStr = res.data.href;
							hrefStr = hrefStr+"&result="+this.lastResult+"&fullName="+this.userInfo.nickName+"&sign="+this.signToken;
							// console.log(hrefStr)
							window.location.href = hrefStr;
						}
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
			propmtText:function(){
				$('.prompt').text("请选择！");
				$('.prompt').fadeIn();
				setTimeout(function(){$('.prompt').fadeOut();},1000);
			},
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
	.require-assess{
		width: 100%;
		height: 12.87rem;
		box-sizing: border-box;
		padding-top: 0.9rem;
		background: #fff;
		.require-assess-header{
			position: fixed;
			top: 0;
			width: 100%;
			height: 0.9rem;
			font-size: 0.34rem;
			color: #404040;
			text-align: center;
			box-sizing: border-box;
			line-height: 0.9rem;
			border-bottom: 1px solid #e6e6e6;
			background: #fff;
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
		.procedure-box-wrapper{
			overflow: hidden;
			width: 100%;
			height:9.8rem;
			position: relative;
			.prompt{
				width: 3.4rem;
				height: 0.9rem;
				font-size:0.28rem;
				color: #fff;
				text-align: center;
				line-height: 0.9rem;
				position: absolute;
				background: rgba(0,0,0,0.7);
				border-radius: 0.08rem;
				z-index: 9;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				display: none;
			}
			.procedure-box{
				display: block;
				width: auto;
				height:100%;
				position: absolute;
				top: 0;
				left: 0;
				-moz-transition: left 0.6s ease-out; 
				-webkit-transition: left 0.6s ease-out; 
				-o-transition: left 0.6s ease-out; 
				transition: left 0.6s ease-out;
				.age-cover{
					width: 7.5rem;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
					background: rgba(0,0,0,0.3);
					z-index: 999;
					font-size:0.32rem;
					.procedure-begin-box{
						width: 6rem;
						height: 5.4rem;
						background: #fff;
						position: absolute;
						left: 0;
						top: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						border-radius: 0.08rem;
						box-sizing: border-box;
						padding-top: 0.3rem;
						.procedure-begin-title{
							width: 100%;
							height: 0.52rem;
							color:#404040;
							text-align: center;
							line-height:0.52rem;
						}
						.procedure-begin-describe{
							width: 100%;
							height: 0.44rem;
							font-size:0.28rem;
							color:#c7c7c7;
							text-align: center;
							line-height:0.44rem;
						}
						.procedure-begin-img{
							width: 100%;
							height: 2.24rem;
							background: url('../img/proceduresbegin.png') no-repeat center bottom;
							background-size: 3.12rem 2rem;
						}
						.procedure-begin-btn{
							width: 3.12rem;
							height: 0.8rem;
							color: #fff;
							background: #008bfa;
							margin: 0.5rem auto 0;
							text-align: center;
							line-height: 0.8rem;
							border-radius: 0.08rem;
						}
					}
				}
				li{
					width: 7.5rem;
					height:100%;
					display: block;
					float: left;
				}
				.procedure-logo{
					width: 100%;
					height: 3rem;
				}
				.procedure-question{
					width: 100%;
					height: 0.96rem;
					text-align: center;
					font-size:0.36rem;
					color: #404040;
				}
				.answer-box{
					width: 100%;
					.answer-list{
						width: 100%;
						height: 0.8rem;
						margin-bottom: 0.3rem;
						label{
							display: block;
							width: 3rem;
							height: 100%;
							text-align: center;
							line-height:0.8rem;
							font-size:0.32rem;
							color:#404040;
							margin: 0 auto;
							background: #e9e9e9;
							border-radius:0.8rem;
						}
						label.active{
							background: #ffa300;
							color:#fff;	
						}
						input{
							width: 3rem;
							height: 100%;
							margin: 0 auto;
							display: none;
						}
					}
				}
				.age-box{
					.procedure-logo{
						background: url('../img/procedure-logo 1.png') no-repeat center center;
						background-size: 2.4rem 2rem
					}
				}
				.income-box{
					.procedure-logo{
						background: url('../img/procedure-logo 2.png') no-repeat center center;
						background-size: 2.4rem 2rem
					}
				}
				.child-age-box{
					.procedure-logo{
						background: url('../img/procedure-logo 3.png') no-repeat center center;
						background-size: 2.4rem 2rem
					}
				}
				.social-security-box{
					.procedure-logo{
						background: url('../img/procedure-logo 4.png') no-repeat center center;
						background-size: 2.4rem 2rem
					}
				}
				.insurance-box{
					.procedure-logo{
						background: url('../img/procedure-logo 5.png') no-repeat center center;
						background-size: 2.4rem 2rem
					}
					.answer-box{
						.answer-list{
							width: 50%;
							float: left;
						}
					}
				}
			}
			.next-step{
				width: 100%;
				height: 0.9rem;
				line-height:0.9rem;
				text-align: center;
				font-size:0.34rem;
				color: #fff;
				background: #e9e9e9;
				position: absolute;
				bottom: 0;
			}
			.next-step-active{
				width: 100%;
				height: 0.9rem;
				line-height:0.9rem;
				text-align: center;
				font-size:0.34rem;
				color: #fff;
				background: #008bfa;
				position: absolute;
				bottom: 0;
			}
			.previous-next-step{
				width: 100%;
				height: 0.9rem;
				box-sizing: border-box;
				border: 1px solid #008bfa;
				position: absolute;
				bottom: 0;
				display: none;
				div{
					width: 50%;
					height: 100%;
					line-height:0.9rem;
					text-align: center;
					font-size:0.34rem;
					float: left;
				}
				.previous-step{
					background: #fff;
					color: #008bfa;					
				}
				.next-step-old{
					background: #008bfa;
					color: #fff;
				}
			}
		}
	}
</style>
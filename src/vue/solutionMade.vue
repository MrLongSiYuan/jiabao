<template>
	<div class="solution-made">
		<div class="solution-made-header">
			<div class="goback-Btn" v-link="{name:'artlist'}"></div>
			方案定制
		</div>
		<div class="solution-wrapper" v-if="!successFlag">
			<div class="solution-banner"></div>
			<div class="bespoke-people">今日已有<i>{{peopleNumber}}</i>人预约</div>
			<ul class="fill-in-information">
				<li>
					<div class="your-name">投保人姓名</div>
					<div class="name-input-box"><input type="text" name="" placeholder="请输入姓名"></div>
				</li>
				<li>
					<div class="your-phone-number">手机号码</div>
					<div class="phone-number-input-box"><input type="tel" name="" maxlength="11" placeholder="请输入您的手机号码"></div>
				</li>
				<li>
					<div class="your-age">年龄</div>
					<div class="age-input-box"><input type="tel" name="" placeholder="周岁"></div>
				</li>
				<li>
					<div class="your-smoke">是否吸烟</div>
					<div class="smoke-result">{{smokeFlag}}</div>
				</li>
				<li>
					<div class="your-budget">年缴保费预算</div>
					<div class="budget-input-box"><input type="tel" name="" placeholder="元"></div>
				</li>
				<li>
					<div class="your-demand">保障需求</div>
					<ul class="demand-box clearfloat">
						<li v-bind:class="{ active: demandFlag.zhongjiflag }" id="zhongji-box">
							<label for="zhongji">重疾</label>
							<input type="checkbox" name="" id="zhongji">
						</li>
						<li v-bind:class="{'active' : demandFlag.licaiflag}" id="licai-box">
							<label for="licai">理财</label>
							<input type="checkbox" name="" id="licai">
						</li>
						<li v-bind:class="{'active' : demandFlag.renshouflag}" id="renshou-box">
							<label for="renshou">人寿</label>
							<input type="checkbox" name="" id="renshou">
						</li>
						<li v-bind:class="{'active' : demandFlag.yiliaoflag}" id="yiliao-box">
							<label for="yiliao">医疗</label>
							<input type="checkbox" name="" id="yiliao">
						</li>
						<li v-bind:class="{'active' : demandFlag.yiwaiflag}" id="yiwai-box">
							<label for="yiwai">意外</label>
							<input type="checkbox" name="" id="yiwai">
						</li>
					</ul>
				</li>
			</ul>
			<div class="submit-box">
				<div class="prompt"></div>
				<div class="submit-btn">预约顾问</div>
			</div>
		</div>
		<div class="solution-success" v-if="successFlag">
			<div class="success-logo"></div>
			<div class="success-text">{{nickname}}先生，您的预约已成功提交！</div>
			<div class="success-content">我们将在约定的时间段内，致电和您确认信息。请保持手机畅通，感谢您的预约！</div>
		</div>
		<div class="process-box">
			<div class="process-title">方案定制流程</div>
			<div class="process-chart-box">
				<div class="process-chart-top">
					<img src="../img/solution01@3x.png">
					<img src="../img/solution02@3x.png">
				</div>
				<div class="process-chart-top-text">
					<div class="text-left">提交预约信息</div>
					<div class="text-right">顾问致电确认信息</div>
				</div>
				<div class="process-chart-middle">
				</div>
				<div class="process-chart-bottom">
					<img src="../img/solution03@3x.png">
					<img src="../img/solution04@3x.png">
				</div>
				<div class="process-chart-bottom-text">
					<div class="text-left">提交预约信息</div>
					<div class="text-right">顾问致电确认信息</div>
				</div>
			</div>
		</div>
		<div class="team-box">
			<div class="team-title">
				超百人专家顾问团队，只为您私人订制
			</div>
			<ul class="advisers">
				<li><img src="../img/advisers1.png"></li>
				<li><img src="../img/advisers2.png"></li>
				<li><img src="../img/advisers3.png"></li>
				<li><img src="../img/advisers4.png"></li>
			</ul>
		</div>
		<div class="service-number-box">
			<div class="service-number">
				<div class="service-text">24小时客服热线</div>
				<div class="service-phone">400-852-8686</div>
			</div>
		</div>
		<div class="cover">
			<div class="smoke-box">
				<div class="smoke-input-box">
					<label for="smoke-yes">是</label>
					<input type="radio" name="smoke" id="smoke-yes" v-model="smokeFlag" value="是">
				</div>
				<div class="smoke-input-box">
					<label for="smoke-no">否</label>
					<input type="radio" name="smoke" id="smoke-no" v-model="smokeFlag" value="否">
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store';
	import {isLogin, setUserInfo} from '../vuex/actions'
    import {getLoginState, getUserInfo,getSignToken} from '../vuex/getters';
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
	var md5 = require('md5');
	export default{
		data:function(){
			return {
				peopleNumber:'',
				smokeFlag:'否',
				nickname:'',
				successFlag:false,
				demandFlag:{
					zhongjiflag:false,
					licaiflag:false,
					renshouflag:false,
					yiliaoflag:false,
					yiwaiflag:false,
				},
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
			var cover = document.getElementsByClassName('cover')[0];
			cover.addEventListener("touchmove",function(e){
				e.preventDefault();
			});
			this.getBespokeData();
			$('.smoke-result').on('click',function(){
				$('.cover').show();
			});
			$('.smoke-box').on('click',()=>{
				$('.smoke-result').css({'color':"#404040"});
				$('.cover').hide();
			});

			$('.demand-box #zhongji-box input').on('click',()=>{
				let temp = $('#zhongji').prop('checked');
				this.demandFlag.zhongjiflag = temp;
			});
			$('.demand-box #licai-box input').on('click',()=>{
				let temp = $('#licai').prop('checked');
				this.demandFlag.licaiflag = temp;
			});
			$('.demand-box #renshou-box input').on('click',()=>{
				let temp = $('#renshou').prop('checked');
				this.demandFlag.renshouflag = temp;
			});
			$('.demand-box #yiliao-box input').on('click',()=>{
				let temp = $('#yiliao').prop('checked');
				this.demandFlag.yiliaoflag = temp;
			});
			$('.demand-box #yiwai-box input').on('click',()=>{
				let temp = $('#yiwai').prop('checked');
				this.demandFlag.yiwaiflag = temp;
			});

			$('.submit-btn').on('click',()=>{
				let telReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}$/;
				let name = $('.name-input-box input').val();
				let age = $('.age-input-box input').val();
				let smoke = $('.smoke-result').text() == "是" ? 1:0;
				let budget = $('.budget-input-box input').val();
				let phoneNumber = $('.phone-number-input-box input').val();
				var demand = '';
				if(this.demandFlag.zhongjiflag) demand += "重疾 ";
				if(this.demandFlag.licaiflag) demand += "理财 ";
				if(this.demandFlag.renshouflag) demand += "人寿 ";
				if(this.demandFlag.yiliaoflag) demand += "医疗 ";
				if(this.demandFlag.yiwaiflag) demand += "意外 ";
				if(name.length == 0){
					$('.prompt').text("请输入您的姓名！");
					$('.prompt').fadeIn();
					setTimeout(function(){$('.prompt').fadeOut();},1000);
				}else if(age.length == 0){
					$('.prompt').text("请输入您的年龄！");
					$('.prompt').fadeIn();
					setTimeout(function(){$('.prompt').fadeOut();},1000);
				}else if(budget.length == 0){
					$('.prompt').text("请输入您的预算！");
					$('.prompt').fadeIn();
					setTimeout(function(){$('.prompt').fadeOut();},1000);
				}else if(!telReg.test(phoneNumber)){
					$('.prompt').text("请输入正确的手机号码！");
					$('.prompt').fadeIn();
					setTimeout(function(){$('.prompt').fadeOut();},1000);
				}
				if(name.length>0 && age.length>0 && budget.length>0 && telReg.test(phoneNumber)){
					this.postResult(name,age,smoke,budget,demand,phoneNumber)
				}
			});
		},
		methods:{
			getBespokeData:function(){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"consultqty",
					cache:false,
					data:{
						consultType:'2',
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
							this.peopleNumber = res.data.samedayQty;
						}
					}
				});	
			},
			postResult:function(name,age,smoke,budget,demand,phoneNumber){
				$.ajax({
					type:"post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url:store.state.hostUrl+"plancustomized",
					cache:false,
					data:{
						insurName:name,
						age:age,
						isSmoke:smoke,
						bfbgt:budget,
						bzreq:demand,
						mobile:phoneNumber,
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
						if(res.retcode == 1000){
							this.successFlag = true;
							this.nickname = name;
						}
					}
				});	
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
	.solution-made{
		.solution-made-header{
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
		.solution-wrapper{
			width: 100%;
			margin-top: 0.9rem;
			.solution-banner{
				width: 100%;
				height: 2.8rem;
				background: url('../img/solutionbg@3x.png') no-repeat;
				background-size: 100% 100%;
			}
			.bespoke-people{
				width: 100%;
				box-sizing:border-box;
				padding: 0 0.25rem;
				font-size:0.26rem;
				color: #c7c7c7;
				background: #fff;
				height: 0.6rem;
				line-height: 0.6rem;
				i{
					font-size:0.28rem;
					color: #e8382b;
					margin: 0 0.05rem;
				}
			}
			.fill-in-information{
				width: 100%;
				height: 6.2rem;
				background: #fff;
				margin-top: 0.2rem;
				display: block;
				li{
					display: block;
					width: 100%;
					height: 0.92rem;
					box-sizing: border-box;
					border-top:1px solid #f3f3f3;
					font-size:0.28rem;
					line-height: 0.9rem;
					div{
						width: 50%;
						height: 100%;
						box-sizing:border-box;
						float: left;
						color: #7c7c7c;
					}
				}
				li:nth-child(1){
					border-top:none;
				}
				li:nth-child(6){
					height: 1.58rem;
					.your-demand{
						width: 100%;
						padding-left:0.25rem;
						height: 0.82rem;
						line-height: 0.9rem;
						float: none;
					}
					.demand-box{
						display: block;
						box-sizing: border-box;
						width: 100%;
						height: 0.5rem;
						padding:0 0.25rem;
						li{
							display:block;
							float: left;
							box-sizing: border-box;
							height: 100%;
							width: 1.2rem;
							font-size:0.24rem;
							line-height: 0.5rem;
							color: #c7c7c7;
							text-align: center;
							border:1px solid #f3f3f3;
							border-radius:0.06rem;
							margin-left: 0.25rem;
							input{
								width: 100%;
								height: 100%;
								display:none;
								font-size:0.28rem;
							}
							label{
								display:block;
								width: 100%;
								height: 100%;
							}
						}
						li:nth-child(1){
							margin-left: 0;
						}
						li.active{
							border:1px solid #008cfa;
							color: #008cfa;
						}
					}
				}
				.your-name,.your-age,.your-smoke,.your-budget,.your-phone-number{
					padding-left: 0.25rem;
				}
				.name-input-box,.age-input-box,.budget-input-box,.phone-number-input-box{
					padding-right: 0.25rem;
					input{
						display: block;
						width: 100%;
						height: 100%;
						text-align: right;
						color: #404040;
						outline: none;
						font-size:0.28rem;
					}
					input::-webkit-input-placeholder{
						color: #c7c7c7;
					}
				}
				.smoke-result{
					text-align: right;
					color: #404040;
					padding-right: 0.25rem;
					color: #c7c7c7;
				}
			}
			.submit-box{
				width: 100%;
				height: 1.74rem;
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
					left: 2rem;
					top: -2rem;
					display: none;
				}
				.submit-btn{
					width: 6.4rem;
					height: 0.8rem;
					font-size:0.32rem;
					line-height: 0.8rem;
					background: #008bfa;
					text-align: center;
					color: #fff;
					border-radius: 0.08rem;
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom:0;
					margin: auto;
				}
			}
		}
		.solution-success{
			width: 100%;
			height: 3.54rem;
			background: #fff;
			margin:1.1rem 0 0.2rem;
			box-sizing:  border-box;
			padding:0 0.25rem;
			.success-logo{
				width: 100%;
				height: 1.52rem;
				background: url('../img/success.png') no-repeat center center;
				background-size: 0.78rem 0.78rem;
			}
			.success-text{
				width: 100%;
				height: 0.76rem;
				line-height: 0.76rem;
				font-size:0.4rem;
				color: #008bfa;
			}
			.success-content{
				font-size: 0.24rem;
				color: #7c7c7c;
				line-height: 1.6;
				text-align: justify;
			}
		}
		.process-box{
			width: 100%;
			padding:0 0.25rem;
			background: #fff;
			box-sizing: border-box;
			.process-title{
				width: 100%;
				height: 0.9rem;
				border-bottom: 1px solid #f3f3f3;
				font-size:0.28rem;
				text-align: center;
				line-height: 0.9rem;
				box-sizing: border-box;
				color: #404040;
			}
			.process-chart-box{
				width: 100%;
				height: 5rem;
				box-sizing: border-box;
				padding:0.4rem 0.85rem;
				.process-chart-top{
					width: 100%;
					height: 1.22rem;
					background: url('../img/solutionarrowR.png') no-repeat center center;
					background-size: 0.47rem 0.72rem;
					img{
						width: auto;
						height: 100%;
					}
					img:nth-child(1){
						float: left;
					}
					img:nth-child(2){
						float: right;
					}
				}
				.text-left{
					float: left;
					padding-left: 0.07rem;
				}
				.text-right{
					float: right;
					text-align: right;
					margin-right: -0.15rem;
				}
				.process-chart-top-text,.process-chart-bottom-text{
					width: 100%;
					height: 0.62rem;
					div{
						width: 50%;
						height: 100%;
						font-size:0.24rem;
						color: #404040;
						line-height: 0.62rem;
						box-sizing: border-box;
					}
				}
				.process-chart-middle{
					width: 100%;
					height: 0.94rem;
					background: url('../img/solutionarrowB.png') no-repeat 4.17rem center;
					background-size: 0.72rem 0.47rem;
				}
				.process-chart-bottom{
					width: 100%;
					height: 1.22rem;
					background: url('../img/solutionarrowL.png') no-repeat center center;
					background-size: 0.47rem 0.72rem;
					img{
						width: auto;
						height: 100%;
					}
					img:nth-child(1){
						float: left;
					}
					img:nth-child(2){
						float: right;
					}
				}
			}
		}
		.team-box{
			width: 100%;
			height: 2.72rem;
			background: #fff;
			margin-top: 0.2rem;
			.team-title{
				width: 100%;
				height: 0.86rem;
				text-align: center;
				line-height: 0.86rem;
				font-size:0.28rem;
				color: #404040;
			}
			.advisers{
				display:block;
				width: 100%;
				height: 1.86rem;
				box-sizing: border-box;
				padding:0.3rem 0.5rem 0;
				li{
					display:block;
					width: 1.2rem;
					height: 1.2rem;
					float: left;
					margin-left: 0.56rem;
					img{
						width: 100%;
						height: 100%;
						float:left;
					}
				}
				li:nth-child(1){
					margin-left: 0;
				}
			}
		}
		.service-number-box{
			width: 100%;
			height: 1.22rem;
			background:#fff;
			margin-top:0.2rem;
			position: relative;
			.service-number{
				position: absolute;
				width: 3.2rem;
				height: 0.7rem;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				box-sizing: border-box;
				padding-left: 0.68rem;
				background: url('../img/solutioncall@3x.png') no-repeat left center;
				background-size: 0.52rem 0.52rem;
				.service-text{
					font-size:0.22rem;
					color: #c7c7c7;
				}
				.service-phone{
					font-size: 0.3rem;
					color: #008bfa;
				}
			}
		}
		.cover{
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			background: rgba(0,0,0,0.3);
			display: none;
			.smoke-box{
				width: 6rem;
				height: 1.96rem;
				background: #fff;
				border-radius: 0.08rem;
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				input{
					display:none;
				}
				.smoke-input-box{
					width: 100%;
					height: 50%;
					box-sizing: border-box;
				}
				.smoke-input-box:nth-child(1){
					border-bottom: 1px solid #f3f3f3;
				}
				label{
					display: block;
					width: 100%;
					height: 100%;
					text-align: center;
					line-height: 0.98rem;
					font-size:0.34rem;
					color: #404040;
				}
			}
		}

	}
</style>
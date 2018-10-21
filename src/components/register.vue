<template>
    <div id="registerBox">
        <div class="ins-header">
            <div class="goback-Btn" v-link="{name:'login'}"></div>
            注册账号
        </div>
        <div class="register-con">
            <div class="register-account">
                <div class="register-phone register-write">
                    <span>手机号</span>
                    <input type="text" v-model="registerPhone" value="" placeholder="请输入手机号码"/>
                </div>
                <div class="register-phone register-write">
                    <span>密&nbsp;&nbsp;&nbsp;码</span>
                    <input type="password" class="register-password" v-model="registerPassword" value="" placeholder="请输入6-18位密码"/>
                </div>
                <div class="register-phone register-write">
                    <div class="register-captcha">
                        <span>验证码</span>
                        <input class="input-register-code" type="text" v-model="registerCode" value="" placeholder="请输入短信验证码"/>
                    </div>
                    <div class="btn-captcha-box">
                        <button class="btn-captcha" @click="btnGetCode" >获取验证码</button>
                    </div>
                </div>
                <div class="ready-user-protocol">
                    <div class="agree-checkbox">
                        <input id="label-agree" class="has-checked" checked="checked" type="checkbox" value="" name=""/>
                    </div>
                    <label for="label-agree">&nbsp;已阅读并同意</label><span class="btn-user-protocol" v-link="{name : 'readprotocol'}">&nbsp;《佳保保险用户协议》</span>
                </div>
                <div class="btn-register-box">
                    <button class="btn-register" @click="btnRegister">注册</button>
                </div>
            </div>
            <div class="register-box">
                <span class="login" v-link="{name:'login'}">立即登录</span>
                <span class="forget" v-link="{name:'forget'}">忘记密码？</span>
            </div>
        </div>
        <div class="register-tips">
            请输入手机号或密码
        </div>
        <!--register success prop -->
        <div class="register-success-cover">
            <div class="register-success-box">
                <div class="register-success-img">
                    <img src="../img/register-success.png"/>
                    <span>&nbsp;注册成功</span>
                </div>
                <p v-link="{name:'login'}">欢迎加入佳保，立即去登陆</p>
            </div>
        </div>
    </div>
</template>
<script>
    var regTel = /^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}$/;
    var regPsw = /^[a-z0-9_-]{6,18}$/;
    var regCode = /\d{6}/;
    var waitTime = 60;
    var md5 = require('md5');
    import store from '../vuex/store.js'
    export default{
        data : function() {
            return{
                registerPhone : '',
                registerPassword : '',
                registerCode : ''
            }
        },
        ready:function(){
            //console.log(md5(321))
        },
        store : store,
        methods:{
            //获取验证码
            btnGetCode : function() {
                if(regTel.test(this.registerPhone) && regPsw.test(this.registerPassword)){
                    $.ajax({
                        type:"post",
                        url:store.state.hostUrl+"getvalidcode",
                        data:{
                            "mobile" : this.registerPhone,
                            "validType" : 1,
                            "sendType" : 1
                        },
                        success: function (d) {
                            //console.log(d);
                            if(d.retcode == 1000){
                                getCode($(".btn-captcha"));
                            }else if (d.retcode == 2301) {
                                $('.register-tips').html('发送过于频繁').fadeIn('slow');
                                setTimeout(function () {
                                    $('.register-tips').fadeOut('slow');
                                }, 1500);
                            }else if (d.retcode == 2302) {
                                $('.register-tips').html('您今天发送次数过多').fadeIn('slow');
                                setTimeout(function () {
                                    $('.register-tips').fadeOut('slow');
                                }, 1500);
                            }
                        }
                    });
                }else{
                    $('.register-tips').fadeIn('slow');
                    setTimeout(function(){
                        $('.register-tips').fadeOut('slow');
                    },1500);
                }
            },
            //注册
            btnRegister : function(){
                // judge tel or password
                if(!regTel.test(this.registerPhone) || !regPsw.test(this.registerPassword)){
                    $('.register-tips').fadeIn('slow');
                    setTimeout(function(){
                        $('.register-tips').fadeOut('slow');
                    },1500);
                }
                // judge code
                if(regTel.test(this.registerPhone) && regPsw.test(this.registerPassword) && !regCode.test(this.registerCode)){
                    $('.register-tips').html('验证码错误').fadeIn('slow');
                    setTimeout(function(){
                        $('.register-tips').fadeOut('slow');
                    },1200);
                }
                // judge user protocol
                if(regTel.test(this.registerPhone) && regPsw.test(this.registerPassword) && regCode.test(this.registerCode) && !$('.has-checked').is(':checked')){
                    $('.register-tips').html('请同意并勾选用户协议').fadeIn('slow');
                    setTimeout(function(){
                        $('.register-tips').fadeOut('slow');
                    },1500);
                }
                // register success
                var hash = md5(this.registerPassword);
                if(regTel.test(this.registerPhone) && regPsw.test(this.registerPassword) && regCode.test(this.registerCode) && $('.has-checked').is(':checked')){
                    $.ajax({
                        type:"post",
                        url:store.state.hostUrl+"register",
                        data:{
                            "userAccount" : this.registerPhone,
                            "password" : hash,
                            "validcode" : this.registerCode,
                            "registerWay" : 7
                        },
                        success:function(d){
                            //console.log(d);
                            if(d.retcode == 2101){
                                $('.register-tips').html('您已经注册过了').fadeIn('slow');
                                setTimeout(function(){
                                    $('.register-tips').fadeOut('slow');
                                },1500);
                            }else if(d.retcode == 2102){
                                $('.register-tips').html('验证码错误').fadeIn('slow');
                                setTimeout(function(){
                                    $('.register-tips').fadeOut('slow');
                                },1500);
                            }else if(d.retcode == 1000){
                                $('.register-success-cover').show();
                            }
                        }
                    });
                }
            }
        }
    };
    // count down 60s
    function getCode(O) {
        if (waitTime == 0) {
            O.attr("disabled",false);
            O.html("获取验证码");
            waitTime = 60;
        } else {
            O.attr("disabled", true);//倒计时过程中禁止点击按钮
            O.html(waitTime + "秒");
            waitTime--;
            setTimeout(function() {
                getCode(O);
            }, 1000)
        }
    }
    // after input password ,allow click the button of getting code
    $('.register-password').on('input',function(){
        var pswStr = $('.register-password').val().length;
        if(pswStr >= 6 && pswStr <= 12){
            $('.btn-captcha').attr('disabled',false).css({
                background:'#ffe401',
                color:'#404040'
            });
        }else{
            $('.btn-captcha').attr('disabled',true).css({
                background:'#afb8bc',
                color:'#fff'
            });
        }
    });
</script>
<style>
    .register-con {
        background: #fff;
        font-size: 0.28rem;
        margin-top:1.2rem;
    }
    .register-account{
        padding:0.2rem 0.35rem;
        width:6.8rem;
        height:auto;
        margin-top:0.3rem;
    }
    .register-account input,.register-account button{
        border:none;
        background:none;
        outline:none;
    }
    .register-write{
        width:6.78rem;
        height:0.78rem;
        line-height:0.78rem;
        border:1px solid #dddada;
        margin-bottom:0.25rem;
    }
    .register-write span{
        padding:0 0.28rem;
        color:#494949;
    }
    .register-write input{
        color: #b1b1b1;
        height:0.28rem;
        padding:0.2rem 0 0.3rem 0;
        font-size:0.28rem;
        width:5rem;
    }
    .register-captcha{
        width:4.78rem;
        float:left;
    }
    .register-captcha .input-register-code{
        width:3.2rem;
    }
    .btn-captcha-box{
        float:left;
        width:2rem;
        height:0.78rem;
        background:#f2f2f2;
        line-height:0.78rem;
        text-align:center;
    }
    .btn-captcha{
        color:#7c7c7c;
        font-size:0.26rem;
    }
    .btn-register-box{
        width:6.78rem;
        height:0.78rem;
        /*background:rgba(0,136,254,0.6);*/
        border-radius:3px;
        text-align:center;
        line-height:0.8rem;
        margin-top:0.35rem;
        border:1px solid #10b1ff;
        background: -webkit-linear-gradient(#025dff, #10b1ff);
        background: -o-linear-gradient(#025dff, #10b1ff);
        background: -moz-linear-gradient(#025dff, #10b1ff);
        background: linear-gradient(#025dff, #10b1ff); /* 从上到下 */
    }
    .btn-register{
        width:100%;
        height:100%;
        font-size:0.28rem;
        color:white;
    }
    .register-box{
        padding:0 0.35rem;
        width:6.8rem;
        height:0.96rem;
        line-height:0.96rem;
    }
    .register-box span{
        font-size:0.24rem;
        color:#7c7c7c;
    }
    .login{
        float:left;
    }
    .forget{
        float:right;
    }
    .ready-user-protocol{
        width:100%;
        height:0.22rem;
        font-size:0.22rem;
        margin-bottom:0.6rem;
    }
    .ready-user-protocol .agree-checkbox{
        float:left;
    }
    .ready-user-protocol .btn-user-protocol{
        color:#1b96ff;
    }
    .register-tips{
        display:none;
        position:absolute;
        bottom:0;
        left:0;
        top:0;
        right:0;
        margin:auto;
        width:4.8rem;
        height:0.8rem;
        background:rgba(64,64,64,0.7);
        font-size:0.28rem;
        text-align:center;
        line-height:0.8rem;
        color:white;
        border-radius:5px;
    }
    .register-success-cover{
        display:none;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.2);
    }
    .register-success-box{
        width:5.6rem;
        height:2.8rem;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        background:#fff;
    }
    .register-success-box p{
        font-size:0.28rem;
        color:#0089ff;
        text-align: center;
    }
    .register-success-img{
        width:3rem;
        height:0.7rem;
        font-size:0.48rem;
        line-height:0.7rem;
        color:#404040;
        margin:0.8rem 0 0.24rem 1.3rem;
    }
    .register-success-img img{
        display:block;
        float:left;
        width:0.7rem;
        height:0.7rem;
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
        position:fixed;
        width: 0.9rem;
        height:0.9rem;
        left: 0;
        top: 0;
        background: url('../img/topbar_back@3x.png') no-repeat center center;
        background-size: 80% 80%;
    }
</style>
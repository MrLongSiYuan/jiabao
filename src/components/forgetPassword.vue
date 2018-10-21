<template>
    <div id="forgetPassword">
        <div class="ins-header">
            <div class="goback-Btn" v-link="{name:'login'}"></div>
            忘记密码
        </div>
        <div class="forget-account">
            <div class="forget-phone forget-write">
                <span>手机号</span>
                <input type="text" value="" v-model="forgetPhone" placeholder="请输入手机号码"/>
            </div>
            <div class="forget-phone forget-write">
                <div class="forget-captcha">
                    <span>验证码</span>
                    <input class="forget-input-code" v-model="forgetCode" type="text" value="" placeholder="请输入短信验证码"/>
                </div>
                <div class="btn-forget-captcha">
                    <button class="btn-get-captcha" @click="getPasswordCode">
                        获取验证码
                    </button>
                </div>
            </div>
            <div class="forget-new-password forget-write">
                <span>新密码</span>
                <input type="password" value="" v-model="newPassword" placeholder="请输入6-18位新密码"/>
            </div>
            <div class="btn-sure-box">
                <button class="btn-sure" @click="btnAlterPassword">确定</button>
            </div>
        </div>
        <div class="forget-tips">
            账号错误
        </div>
    </div>
</template>
<script>
    var regTel = /^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}$/;
    var regCode = /\d{6}/;
    var regPassword = /^[0-9a-zA-Z_#]{6,18}$/;
    var waitTime = 60;
    var md5 = require('md5');
    import store from '../vuex/store.js'
    export default {
        data : function() {
            return {
                "forgetPhone" : '',
                "forgetCode" : '',
                "newPassword" : ''
            }
        },
        store: store,
        methods : {
            getPasswordCode : function() {  // 获取验证码
                if(this.forgetPhone == '') {
                    $('.forget-tips').html('手机号不能为空').fadeIn('slow');
                    setTimeout(function () {
                        $('.forget-tips').fadeOut('slow');
                    }, 1500);
                }else{
                    if( regTel.test(this.forgetPhone)){
                        var data = {
                            "mobile" : this.forgetPhone,
                            "validType" : 1,
                            "sendType" : 2  // find password
                        };
                        $.post(store.state.hostUrl+'getvalidcode',data,(d) => {
                            //console.log(d)
                            if(d){
                                if(d.retcode == 1000){
                                    getCode($(".btn-get-captcha"));
                                }else if (d.retcode == 2301) {
                                    $('.forget-tips').html('发送过于频繁').fadeIn('slow');
                                    setTimeout(function () {
                                        $('.forget-tips').fadeOut('slow');
                                    }, 1500);
                                }else if (d.retcode == 2302) {
                                    $('.forget-tips').html('您今天发送次数过多').fadeIn('slow');
                                    setTimeout(function () {
                                        $('.forget-tips').fadeOut('slow');
                                    }, 1500);
                                }
                            }
                        })
                    }else{
                        $('.forget-tips').html('请输入正确的手机号码').fadeIn('slow');
                        setTimeout(function () {
                            $('.forget-tips').fadeOut('slow');
                        }, 1500);
                    }
                }
            },
            btnAlterPassword : function() {
                // 点击 确定 时 判断是否输入手机号和验证码
                if(regTel.test(this.forgetPhone) && regCode.test(this.forgetCode)) {
                    // 输入手机号和验证码之后 判断 是否输入 新密码
                    if(regPassword.test(this.newPassword)){
                        var newHash = md5(this.newPassword);
                        //console.log(newHash);
                        var sureData = {
                            "userAccount" : this.forgetPhone,
                            "validcode" : this.forgetCode,
                            "newpwd" : newHash
                        };
                        $.post(store.state.hostUrl + 'findpwd',sureData,(res) => {
                            //console.log(res);
                            if(res.retcode == 2102){
                                $('.forget-tips').html('验证码错误').fadeIn('slow');
                                setTimeout(function () {
                                    $('.forget-tips').fadeOut('slow');
                                }, 1500);
                            }else if(res.retcode == 1000){
                                $('.forget-tips').html('密码找回成功').fadeIn('slow');
                                setTimeout(function(){
                                    $('.forget-tips').fadeOut('slow');
                                },1500);
                                this.$router.go({name : 'login'});
                            }
                        })
                    }else{
                        $('.forget-tips').html('请输入新密码').fadeIn('slow');
                        setTimeout(function () {
                            $('.forget-tips').fadeOut('slow');
                        }, 1500);
                    }
                }else{
                    $('.forget-tips').html('手机号和验证码不能为空').fadeIn('slow');
                    setTimeout(function () {
                        $('.forget-tips').fadeOut('slow');
                    }, 1500);
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
</script>
<style>
    .forget-account{
        padding:0.25rem 0.35rem;
        width:6.8rem;
        height:auto;
        margin-top:1.3rem;
        font-size:0.28rem;
        background:#fff;
    }
    .forget-account input,.forget-account button{
        border:none;
        background:none;
        outline:none;
    }
    .forget-write{
        width:6.78rem;
        height:0.78rem;
        line-height:0.78rem;
        border:1px solid #dddada;
        margin-bottom:0.25rem;
    }
    .forget-write span{
        padding:0 0.28rem;
        color:#494949;
    }
    .forget-write input{
        color:#c3c3c3;
        height:0.28rem;
        padding:0.2rem 0 0.3rem 0;
        font-size:0.28rem;
    }
    .forget-captcha{
        width:4.78rem;
        float:left;
    }
    .forget-captcha .forget-input-code{
        width:3.2rem;
    }
    .btn-forget-captcha{
        float:left;
        width:2rem;
        height:0.78rem;
        background:#f2f2f2;
        line-height:0.78rem;
        text-align:center;
    }
    .btn-get-captcha{
        color:#7c7c7c;
        font-size:0.26rem;
    }
    .btn-sure-box{
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
    .btn-sure{
        width:100%;
        height:100%;
        font-size:0.28rem;
        color:white;
    }
    .forget-tips{
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
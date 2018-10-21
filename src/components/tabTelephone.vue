<template>
    <div class="tab-account">
        <div class="tab-phone tab-write">
            <span>手机号</span>
            <input type="text" value="" v-model="quickTel" placeholder="请输入手机号码"/>
        </div>
        <div class="tab-phone tab-write">
            <div class="tab-captcha">
                <span>验证码</span>
                <input class="input-code" v-model="quickCode" type="text" value="" placeholder="请输入短信验证码"/>
            </div>
            <div class="btn-captcha-box">
                <button class="btn-captcha" @click="quickGetCode">
                    获取验证码
                </button>
            </div>
        </div>
        <div class="btn-login-box">
            <button class="btn-login" @click="quickLogin">登录</button>
        </div>
        <div class="quick-login-tips">
            账号错误
        </div>
    </div>
</template>
<script>
    var telReg = /^1(3[0-9]|4[57]|[0-35-9]|7[01678]|8[0-9])\d{8}$/;
    var codeReg = /\d{6}/;
    var waitTime = 60;
    import store from '../vuex/store'
    import {isLogin, setUserInfo} from '../vuex/actions'
    import { getLoginState,getUserInfo } from '../vuex/getters'
    import { setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
    export default {
        data : function() {
            return {
                quickTel : '',
                quickCode : '',
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
                }
            }
        },
        ready: function() {

        },
        methods : {
            quickGetCode : function (){
                if(this.quickTel == ''){
                    $('.quick-login-tips').html('账号不能为空').fadeIn('slow');
                    setTimeout(function(){
                        $('.quick-login-tips').fadeOut('slow');
                    },1500)
                }else{
                    if( telReg.test(this.quickTel)){
                        var data = {
                            "mobile" : this.quickTel,
                            "validType" : 1,
                            "sendType" : 3 // quick login
                        };
                        $.post(store.state.hostUrl+'getvalidcode',data,(d) => {
                            //console.log(d)
                            if(d){
                                if(d.retcode == 1000){
                                    getCode($(".btn-captcha"));
                                }else if (d.retcode == 2301) {
                                    $('.quick-login-tips').html('发送过于频繁').fadeIn('slow');
                                    setTimeout(function () {
                                        $('.quick-login-tips').fadeOut('slow');
                                    }, 1500);
                                }else if (d.retcode == 2302) {
                                    $('.quick-login-tips').html('您今天发送次数过多').fadeIn('slow');
                                    setTimeout(function () {
                                        $('.quick-login-tips').fadeOut('slow');
                                    }, 1500);
                                }else if(d.retcode == 2201){
                                    $('.quick-login-tips').html('账户不存在，请先注册').fadeIn('slow');
                                    setTimeout(function () {
                                        $('.quick-login-tips').fadeOut('slow');
                                    }, 1500);
                                }
                            }
                        })
                    }else{
                        $('.quick-login-tips').html('请输入正确的手机号码').fadeIn('slow');
                        setTimeout(function () {
                            $('.quick-login-tips').fadeOut('slow');
                        }, 1500);
                    }
                }
            },
            quickLogin : function() {
                if(this.quickTel == '') {
                    $('.quick-login-tips').html('账号不能为空').fadeIn('slow');
                    setTimeout(function () {
                        $('.quick-login-tips').fadeOut('slow');
                    }, 1500)
                }else{
                    if(this.quickCode != ''){
                        $.ajax({
                            type : 'post',
                            url : store.state.hostUrl + 'quicklogin',
                            data : {
                                userAccount : this.quickTel,
                                validcode : this.quickCode,
                                registerWay : 7
                            },
                            success : (data) => {
                                //console.log(data);
                                var res = eval(data);
                                if(data){
                                    if(data.retcode == 2102){
                                        $('.quick-login-tips').html('验证码错误').fadeIn('slow');
                                        setTimeout(function () {
                                            $('.quick-login-tips').fadeOut('slow');
                                        }, 1500)
                                    }else if(data.retcode == 1000){  // 输入成功 进行登录
                                        this.hand_userLogin();
                                        this.userInfo.userId = data.data.userId;
                                        setCookie("sign_token",data.data.sign,30);
                                        setCookie("token_id",data.data.userId,30);
                                        var sign_token = data.data.sign;
                                        $.ajax({
                                            type : 'post',
                                            url : store.state.hostUrl+'userinfo',
                                            data : {
                                                loginType : 1,
                                                sign : sign_token
                                            },
                                            success: (res) => {
                                                //console.log(res);
                                                if(res.data){
                                                    if(res.data.userAccount) this.userInfo.userAccount = res.data.userAccount;
                                                    if(res.data.avatar) this.userInfo.avatar = res.data.avatar;
                                                    if(res.data.nickName) this.userInfo.nickName = res.data.nickName;
                                                    if(res.data.birthday) this.userInfo.birthday = res.data.birthday;
                                                    if(res.data.gender) this.userInfo.gender = res.data.gender;
                                                    if(res.data.cityName) this.userInfo.cityName = res.data.cityName;
                                                    if(res.data.email) this.userInfo.email = res.data.email;
                                                    if(res.data.mobile) this.userInfo.mobile = res.data.mobile;
                                                    this.quickSetUserInfo(this.userInfo);
                                                }
                                                //console.log(this.ache_getUserInfo);
                                            }
                                        });
                                        this.$router.go({ name: 'artlist' });  // 跳转到主页
                                    }
                                }
                            }
                        })
                    }else{
                        $('.quick-login-tips').html('请输入验证码').fadeIn('slow');
                        setTimeout(function () {
                            $('.quick-login-tips').fadeOut('slow');
                        }, 1500)
                    }
                }
            }
        },
        store : store,
        vuex : {
            actions : {
                hand_userLogin : isLogin,
                quickSetUserInfo : setUserInfo
            },
            getters : {
                ache_userLoginState : getLoginState,
                ache_getUserInfo :  getUserInfo
            }
        }
    };
    function getCode (O) {
        if(waitTime == 0){
            O.attr('disabled',false);
            O.html('获取验证码');
            waitTime = 60;
        }else{
            O.attr('disabled',true);
            O.html(waitTime + 's');
            waitTime --;
            setTimeout(function(){
                getCode(O);
            },1000)
        }
    }
</script>
<style>
    .tab-account{
        padding:0 0.35rem;
        width:6.8rem;
        height:auto;
        margin-top:0.6rem;
    }
    .tab-account input,.tab-account button{
        border:none;
        background:none;
        outline:none;
    }
    .tab-write{
        width:6.78rem;
        height:0.78rem;
        line-height:0.78rem;
        border:1px solid #dddada;
        margin-bottom:0.25rem;
    }
    .tab-write span{
        padding:0 0.28rem;
        color:#494949;
    }
    .tab-write input{
        color:#c3c3c3;
        font-size:0.28rem;
        /*line-height:0.78rem;*/
        height:0.28rem;
        padding:0.2rem 0 0.3rem 0;
        width:5rem;
    }
    .tab-captcha{
        width:4.78rem;
        float:left;
    }
    .tab-captcha .input-code{
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
    .btn-login-box{
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
    .btn-login{
        width:100%;
        height:100%;
        font-size:0.28rem;
        color:white;
    }
    .quick-login-tips{
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
</style>
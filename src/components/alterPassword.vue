<template>
    <div class="alter-password-box">
        <div class="ins-header">
            <div class="goback-Btn" v-link="{name:'personaldata'}"></div>
            修改密码
        </div>
        <div class="alter-psw clearfloat">
            <div class="alter-psw-input alter-psw-old">
                <input type="password" v-model="oldPwdValue" placeholder="请输入原密码"/>
            </div>
            <div class="alter-psw-input alter-psw-new">
                <input type="password" v-model="newPwdValue" placeholder="请输入6~16位新密码"/>
            </div>
            <div class="alter-psw-input alter-psw-renew">
                <input type="password" v-model="repeatPwdValue" placeholder="请重复输入新密码"/>
            </div>
        </div>
        <button class="btn-alter-psw" @click="personalAlterPwd">
            确定
        </button>
        <div class="alter-psw-tips">
            原密码不正确
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store'
    import {loginOut,setUserInfo} from '../vuex/actions'
    import {getLoginState} from '../vuex/getters'
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
    var md5 = require('md5');
    export default {
        store : store,
        data : function() {
            return {
                oldPwdValue : '',
                newPwdValue : '',
                repeatPwdValue : '',
                 userInfo : {
                    'nickName' : '登录',          // 昵称
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
            }
        },
        methods : {
            personalAlterPwd : function() {
                var sign_token = getCookieResult("sign_token");
                var oldHash = md5(this.oldPwdValue);
                var newHash = md5(this.newPwdValue);
                //console.log(sign_token);
                if(this.oldpwd != '' && this.newPwdValue != ''){
                    if(this.newPwdValue == this.repeatPwdValue){
                        $.ajax({
                            url : store.state.hostUrl + 'modifypwd',
                            data : {
                                loginType : 1,
                                sign : sign_token,
                                oldpwd : oldHash,
                                newpwd : newHash
                            },
                            success : (res)  =>{
                                //console.log(res);
                                if(res){
                                    if (res.retcode == 1000){
                                        $('.alter-psw-tips').html('密码修改成功').fadeIn('slow');
                                        setTimeout(function(){
                                            $('.alter-psw-tips').fadeOut('slow');
                                        },1500);
                                        // 修改密码后 跳转到 login
                                        this.hand_userLogout();
                                        this.quitSetUserInfo(this.userInfo);
                                        this.$router.replace({ name : 'login' });
                                    }else if(res.retcode == 2203){
                                        $('.alter-psw-tips').html('原密码错误').fadeIn('slow');
                                        setTimeout(function(){
                                            $('.alter-psw-tips').fadeOut('slow');
                                        },1500);
                                    }
                                }
                            }
                        })
                    }else{
                        $('.alter-psw-tips').html('两次密码输入不一致').fadeIn('slow');
                        setTimeout(function(){
                            $('.alter-psw-tips').fadeOut('slow');
                        },1500);
                    }
                }else{
                    $('.alter-psw-tips').html('密码不能为空').fadeIn('slow');
                    setTimeout(function(){
                        $('.alter-psw-tips').fadeOut('slow');
                    },1500);
                }

            },
        },
        vuex : {
            actions : {
                hand_userLogout : loginOut,
                quitSetUserInfo : setUserInfo,
            },
            getters : {
                ache_userLogoutState : getLoginState
            }
        }
    }
</script>
<style>
    .alter-psw{
        width:6.8rem;
        padding:0 0.35rem;
        height:auto;
        margin-top:1.5rem;
    }
    .alter-psw .alter-psw-input{
        width:100%;
        height:0.78rem;
        background:#fff;
        border-bottom:2px solid #f0f0f0;
    }
    .alter-psw input{
        outline:none;
        background:none;
        float:left;
        width:100%;
        height:0.28rem;
        border:none;
        font-size:0.28rem;
        padding:0.2rem 0 0.3rem 0.25rem;
    }
    .alter-psw .alter-psw-renew{
        border-bottom:none;
    }
    .btn-alter-psw{
        outline:none;
        background:#80b6e0;
        border:none;
        width:6.8rem;
        height:0.78rem;
        color:#fff;
        font-size:0.3rem;
        text-align:center;
        line-height:0.78rem;
        border-radius:0.05rem;
        margin-left:0.35rem;
    }
    .ins-header {
        width: 100%;
        height: 0.9rem;
        font-size: 0.34rem;
        color: #404040;
        text-align: center;
        box-sizing: border-box;
        line-height: 0.9rem;
        border-bottom: 1px solid #e6e6e6;
        background: #fff;
        position:fixed;
        top:0;
        left:0;
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
    .alter-psw-tips{
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
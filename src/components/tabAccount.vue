<template>
    <div id="accountLogin">
        <div class="tab-account">
            <div class="tab-phone tab-write">
                <span>手机号</span>
                <input type="text" value="" v-model="accountPhone" placeholder="请输入手机号"/>
            </div>
            <div class="tab-phone tab-write">
                <span>密&nbsp;&nbsp;&nbsp;码</span>
                <input type="password" value="" v-model="accountPassword" placeholder="请输入密码"/>
            </div>
            <div class="btn-login-box">
                <button class="btn-login" @click="accountLogin">登录</button>
            </div>
        </div>
        <div class="login-tips">
            用户不存在
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store'
    import {isLogin, setUserInfo} from '../vuex/actions'
    import {getLoginState, getUserInfo} from '../vuex/getters';
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
    var md5 = require('md5');
    export default {
        data : function() {
            return {
                accountPhone : '',
                accountPassword : '',
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
            }
        },
        methods : {
            accountLogin : function() {
                // from store params
                var hash = md5(this.accountPassword);
                this.userInfo.password = this.accountPassword;
                // judge input not null
                if(this.accountPhone != '' && this.accountPassword != ''){
                    $.ajax({
                        type:"post",
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        url:store.state.hostUrl+"login",
                        cache:false,
                        data:{
                            "userAccount" : this.accountPhone,
                            "password" : hash
                        },
                        complete: function(resp){
                            //console.log(resp.getAllResponseHeaders());
                        },
                        error:function(){
                            //console.log("error")
                        },
                        success: (data) => {
                            var res = eval(data);
                            //console.log(data);
                            if(data){
                                if( data.retcode == 1000){
                                    // 设置登录状态为 true
                                    this.hand_userLogin();
                                    //console.log(this.ache_userLoginState);   //true
                                    // this.ache_getUserInfo.userId = data.data.userId;  // 把登录成功的 userId 放进 store
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
                                                // this.ache_getUserInfo.nickName = res.data.nickName;
                                                // this.ache_getUserInfo.userAccount = res.data.userAccount;
                                                // this.ache_getUserInfo.avatar = res.data.avatar;
                                                // this.ache_getUserInfo.password = res.data.hasPwd;
                                                // this.ache_getUserInfo.gender = res.data.gender;
                                                // this.ache_getUserInfo.birthday = res.data.birthday;
                                                // this.ache_getUserInfo.cityName = res.data.cityName;
                                                // this.ache_getUserInfo.email = res.data.email;
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
                                            //console.log(this.ache_getUserInfo);
                                        }
                                    })
                                    this.$router.go({ name: 'artlist' });  // jump to the home page
                                }else if( data.retcode == 2201){
                                    $('.login-tips').html('用户名不存在').fadeIn('slow');
                                    setTimeout(function(){
                                        $('.login-tips').fadeOut('slow');
                                    },1500);
                                }else if( data.retcode == 2202){
                                    $('.login-tips').html('账号名错误').fadeIn('slow');
                                    setTimeout(function(){
                                        $('.login-tips').fadeOut('slow');
                                    },1500);
                                }else if( data.retcode == 2203){
                                    $('.login-tips').html('密码错误').fadeIn('slow');
                                    setTimeout(function(){
                                        $('.login-tips').fadeOut('slow');
                                    },1500);
                                }
                            }
                        }
                    });
                }else{
                    $('.login-tips').html('账户名和密码不能为空').fadeIn('slow');
                    setTimeout(function(){
                        $('.login-tips').fadeOut('slow');
                    },1500);
                }
            },
            // setCookie : function(name,val,lifeCircle) {
            //     var aDate = new Date();
            //     aDate.setTime(new Date().getTime()+(lifeCircle*24*60*60*1000));
            //     document.cookie = name+"="+val+";expires="+aDate.toUTCString()+";path=/";
            // }
        },
        store: store,
        vuex : {
            actions : {
                hand_userLogin : isLogin,
                tabSetUserInfo : setUserInfo
            },
            getters : {
                ache_userLoginState : getLoginState,
                ache_getUserInfo :  getUserInfo
            }
        }
    }
</script>
<style>
    .login-tips{
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

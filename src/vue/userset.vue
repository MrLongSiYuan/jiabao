<template>
    <div class="ins-header">
        <div class="goback-Btn" v-link="{name:'artlist'}"></div>
        设置
    </div>
    <div class="set-version">
        <img src="../img/jiabaologo.png" alt=""/>
        <p>佳保保险</p>
    </div>
    <div class="set-list">
        <div class="set-list-protocol" v-link="{name:'userprotocol'}">
            用户协议<span class="userset-more"> > </span>
        </div>
        <div class="set-list-about" :class="[currentPath == 'setabout' ? 'active': '']" >
            <a v-link="{name:'setabout'}">关于佳保<span class="userset-more"> > </span></a>
        </div>
        <div class="set-list-service">
            客服热线<span class="set-call-phone" @click="setCallPhone">400-852-8686</span>
        </div>
    </div>
    <button v-show="btnLogoutShow" class="btn-sign-out" @click="signOut">退出登录</button>
</template>
<script>
    import store from '../vuex/store'
    import {isLogin, setUserInfo,loginOut} from '../vuex/actions'
    import {getLoginState, getUserInfo} from '../vuex/getters';
    export default {
        data : function() {
            return {
                currentPath : '',
                btnLogoutShow : this.ache_userLoginState ? true : false,
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
        route :  {
            data : function(transition){
                transition.next({
                    currentPath : transition.to.path
                })
            }
        },
        methods : {
            signOut : function() {
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'logout',
                    data : {
                        loginType : 1,
                        "uuid" : '1234'
                    },
                    success : (res) => {
                        var res = eval(res);
                        //console.log(res);
                        if(res){
                            this.hand_userLogout();
                            this.quitSetUserInfo(this.userInfo);
                            this.$router.go({name : 'login'})
                        }
                    }
                })
            },
            setCallPhone : function() {
                var setCallValue = $('.set-call-phone').html();
                window.location.href = "tel:" + setCallValue;
            }
        },
        store : store,
        vuex : {
            actions : {
                hand_userLogin : isLogin,
                quitSetUserInfo : setUserInfo,
                hand_userLogout:loginOut
            },
            getters : {
                ache_userLoginState : getLoginState,
                ache_getUserInfo :  getUserInfo
            }
        }
    }
</script>
<style>
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
    .set-version{
        width:100%;
        height:2.98rem;
        background:#f6f5fa;
        border-bottom:1px solid #ccc;
        margin-top:0.9rem;
    }
    .set-version img{
        display:block;
        width:0.8rem;
        height:0.8rem;
        padding-top:0.58rem;
        padding-bottom:0.2rem;
        margin:0 auto;
    }
    .set-version p{
        font-size:0.28rem;
        color: #326dff;
        text-align:center;
    }
    .set-list div{
        height:0.94rem;
        width:6.75rem;
        background:#fff;
        padding-left:0.5rem;
        padding-right:0.25rem;
        font-size:0.3rem;
        color:#424242;
        line-height:0.94rem;
        border-bottom:1px solid #d9d9d9;
    }
    .set-list div span{
        float:right;
        color:#d8d8d8;
        font-size:0.3rem;
    }
    .set-list .userset-more{
        /*background:url("../img/menu-more.png") no-repeat;*/
        /*display:block;*/
        /*width:0.4rem;*/
        /*height:0.46rem;*/
        font-size:0.4rem;
    }
    .set-list div a{
        display:block;
        float:left;
        width:100%;
        color:#424242;
    }
    /*.set-list div:active{*/
        /*background: #c4e9ff;;*/
    /*}*/
    .set-list .set-list-service span{
        color: #778cff;
        float:right;
    }
    .btn-sign-out{
        width:100%;
        height:0.9rem;
        line-height:0.9rem;
        text-align:center;
        color: #7b7b7b;
        background:white;
        outline:none;
        border:none;
        font-size:0.3rem;
    }
    /*.set-list .active{*/
        /*background: #c4e9ff;*/
    /*}*/
</style>
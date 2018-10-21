<template>
    <div id="set-personal-data">
        <div class="ins-header">
            <div class="goback-Btn" v-link="{name:'artlist'}"></div>
            个人资料
        </div>
        <div class="personal-list">
            <div class="personal-main">
                <!--<div class="personal-main-avatar clearfloat">-->
                    <!--<span>头像</span>-->
                    <!--<img class="personal-main-arrow" src="../img/arrow-right.png" alt=""/>-->
                    <!--<img class="personal-main-img" src="../img/personal-img.png" alt=""/>-->
                <!--</div>-->
                <div class="personal-main-info clearfloat">
                    <span>账号</span>
                    <span class="personal-main-right">{{userInfo.userAccount}}</span>
                </div>
                <div class="personal-main-info personal-main-psw clearfloat" v-link="{name : 'alterpassword'}">
                    <span>密码</span>
                    <img class="personal-main-arrow" src="../img/arrow-right.png" alt=""/>
                    <span class="personal-main-right">修改</span>
                </div>
            </div>
            <div class="personal-minor">
                <div class="personal-minor-info clearfloat" @click="alterName">
                    <span>姓名</span>
                    <img class="personal-main-arrow" src="../img/arrow-right.png" alt=""/>
                    <span class="personal-minor-right">{{ userInfo.nickName }}</span>
                </div>
                <div class="personal-minor-info clearfloat" @click="alterGender">
                    <span>性别</span>
                    <img class="personal-main-arrow" src="../img/arrow-right.png" alt=""/>
                    <span class="personal-minor-right">{{ userInfo.gender }}</span>
                </div>
                <div class="personal-minor-info birthday-value clearfloat">
                    <span>出生年月</span>
                    <img class="personal-main-arrow" src="../img/arrow-right.png" alt=""/>
                    <span class="personal-minor-right"><input :value="userInfo.birthday" type="date" @input="getBirthday" /></span>
                </div>
                <div class="personal-minor-info clearfloat" v-link="{name : 'choosecity'}">
                    <span>所在地区</span>
                    <img class="personal-main-arrow" src="../img/arrow-right.png" alt=""/>
                    <span class="personal-minor-right">{{ userInfo.cityName }}</span>
                </div>
                <div class="personal-minor-info personal-minor-email clearfloat" @click="setEmail">
                    <span>邮箱</span>
                    <img class="personal-main-arrow" src="../img/arrow-right.png" alt=""/>
                    <span class="personal-minor-right">{{ userInfo.email }}</span>
                </div>
            </div>
        </div>
        <!--------------------- 弹窗 ------------------------>
        <!-- 昵称 -->
        <div class="show-name-cover" v-show="showNameCover">
            <div class="show-name-alter">
                <h5>填写姓名</h5>
                <div class="show-input-box clearfloat">
                    <div class="show-name-input">
                        <input type="text" :value="userInfo.nickName" v-on:input="hideWarn" maxlength="10"/>
                    </div>
                    <div class="btn-clear-input" @click="btnClearInput">
                        <img src="../img/alter-name-close.png" alt=""/>
                    </div>
                </div>
                <div class="show-warn-box">
                    <p class="show-warn-null" v-show="warnName">姓名不能为空</p>
                </div>
                <div class="btn-select-box">
                    <div class="btn-cancel-name" @click="btnCancelName">取消</div>
                    <div class="btn-sure-name" @click="btnSureName">确定</div>
                </div>
            </div>
        </div>
        <!-- 性别 -->
        <div class="people-sex" v-show="showGender">
            <div class="sex-box">
                <div class="sex-male" @click="chooseMale">男</div>
                <div class="sex-female" @click="chooseFemale">女</div>
            </div>
        </div>
        <!-- 邮箱 -->
        <div class="show-email-cover" v-show="showEmailCover">
            <div class="show-email-alter">
                <h5>输入邮箱</h5>
                <div class="show-input-box clearfloat">
                    <div class="show-email-input">
                        <input type="text" :value="userInfo.email" v-on:input="hideEmailWarn"/>
                    </div>
                    <div class="btn-clear-input" @click="btnClearEmailInput">
                        <img src="../img/alter-name-close.png" alt=""/>
                    </div>
                </div>
                <div class="show-warn-box">
                    <p class="show-warn-null" v-show="warnEmail">邮箱不能为空</p>
                </div>
                <div class="btn-select-box">
                    <div class="btn-cancel-name" @click="btnCancelEmail">取消</div>
                    <div class="btn-sure-name" @click="btnSureEmail">确定</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import store from '../vuex/store'
    import { setUserInfo } from '../vuex/actions'
    import { getUserInfo } from '../vuex/getters'
    import { getCookieResult } from '../js/oftenUse'
    export default {
        store: store,
        data : function() {
            return {
                showNameCover : false,
                showEmailCover : false,
                warnName : false,
                warnEmail : false,
                showGender : false,
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
        ready : function() {
                this.userInfo = this.ache_getUserInfo;
                //console.log(this.ache_getUserInfo)
        },
        methods : {
            // ---------------------------------更改姓名---------------------------
            btnClearInput : function() {
                $('.show-name-input input').val('');
            },
            alterName : function() {
                this.showNameCover = true
            },
            btnCancelName : function() {
                if($('.show-name-input input').val() == ''){
                    this.userInfo = this.ache_getUserInfo;
                }
                this.showNameCover = false
            },
            btnSureName : function() {
                var sign_token = getCookieResult("sign_token");
                var alterNickname = $('.show-name-input input').val();
                this.userInfo.nickName = alterNickname;
                if(alterNickname == ''){
                    this.warnName = true;   // 警告输入框不能为空
                }else{
                    this.showNameCover = false;
                    $.ajax({
                        type : 'post',
                        url : store.state.hostUrl + 'modifyuserinfo',
                        data : {
                            loginType : 1,
                            sign : sign_token,
                            nickName : alterNickname
                        },
                        success : (data) => { 
                            this.perSetUserInfo(this.userInfo);
                        }
                    })
                }
            },
            hideWarn : function() {
                var inputStr = $('.show-name-input input').val().length;
                if(inputStr > 1){
                    this.warnName = false
                }
            },
            //  -----------------------------设置 邮箱----------------------------
            btnClearEmailInput : function() {
                $('.show-email-input input').val('');
            },
            setEmail : function() {
                this.showEmailCover = true
            },
            btnCancelEmail : function() {
                this.userInfo = this.ache_getUserInfo;
                this.showEmailCover = false
            },
            btnSureEmail : function() {
                var sign_token = getCookieResult("sign_token");
                var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                var emailValue = $('.show-email-input input').val();
                this.userInfo.email = emailValue;
                if( emailValue == ''){
                    this.warnEmail = true;  //　如果 为空 警告不能为空
                }else{
                    // 如果 邮箱格式 不正确
                    if( !regEmail.test(emailValue) ){
                        $('.show-warn-null').html('邮箱格式不符');
                        this.warnEmail = true;
                    }else{
                        $.ajax({
                            type : 'post',
                            url : store.state.hostUrl + 'modifyuserinfo',
                            data : {
                                loginType : 1,
                                sign : sign_token,
                                email : emailValue
                            },
                            success : (data) => {
                                this.perSetUserInfo(this.userInfo);
                                this.showEmailCover = false;
                            }
                        })
                    }
                }
            },
            hideEmailWarn : function() {
                var inputEmailStr = $('.show-email-input input').val().length;
                if(inputEmailStr > 1){
                    this.warnEmail = false
                }
            },
            //  ----------------------------设置 性别-------------------------------
            alterGender : function() {
                this.showGender = true;
                $('.sex-female').removeClass('clickBack');
                $('.sex-male').removeClass('clickBack');
            },
            chooseMale : function() {
                $('.sex-female').removeClass('clickBack');
                $('.sex-male').addClass('clickBack');
                var sign_token = getCookieResult("sign_token");
                var genderIsM = $('.sex-male').html();  // 获取 输入的值
                this.userInfo.gender = genderIsM;
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'modifyuserinfo',
                    data : {
                        loginType : 1,
                        sign : sign_token,
                        gender : genderIsM
                    },
                    success : (res) => {
                        //console.log(res)
                        this.perSetUserInfo(this.userInfo);  // 改变 性别为男
                        this.showGender = false;  // 弹窗消失
                    }
                })
            },
            chooseFemale : function() {
                $('.sex-male').removeClass('clickBack');
                $('.sex-female').addClass('clickBack');
                var sign_token = getCookieResult("sign_token");
                var genderIsF = $('.sex-female').html();  // 获取 输入的值
                this.userInfo.gender = genderIsF;         // 改变性别为女
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'modifyuserinfo',
                    data : {
                        loginType : 1,
                        sign : sign_token,
                        gender : genderIsF
                    },
                    success : (res) => {
                        this.perSetUserInfo(this.userInfo);
                        this.showGender = false;
                    }
                })
            },
            //  ----------------------------设置 出生年月日-------------------------------
            getBirthday : function() {
                var sign_token = getCookieResult("sign_token");
                var birthdayValue = $('.birthday-value input').val();
                this.userInfo.birthday = birthdayValue;
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'modifyuserinfo',
                    data : {
                        loginType : 1,
                        sign : sign_token,
                        birthday : birthdayValue
                    },
                    success : (res) => {
                        this.perSetUserInfo(this.userInfo);
                    }
                })
            }
        },
        vuex : {
            actions : {
                perSetUserInfo : setUserInfo
            },
            getters : {
                ache_getUserInfo :  getUserInfo
            }
        }

    }
</script>
<style>
    .personal-list{
        margin-top:1.1rem;
        width:100%;
        height:auto;
        font-size:0.28rem;
        color:#424242;
    }
    .personal-main,.personal-minor{
        width:7rem;
        padding:0 0.25rem;
        margin-top:0.2rem;
        margin-bottom:0.2rem;
        background:#fff;
    }
    .personal-main{
        height:1.8rem;
        /*height:3.4rem;*/
    }
    .personal-main .personal-main-avatar{
        width:100%;
        height:1.48rem;
        border-bottom:2px solid #f3f3f3;
        line-height:1.48rem;
    }
    .personal-main-avatar span{
        float:left;
    }
    .personal-main-avatar img{
        float:right;
    }
    .personal-main-avatar .personal-main-img{
        float:right;
        width:0.9rem;
        height:0.9rem;
        margin-top:0.3rem;
    }
    .personal-main-avatar  .personal-main-arrow{
        width:0.17rem;
        height:0.3rem;
        margin-top:0.6rem;
        margin-left:0.22rem;
    }
    .personal-main-info{
        width:100%;
        height:0.9rem;
        border-bottom:2px solid #f3f3f3;
        line-height:0.9rem;
    }
    .personal-main-info .personal-main-arrow,.personal-minor-info .personal-main-arrow{
        float:right;
        margin-top:0.3rem;
        margin-left:0.2rem;
        width:0.17rem;
        height:0.3rem;
    }
    .personal-main-psw,.personal-minor-email{
        border-bottom:none;
    }
    .personal-main-info .personal-main-right{
        float:right;
        color: #b3c4d0;
    }
    .personal-minor-info{
        width:100%;
        height:0.9rem;
        border-bottom:2px solid #f3f3f3;
        line-height:0.9rem;
    }
    .personal-minor-info .personal-minor-right{
        float:right;
        color: #a0a0a0;
    }
    .personal-minor-email{
        border-bottom:none;
    }
    .personal-minor-right input{
        display: block;
        width: 100%;
        height: 100%;
        font-size:0.28rem;
        text-align: right;
        border: none;
        outline: none;
        direction: rtl;
        appearance: none;
        background: none;
        -moz-appearance:none;
        -webkit-appearance:none;
        color:#a0a0a0;
        margin-top:0.25rem;
        margin-left:0.5rem;
    }
    .personal-minor-right input::-webkit-input-placeholder{
        text-align:right;
    }
    /* 弹窗 */
    .show-name-cover, .show-email-cover, .people-sex{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        background:rgba(0,0,0,0.2);
    }
    .show-name-alter, .show-email-alter{
        width:6rem;
        height:3.36rem;
        background:#fff;
        border-radius:0.05rem;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
    }
    .show-name-alter h5, .show-email-alter h5{
        height:1.3rem;
        width:100%;
        font-size:0.32rem;
        color:#404040;
        line-height:1.3rem;
        text-align:center;
    }
    .show-input-box{
        width:5rem;
        height:0.58rem;
        border:1px solid #a6a6a6;
        margin:0 auto;
    }
    .show-input-box input{
        outline:none;
        border:none;
        background:none;
        width:4.4rem;
        height:0.26rem;
        float:left;
        padding:0.14rem 0 0.18rem 0.1rem;
        font-size:0.26rem;
        /*line-height:0.58rem;*/
    }
    .show-input-box .show-name-input, .show-input-box .show-email-input{
        float:left;
        width:4.5rem;
        height:100%;
    }
    .btn-clear-input{
        float:left;
        width:0.35rem;
        height:0.35rem;
        background:#d8d8d8;
        border-radius:0.2rem;
        margin-top:0.1rem;
        margin-left:0.1rem;
    }
    .btn-clear-input img{
        width:0.2rem;
        height:0.2rem;
        float:left;
        margin-top:0.08rem;
        margin-left:0.08rem;
    }
    .show-warn-box{
        width:100%;
        height:0.6rem;
    }
    .show-warn-null{
        width:100%;
        height:0.6rem;
        color: #ff282a;
        font-size:0.14rem;
        line-height:0.6rem;
        text-align:center;
        padding-right:0.3rem;
    }
    .btn-select-box{
        width:100%;
        height:0.8rem;
        border-top:1px solid #e4e4e4;
        font-size:0.3rem;
        color: #b5b5b5;
        line-height:0.8rem;
    }
    .btn-select-box .btn-cancel-name{
        width:3rem;
        height:100%;
        text-align:center;
        float:left;
        border-right:1px solid #e4e4e4;
    }
    .btn-select-box .btn-sure-name{
        height:100%;
        text-align:center;
        color:#008bfa;
    }
    .sex-box{
        width:6rem;
        height:2rem;
        background:#fff;
        border-radius:0.05rem;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        font-size:0.3rem;
        color:#424242;
    }
    .sex-male{
        width:100%;
        height:0.98rem;
        border-bottom:2px solid #f0f0f0;
        line-height:0.98rem;
        text-align:center;
    }
    .sex-female{
        line-height:0.98rem;
        text-align:center;
    }
    .clickBack{
        color: #d3d3d3;
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
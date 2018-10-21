<template>
    <div class="test-report-box">
        <div class="ins-header">
            <div class="goback-Btn" v-link="{name:'artlist'}"></div>
            测评报告
        </div>
        <div class="report clearfix">
            <div class="no-test-report">
                <img src="../img/no-report.png" alt=""/>
                <span>您还没有测评报告</span>
            </div>
            <div class="report-list report-myself" v-for="testReportList in testReportLists">
                <a v-bind:href="testReportList.href">
                    <div class="reportlist-box">
                        <p class="report-name"><span>{{ testReportList.fullName }}</span>的测评报告</p>
                        <p class="report-date">{{ testReportList.createDate }}</p>
                    </div>
                    <img src="../img/menu-more.png"/>
                </a>
            </div>
            <loading v-bind:loaddata="loaddata"></loading>
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store'
    import loading from '../components/loading.vue'
    import {isLogin, setUserInfo} from '../vuex/actions'
    import {getLoginState, getUserInfo,getSignToken} from '../vuex/getters'
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
    export default {
        store : store,
        data : function() {
            return {
                testReportLists : [],
                loaddata:{
                    showRefresh:false,
                    showLoad:true,
                    showNoData:false
                },
                noMoreData:false,
                signToken:'',
                isLoginFlag:false,
                scroll : true
            }
        },
        ready : function(){
            if(getCookieResult("sign_token")){
                this.signToken = getCookieResult("sign_token");
                this.hand_userLogin();
                this.isLoginFlag = this.ache_userLoginState;
            }
            this.getTestReportData();
            $(window).on('scroll',() => {
                this.scrollAffect();
            });
        },
        methods : {
            getTestReportData : function () {
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'requirelist',
                    data : {
                        loginType : 1,
                        sign : this.signToken
                    },
                    success : (res) => {
                        var res = eval(res);
                        //console.log(res);
                        if(res.data){
                            $('.no-test-report').hide();
                            $('.dropload-load').hide();
                            if(res.data.list){
                                this.testReportLists = res.data.list;
                            }
                            this.scroll = true;
                        }else{
                            $('.no-test-report').show();
                            $('.dropload-load').hide();
                        }
                    }
                })
            },
            scrollAffect : function() {
                if(this.scroll){
                    let totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
                    if (($(document).height() <= totalheight)&&(!this.noMoreData)&&(!this.firstGetData)) {
                        this.scroll = false;
                        this.loaddata.showRefresh = false;
                        this.loaddata.showLoad = true;
                        this.loaddata.showNoData = false;
                        this.getTestReportData();
                    }
                }
            }
        },
        components : {
            loading
        },
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
<style>
    .report{
        margin-top:0.9rem;
    }
    .report-myself{
        margin-top:0.2rem;
    }
    .report-list{
        padding:0 0.25rem;
        width:7rem;
        height:1.3rem;
        background:#fff;
        border-bottom:1px solid #f6f6f6;
    }
    .report-list a{
        display:block;
    }
    .reportlist-box{
        width:6rem;
        float:left;
    }
    .report-name{
        font-size:0.24rem;
        color:#7a7a7a;
        padding-top:0.25rem;
        margin-bottom:0.18rem;
        height:0.3rem;
    }
    .report-name span{
        font-size:0.3rem;
        color: #232323;
    }
    .report-date{
        height:0.18rem;
        font-size:0.18rem;
        color:#c7c7c7;
    }
    .report-list img{
        float:right;
        width:0.46rem;
        height:0.46rem;
        margin-top:0.42rem;
    }
    .no-test-report{
        width:100%;
        height:100%;
        display:none;
    }
    .no-test-report img{
        display:block;
        margin:2.5rem auto 0.2rem;
        width:0.8rem;
        height:0.8rem;
    }
    .no-test-report span{
        display:block;
        text-align:center;
        color:#c7c7c7;
        font-size:0.24rem;
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
</style>
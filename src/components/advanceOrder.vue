<template>
    <div class="advance-order-box">
        <div class="advance-order-overflow">
            <div class="ins-header">
                <div class="goback-Btn" v-link="{name:'artlist'}"></div>
                预约订单
            </div>
            <div class="order-detail-box">
                <div class="no-order">
                    <img src="../img/no-order.png" alt=""/>
                    <span>您还没有相关预约订单</span>
                </div>
                <div class="advance-order-list" v-for="advanceOrderList in advanceOrderLists" data-id="{{ advanceOrderList.orderId }}">
                    <div class="order-title clearfix">
                        <p class="order-name">{{ advanceOrderList.prodName }}</p>
                        <p class="order-state" v-if="advanceOrderList.orderStatus == 0">待分配</p>
                        <p class="order-state" v-if="advanceOrderList.orderStatus == 2">待沟通</p>
                        <p class="order-state" v-if="advanceOrderList.orderStatus == 3">待会面</p>
                        <p class="order-state" v-if="advanceOrderList.orderStatus == 4">已签约</p>
                        <p class="order-state" v-if="advanceOrderList.orderStatus == 5">已停止</p>
                    </div>
                    <div class="order-detail-info" v-link="{name:'ordermessage',params:{id:advanceOrderList.orderId}}">
                        <p>下单时间：&nbsp;<span class="order-detail-small">{{ advanceOrderList.createDate }}</span></p>
                        <p>咨询顾问：&nbsp;<span class="order-detail-small">{{ advanceOrderList.zxAgentName }}</span></p>
                        <p>顾问电话：&nbsp;<a href="##" class="order-detail-small">{{ advanceOrderList.zxAgentMobile}}</a></p>
                    </div>
                    <div class="order-edit-btn">
                        <p class="has-cancel-order" v-if="advanceOrderList.orderStatus == 5">订单已取消</p>
                        <button data-button-id="{{ advanceOrderList.orderId }}" class="btn-cancel-order" @click="cancelOrderMethod($event)" v-else>取消订单</button>
                    </div>
                </div>
                <loading v-bind:loaddata="loaddata"></loading>
                <!-- 弹窗 -->
                <div class="show-order-cover" v-show="showOrderCover">
                    <div class="show-order-pup">
                        <div class="show-pup-text">
                            <span>确定取消订单?</span>
                        </div>
                        <div class="show-order-box">
                            <div class="btn-look-again" @click="lookAgain">再看看</div>
                            <div class="btn-sure-cancel" @click="sureCancelOrder">确定</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store'
    import loading from '../components/loading.vue'
    import {isLogin, setUserInfo,setSignToken} from '../vuex/actions'
    import {getLoginState, getUserInfo,getSignToken} from '../vuex/getters';
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
    export default {
        data :　function() {
            return {
                isLoginFlag:false,
                advanceOrderLists : [],  // 列表
                scroll : true,
                loaddata:{
                    showRefresh:false,
                    showLoad:true,
                    showNoData:false
                },
                pageNo:1,
                noMoreData:false,
                signToken:'',
                showOrderCover : false,
                currentOrderId : '',
                dom:'',
            }
        },
        ready : function() {
            if(getCookieResult("sign_token")){
                this.signToken = getCookieResult("sign_token");
                this.hand_userLogin();
                this.isLoginFlag = this.ache_userLoginState;
            }
            this.getAdvanceOrderInfo();
            $(window).on('scroll',() => {
                this.scrollAffect();
            })
            $(".show-order-cover").on('touchmove', function (e) {
                e.preventDefault();
            })
        },
        methods : {
            // 获取 订单列表
            getAdvanceOrderInfo : function() {
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'orderlist',
                    data : {
                        pageNo : this.pageNo,
                        loginType : 1,
                        sign : this.signToken
                    },
                    success : (res) => {
                        //console.log(res);
                        if(res.data){
                            $('.no-order').hide();
                            if(res.data.list){
                                $('.dropload-load').show();
                                this.advanceOrderLists = res.data.list;
                                this.pageNo++;
                            }
                            this.scroll = true;
                            if(res.data.lastPage){
                                this.noMoreData = true;
                                this.loaddata.showRefresh = false;
                                this.loaddata.showLoad = false;
                                this.loaddata.showNoData = true;
                            }else{
                                this.loaddata.showRefresh = true;
                                this.loaddata.showLoad = false;
                                this.loaddata.showNoData = false;
                            }
                        }else{
                            //this.noMoreData = false;
                            $('.no-order').show();
                            $('.dropload-load').hide();
//                            this.loaddata.showRefresh = false;
//                            this.loaddata.showLoad = false;
//                            this.loaddata.showNoData = true;
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
                        this.getAdvanceOrderInfo();
                    }
                }
            },
             //  取消 订单 弹窗 出现
            cancelOrderMethod : function(event) {
                var currentCancelOrder = event.currentTarget;
                this.dom = $(currentCancelOrder);
                this.currentOrderId = $(currentCancelOrder).parents('.advance-order-list').attr('data-id');
                this.showOrderCover = true;
            },
            // 取消
            lookAgain : function(){
                this.showOrderCover = false;
            },
            // 确定取消订单
            sureCancelOrder : function() {
                //console.log(this.currentOrderId);
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'handleorder',
                    data : {
                        orderId : this.currentOrderId,
                        opType : 1,
                        loginType : 1,
                        sign : this.signToken
                    },
                    success : (res) => {
                        var res = eval(res);
//                        console.log(res);
                        this.showOrderCover = false;
                    }
                });
                // 点击取消之后 按钮字改变
                console.log(this.dom);
                this.dom.html('订单已取消').attr('disabled',false).css({border:'none'});

            }
        },
        components : {
            loading
        },
        store : store,
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
    .advance-order-box{
        overflow:hidden;
        width:7.5rem;
        height:100%;
    }
    .advance-order-overflow{
        width:7.5rem;
        height:100%;
    }
    .order-detail-box{
        margin-top:0.9rem;
    }
    .advance-order-list{
        width:100%;
        height:3.85rem;
        border-bottom:1px solid #dedede;
        margin-bottom:0.2rem;
    }
    .advance-order-list:last-child{
        margin-bottom:0;
    }
    .order-title{
        height:0.9rem;
        width:7rem;
        padding:0 0.25rem;
        background:#fff;
        font-size:0.28rem;
        color:#424242;
        line-height:0.9rem;
    }
    .order-title p{
        float:left;
    }
    .order-title .order-state{
        float:right;
    }
    .order-title .order-state img{
        width:0.39rem;
        height:0.39rem;
    }
    .order-detail-info{
        height:1.96rem;
        width:7rem;
        padding:0 0.25rem;
        background: #fafbfd;
        font-size:0.26rem;
        color:#727272;
    }
    .order-detail-info p{
        height:0.26rem;
        padding-top:0.28rem;
    }
    .order-detail-info a{
        color:#424242;
        text-decoration:underline;
    }
    .order-detail-info .order-detail-small{
        font-size:0.24rem;
    }
    .order-edit-btn button{
        background:none;
        outline:none;
        border:none;
        color:#424242;
    }
    .order-edit-btn{
        width:7rem;
        padding:0 0.25rem;
        height:0.98rem;
        background:#ffffff;
    }
    .order-edit-btn .btn-cancel-order{
        width:1.6rem;
        height:0.56rem;
        border:1px solid #d4d4d4;
        border-radius:0.1rem;
        float:right;
        margin-top:0.2rem;
        font-size:0.26rem;
    }
    .has-cancel-order{
        font-size:0.26rem;
        line-height:0.98rem;
        color:#404040;
        text-align:right;
    }
    .order-edit-btn .btn-call-tel{
        width:1.6rem;
        height:0.56rem;
        float:right;
        margin-top:0.2rem;
        font-size:0.26rem;
        color:#fff;
        background:#94bcff;
        border-radius:0.1rem;
        border:1px solid #94bcff;
    }
    .no-order{
        width:100%;
        height:100%;
        display:none;
    }
    .no-order img{
        display:block;
        margin:2.5rem auto 0.2rem;
        width:0.8rem;
        height:0.8rem;
    }
    .no-order span{
        display:block;
        text-align:center;
        color:#c7c7c7;
        font-size:0.24rem;
    }
    .show-order-cover{
        width:100%;
        height:100%;
        position: fixed;
        top:0;
        left:0;
        background:rgba(0,0,0,0.2);
    }
    .show-order-pup{
        width:5rem;
        height:2.1rem;
        background:#fff;
        border-radius:0.05rem;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
    }
    .show-pup-text{
        font-size:0.3rem;
        width:100%;
        text-align:center;
        height:1.3rem;
        line-height:1.3rem;
    }
    .show-order-box{
        width:100%;
        height:0.8rem;
        border-top:1px solid #e4e4e4;
        font-size:0.3rem;
        color: #b5b5b5;
        line-height:0.8rem;
    }
    .show-order-box .btn-look-again{
        width:2.5rem;
        height:100%;
        text-align:center;
        float:left;
        border-right:1px solid #e4e4e4;
    }
    .show-order-box .btn-sure-cancel{
        height:100%;
        text-align:center;
        color:#008bfa;
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
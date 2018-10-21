<template>
   <div class="ordermessage-box">
       <div class="ins-header">
           <div class="goback-Btn" v-link="{name:'advanceorder'}"></div>
           预约订单
       </div>
        <div class="order-msg">
            <div class="order-msg-v-for">
                <div class="order-msg-top clearfloat">
                    <p>订单号：&nbsp;
                        <span class="order-msg-no">{{ orderDetail.orderNo }}</span>
                        <span class="order-msg-state" v-if="orderDetail.orderStatus == 0">待分配</span>
                        <span class="order-msg-state" v-if="orderDetail.orderStatus == 2">待沟通</span>
                        <span class="order-msg-state" v-if="orderDetail.orderStatus == 3">待会面</span>
                        <span class="order-msg-state" v-if="orderDetail.orderStatus == 4">已签约</span>
                        <span class="order-msg-state" v-if="orderDetail.orderStatus == 5">已停止</span>
                    </p>
                </div>
                <p class="order-state-show">
                    会面沟通：详细会面时间、地点、准备资料等待与您确认
                </p>
                <div class="order-msg-intro">
                    <h4>{{ orderDetail.prodName }}</h4>
                    <div class="order-intro">
                        <p class="order-intro-1">
                            投&nbsp;保&nbsp;人：<span>{{ orderDetail.insuredName }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>{{ orderDetail.mobile }}</span>
                        </p>
                        <p class="order-intro-2">
                            年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：<span>{{ orderDetail.age }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            是否吸烟：<span v-if="orderDetail.isSmoke == 0">否</span><span v-if="orderDetail.isSmoke == 1">是</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            预约城市：<span>{{ orderDetail.location }}</span>
                        </p>
                    </div>
                    <div class="order-ask-counselor order-state-0" v-show="orderStateZero">
                        <p>咨询顾问：<span>待确定</span></p>
                    </div>
                    <div class="order-ask-counselor order-state-2" v-show="orderStateTwo">
                        <p>
                            咨询顾问：<span>{{ orderDetail.zxAgentName }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>{{ orderDetail.zxAgentMobile }}</span>
                        </p>
                    </div>
                    <div class="order-accept-show order-state-4" v-show="orderStateFour">
                        <p class="order-accept-counselor">
                            接待顾问：<span>{{ orderDetail.qdAgentName }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>{{ orderDetail.qdAgentMobile }}</span>
                        </p>
                        <p>
                            预约时间：<span>{{ orderDetail.apptTime }}</span>
                        </p>
                        <p>预约地点：<span>{{ orderDetail.apptPlace }}</span></p>
                        <p>准备资料：<span>{{ orderDetail.zlzb }}</span></p>
                    </div>
                    <div class="order-msg-btn">
                        <p class="cancel-order-msg" v-if="orderDetail.orderStatus == 5">订单已取消</p>
                        <button class="btn-off-order" @click="orderDetailCancel" v-else>取消订单</button>
                    </div>
                </div>
            </div>
            <div class="order-trace">
                <h5>订单跟踪</h5>
                <div class="order-trace-state clearfloat">
                    <!--<div class="order-trace-left">-->
                        <!--<img class="order-img-margin" src="../img/order-step-finish.png"/>-->
                        <!--<div class="order-left-line order-line-1"></div>-->
                        <!--&lt;!&ndash;<img src="../img/order-step-finish.png"/>&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="order-left-line order-line-2"></div>&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="../img/order-step-finish.png"/>&ndash;&gt;-->
                    <!--</div>-->
                        <div class="order-trace-step order-trace-1" v-for="orderTrace in orderTraces">
                            <div class="order-step-line">
                                <img class="order-img-margin" src="../img/order-step-finish.png"/>
                                <div class="order-left-line order-line-1"></div>
                            </div>
                            <div class="order-step-right">
                                <p>{{ orderTrace.event }}</p>
                                <p class="order-trace-time"><span>{{ orderTrace.trackDate }}</span></p>
                            </div>
                        </div>
                </div>
            </div>
            <!-- 弹窗 -->
            <div class="show-order-cover" v-show="orderDetailPupShow">
                <div class="show-order-pup">
                    <div class="show-pup-text">
                        <span>确定取消订单</span>
                    </div>
                    <div class="show-order-box">
                        <div class="btn-look-again" @click="orDetailLook">再看看</div>
                        <div class="btn-sure-cancel" @click="sureCancelOrderDetail">确定</div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
    import store from '../vuex/store';
    import {isLogin, setUserInfo} from '../vuex/actions'
    import {getLoginState, getUserInfo,getSignToken} from '../vuex/getters'
    import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'
    export default {
        store : store,
        data : function() {
            return {
                orderDetail : {},
                orderTraces : [],
                isLoginFlag:false,
                signToken:'',
                orderDetailId : '',
                orderStateZero : false,
                orderStateTwo : false,
                orderStateFour : false,
                orderDetailPupShow : false
            }
        },
        route : {
            data : function (transition){
                this.orderDetailId = transition.to.params.id;
                //console.log(transition.to.params.id)
            }
        },
        ready : function() {
            if(getCookieResult("sign_token")){
                this.signToken = getCookieResult("sign_token");
                this.hand_userLogin();
                this.isLoginFlag = this.ache_userLoginState;
            };
            // 预约订单详情
            $.ajax({
                type : 'post',
                url : store.state.hostUrl + 'orderdetail',
                data : {
                    orderId : this.orderDetailId,
                    loginType : 1,
                    sign : this.signToken
                },
                success : (res) => {
                    var res = eval(res);
                    if(res.data){
                        this.orderDetail = res.data;
                        if(this.orderDetail.orderStatus == 0 ){
                            this.orderStateZero = true;
                        }else if( this.orderDetail.orderStatus == 2 ){
                            this.orderStateTwo = true;
                        }else if(this.orderDetail.orderStatus == 4){
                            this.orderStateFour = true;
                        }
                    }
                }
            });
            // 追踪订单
            $.ajax({
                type : 'post',
                url : store.state.hostUrl + 'ordertracklist',
                data : {
                    orderId : this.orderDetailId,
                    loginType : 1,
                    sign : this.signToken
                },
                success : (res) => {
                    var res = eval(res);
                    if(res){
                        this.orderTraces = res.data.list;
                        //console.log(this.orderTraces);
                    }
                }
            });
            $(".show-order-cover").on('touchmove', function (e) {
                e.preventDefault();
            });
        },
        methods : {
            // 点击 取消订单 弹窗出现
            orderDetailCancel : function() {
                this.orderDetailPupShow = true;
            },
            // 再看看
            orDetailLook : function() {
                this.orderDetailPupShow = false;
            },
            // 确定 取消 订单
            sureCancelOrderDetail : function() {
                //console.log(this.orderDetailId);
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'handleorder',
                    data : {
                        orderId : this.orderDetailId,
                        opType : 1,
                        loginType : 1,
                        sign : this.signToken
                    },
                    success : (res) => {
                        var res = eval(res);
                        //console.log(res);
                        this.orderDetailPupShow = false;
                    }
                })
                $('.btn-off-order').html('订单已取消').attr('disabled',false).css({border:'none',background:'#fff',color:'#404040'});
            }
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
    .order-msg{
        margin-top:0.9rem;
    }
    .order-msg-top{
        width:7rem;
        padding:0 0.25rem;
        height:0.79rem;
        background:#fff;
        border-bottom:1px solid #e2e2e2;
        font-size:0.26rem;
        line-height:0.79rem;
        color:#424242;
    }
    .order-msg-top .order-msg-no{
        font-size:0.24rem;
        color:#424242;
    }
    .order-msg-top .order-msg-state{
        float:right;
        font-weight:bold;
        color:#424242;
    }
    .order-state-show{
        width:7.5rem;
        height:0.7rem;
        text-indent:0.2rem;
        background:#fff;
        line-height:0.7rem;
        font-size:0.2rem;
        color:#7c7c7c;
        border-bottom:1px solid #e2e2e2;
        margin-bottom:0.2rem;
    }
    .order-msg-intro h4{
        width:100%;
        height:0.9rem;
        background:#fff;
        line-height:0.9rem;
        border-bottom:2px solid #e6e6e6;
        font-size:0.28rem;
        text-indent:0.2rem;
        color:#414141;
    }
    .order-intro{
        width:7rem;
        padding:0 0.25rem;
        height:1.2rem;
        font-size:0.24rem;
        color:#3f3f3f;
        background:#fff;
    }
    .order-intro .order-intro-1{
        padding-top:0.2rem;
    }
    .order-intro .order-intro-2{
        padding-top:0.1rem;
    }
    .order-ask-counselor{
        width:7rem;
        padding:0 0.25rem;
        height:0.8rem;
        font-size:0.24rem;
        color:#3f3f3f;
        background:#fff;
        line-height:0.8rem;
        border-bottom:1px solid #e9e9e9;
    }
    .order-ask-counselor p{
        width:100%;
        height:0.8rem;
        border-top:1px solid #e9e9e9;
    }
    .order-accept-show{
        width:7rem;
        padding:0 0.25rem;
        height:2.5rem;
        font-size:0.24rem;
        color:#7c7c7c;
        background:#fafbfd;
    }
    .order-accept-show p{
        line-height:0.56rem;
    }
    .order-accept-show .order-accept-counselor{
        padding-top:0.1rem;
    }
    .order-msg-btn{
        width:7rem;
        padding:0 0.25rem;
        height:0.98rem;
        background:#ffffff;
        margin-bottom:0.2rem;
    }
    .order-msg-btn .btn-off-order{
        width:1.6rem;
        height:0.56rem;
        border-radius:0.1rem;
        float:right;
        margin-top:0.2rem;
        font-size:0.26rem;
        background:#008bfa;
        outline:none;
        color:#fff;
    }
    .cancel-order-msg{
        font-size:0.26rem;
        line-height:0.98rem;
        color:#404040;
        text-align:right;
    }
    .order-trace h5{
        width:7rem;
        padding:0 0.25rem;
        height:0.8rem;
        font-size:0.24rem;
        color:#3f3f3f;
        background:#fff;
        line-height:0.8rem;
        border-bottom:1px solid #e9e9e9;
    }
    .order-trace-state{
        width:7rem;
        padding:0 0.25rem;
        height:3.2rem;
        background:#fff;
        font-size:0.2rem;
        color:#424242;
    }
    .order-step-line{
        width:0.4rem;
        height:100%;
        float:left;
    }
    .order-step-line img{
        width:0.3rem;
        height:0.3rem;
        display:block;
        margin-top:0.06rem;
    }
    .order-step-line .order-left-line{
        width:0.05rem;
        height:0.64rem;
        background: #e6e6e6;
        margin-left:0.13rem;
    }
    .order-trace-state .order-trace-step{
        margin-top:0.24rem;
        margin-left:0.15rem;
    }
    .order-trace-state .order-trace-step P{
        line-height:0.4rem;
        color:#e8382b;
    }
    .order-trace-state .order-trace-time{
        font-size:0.16rem;
        color:#7d7d7d;
    }
    .order-step-right{
        width:6.6rem;
        height:100%;
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
        color:#008bfa;
    }
    .show-order-box .btn-sure-cancel{
        height:100%;
        text-align:center;
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
<template>
    <div class="opinions">
        <div class="ins-header">
            <div class="goback-Btn" v-link="{name:'artlist'}"></div>
            提交意见
        </div>
        <ul class="opinion-select clearfix">
            <li v-for="item in items">{{ item.opinion }}</li>
        </ul>
        <textarea class="opinion-textarea" placeholder="请详细描述您宝贵的意见..."></textarea>
        <div class="btn-opinion-box">
            <button>提交</button>
        </div>
    </div>
</template>
<script>
    export default {
        data : function() {
            return {
                items : [
                    { opinion : '功能问题'},
                    { opinion : '界面问题'},
                    { opinion : '性能问题'},
                    { opinion : '服务问题'}
                ]
            }
        },
        methods : {

        }
    }
</script>
<style>
    .opinion-select{
        padding:0 0.35rem;
        width:6.8rem;
        height:0.7rem;
        margin-top:1.5rem;
        font-size:0.26rem;
    }
    .opinion-select li{
        float:left;
        width:1.48rem;
        height:0.58rem;
        color:#424242;
        text-align:center;
        line-height:0.58rem;
        border:1px solid #909090;
        -webkit-border-radius: 0.1rem;
        -moz-border-radius: 0.1rem;
        border-radius: 0.1rem;
        margin-right:0.23rem;
    }
    .opinion-select li:last-child{
        margin-right:0;
    }
    .opinion-textarea{
        width:6.2rem;
        height:3.2rem;
        padding:0.3rem 0.3rem 0;
        margin-left:0.34rem;
        margin-top:0.6rem;
        background:#fff;
        border:none;
        outline:none;
        resize:none;
    }
    .btn-opinion-box{
        width:6.4rem;
        height:0.8rem;
        background:#008bfa;
        border-radius:0.1rem;
        margin-left:0.55rem;
        margin-top:0.6rem;
    }
    .btn-opinion-box button{
        float:left;
        width:6.4rem;
        height:0.8rem;
        border:none;
        outline:none;
        background:none;
        color:white;
        line-height:0.8rem;
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
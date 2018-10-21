<template>
    <div class="ins-header">
        <div class="goback-Btn" v-link="{name:'userset'}"></div>
        关于佳保
    </div>
    <div class="briefIntro titleTop">公司简介</div>
    <div class="introContent">
        <p>佳保成立于2014年12月，是深圳市投360科技有限公司打造的一家聚合类保险综合服务平台。平台拥有资深理财师30余名，高级金融顾问6名，海外高级金融专家2名。成立之后，平台先后同平安、泰康、国寿、新华等全球顶尖保险公司合作，应用互联网技术帮助用户解决传统购险服务的众多痛点，提供从快速买对保险产品到智能化保单管理和极速理赔的全流程闭环服务。</p>
    </div>
    <div class="partner titleTop">保险公司合作伙伴</div>
    <div class="partnerCont">
        <dl>
            <dt></dt>
            <dd>中国平安</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>泰康人寿</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>中国人寿</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>美国友邦</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>英国保诚</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>美国大都会</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>太平洋保险</dd>
        </dl>
        <dl>
            <dt></dt>
            <dd>新华人寿</dd>
        </dl>
    </div>
    <div class="contactUs titleBottom">联系我们</div>
    <div class="contactCont">
        <ul>
            <li>
                <p>公司地址：深圳市南山区创维半导体设计大厦C座701-703室</p>
            </li>
            <li>
                <p>联系方式：400-852-8686</p>
            </li>
            <li>
                <p>关注微信：佳保</p>
            </li>
            <li>
                <p>关注微博：佳保</p>
            </li>
        </ul>
    </div>
    <div class="fallowUs titleBottom">关注我们</div>
    <div class="fallowCont">
        <div class="imgBox">
            <img src="../img/ejiabaoCode.png">
        </div>
        <div class="Public">佳保微信公众号</div>
    </div>
</template>
<script>

</script>
<style>
    .titleTop{
        width: 100%;
        height: 0.8rem;
        font-size: 0.3rem;
        line-height: 0.8rem;
        text-align: center;
        color: #424242;
        margin-top: 0.93rem;
        border-bottom: 1px solid #d8d8d8;
        background: #fff;
    }
    .introContent{
        width: 6.9rem;
        padding: 0.24rem 0.3rem 0.18rem;
        background: #fff;
    }
    .introContent p{
        font-size: 0.26rem;
        color: #727272;
        line-height: 1.7;
        text-align: justify;
    }
    .partnerCont{
        padding: 0.36rem 0.3rem 0;
        width: 6.9rem;
        background: #fff;
        overflow: hidden;
    }
    .partnerCont dl{
        display: inline-block;
        width: 1.44rem;
        padding-right: 0.38rem;
        margin-bottom: 0.35rem;
        float: left;
    }
    .partnerCont dl dt{
        width: 100%;
        height: 0.6rem;
        background-size: 1.22rem 0.6rem;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .partnerCont dl dd{
        font-size: 0.24rem;
        color: #727272;
        width: 100%;
        text-align: center;
        margin-top: 0.2rem;
    }
    .partnerCont dl:nth-child(1) dt{
        background-image: url(../img/pingan.png);
    }
    .partnerCont dl:nth-child(2) dt{
        background-image: url(../img/taikang.png);
    }
    .partnerCont dl:nth-child(3) dt{
        background-image: url(../img/zgrenshou.png);
    }
    .partnerCont dl:nth-child(4){
        padding-right: 0;
    }
    .partnerCont dl:nth-child(4) dt{
        background-image: url(../img/youbang.png);

    }
    .partnerCont dl:nth-child(5) dt{
        background-image: url(../img/baocheng.png);
    }
    .partnerCont dl:nth-child(6) dt{
        background-image: url(../img/dadouhui.png);
    }
    .partnerCont dl:nth-child(7) dt{
        background-image: url(../img/taipingyang.png);
    }
    .partnerCont dl:nth-child(8){
        padding-right: 0;
    }
    .partnerCont dl:nth-child(8) dt{
        background-image: url(../img/xhrenshou.png);
    }
    .titleBottom{
        width: 100%;
        height: 0.8rem;
        font-size: 0.3rem;
        line-height: 0.8rem;
        text-align: center;
        color: #424242;
        margin-top: 0.2rem;
        border-bottom: 1px solid #d8d8d8;
        background: #fff;
    }
    .contactCont{
        padding-top: 0.26rem;
        padding-left: 0.3rem;
        background: #fff;
    }
    .contactCont ul li{
        display: block;
        padding-bottom: 0.26rem;
        font-size: 0.26rem;
        color: #727272;
    }
    .fallowCont{
        width: 100%;
        padding-top: 0.22rem;
        background: #fff;
    }
    .imgBox{
        width: 1.66rem;
        height: 1.66rem;
        margin: 0 auto;
    }
    .imgBox img{
        width: 100%;
        height: 100%;
    }
    .Public{
        width: 100%;
        font-size: 0.28rem;
        line-height: 0.7rem;
        color: #727272;
        text-align: center;
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
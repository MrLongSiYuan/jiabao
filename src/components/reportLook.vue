<template>
    <div class="report-look">
        <div class="ins-header">
            <div class="goback-Btn" v-link="{name:'testreport'}"></div>
            评测结果
        </div>
        <div class="headerWrap">
            <div class="header clearfloat">
                <p>您目前处于</p>
                <div class="yourType">
                    <span class="superscript"></span>
                    <div class="typeMan">青年单身期</div>
                    <span class="subscript"></span>
                </div>
            </div>
        </div>
        <div class="risk content">
            <div class="contTitle">风险特征</div>
            <p><span>意外方面：</span>年轻人外出活动频繁，潜在的意外风险不容小觑。</p>
            <p><span>健康方面：</span>年轻人外出活动频繁，潜在的意外风险不容小觑。年轻人外出活动频繁，潜在的意外风险不容小觑。年轻人外出活动频繁，潜在的意外风险不容小觑。</p>
            <p><span>责任方面：</span>肩负偿还贷款的责任，生活压力徒增。</p>
        </div>
        <div class="proposal content">
            <div class="contTitle">投保建议</div>
            <p><span>根据你的情况，建议你每年使用不低于5万元购买保险产品，具体配置如下：</span></p>
            <p><span>意外险：</span>意外险是你需要给自己准备的第一份基础保障。</p>
            <ul class="needDegree">
                <li class="text">需要程度：</li>
                <li class="imgBox"><img src="../img/xuqiu_21@3x.png"></li>
                <li class="imgBox"><img src="../img/xuqiu_21@3x.png"></li>
                <li class="imgBox"><img src="../img/xuqiu_21@3x.png"></li>
                <li class="imgBox"><img src="../img/xuqiu_22@3x.png"></li>
                <li class="imgBox"><img src="../img/xuqiu_22@3x.png"></li>
            </ul>
            <p><span>理财险：</span>意外险是你需要给自己准备的第一份基础保障。</p>
            <ul class="needDegree">
                <li class="text">需要程度：</li>
                <li class="imgBox"><img src="../img/xuqiu_21@3x.png"></li>
                <li class="imgBox"><img src="../img/xuqiu_21@3x.png"></li>
                <li class="imgBox"><img src="../img/xuqiu_21@3x.png"></li>
                <li class="imgBox"><img src="../img/xuqiu_22@3x.png"></li>
                <li class="imgBox"><img src="../img/xuqiu_22@3x.png"></li>
            </ul>
        </div>
        <div class="suitable content">
            <div class="contTitle">合适的产品</div>
            <!--<div id="banner">-->
            <!--<div class="banner-box" id="banner-box">-->
            <!--<ul class="banner-show">-->
            <!--<li>-->
            <!--<img src="../img/logo1.png">-->
            <!--<span>危及终身保保险计划</span>-->
            <!--<p>提供人寿严重疾病多重保障，享有免费10年危机额外保障及高达300%癌症支援。家具时发生的积分卡时间的开发技术等级</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<img src="../img/logo1.png">-->
            <!--<span>危及终身保保险计划</span>-->
            <!--<p>提供人寿严重疾病多重保障，享有免费10年危机额外保障及高达300%癌症支援。</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<img src="../img/logo1.png">-->
            <!--<span>危及终身保保险计划</span>-->
            <!--<p>提供人寿严重疾病多重保障，享有免费10年危机额外保障及高达300%癌症支援。</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<img src="../img/logo1.png">-->
            <!--<span>危及终身保保险计划</span>-->
            <!--<p>提供人寿严重疾病多重保障，享有免费10年危机额外保障及高达300%癌症支援。</p>-->
            <!--</li>-->
            <!--<li>-->
            <!--<img src="../img/logo1.png">-->
            <!--<span>危及终身保保险计划</span>-->
            <!--<p>提供人寿严重疾病多重保障，享有免费10年危机额外保障及高达300%癌症支援。</p>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>

</script>
<style>
    .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
    .clearfloat{zoom:1}
    .headerWrap{
        width: 7rem;
        height: 1.87rem;
        padding:0 0.25rem;
        background-color: #fff;
        margin-top:0.9rem;
    }
    .header{
        width: 100%;
        height: 1.86rem;
        overflow: hidden;
    }
    .header p{
        margin-top: 0.3rem;
        margin-bottom: 0.4rem;
        font-size: 0.3rem;
        color: #424242;
        text-align: center;
    }
    .yourType{
        width: 3.5rem;
        height: 0.50rem;
        margin: 0 auto;
    }
    .yourType .superscript{
        display: block;
        width: 0.29rem;
        height: 100%;
        background: url(../img/xuqiu_19@3x.png) no-repeat top center;
        background-size: 100%;
        float: left;
        margin-right: 0.2rem;
    }
    .yourType .subscript{
        display: block;
        width: 0.29rem;
        height: 100%;
        background: url(../img/xuqiu_20@3x.png) no-repeat bottom center;
        background-size: 100%;
        float: left;
        margin-left: 0.2rem;
    }
    .yourType .typeMan{
        font-size: 0.48rem;
        color: #008bfc;
        float: left;
        line-height: 0.5rem;
    }
    .content{
        width: 6.9rem;
        padding:0.36rem 0.3rem;
        margin-bottom: 0.19rem;
        border-bottom: 1px solid #e6e6e6;
        background-color: #fff;
    }
    .content .contTitle{
        height: 0.34rem;
        padding-left: 0.4rem;
        background: url(../img/xuqiu_23@3x.png) no-repeat;
        background-size: 0.3rem;
        font-size: 0.28rem;
        color: #414141;
        margin-bottom: 0.2rem;
        line-height:0.29rem;
    }
    .content p{
        font-size: 0.26rem;
        line-height: 0.4rem;
        color: #3f3f3f;
        text-align: justify;
    }
    .content p span{
        color: #7c7c7c;
    }
    .proposal .contTitle{
        background: url(../img/xuqiu_18@3x.png) no-repeat;
        background-size: 0.3rem;
    }
    .content .needDegree{
        display: block;
        width: 100%;
        height: 0.26rem;
        margin-top: 0.2rem;
        margin-bottom: 0.3rem;
    }
    .content .needDegree li{
        font-size: 0.22rem;
        line-height: 0.26rem;
        color:#424242;
        float: left;
    }
    .content .needDegree .imgBox{
        margin-right: 0.1rem;
    }
    .content .needDegree li img{
        width: 0.25rem;
        height: 0.25rem;
    }
    .suitable .contTitle{
        background: url(../img/xuqiu_24@3x.png) no-repeat;
        background-size: 0.3rem 0.3rem;
        margin-bottom: 0.3rem;
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
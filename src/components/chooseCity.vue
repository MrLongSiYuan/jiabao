<template>
    <div class="choose-all-city">
        <div class="ins-header">
            <div class="goback-Btn" v-link="{name:'personaldata'}"></div>
            选择城市
        </div>
        <!--<div class="loan_jm_l1 ">-->
            <!--<span class="loan_jm_spa1">工作所在城市</span>-->
            <!--<span class="has-chose-city" id="hasChoseCity" data-id="130100"></span>-->
        <!--</div>-->
        <div class="hot-city">
            <span id="hotCities" class="hot-city-title">热门城市</span>
            <ul class="hot-city-list">
                <li data-id="{{ hotCityList.id }}" v-for="hotCityList in hotCityLists" @click="choseHotCityMethod"> {{ hotCityList.name }} </li>
            </ul>
        </div>
        <div class="city">
            <div class="city-list">
                <span class="city-letter" id="A1">A</span>
                <p data-id="{{ cityAlist.id }}" v-for="(index,cityAlist) in cityAlists">{{ cityAlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="B1">B</span>
                <p data-id="{{ cityBlist.id }}" v-for="(index,cityBlist) in cityBlists">{{ cityBlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="C1">C</span>
                <p data-id="{{ cityClist.id }}" v-for="(index,cityClist) in cityClists">{{ cityClist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="D1">D</span>
                <p data-id="{{ cityDlist.id }}" v-for="(index,cityDlist) in cityDlists">{{ cityDlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="E1">E</span>
                <p data-id="{{ cityElist.id }}" v-for="(index,cityElist) in cityElists">{{ cityElist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="F1">F</span>
                <p data-id="{{ cityFlist.id }}" v-for="(index,cityFlist) in cityFlists">{{ cityFlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="G1">G</span>
                <p data-id="{{ cityGlist.id }}" v-for="(index,cityGlist) in cityGlists">{{ cityGlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="H1">H</span>
                <p data-id="{{ cityHlist.id }}" v-for="(index,cityHlist) in cityHlists">{{ cityHlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="J1">J</span>
                <p data-id="{{ cityJlist.id }}" v-for="(index,cityJlist) in cityJlists">{{ cityJlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="K1">K</span>
                <p data-id="{{ cityKlist.id }}" v-for="(index,cityKlist) in cityKlists">{{ cityKlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="L1">L</span>
                <p data-id="{{ cityLlist.id }}" v-for="(index,cityLlist) in cityLlists">{{ cityLlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="M1">M</span>
                <p data-id="{{ cityMlist.id }}" v-for="(index,cityMlist) in cityMlists">{{ cityMlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="N1">N</span>
                <p data-id="{{ cityNlist.id }}" v-for="(index,cityNlist) in cityNlists">{{ cityNlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="P1">P</span>
                <p data-id="{{ cityPlist.id }}" v-for="(index,cityPlist) in cityPlists">{{ cityPlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="Q1">Q</span>
                <p data-id="{{ cityQlist.id }}" v-for="(index,cityQlist) in cityQlists">{{ cityQlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="R1">R</span>
                <p data-id="{{ cityRlist.id }}" v-for="(index,cityRlist) in cityRlists">{{ cityRlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="S1">S</span>
                <p data-id="{{ citySlist.id }}" v-for="(index,citySlist) in citySlists">{{ citySlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="T1">T</span>
                <p data-id="{{ cityTlist.id }}" v-for="(index,cityTlist) in cityTlists">{{ cityTlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="W1">W</span>
                <p data-id="{{ cityWlist.id }}" v-for="(index,cityWlist) in cityWlists">{{ cityWlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="X1">X</span>
                <p data-id="{{ cityXlist.id }}" v-for="(index,cityXlist) in cityXlists">{{ cityXlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="Y1">Y</span>
                <p data-id="{{ cityYlist.id }}" v-for="(index,cityYlist) in cityYlists">{{ cityYlist.name }}</p>
            </div>
            <div class="city-list">
                <span class="city-letter" id="Z1">Z</span>
                <p data-id="{{ cityZlist.id }}" v-for="(index,cityZlist) in cityZlists">{{ cityZlist.name }}</p>
            </div>
        </div>
        <div class="letter">
            <div class="letter-hot-fixed">热门</div>
            <ul class="letter-ul">
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>J</li>
                <li>K</li>
                <li>L</li>
                <li>M</li>
                <li>N</li>
                <li>P</li>
                <li>Q</li>
                <li>R</li>
                <li>S</li>
                <li>T</li>
                <li>W</li>
                <li>X</li>
                <li>Y</li>
                <li>Z</li>
            </ul>
        </div>
    </div>

</template>
<script>
    import store from '../vuex/store'
    import {isLogin, setUserInfo} from '../vuex/actions'
    import {getLoginState, getUserInfo,getSignToken} from '../vuex/getters'
    import { getCookieResult } from '../js/oftenUse'
    var minusTop = (document.documentElement.clientWidth / 750)*90;
    var getChoseCity;
    export default {
        store : store,
        data : function() {
            return {
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
                signToken:'',
                hotCityLists : [],
                cityAlists : [],
                cityBlists : [],
                cityClists : [],
                cityDlists : [],
                cityElists : [],
                cityFlists : [],
                cityGlists : [],
                cityHlists : [],
                cityJlists : [],
                cityKlists : [],
                cityLlists : [],
                cityMlists : [],
                cityNlists : [],
                cityPlists : [],
                cityQlists : [],
                cityRlists : [],
                citySlists : [],
                cityTlists : [],
                cityWlists : [],
                cityXlists : [],
                cityYlists : [],
                cityZlists : []
            }
        },
        ready : function() {
            // 获取登录 sign
            if(getCookieResult("sign_token")){
                this.signToken = getCookieResult("sign_token");
                this.hand_userLogin();
                this.isLoginFlag = this.ache_userLoginState;
            }
            this.userInfo = this.ache_getUserInfo;
            // 获取城市信息
            $.ajax({
                type : 'post',
                url : store.state.hostUrl + 'allcity',
                complete : function(d) {

                },
                success : (res)=>{
                //console.log(this.userInfo.nickName);
                    var res = eval(res);
                    //console.log(res.data.map.a)
                    this.hotCityLists = res.data.hots;
                    this.cityAlists = res.data.map.a;
                    this.cityBlists = res.data.map.b;
                    this.cityClists = res.data.map.c;
                    this.cityDlists = res.data.map.d;
                    this.cityElists = res.data.map.e;
                    this.cityFlists = res.data.map.f;
                    this.cityGlists = res.data.map.g;
                    this.cityHlists = res.data.map.h;
                    this.cityJlists = res.data.map.j;
                    this.cityKlists = res.data.map.k;
                    this.cityLlists = res.data.map.l;
                    this.cityMlists = res.data.map.m;
                    this.cityNlists = res.data.map.n;
                    this.cityPlists = res.data.map.p;
                    this.cityQlists = res.data.map.q;
                    this.cityRlists = res.data.map.r;
                    this.citySlists = res.data.map.s;
                    this.cityTlists = res.data.map.t;
                    this.cityWlists = res.data.map.w;
                    this.cityXlists = res.data.map.x;
                    this.cityYlists = res.data.map.y;
                    this.cityZlists = res.data.map.z;
                }

            });
            // 点击 字母 跳转
            $('.letter-ul li').on('click',function(){
                //console.log(minusTop);
                var getLetter = $(this).html();
                $(window).scrollTop($('#' + getLetter + '1').offset().top-minusTop);
            });
            // 点击 hot 跳转
            $('.letter-hot-fixed').on('click',function(){
                $(window).scrollTop($('#hotCities').offset().top-minusTop);
            });
            // 选择 城市
            $('body').on('click','.city p',(e) => {
                var currentP = e.target;
                var currentAllCityId = $(currentP).attr('data-id');
                var currentAllCity = $(currentP).html();
                //console.log($(currentP).html());
                this.userInfo.cityName = currentAllCity;
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'modifyuserinfo',
                    data : {
                        loginType : 1,
                        sign : this.signToken,
                        city : currentAllCityId
                    },
                    success : (res) => {
                        //console.log(res);
                        this.citySetUserInfo(this.userInfo);
                        this.$router.go({ name : 'personaldata' });
                    }
                })
            });
        },
        methods : {
            // 选择热门城市
            choseHotCityMethod : function(event) {
                var currentChose = event.currentTarget;
                var currentChoseHotCityId = $(currentChose).attr('data-id');
                var currentChoseHotCity = $(currentChose).html();
                //console.log(currentChoseHotCity);
                //console.log(currentChoseHotCityId);
                this.userInfo.cityName = currentChoseHotCity;
                $.ajax({
                    type : 'post',
                    url : store.state.hostUrl + 'modifyuserinfo',
                    data : {
                        loginType : 1,
                        sign : this.signToken,
                        city : currentChoseHotCityId
                    },
                    success : (res) => {
                        this.citySetUserInfo(this.userInfo);
                        this.$router.go({ name : 'personaldata'});
                    }
                })
            }
        },
        vuex : {
            actions : {
                hand_userLogin : isLogin,
                citySetUserInfo : setUserInfo
            },
            getters : {
                ache_userLoginState : getLoginState,
                ache_getUserInfo :  getUserInfo,
                ache_getSignToken : getSignToken
            }
        }
    }
</script>
<style>
    .hot-city{
        width:100%;
        font-size:0.3rem;
        color:#404040;
        margin-top:0.9rem;
    }
    .hot-city-title{
        width:7.15rem;
        display:inline-block;
        color:#a6c7e0;
        padding:0.2rem 0 0.18rem 0.35rem;
        border-bottom:1px solid #e6e6e6;
    }
    .hot-city-list li{
        float:left;
        width:1.7rem;
        height:0.6rem;
        border-bottom:1px solid #e6e6e6;
        border-right:1px solid #e6e6e6;
        line-height:0.6rem;
        text-align:center;
        background:#fff;
        cursor: pointer;
    }
    .hot-city-list .hot-no-border{
        border-right:none;
    }
    .loan_jm_l1{
        margin-top:0.9rem;
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        background: #89aee0;
        color:#fff;
    }
    .loan_jm_spa1{
        width:2rem;
        font-size:0.3rem;
        float:left;
        height:0.3rem;
        display:block;
    }
    .has-chose-city{
        display:block;
        float:left;
        width:5rem;
        height:0.46rem;
        border:1px solid #a29f8e;
        background:#fff;
        font-size:0.3rem;
        color: #657ee0;
    }
    .city{
        width:100%;
        height:auto;
        font-size:0.3rem;
        color:#404040;
        background:#fff;
    }
    .city-list{
        width:100%;
        overflow:hidden;
    }
    .city-list .city-letter{
        width:100%;
        display:inline-block;
        color:#a6c7e0;
        padding:0.2rem 0 0.14rem 0.2rem;
        background:#f8f8f8;
        /*border-bottom:1px solid #b9b9b9;*/
    }
    .city-list p{
        height:0.8rem;
        width:88%;
        margin-left:4%;
        line-height:0.8rem;
        border-bottom:1px solid #d2d2d2;
        cursor: pointer;
    }
    .city-list p:last-child{
        border-bottom:none;
    }
    .letter{
        width:0.6rem;
        position:fixed;
        right:0;
        top:2.3rem;
    }
    .letter-ul li{
        width:100%;
        height:0.38rem;
        font-size:0.22rem;
        color:#89aee0;
        text-align:center;
        line-height:0.38rem;
    }
    .letter .letter-hot-fixed{
        font-size:0.2rem;
        position:absolute;
        top:-0.4rem;
        right:0.1rem;
        color:#89aee0;
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
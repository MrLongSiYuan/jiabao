var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
// 过滤器
var filters = require('./filters');
//引入css重置文件,基本的样式文件
require('./css/reset.css');
require('./scss/home.scss');
// 引入px与rem的换算
require('./js/equ.js');

//实例化vue模块 
Vue.use(VueRouter);
Vue.use(VueResource);
// 实例化过滤器
// Vue.filter('getDateTime', filters.getDateTime);
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// 创建一个空组件
var app = Vue.extend({});

//实例化VueRouter
var router = new VueRouter({
    // 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

// 路由表
router.map({
	 '/':{				
        //首页
        component: function (resolve) {
	      require(['./vue/artlist.vue'],resolve)
	    }
    },
    '/home':{
        //首页
    	name : 'artlist',
        component: function (resolve) {
	      require(['./vue/artlist.vue'],resolve)
	    }
    },
    '/artlist':{
        //首页
    	name : 'artlist',               
        component: function (resolve) {
	      require(['./vue/artlist.vue'],resolve)
	    }
    },
    '/artlist/productlist/:id':{
    	//产品列表
        name : 'productlist',
    	component: function (resolve) {
	      require(['./vue/productlist.vue'],resolve)
	    }
    },
    '/artlist/solutionmade':{
        //产品列表
        name : 'solution-made',
        component: function (resolve) {
          require(['./vue/solutionMade.vue'],resolve)
        }
    },
    '/artlist/requireassess':{
        //产品列表
        name : 'require-assess',
        component: function (resolve) {
          require(['./vue/requireAssess.vue'],resolve)
        }
    },
    '/artlist/insuranceStrategy':{
        //攻略列表
        name : 'insurance-strategy',
        component: function (resolve) {
          require(['./vue/insuranceStrategy.vue'],resolve)
        }
    },
    '/artlist/discountList':{
        //优惠列表
        name : 'discount-list',
        component: function (resolve) {
          require(['./vue/discountList.vue'],resolve)
        }
    },
    '/artlist/quesAndAnsList':{
        //问答列表
        name : 'question-answer-list',
        component: function (resolve) {
          require(['./vue/quesAndAnsList.vue'],resolve)
        }
    },
    '/artlist/quesAndAnsDetail/:id':{
        //首页问答详情
        name : 'question-and-answer-detail',
        component: function (resolve) {
          require(['./vue/QuesAndAnsDetail.vue'],resolve)
        }
    },
    '/artlist/quesAndAnsList/askQuestion':{
        //我要提问
        name : 'ask-question',
        component: function (resolve) {
          require(['./vue/askQuestion.vue'],resolve)
        }
    },
    '/artlist/quesAndAnsList/myquestion':{
        //我的提问
        name : 'my-question',
        component: function (resolve) {
          require(['./vue/myQuestionList.vue'],resolve)
        }
    },
    '/search':{
        //搜索
        name : 'search',
        component: function (resolve) {
          require(['./vue/search.vue'],resolve)
        }
    },
    '/login':{
        //登录
        name : 'login',
        component: function (resolve) {
          require(['./vue/login.vue'],resolve)
        }
    },
    '/login/register/:id':{
        //注册
        name : 'register',
        component: function (resolve) {
            require(['./components/register.vue'],resolve)
        }
    },
    '/login/forget/:id':{
        //忘记密码
        name : 'forget',
        component: function (resolve) {
            require(['./components/forgetPassword.vue'],resolve)
        }
    },
    '/register/readprotocol':{
        //登录
        name : 'readprotocol',
        component: function (resolve) {
            require(['./components/readProtocol.vue'],resolve)
        }
    },
    '/personaldata':{
        //个人资料设置
        name : 'personaldata',
        component: function(resolve) {
            require(['./components/personalData.vue'],resolve)
        }
    },
    '/personaldata/alterpassword':{
        //更改个人密码
        name : 'alterpassword',
        component: function(resolve) {
            require(['./components/alterPassword.vue'],resolve)
        }
    },
    '/personaldata/choosecity':{
        //选择城市
        name : 'choosecity',
        component: function(resolve) {
            require(['./components/chooseCity.vue'],resolve)
        }
    },
    '/usermessage':{
        //消息中心
        name : 'usermessage',
        component: function (resolve) {
          require(['./vue/usermessage.vue'],resolve)
        }
    },
    '/advanceorder':{
        //预约订单
        name : 'advanceorder',
        component: function (resolve) {
            require(['./components/advanceOrder.vue'],resolve)
        }
    },
    '/advanceorder/ordermessage/:id':{
       //订单详情
        name : 'ordermessage',
        component: function(resolve){
            require(['./components/orderMessage.vue'],resolve)
        }
    },
    '/testreport':{
        //评测结果
        name : 'testreport',
        component: function(resolve) {
            require(['./components/testReport.vue'],resolve)
        }
    },
    '/testreport/reportlook/:id':{
        // 查看评测结果
        name : 'reportlook',
        component: function(resolve) {
            require(['./components/reportLook.vue'],resolve)
        }
    },
    '/referopinion':{
        //提交意见
        name : 'referopinion',
        component: function (resolve) {
            require(['./components/referOpinion.vue'],resolve)
        }
    },
    '/userset':{
        //个人设置
        name : 'userset',
        component: function (resolve) {
          require(['./vue/userset.vue'],resolve)
        }
    },
    '/userhome/:username':{
        //个人主页
        name : 'userhome',
        component: function (resolve) {
          require(['./vue/userhome.vue'],resolve)
        }
    },
    '/about':{
        //关于我们
        name : 'about',
    	component: function (resolve) {
	      require(['./vue/about.vue'],resolve)
	    }
    },
    '/setabout':{
        //关于佳宝
        name : 'setabout',
        component: function (resolve) {
            require(['./components/setAbout.vue'],resolve)
        }
    },
    '/userprotocol':{
        //用户协议
        name : 'userprotocol',
        component: function(resolve) {
            require(['./components/userProtocol.vue'],resolve)
        }
    }
})


//默认/重定向到home页
// router.redirect({
//     '/':"/home"
// })
router.afterEach(function (transition) {
  // console.log('成功浏览到: ' + transition.to.path)
})

router.start(app, "#app");
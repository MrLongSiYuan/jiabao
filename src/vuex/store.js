"use strict";

import Vue from 'vue'
import Vuex from 'vuex';
import {setCookie,getCookieResult,removeTheCookie} from '../js/oftenUse'

Vue.use(Vuex);

const state = {
	// 页面打开默认设置登录状态为否
	lastLogin : localStorage.getItem("lastLogin") || false,
	isLogin : false,
	// 保存登录信息
	userInfo : {
		'nickName' : '登录',          // 昵称
		'password' :'',           // 是否有密码
		'gender' : '',			  // 性别
		'avatar' : '',			  // 头像
		'userAccount' : '',		  // 账号
		'birthday' : '',		  // 出生日期
		'cityName' : '',		  // 城市
		'email' : '',			  // 邮箱
		'mobile' : '',            // 手机号
		'userId' : ''    		  // 用户id
	},
	sign_token:'',
	tipContent : '',
	tipShow : false,
	message_count : 0,
	// hostUrl:'http://192.168.1.245/jx/v2/'
	hostUrl:'http://jx.tou360.com/jx/v2/'
}

const mutations = {
	SETTOKEN (state,token) {
		state.sign_token = token;
	},
	// 设置登录
	ISLOGIN (state) {
		state.isLogin = true;
	},
	// 退出登录
	NOTLOGIN (state) {
		state.isLogin = false;
		removeTheCookie("sign_token");
		removeTheCookie("token_id");
	},
	// 设置登录用户信息
	SETUSERINFO (state, obj) {
		state.userInfo.nickName = obj.nickName;
		state.userInfo.password = obj.password;
		state.userInfo.gender = obj.gender;
		state.userInfo.avatar = obj.avatar;
		state.userInfo.userAccount = obj.userAccount;
		state.userInfo.birthday = obj.birthday;
		state.userInfo.cityName = obj.cityName;
		state.userInfo.email = obj.email;
		state.userInfo.mobile = obj.mobile;
		state.userInfo.userId = obj.userId;
	},
	// 设置tips弹窗的提示信息
	SETTIPCONTENT (state, content) {
		state.tipContent = content;
	},
	// 设置tips弹窗的显示隐藏状态
	SETTIPSHOW (state, status) {
		state.tipShow = status;
	},
	// 设置未读消息条数
	SETNOTMESSAGECOUNT (state, count) {
		state.message_count = count;
	}
}

export default new Vuex.Store({
	state,
	mutations
})
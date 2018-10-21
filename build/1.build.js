webpackJsonp([1,30],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\vue\\artlist.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-30086208/artlist.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./artlist.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./artlist.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes carousel {\n  0% {\n    opacity: 1;\n    z-index: 2; }\n  99% {\n    opacity: 0;\n    z-index: 2;\n    top: -0.6rem; }\n  100% {\n    opacity: 0;\n    z-index: -1;\n    top: 0; } }\n\n@keyframes carousel {\n  0% {\n    opacity: 1;\n    z-index: 2; }\n  99% {\n    opacity: 0;\n    z-index: 2;\n    top: -0.6rem; }\n  100% {\n    opacity: 0;\n    z-index: -1;\n    top: 0; } }\n\n.artlist {\n  overflow: hidden;\n  width: 100%;\n  padding-top: 0.9rem; }\n  .artlist .insurance-entry {\n    display: block;\n    width: 100%;\n    height: 2.06rem;\n    background: #fff; }\n    .artlist .insurance-entry li {\n      display: block;\n      float: left;\n      width: 20%;\n      font-size: 0.26rem;\n      color: #404040;\n      box-sizing: border-box;\n      text-align: center;\n      padding-top: 1.4rem;\n      background: url(" + __webpack_require__(14) + ") no-repeat 0.4rem 0.4rem;\n      background-size: 0.8rem 0.8rem; }\n    .artlist .insurance-entry li:nth-child(2) {\n      background: url(" + __webpack_require__(15) + ") no-repeat 0.4rem 0.4rem;\n      background-size: 0.8rem 0.8rem; }\n    .artlist .insurance-entry li:nth-child(3) {\n      background: url(" + __webpack_require__(16) + ") no-repeat 0.4rem 0.4rem;\n      background-size: 0.8rem 0.8rem; }\n    .artlist .insurance-entry li:nth-child(4) {\n      background: url(" + __webpack_require__(17) + ") no-repeat 0.4rem 0.4rem;\n      background-size: 0.8rem 0.8rem; }\n    .artlist .insurance-entry li:nth-child(5) {\n      background: url(" + __webpack_require__(18) + ") no-repeat 0.4rem 0.4rem;\n      background-size: 0.8rem 0.8rem; }\n  .artlist .function-entry {\n    width: 100%;\n    height: 1.85rem;\n    margin-top: 0.2rem;\n    background: #fff; }\n    .artlist .function-entry li {\n      display: block;\n      float: left;\n      width: 33.33%;\n      font-size: 0.26rem;\n      color: #404040;\n      box-sizing: border-box;\n      text-align: center;\n      padding-top: 1.02rem;\n      background: url(" + __webpack_require__(19) + ") no-repeat 0.9rem 0.22rem;\n      background-size: 0.7rem 0.7rem; }\n      .artlist .function-entry li .function-name {\n        width: 100%;\n        height: 0.36rem;\n        display: block;\n        line-height: 0.36rem;\n        font-size: 0.28rem; }\n      .artlist .function-entry li .function-describe {\n        display: block;\n        width: 100%;\n        font-size: 0.22rem;\n        color: #ababab;\n        line-height: 0.34rem; }\n    .artlist .function-entry li:nth-child(2) {\n      background: url(" + __webpack_require__(20) + ") no-repeat 0.9rem 0.22rem;\n      background-size: 0.7rem 0.7rem; }\n    .artlist .function-entry li:nth-child(3) {\n      background: url(" + __webpack_require__(21) + ") no-repeat 0.9rem 0.22rem;\n      background-size: 0.7rem 0.7rem; }\n  .artlist .index-more {\n    width: 100%;\n    height: 0.88rem;\n    text-align: center;\n    line-height: 0.88rem;\n    font-size: 0.3rem;\n    color: #404040;\n    background: url(" + __webpack_require__(22) + ") no-repeat right center;\n    background-size: 0.18rem 0.31rem;\n    position: relative; }\n    .artlist .index-more i {\n      display: block;\n      width: 0.7rem;\n      height: 100%;\n      line-height: 0.92rem;\n      position: absolute;\n      font-size: 0.26rem;\n      top: 0;\n      right: 0.5rem; }\n  .artlist .purchase-discount {\n    width: 100%;\n    height: 4rem;\n    background: #fff;\n    margin-top: 0.2rem;\n    box-sizing: border-box;\n    padding: 0 0.25rem; }\n    .artlist .purchase-discount .index-more i {\n      right: 0.22rem; }\n    .artlist .purchase-discount .discount-box {\n      width: 100%;\n      height: 2.9rem; }\n      .artlist .purchase-discount .discount-box .discount {\n        float: left; }\n        .artlist .purchase-discount .discount-box .discount a {\n          display: block;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box; }\n          .artlist .purchase-discount .discount-box .discount a img {\n            width: 100%;\n            height: 100%;\n            float: left; }\n      .artlist .purchase-discount .discount-box .discount:nth-child(1) {\n        width: 3.45rem;\n        height: 2.9rem;\n        margin-right: 0.1rem; }\n      .artlist .purchase-discount .discount-box .discount:nth-child(2) {\n        width: 3.45rem;\n        height: 1.4rem; }\n      .artlist .purchase-discount .discount-box .discount:nth-child(3) {\n        width: 3.45rem;\n        height: 1.4rem;\n        margin-top: 0.1rem; }\n  .artlist .insurance-ask {\n    width: 100%;\n    background: #fff;\n    margin-top: 0.2rem; }\n    .artlist .insurance-ask .index-more {\n      padding: 0 0.25rem;\n      box-sizing: border-box;\n      background: url(" + __webpack_require__(22) + ") no-repeat 96.1% center;\n      background-size: 0.18rem 0.31rem; }\n    .artlist .insurance-ask .questions-and-answers-list {\n      width: 100%;\n      box-sizing: border-box;\n      padding: 0 0.25rem;\n      border-top: 2px solid #f2f2f2; }\n      .artlist .insurance-ask .questions-and-answers-list .questions-and-answers {\n        width: 100%; }\n        .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .question-information {\n          width: 100%;\n          padding-top: 0.25rem; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .question-information div {\n            font-size: 0.24rem;\n            color: #ababab; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .question-information .questioner-name {\n            float: left; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .question-information .question-date {\n            float: right;\n            margin-right: 0.25rem; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .question-information .question-watch {\n            float: right; }\n        .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .question {\n          width: 100%;\n          padding: 0.2rem 0rem;\n          font-size: 0.28rem;\n          min-height: 0.45rem;\n          line-height: 0.45rem;\n          color: #404040;\n          border-bottom: 1px solid #f2f2f2; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .question i {\n            display: block;\n            float: left;\n            width: 0.42rem;\n            height: 0.42rem;\n            background: #9dd2fe;\n            font-size: 0.26rem;\n            text-align: center;\n            color: #fff;\n            margin-right: 0.1rem;\n            background: url(" + __webpack_require__(23) + ") no-repeat;\n            background-size: 100% 100%; }\n        .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer {\n          width: 100%;\n          margin: 0.2rem 0rem;\n          font-size: 0.28rem;\n          height: 0.9rem;\n          line-height: 0.45rem;\n          color: #7c7c7c;\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 2;\n          overflow: hidden; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer img {\n            width: 0.42rem;\n            height: 0.42rem;\n            margin-right: 0.1rem; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer i {\n            display: block;\n            float: left;\n            width: 0.42rem;\n            height: 0.42rem;\n            background: #d0beb2;\n            font-size: 0.26rem;\n            text-align: center;\n            color: #fff;\n            background: url(" + __webpack_require__(24) + ") no-repeat;\n            background-size: 100% 100%;\n            margin-right: 0.1rem; }\n        .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information {\n          width: 100%;\n          height: 0.3rem;\n          padding-bottom: 0.2rem; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information div {\n            font-size: 0.24rem;\n            color: #ababab;\n            line-height: 0.26rem;\n            height: 0.26rem; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information .answer-name {\n            float: left;\n            margin-right: 0.1rem; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information .answer-occupation {\n            float: left; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information .demote {\n            float: right;\n            padding-left: 0.4rem;\n            background: url(" + __webpack_require__(25) + ") no-repeat left center;\n            background-size: 0.3rem 0.26rem;\n            position: relative; }\n            .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information .demote i {\n              display: block;\n              position: absolute;\n              width: 0.3rem;\n              height: 0.26rem;\n              left: 0;\n              top: 0;\n              background: url(" + __webpack_require__(26) + ") no-repeat;\n              background-size: 100% 100%;\n              z-index: -1; }\n            .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information .demote i.active {\n              z-index: 2; }\n          .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information .fabulous {\n            float: right;\n            padding-left: 0.4rem;\n            margin-right: 0.2rem;\n            background: url(" + __webpack_require__(27) + ") no-repeat left center;\n            background-size: 0.3rem 0.26rem;\n            position: relative; }\n            .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information .fabulous i {\n              display: block;\n              position: absolute;\n              width: 0.3rem;\n              height: 0.26rem;\n              left: 0;\n              top: 0;\n              background: url(" + __webpack_require__(28) + ") no-repeat;\n              background-size: 100% 100%;\n              z-index: -1; }\n            .artlist .insurance-ask .questions-and-answers-list .questions-and-answers .answer-information .fabulous i.active {\n              z-index: 2; }\n  .artlist .our-advantage {\n    width: 100%;\n    background: #fff;\n    margin-top: 0.2rem; }\n    .artlist .our-advantage .index-more {\n      padding: 0 0.25rem;\n      box-sizing: border-box;\n      background: url(" + __webpack_require__(22) + ") no-repeat 96.1% center;\n      background-size: 0.18rem 0.31rem; }\n    .artlist .our-advantage .advantage-box {\n      width: 100%;\n      height: 2.35rem;\n      overflow: hidden;\n      position: absolute;\n      z-index: 1; }\n      .artlist .our-advantage .advantage-box ul {\n        display: block;\n        width: 11.68rem;\n        position: absolute;\n        z-index: 1;\n        background: #fff; }\n        .artlist .our-advantage .advantage-box ul li {\n          text-align: center;\n          color: #ababab;\n          font-size: 0.28rem;\n          display: block;\n          float: left;\n          width: 2.84rem;\n          margin-right: 0.1rem; }\n          .artlist .our-advantage .advantage-box ul li img {\n            width: 2.8rem;\n            height: 1.6rem;\n            border: 1px solid #e9e9e9; }\n          .artlist .our-advantage .advantage-box ul li span {\n            display: block;\n            width: 100%;\n            line-height: 0.72rem; }\n        .artlist .our-advantage .advantage-box ul li:nth-child(4) {\n          margin-right: 0; }\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABGdBTUEAALGPC/xhBQAAA89JREFUWAljZICC////M7rs7dH9/fefLiMDk/D///9YYXIDRTMyMv3+z/DvLes/pst7PEouMzIy/ge5hRFEOOyfyvPv52cvIFcWxB+MgJGJ8REjK/f2A47ZX5hAITzYHQwKxP///suB3AlyL/MRWx69f/8YDAdj6GK6iZF/6Z3jX5hAaRhTcvCK/Gb6p8sEynSD14mYLgO5F5imB76UwHQabhGQe1lwS+OWsRRVEYtWNLN7+v3D8/bL247iVkkbGZId7SalLVOt650PdA6jloDU7/3Pb9068ebOa5jz2BhZmUQ4uNhhfFLoZ98/fidGPcmO3vXs6pNgOaOzGvySJsyMTKzF2m6RkUceTP7z9w+44PeU1ZEv0nTNJsZydDWOu7pL/wHLNHRxdD4TugAx/IaLmzd8/fPrI0itGAePXJ2ujyMx+qilhuSQBln8/PuHH4vvHV+doWafAuLbiqm62YurXzv48uaL198/fbv/5e0VkDgxQI5bUB0UY8Sohakh2tHTLWLDQJp+/Pn1vfDMys3L75+8YSuudlKbX9Ic2BZgcpTQ0AI5+tjruy+BeAHMAkL0dpfCOi5mGjiaCdhS0eKXNAM54Nvf35+A1GYQu+HChk11er7/l94/dej46zuvQGL0AESHNDbHvPrx+WfOqWVrsMnRUoysjEhLBxFjNkUhDbLAQkRFNFjBCJx0iLFw+s0DB+99fvWFGLW41FDsaGVeUWEzYQWii7yNXPxnKHX0yEweyFF44+OLcysenDqALAZip6nZ+0px8quii5PLpzh5IFv87e+vL/tf3HiGLAZixylb/kAXo4Q/JJPHqKMpiXJS9A7JkKZqRhRh5xFJUbHVQw81HhZOfnQxSvhUdbQct5BWrLKlFiUOIkbvyEwe598/fL7xES/RLb17n16BmrYUAYqTx7UPzz4C8QmKXEGi5gFPHswMDEBEGhhQRwO7aFLszKzcICcDe+F/iOmJg9RSnDxAhhALKnW9rPUEZXX+/Pv7j4WJmUmCg08Rpvfjr+9vYGxCNF0d/fr7589SUthbe/tf3jhIyLEwebo6esfzK7dDFUxApQewA8/A8Ovfn58ffn1/u//5jWPz7h65CnMUIZrRbkdnMSFFIHltAWkBEP2P4d+/6x+eU1xsgcwiFxAd0lc/PP1AriXU1AeahxnQ0oMcz4Amjoaco1mZmS4PMUf/f7zHuWQoOfr/YyZ23m2guUSiMyI56Y9SPcCpzt//mRgwJj8xHA0cbHzCxsB8bJd78WNKLaWmfkaGUrhxcEcPVsfCXYrEYBlKjoW5GwBO9UZgfXSkuQAAAABJRU5ErkJggg=="

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABGdBTUEAALGPC/xhBQAAAnFJREFUWAntmM9LAkEUx1td7BQIXjrUJRC8CuIP7Bx08+LFutuljgVBUFKH6k+I/oWgfyDo5M9DHYTAW3UIypMIGa72fdLKNMwOjrvpLDSgM/PezpvPft/41F1Y+G/eKmCUy+WhLGQmkzFYf71eX7Ms6wK27HA4XGZ904wNw3jDuqtUKlXCuO8Uw3RyiOwE2e/3H+BbEvmnsf3c7FGlUlnD+m2nGAEnh8gOJc9h9wyS22ML2U1xtvFUCRSr1scr/2aw6xRWCdSLM+kEQnac0XytVhOeeyVQ2SZe+CBECMdrRxRLK1AChKrFZrMZ4mG1A6Xj1e1289qDEiDSv+cLUEAm+VKlXeoZJX+VKm1B+VKlLShfqrQFpSPAliqtQdlSpTUoqWqXKu1Bkf44AWsPivSPGLUHhZhBXyhKkNT8oKhvQN/9ouijMihKRXuUhxm+BYPBU9rO5P+3yxhQKp7gz8qu8cj3CVGeEeswmUzeU0yl//VYfAlYZVCsW02n069ubkLpU4/NbrEZPSVRagDNKC0QXKwESutxVA7QXQtiOZoGg8HsQYkGyhah0o0jGeeYi6LEgI2tSCRSQH/HMQmnONfxVqu1KHROaFROvR03Go32wuFwDrAN2ybpF9vt9uhXkOQaqWtqUIoai8U6pmluYkhlS9rcpt8VKJElEokPFOUNgLzISJF+Vx8o16AEh6L8AmUJ9kMCO39QgoOyTwClY9ARwULRFZF9Upsnitqb4fF2IxAI5DDv2Ta7x0182eNpek9BCQCwVLIKeFk0Z9oZM1Yeeg5KBPj2uoGyRYbmBF8SJWau17Bare7jYdexXlR/TPMNA3qj4kvvrboAAAAASUVORK5CYII="

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABGdBTUEAALGPC/xhBQAAApFJREFUWAntmM1rE0EUwLOb9RAoVBChQry0CPasguBZDz140/ZQFEUogtV7SEK+yMW7f4QUox4EoYcevQmK0j+hF8FTQtN8+HvqyHZ9a3eSNZlFB4a3+2by3m/fvJnMTC73v/yjEfDK5fI47tt93683Go1auL3dbp/tdrtP0d2gngu3TfLsed7BeDzuBEFQqtVqX+Ns+HENmh5DC71e7x1td6lTQ4oPIJcQD4fD4S72A9FpxQp0MBhsY3hZMzStDruXgH0QZ8cKlGG6GmcoJf0TgD3NlhUoBhY1I2npgLxYr9eva/ZsQTUbqeoY/m3NoHOgQK41m82VKKxzoAy/3+/3HzkPKoDA3pOlMAzrXER/wi2Sq3eyACqMx4bf1YjK8K9Wq9VfS5WzoBJSYB+LlOI0KHxrTKpl50FlqRqNRt9z1fWI5gC9L7sq50EZdlmqVrMAmsvn82cyAer8ZBJAUzIRUXL0KBOghUJhP5CTpglvVNK2F9axrh2G32fxzPFnp1QqfQmix+E/OQf8I+uaHJNnUoB8w4zfEmexx1ONBNBnRHWLemyvqPUN63D4mXe5C0hU6H+Ijw/s9D+ZH6gnPtOoSS4sbqLfoZ7S2jUdjg9wOtU9gPVkarVar4nsLYCONChNR3SW+Bssam1JddagYpi8fmULS25fSQql9ZsI1MAib1OTRnY+oAJLGrxMCju3iAqolKSwTKjL5Kr15P3hJaUdvsCSs+sYjU0DIE9zXXPBOLaVE+do1BETrHMS7DTDnxqogJ8ES1TPRz8w6XuqoAYWuUH9LQ3I0/dJwaL9UgcVB+TsC8QGYAPjkOfnRPytebeVfwVUIASWoV4XWGqnWCxu2sLNtH+lUrkmp8iZOp2ns2/P6NiRJoTztgAAAABJRU5ErkJggg=="

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABGdBTUEAALGPC/xhBQAAAktJREFUWAntl89LAkEUx91dyYN4Wjt6FAQPdVBRuoT/QNRfEPg/GFSQ1alrXQq6VpAI3oJuQbCuSF4FoUN08OBB6JKyat9ZVIZFd3d0zFlwYNjZmffjs+/Nvp31+dbN59N1Pa9pWoFHLCQeRqbZAGRuMBjcj9bOM5lMYZqc27mlgCKKBwB4RlfGIJIknaXT6YvxPetVZlVwkkcks5B5RJ9AjnROnHTt1rmCAjKBdJfhMGB1OhwON6xzLPfcQGu1WgwwL3AemgaA1H9Pm3c7xwW0Wq1GDMN4BWjYxrFms+a4tDAoIhnu9/sEMmLnDRFdHWij0QghkiTdMTtIsoYHWQ1os9kMdDqdMgASTpBY76qqWnchN1NkrtQDTmm320+4ZmdaphaQ9no0Gu1SU8zDuUArlcodPO279bZo2okfZlB8da6gl3MLaTqR5YX2p2mDxSEiuQf5PIsOkeURUaZvPaL5Dr87rKBzyP9iX39B7xjngxLRl+B8aGcIp57JwyCibURHtZPnvaYoym4qlXpj2qP/DUkeGh+TU3JlAiUKK2hbxKcXQDe9Amom0QsR9Qyo4YnUo56a5dMLqf/wRERlWb4RHhRpbwWDwaIXQG/j8XhPaFBEs4dOzr1mE/ZlwrmiiMNIS3hQv99/PYYkVyEjipTryWSyKjzouCQJDUqXJNFBJyVJWFBrSZoblKSFVuY9tpYk2j7rW0/+QpfWrCWJdsQEij/CIyj/0AY4jh+sJYm2zQQKQ5946m1sgRKvbUDsoF/i//2QBluPlx2BPyVqr+f1imbEAAAAAElFTkSuQmCC"

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABGdBTUEAALGPC/xhBQAAArBJREFUWAntl81rE0EUwN+bTa3Ugx7qJRevYqwI3jUevXkR8Zaq9C8Qz/UoiAd7qJSQ3PyCgEJND15yqYJSimkUqlc/0FoQBDEfO883GzabhJ3sTnYDE+jAsjPzPua3b+bNzgAclIMIpB8BunXmiFzMVenGwvmk3kVSBzp7BUn77gYRXCKXqnTzdF6nG6cf4yiZ6niQv2SVgHqRRMDfeGj2FK5tfTf1p/RTj2gYpBqIoY9Bu3lZ1ccpqYLqIAMwPBzUzWqpgUZDMphD22Z4gXYqoB7kvnzZvyaDIbo1RJAgj24N98dtJwbtQRJdGD0o7mJp889oHb00ESgtnZsjFclISJVM8E6PES3JRKuEa3iQraaa7ohIdu0F4ttwT/F6x4poH2Q+3jCshSJRRI1Bx4FExDbMZd/H/qgQRSNQXotIrX8Vnu58iC99F0EdVzaaeoVoidEvlK4vFKSU5Wi3gxoc0b+cTnuDvSNaBE1A/jgU97G080ZpGoG6i7lHnL7XRgyRqojPBy4KuoqlD5WMW8jxzqEpAu84pcayL2XDLE+735z4m8dygHCVnl15brRGJ04WMgDnxXF49emk9aAee0fOTweoQzgdoBzW6QCVTmc6QEnsWg/KW+Imlrf37AdFWFGZbzUoR/MrnJiv2A+KsIrLtY7VoHzH4tPWzJqCVMXaqecTxROVRF1Mi0GFI7wkshqUz6+vsbgzcLW2cur5kPzAj6T/tg6Uk+ibvyX5kOptHygEW1ISUNlvnHbd25Jmnd6W1O/fKKJ8Nfjcb5x2nQCf4sP6zzC/RqDCwce80CdyaeJM56PczN0wSNVnBIrFRo0d3uanrXM4Tj9/fIv/60u8wX/U2WeAb5o6oRBQG5ZhuXGPCmdfoHAvSqDssNykLdgBh+oHCLGOxfoXE1trdf8Dp6/q92xDb6YAAAAASUVORK5CYII="

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(31);

	var _store2 = _interopRequireDefault(_store);

	var _header = __webpack_require__(34);

	var _header2 = _interopRequireDefault(_header);

	var _returnTop = __webpack_require__(57);

	var _returnTop2 = _interopRequireDefault(_returnTop);

	var _swiperSlide = __webpack_require__(63);

	var _swiperSlide2 = _interopRequireDefault(_swiperSlide);

	var _actions = __webpack_require__(70);

	var _getters = __webpack_require__(43);

	var _oftenUse = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IScroll = __webpack_require__(71); // <template>
	// 	<nv-header></nv-header>
	// 	<div class="artlist">
	// 		<swiper-slide></swiper-slide>
	// 		<ul class="insurance-entry clearfloat">
	// 			<li v-link="{name:'productlist',params:{id:2}}">重疾险</li>
	// 			<li v-link="{name:'productlist',params:{id:1}}">医疗险</li>
	// 			<li v-link="{name:'productlist',params:{id:5}}">意外险</li>
	// 			<li v-link="{name:'productlist',params:{id:3}}">人寿险</li>
	// 			<li v-link="{name:'productlist',params:{id:4}}">理财险</li>
	// 		</ul>
	// 		<ul class="function-entry clearfloat">
	// 			<li v-link="{name: isLoginFlag?'require-assess':'login'}">
	// 				<span class="function-name">需求测评</span>
	// 				<span class="function-describe">30秒完成测评</span>
	// 			</li>
	// 			<li v-link="{name:'solution-made'}">
	// 				<span class="function-name">方案定制</span>
	// 				<span class="function-describe">为你量身定制</span>
	// 			</li>
	// 			<li v-link="{name:'insurance-strategy'}">
	// 				<span class="function-name">投保攻略</span>
	// 				<span class="function-describe">买对保险必读</span>
	// 			</li>
	// 		</ul>
	// 		<div class="purchase-discount">
	// 			<div class="index-more" v-link="{name:'discount-list'}">购险优惠<i>更多</i></div>
	// 			<div class="discount-box clearfloat">
	// 				<div class="discount" v-for="indexDis in discountArr">
	// 					<a v-bind:href="indexDis.linkUrl"><img v-bind:src="indexDis.imgUrl"></a>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div class="insurance-ask">
	// 			<div class="index-more" v-link="{name:'question-answer-list'}">保险问答<i>更多</i></div>
	// 			<div class="questions-and-answers-list" v-for="queAndAnsList in queAndAnsLists" >
	// 				<div class="questions-and-answers">
	// 					<div class="link-wrapper" v-link="{name:'question-and-answer-detail',params:{id:queAndAnsList.qstId+',index'}}">
	// 						<div class="question-information clearfloat">
	// 							<div class="questioner-name" v-if="queAndAnsList.asker">{{queAndAnsList.asker}}</div>
	// 							<div class="questioner-name" v-else>匿名用户</div>
	// 							<div class="question-watch">
	// 								浏览<i class="question-watch-time">{{queAndAnsList.readQty}}</i>次
	// 							</div>
	// 							<div class="question-date">{{queAndAnsList.askDate}}</div>
	// 						</div>
	// 						<div class="question">
	// 							<i></i><span>{{queAndAnsList.askContent}}</span>
	// 						</div>
	// 						<div class="answer">
	// 							<img src="../img/home_da.png"><span>{{queAndAnsList.replyContent}}</span>
	// 						</div>
	// 					</div>
	// 					<div class="answer-information">
	// 						<div class="answer-name">{{queAndAnsList.agentName}}</div>
	// 						<div class="answer-occupation">{{queAndAnsList.titleName}}</div>
	// 						<div class="demote" v-bind:opFlag="queAndAnsList.opFlag"><i v-bind:class="[((queAndAnsList.opFlag == '2')&&isLoginFlag)?'active':'']"></i><span>{{queAndAnsList.cpCnt}}</span></div>
	// 						<div class="fabulous" v-bind:replyId = "queAndAnsList.replyId"><i v-bind:class="[((queAndAnsList.opFlag == '1')&&isLoginFlag)?'active':'']"></i><span>{{queAndAnsList.dzCnt}}</span></div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div class="our-advantage">
	// 			<div class="index-more" v-on:click="moreAdvantage()">平台优势<i>更多</i></div>
	// 			<div class="advantage-box" id="wrapper">
	// 				<ul class="clearfloat">
	// 					<li v-on:click="jumpAdvantage(index)" v-for="(index,advantageArr) in advantageArrs">
	// 						<img v-bind:src="advantageArr.imgsrc" v-bind:alt="advantageArr.text">
	// 						<!-- <span>{{advantageArr.text}}</span> -->
	// 					</li>
	// 				</ul>
	// 			</div>
	// 		</div>
	// 		<div class="loadingbox" v-show="showLoading">
	// 			<div class="loading"></div>
	// 		</div>
	// 	</div>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				initIndex: 0,
				scroll: true,
				isLoginFlag: false,
				advantageArrs: [{ 'imgsrc': 'src/img/chanpingyoushi.png', 'text': '产品优势' }, { 'imgsrc': 'src/img/fuwuyoushi.png', 'text': '服务优势' }, { 'imgsrc': 'src/img/anquanyoushi.png', 'text': '安全优势' }, { 'imgsrc': 'src/img/lipeiyoushi.png', 'text': '理赔优势' }],
				queAndAnsLists: [],
				searchKey: {
					page: 1,
					limit: 20, //每页加载20条
					tab: 'all' //分页 有all ask share job good
				},
				userInfo: {
					'nickName': '', // 昵称
					'password': '', // 是否有密码
					'gender': '', // 性别
					'avatar': '', // 头像
					'userAccount': '', // 账号
					'birthday': '', // 出生日期
					'cityName': '', // 城市
					'email': '', // 邮箱
					'mobile': '', // 手机号
					'userId': '' // 用户id
				},
				discountArr: [],
				signToken: ''
			};
		},
		watch: {
			queAndAnsLists: function queAndAnsLists() {
				var _this = this;

				$(".fabulous").on("click", function (e) {
					var dom = e.target;
					var noOperation = $(dom).siblings('.demote').attr('opflag') == "0";
					var theReplyId = $(dom).attr('replyid');
					var text = $(dom).find('span').text() - 0 + 1;
					if (_this.signToken && noOperation) {
						// console.log(this.signToken+':'+theReplyId+':'+noOperation)
						$(dom).find("i").css({ '-webkit-animation': 'carousel 1s forwards', 'animation': 'carousel 1s forwards' });
						$(dom).css({ "background": "url('./src/img/home_zan copy.png') no-repeat left center", 'background-size': '0.3rem 0.26rem' });
						$(dom).find('span').text(text);
						_this.postOperationData(theReplyId, '1');
						$(dom).siblings('.demote').attr('opflag', '1');
					}
				});
				$(".demote").on("click", function (e) {
					var dom = e.target;
					var noOperation = $(dom).attr('opflag') == "0";
					var theReplyId = $(dom).siblings('.fabulous').attr('replyid');
					var text = $(dom).find('span').text() - 0 + 1;
					if (_this.signToken && noOperation) {
						$(dom).find("i").css({ '-webkit-animation': 'carousel 1s forwards', 'animation': 'carousel 1s forwards' });
						$(dom).css({ "background": "url('./src/img/home_cai copy.png') no-repeat left center", 'background-size': '0.3rem 0.26rem' });
						$(dom).find('span').text(text);
						_this.postOperationData(theReplyId, '2');
						$(dom).attr('opflag', '1');
					}
				});
			}
		},
		ready: function ready() {
			if ((0, _oftenUse.getCookieResult)("sign_token")) {
				this.signToken = (0, _oftenUse.getCookieResult)("sign_token");
				this.getQueAndAnsData(this.signToken);
			} else {
				this.getQueAndAnsData();
			}
			// console.log(getCookieResult("sign_token"))
			if (this.signToken && !this.isLoginFlag) {
				this.hand_userLogin();
				this.getUserInforData();
			}
			var myScroll;
			this.userInfo = this.ache_getUserInfo;
			myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, click: true });

			this.getDiscountIndex();
			this.isLoginFlag = this.ache_userLoginState;
		},
		methods: {
			jumpAdvantage: function jumpAdvantage(index) {
				// console.log(index);
				switch (index) {
					case 0:
						window.location.href = 'http://jx.tou360.com/v1/advantageview?index=0';
						break;
					case 1:
						window.location.href = 'http://jx.tou360.com/v1/advantageview?index=1';
						break;
					case 2:
						window.location.href = 'http://jx.tou360.com/v1/advantageview?index=2';
						break;
					case 3:
						window.location.href = 'http://jx.tou360.com/v1/advantageview?index=3';
						break;
					default:
						break;
				}
			},
			getQueAndAnsData: function getQueAndAnsData(token) {
				var _this2 = this;

				$.ajax({
					type: "post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url: _store2.default.state.hostUrl + "questionlist",
					cache: false,
					data: {
						isIndex: '1',
						loginType: '1',
						sign: token
					},
					complete: function complete(status) {
						// console.log("complete")
					},
					error: function error() {
						// console.log("error")
					},
					success: function success(res) {
						var res = eval(res);
						// console.log(res)
						if (res.data) _this2.queAndAnsLists = res.data.list;
					}
				});
			},
			moreAdvantage: function moreAdvantage() {
				window.location.href = 'http://jx.tou360.com/v1/advantageview?index=0';
			},
			getDiscountIndex: function getDiscountIndex() {
				var _this3 = this;

				$.ajax({
					type: "post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url: _store2.default.state.hostUrl + "indexdiscount",
					cache: false,
					data: {},
					complete: function complete(status) {
						// console.log("complete")
					},
					error: function error() {
						// console.log("error")
					},
					success: function success(res) {
						var res = eval(res);
						if (res.data) {
							_this3.discountArr = _this3.discountArr.concat(res.data.list);
						}
						// console.log(res)
					}
				});
			},
			getUserInforData: function getUserInforData() {
				var _this4 = this;

				$.ajax({
					type: 'post',
					url: _store2.default.state.hostUrl + 'userinfo',
					data: {
						loginType: 1,
						sign: this.signToken
					},
					success: function success(res) {
						// console.log(res);
						if (res.data) {
							if (res.data.userAccount) _this4.userInfo.userAccount = res.data.userAccount;
							if (res.data.avatar) _this4.userInfo.avatar = res.data.avatar;
							if (res.data.nickName) _this4.userInfo.nickName = res.data.nickName;
							if (res.data.birthday) _this4.userInfo.birthday = res.data.birthday;
							if (res.data.gender) _this4.userInfo.gender = res.data.gender;
							if (res.data.cityName) _this4.userInfo.cityName = res.data.cityName;
							if (res.data.email) _this4.userInfo.email = res.data.email;
							if (res.data.mobile) _this4.userInfo.mobile = res.data.mobile;
							_this4.tabSetUserInfo(_this4.userInfo);
						}
						// console.log(this.ache_getUserInfo);
					}
				});
			},
			postOperationData: function postOperationData(replyId, opType) {
				var _this5 = this;

				$.ajax({
					type: "post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url: _store2.default.state.hostUrl + "operatereply",
					cache: false,
					data: {
						replyId: replyId,
						opType: opType,
						loginType: '1',
						sign: this.signToken
					},
					complete: function complete(status) {
						// console.log("complete")
					},
					error: function error() {
						// console.log("error")
					},
					success: function success(res) {
						var res = eval(res);
						// console.log(res)
						if (res.data) {
							_this5.discountArr = _this5.discountArr.concat(res.data.list);
						}
						// console.log(res)
					}
				});
			}
		},
		components: {
			'nv-header': _header2.default,
			'nv-top': _returnTop2.default,
			'swiper-slide': _swiperSlide2.default
		},
		destroyed: function destroyed() {
			// 退出组件解除window的scroll事件,防止别的页面下拉加载。
			$(window).off('scroll');
		},
		store: _store2.default, //在组件加入store，让它的子组件和store连接
		vuex: {
			actions: {
				hand_userLogin: _actions.isLogin,
				tabSetUserInfo: _actions.setUserInfo,
				hand_setSignTiken: _actions.setSignToken
			},
			getters: {
				ache_userLoginState: _getters.getLoginState,
				ache_getUserInfo: _getters.getUserInfo,
				ache_getSignToken: _getters.getSignToken
			}
		}
	};
	// </script>
	// <style lang="sass">
	// 	@-webkit-keyframes carousel{
	// 		0%{
	// 			opacity: 1;
	// 			z-index: 2;
	// 		}
	// 		99%{
	// 			opacity: 0;
	// 			z-index: 2;
	// 			top: -0.6rem;
	// 		}
	// 		100%{
	// 			opacity: 0;
	// 			z-index: -1;
	// 			top: 0;
	// 		}
	// 	}
	// 	@keyframes carousel{
	// 		0%{
	// 			opacity: 1;
	// 			z-index: 2;
	// 		}
	// 		99%{
	// 			opacity: 0;
	// 			z-index: 2;
	// 			top: -0.6rem;
	// 		}
	// 		100%{
	// 			opacity: 0;
	// 			z-index: -1;
	// 			top: 0;
	// 		}
	// 	}
	// 	.artlist{
	// 		overflow: hidden;
	// 		width:100%;
	// 		padding-top : 0.9rem;
	// 		.insurance-entry {
	// 			display: block;
	// 			width:100%;
	// 			height:2.06rem;
	// 			background:#fff;
	// 			li{
	// 				display:block;
	// 				float: left;
	// 				width:20%;
	// 				font-size: 0.26rem;
	// 				color: #404040;
	// 				box-sizing: border-box;
	// 				text-align: center;
	// 				padding-top:1.4rem;
	// 				background:url('../img/zhongji.png') no-repeat 0.4rem 0.4rem;
	// 				background-size: 0.8rem 0.8rem;
	// 			}
	// 			li:nth-child(2){
	// 				background:url('../img/yiliao.png') no-repeat 0.4rem 0.4rem;
	// 				background-size: 0.8rem 0.8rem;
	// 			}
	// 			li:nth-child(3){
	// 				background:url('../img/yiwai.png') no-repeat 0.4rem 0.4rem;
	// 				background-size: 0.8rem 0.8rem;
	// 			}
	// 			li:nth-child(4){
	// 				background:url('../img/renshou.png') no-repeat 0.4rem 0.4rem;
	// 				background-size: 0.8rem 0.8rem;
	// 			}
	// 			li:nth-child(5){
	// 				background:url('../img/licai.png') no-repeat 0.4rem 0.4rem;
	// 				background-size: 0.8rem 0.8rem;
	// 			}
	// 		}
	// 		.function-entry{
	// 			width:100%;
	// 			height:1.85rem;
	// 			margin-top: 0.2rem;
	// 			background:#fff;
	// 			li{
	// 				display:block;
	// 				float: left;
	// 				width:33.33%;
	// 				font-size: 0.26rem;
	// 				color: #404040;
	// 				box-sizing: border-box;
	// 				text-align: center;
	// 				padding-top:1.02rem;
	// 				background:url('../img/xqcp.png') no-repeat 0.9rem 0.22rem;
	// 				background-size: 0.7rem 0.7rem;
	// 				.function-name{
	// 					width:100%;
	// 					height:0.36rem;
	// 					display:block;
	// 					line-height: 0.36rem;
	// 					font-size:0.28rem;
	// 				}
	// 				.function-describe{
	// 					display:block;
	// 					width:100%;
	// 					font-size:0.22rem;
	// 					color:#ababab;
	// 					line-height:0.34rem;
	// 				}
	// 			}
	// 			li:nth-child(2){
	// 				background:url('../img/fadz.png') no-repeat 0.9rem 0.22rem;
	// 				background-size: 0.7rem 0.7rem;
	// 			}
	// 			li:nth-child(3){
	// 				background:url('../img/glnb.png') no-repeat 0.9rem 0.22rem;
	// 				background-size: 0.7rem 0.7rem;
	// 			}
	// 		}
	// 		.index-more{
	// 			width:100%;
	// 			height:0.88rem;
	// 			text-align:center;
	// 			line-height:0.88rem;
	// 			font-size:0.3rem;
	// 			color: #404040;
	// 			background:url('../img/more.png') no-repeat right center;
	// 			background-size: 0.18rem 0.31rem;
	// 			position:relative;
	// 			i{
	// 				display:block;
	// 				width: 0.7rem;
	// 				height: 100%;
	// 				line-height:0.92rem;
	// 				position:absolute;
	// 				font-size:0.26rem;
	// 				top: 0;
	// 				right: 0.5rem;
	// 			}
	// 		}
	// 		.purchase-discount{
	// 			width:100%;
	// 			height:4rem;
	// 			background:#fff;
	// 			margin-top: 0.2rem;
	// 			box-sizing:border-box;
	// 			padding: 0 0.25rem;
	// 			.index-more{
	//
	// 				i{
	//
	// 					right: 0.22rem;
	// 				}
	// 			}
	// 			.discount-box{
	// 				width:100%;
	// 				height:2.9rem;
	// 				.discount{
	// 					float:left;
	// 					a{
	// 						display: block;
	// 						width: 100%;
	// 						height: 100%;
	// 						box-sizing: border-box;
	// 						img{
	// 							width:100%;
	// 							height:100%;
	// 							float: left;
	// 						}
	// 					}
	// 				}
	// 				.discount:nth-child(1){
	// 					width:3.45rem;
	// 					height:2.9rem;
	// 					margin-right: 0.1rem;
	// 				}
	// 				.discount:nth-child(2){
	// 					width:3.45rem;
	// 					height:1.4rem;
	// 				}
	// 				.discount:nth-child(3){
	// 					width:3.45rem;
	// 					height:1.4rem;
	// 					margin-top: 0.1rem;
	// 				}
	// 			}
	// 		}
	// 		.insurance-ask{
	// 			width:100%;
	// 			background:#fff;
	// 			margin-top: 0.2rem;
	// 			.index-more{
	// 				padding:0 0.25rem;
	// 				box-sizing:border-box;
	// 				background:url('../img/more.png') no-repeat 96.1% center;
	// 				background-size: 0.18rem 0.31rem;
	// 			}
	// 			.questions-and-answers-list{
	// 				width:100%;
	// 				box-sizing:border-box;
	// 				padding: 0 0.25rem;
	// 				border-top: 2px solid #f2f2f2;
	// 				.questions-and-answers{
	// 					width:100%;
	// 					.question-information{
	// 						width:100%;
	// 						padding-top:0.25rem;
	// 						div{
	// 							font-size:0.24rem;
	// 							color: #ababab;
	// 						}
	// 						.questioner-name{
	// 							float:left;
	// 						}
	// 						.question-date{
	// 							float:right;
	// 							margin-right: 0.25rem;
	// 						}
	// 						.question-watch{
	// 							float:right;
	// 						}
	// 					} 
	// 					.question{
	// 						width:100%;
	// 						padding: 0.2rem 0rem;
	// 						font-size: 0.28rem;
	// 						min-height: 0.45rem;
	// 						line-height:0.45rem;
	// 						color:#404040;
	// 						border-bottom: 1px solid #f2f2f2;
	// 						i{
	// 							display:block;
	// 							float: left;
	// 							width:0.42rem;
	// 							height:0.42rem;
	// 							background:#9dd2fe;
	// 							font-size:0.26rem;
	// 							text-align:center;
	// 							color: #fff;
	// 							margin-right: 0.1rem;
	// 							background:url('../img/home_wen.png') no-repeat;
	// 							background-size:100% 100%;
	// 						}
	// 					}
	// 					.answer{
	// 						width:100%;
	// 						margin: 0.2rem 0rem;
	// 						font-size: 0.28rem;
	// 						height: 0.9rem;
	// 						line-height:0.45rem;
	// 						color:#7c7c7c;
	// 						display: -webkit-box;
	// 						-webkit-box-orient: vertical;
	// 						-webkit-line-clamp: 2;
	// 						overflow: hidden;
	// 						img{
	// 							width:0.42rem;
	// 							height:0.42rem;
	// 							margin-right: 0.1rem;
	// 						}
	// 						i{
	// 							display:block;
	// 							float: left;
	// 							width:0.42rem;
	// 							height:0.42rem;
	// 							background:#d0beb2;
	// 							font-size:0.26rem;
	// 							text-align:center;
	// 							color: #fff;
	// 							background:url('../img/home_da.png') no-repeat;
	// 							background-size:100% 100%;
	// 							margin-right: 0.1rem;
	// 						}
	// 					}
	// 					.answer-information{
	// 						width:100%;
	// 						height:0.3rem;
	// 						padding-bottom: 0.2rem;
	// 						div{
	// 							font-size:0.24rem;
	// 							color: #ababab;
	// 							line-height: 0.26rem;
	// 							height:0.26rem;	
	// 						}
	// 						.answer-name{
	// 							float:left;
	// 							margin-right: 0.1rem;
	// 						}
	// 						.answer-occupation{
	// 							float:left;
	// 						}
	// 						.demote{
	// 							float: right;
	// 							padding-left: 0.4rem;
	// 							background:url('../img/demote.png') no-repeat left center;
	// 							background-size:0.3rem 0.26rem;
	// 							position:relative;
	// 							i{
	// 								display:block;
	// 								position:absolute;
	// 								width: 0.3rem;
	// 								height: 0.26rem;
	// 								left:0;
	// 								top: 0;
	// 								background: url('../img/home_cai copy.png') no-repeat;
	// 								background-size: 100% 100%;
	// 								z-index: -1;
	// 							}
	// 							i.active{
	// 								z-index: 2;
	// 							}
	// 						}
	// 						.fabulous{
	// 							float:right;
	// 							padding-left: 0.4rem;
	// 							margin-right: 0.2rem;
	// 							background:url('../img/fabulous.png') no-repeat left center;
	// 							background-size:0.3rem 0.26rem;
	// 							position: relative;
	// 							i{
	// 								display:block;
	// 								position:absolute;
	// 								width: 0.3rem;
	// 								height: 0.26rem;
	// 								left:0;
	// 								top: 0;
	// 								background: url('../img/home_zan copy.png') no-repeat;
	// 								background-size: 100% 100%;
	// 								z-index: -1;
	// 							}
	// 							i.active{
	// 								z-index: 2;
	// 							}
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 		.our-advantage{
	// 			width:100%;
	// 			background:#fff;
	// 			margin-top: 0.2rem;
	// 			.index-more{
	// 				padding:0 0.25rem;
	// 				box-sizing:border-box;
	// 				background:url('../img/more.png') no-repeat 96.1% center;
	// 				background-size: 0.18rem 0.31rem;
	// 			}
	// 			.advantage-box{
	// 				width:100%;
	// 				height:2.35rem;
	// 				overflow:hidden;
	// 				position: absolute;
	// 				z-index: 1;
	// 				ul{
	// 					display:block;
	// 					width:11.68rem;
	// 					position: absolute;
	// 					z-index: 1;
	// 					background:#fff;
	// 					li{
	// 						text-align:center;
	// 						color: #ababab;
	// 						font-size:0.28rem;
	// 						display:block;
	// 						float:left;
	// 						width:2.84rem;
	// 						margin-right: 0.1rem;
	// 						img{
	// 							width:2.8rem;
	// 							height:1.6rem;
	// 							border:1px solid #e9e9e9;
	// 						}
	// 						span{
	// 							display:block;
	// 							width:100%;
	// 							line-height:0.72rem;
	// 						}
	// 					}
	// 					li:nth-child(4){
	// 						margin-right: 0;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// </style>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(32);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _oftenUse = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);

	var state = {
		// 页面打开默认设置登录状态为否
		lastLogin: localStorage.getItem("lastLogin") || false,
		isLogin: false,
		// 保存登录信息
		userInfo: {
			'nickName': '登录', // 昵称
			'password': '', // 是否有密码
			'gender': '', // 性别
			'avatar': '', // 头像
			'userAccount': '', // 账号
			'birthday': '', // 出生日期
			'cityName': '', // 城市
			'email': '', // 邮箱
			'mobile': '', // 手机号
			'userId': '' // 用户id
		},
		sign_token: '',
		tipContent: '',
		tipShow: false,
		message_count: 0,
		// hostUrl:'http://192.168.1.245/jx/v2/'
		hostUrl: 'http://jx.tou360.com/jx/v2/'
	};

	var mutations = {
		SETTOKEN: function SETTOKEN(state, token) {
			state.sign_token = token;
		},

		// 设置登录
		ISLOGIN: function ISLOGIN(state) {
			state.isLogin = true;
		},

		// 退出登录
		NOTLOGIN: function NOTLOGIN(state) {
			state.isLogin = false;
			(0, _oftenUse.removeTheCookie)("sign_token");
			(0, _oftenUse.removeTheCookie)("token_id");
		},

		// 设置登录用户信息
		SETUSERINFO: function SETUSERINFO(state, obj) {
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
		SETTIPCONTENT: function SETTIPCONTENT(state, content) {
			state.tipContent = content;
		},

		// 设置tips弹窗的显示隐藏状态
		SETTIPSHOW: function SETTIPSHOW(state, status) {
			state.tipShow = status;
		},

		// 设置未读消息条数
		SETNOTMESSAGECOUNT: function SETNOTMESSAGECOUNT(state, count) {
			state.message_count = count;
		}
	};

	exports.default = new _vuex2.default.Store({
		state: state,
		mutations: mutations
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vuex v1.0.0-rc.2
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, function () { 'use strict';

	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };

	  var classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };

	  var createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  var toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	      return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };

	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */

	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            prev[key] = existing.concat(obj[key]);
	          } else {
	            prev[key] = [existing].concat(obj[key]);
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }

	  /**
	   * Check whether the given value is Object or not
	   *
	   * @param {*} obj
	   * @return {Boolean}
	   */

	  function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  }

	  /**
	   * Get state sub tree by given keys.
	   *
	   * @param {Object} state
	   * @param {Array<String>} nestedKeys
	   * @return {Object}
	   */
	  function getNestedState(state, nestedKeys) {
	    return nestedKeys.reduce(function (state, key) {
	      return state[key];
	    }, state);
	  }

	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */

	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var noop = function noop() {};
	      var unwatch = vm.$watch(noop, noop);
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }

	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }

	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	  function devtoolPlugin(store) {
	    if (!hook) return;

	    hook.emit('vuex:init', store);

	    hook.on('vuex:travel-to-state', function (targetState) {
	      store.replaceState(targetState);
	    });

	    store.subscribe(function (mutation, state) {
	      hook.emit('vuex:mutation', mutation, state);
	    });
	  }

	  function override (Vue) {
	    var version = Number(Vue.version.split('.')[0]);

	    if (version >= 2) {
	      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	    } else {
	      (function () {
	        // override init and inject vuex init procedure
	        // for 1.x backwards compatibility.
	        var _init = Vue.prototype._init;
	        Vue.prototype._init = function () {
	          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	          _init.call(this, options);
	        };
	      })();
	    }

	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */

	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection

	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var actions = vuex.actions;
	        var getters = vuex.getters;
	        // handle deprecated state option

	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
	          }
	        }
	      }
	    }

	    /**
	     * Setter for all getter properties.
	     */

	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }

	    /**
	     * Define a Vuex getter on an instance.
	     *
	     * @param {Vue} vm
	     * @param {String} key
	     * @param {Function} getter
	     */

	    function defineVuexGetter(vm, key, getter) {
	      if (typeof getter !== 'function') {
	        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
	      } else {
	        Object.defineProperty(vm, key, {
	          enumerable: true,
	          configurable: true,
	          get: makeComputedGetter(vm.$store, getter),
	          set: setter
	        });
	      }
	    }

	    /**
	     * Make a computed getter, using the same caching mechanism of computed
	     * properties. In addition, it is cached on the raw getter function using
	     * the store's unique cache id. This makes the same getter shared
	     * across all components use the same underlying watcher, and makes
	     * the getter evaluated only once during every flush.
	     *
	     * @param {Store} store
	     * @param {Function} getter
	     */

	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;

	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (vm) {
	        return getter(vm.state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }

	    /**
	     * Make a bound-to-store version of a raw action function.
	     *
	     * @param {Store} store
	     * @param {Function} action
	     * @param {String} key
	     */

	    function makeBoundAction(store, action, key) {
	      if (typeof action !== 'function') {
	        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
	      }
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }

	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }

	  var Vue = void 0;
	  var uid = 0;

	  var Store = function () {

	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} plugins
	     *        - {Boolean} strict
	     */

	    function Store() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$plugins = _ref.plugins;
	      var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      classCallCheck(this, Store);

	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      this._subscribers = [];
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: {
	          state: state
	        }
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	      // apply plugins
	      devtoolPlugin(this);
	      plugins.forEach(function (plugin) {
	        return plugin(_this);
	      });
	    }

	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */

	    createClass(Store, [{
	      key: 'replaceState',


	      /**
	       * Replace root state.
	       *
	       * @param {Object} state
	       */

	      value: function replaceState(state) {
	        this._dispatching = true;
	        this._vm.state = state;
	        this._dispatching = false;
	      }

	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */

	    }, {
	      key: 'dispatch',
	      value: function dispatch(type) {
	        var _this2 = this;

	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }

	        var silent = false;
	        var isObjectStyleDispatch = false;
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          isObjectStyleDispatch = true;
	          payload = type;
	          if (type.silent) silent = true;
	          type = type.type;
	        }
	        var handler = this._mutations[type];
	        var state = this.state;
	        if (handler) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(handler)) {
	            handler.forEach(function (h) {
	              isObjectStyleDispatch ? h(state, payload) : h.apply(undefined, [state].concat(toConsumableArray(payload)));
	            });
	          } else {
	            isObjectStyleDispatch ? handler(state, payload) : handler.apply(undefined, [state].concat(toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          if (!silent) {
	            (function () {
	              var mutation = isObjectStyleDispatch ? payload : { type: type, payload: payload };
	              _this2._subscribers.forEach(function (sub) {
	                return sub(mutation, state);
	              });
	            })();
	          }
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }

	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {Function} fn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */

	    }, {
	      key: 'watch',
	      value: function watch(fn, cb, options) {
	        var _this3 = this;

	        if (typeof fn !== 'function') {
	          console.error('Vuex store.watch only accepts function.');
	          return;
	        }
	        return this._vm.$watch(function () {
	          return fn(_this3.state);
	        }, cb, options);
	      }

	      /**
	       * Subscribe to state changes. Fires after every mutation.
	       */

	    }, {
	      key: 'subscribe',
	      value: function subscribe(fn) {
	        var subs = this._subscribers;
	        if (subs.indexOf(fn) < 0) {
	          subs.push(fn);
	        }
	        return function () {
	          var i = subs.indexOf(fn);
	          if (i > -1) {
	            subs.splice(i, 1);
	          }
	        };
	      }

	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */

	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;

	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }

	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */

	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        var _this4 = this;

	        if (!isObject(modules)) return;

	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];

	          // set this module's state
	          Vue.set(state, key, module.state || {});

	          // retrieve nested modules
	          _this4._setupModuleState(state[key], module.modules);
	        });
	      }

	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */

	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        var updatedMutations = this._createModuleMutations(modules, []);
	        this._mutations = mergeObjects([this._rootMutations].concat(toConsumableArray(updatedMutations)));
	      }

	      /**
	       * Helper method for _setupModuleMutations.
	       * The method retrieve nested sub modules and
	       * bind each mutations to its sub tree recursively.
	       *
	       * @param {Object} modules
	       * @param {Array<String>} nestedKeys
	       * @return {Array<Object>}
	       */

	    }, {
	      key: '_createModuleMutations',
	      value: function _createModuleMutations(modules, nestedKeys) {
	        var _this5 = this;

	        if (!isObject(modules)) return [];

	        return Object.keys(modules).map(function (key) {
	          var module = modules[key];
	          var newNestedKeys = nestedKeys.concat(key);

	          // retrieve nested modules
	          var nestedMutations = _this5._createModuleMutations(module.modules, newNestedKeys);

	          if (!module || !module.mutations) {
	            return mergeObjects(nestedMutations);
	          }

	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }

	              original.apply(undefined, [getNestedState(state, newNestedKeys)].concat(args));
	            };
	          });

	          // merge mutations of this module and nested modules
	          return mergeObjects([mutations].concat(toConsumableArray(nestedMutations)));
	        });
	      }

	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */

	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this6 = this;

	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, 'state', function () {
	          if (!_this6._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm.state;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Use store.replaceState() to explicit replace store state.');
	      }
	    }]);
	    return Store;
	  }();

	  function install(_Vue) {
	    if (Vue) {
	      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    override(Vue);
	  }

	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }

	  var index = {
	    Store: Store,
	    install: install
	  };

	  return index;

	}));

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.setCookie = setCookie;
	exports.getCookieResult = getCookieResult;
	exports.removeTheCookie = removeTheCookie;
	function setCookie(name, val, lifeCircle) {
		var aDate = new Date();
		aDate.setTime(new Date().getTime() + lifeCircle * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + val + ";expires=" + aDate.toUTCString() + ";path=/";
	}
	function getCookieResult(name) {
		var result = document.cookie.replace(/\s/g, "");
		var resultArray = result.split(";");
		for (var i = 0; i < resultArray.length; i++) {
			var theName = resultArray[i].split("=");
			if (theName[0] == name) {
				return theName[1];
			}
		}
	}
	function removeTheCookie(name) {
		setCookie(name, "", -1);
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0f03cd24/header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".page-cover {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 98; }\n\n.header {\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  height: 0.9rem;\n  top: 0px;\n  left: 0px;\n  background: #fff;\n  z-index: 10; }\n  .header .logo {\n    width: 40%;\n    height: 0.45rem;\n    position: absolute;\n    top: 0.23rem;\n    left: 2.4rem;\n    box-sizing: border-box;\n    padding-left: 0.66rem;\n    font-size: 0.34rem;\n    color: #4a4a4a;\n    line-height: 0.45rem;\n    /*background:url('../img/logo.png') no-repeat left center;*/\n    /*background-size: 0.55rem 0.45rem;*/ }\n  .header .left-menu {\n    position: absolute;\n    width: 0.42rem;\n    height: 0.44rem;\n    top: 0.23rem;\n    left: 0.35rem;\n    background: url(" + __webpack_require__(37) + ") no-repeat;\n    background-size: 100% 100%; }\n", ""]);

	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="page-cover"  v-show="coverShow" v-on:click="hideMenu"></div>
	// 	<div class="header">
	// 		<span class="logo">佳保保险</span>
	// 		<span class="left-menu" v-on:click="showMenu"></span>
	// 	</div>
	// 	<nv-menu :showm="menuShow"></nv-menu>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				coverShow: false,
				menuShow: false
			};
		},
		methods: {
			showMenu: function showMenu() {
				this.coverShow = true;
				this.menuShow = true;
			},
			hideMenu: function hideMenu() {
				this.coverShow = false;
				this.menuShow = false;
			}

		},
		components: {
			'nv-menu': __webpack_require__(39)
		}
	};
	// </script>
	// <style lang="sass">
	// 	.page-cover {
	// 		position: fixed;
	// 		top: 0px;
	// 		left: 0px;
	// 		width: 100%;
	// 		height: 100%;
	// 		background: rgba(0, 0, 0, 0.4);
	// 		z-index: 98;
	// 	}
	// 	.header {
	// 		position: fixed;
	// 		top : 0px;
	// 		width: 100%;
	// 		height: 0.9rem;
	// 		top: 0px;
	// 		left: 0px;
	// 		background: #fff;
	// 		z-index: 10;
	// 		.logo{
	// 			width:40%;
	// 			height:0.45rem;
	// 			position:absolute;
	// 			top: 0.23rem;
	// 			left:2.4rem;
	// 			box-sizing: border-box;
	// 			padding-left: 0.66rem;
	// 			font-size: 0.34rem;
	// 			color: #4a4a4a;
	// 			line-height: 0.45rem;
	// 			/*background:url('../img/logo.png') no-repeat left center;*/
	// 			/*background-size: 0.55rem 0.45rem;*/
	// 		}
	// 		.left-menu {
	// 			position: absolute;
	// 			width: 0.42rem;
	// 			height: 0.44rem;
	// 			top: 0.23rem;
	// 			left: 0.35rem;
	// 			background: url('../img/rentou.png') no-repeat;
	// 			background-size: 100% 100%;
	// 		}
	// 	}
	// </style>

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(40)
	__vue_script__ = __webpack_require__(42)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-16b5dab6/menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./menu.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./menu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menu {\n\tposition: fixed;\n\tleft: -6rem;\n\ttop: 0;\n\tpadding:0 0.25rem;\n\twidth:5.5rem;\n\theight: 100%;\n\tbackground: #ffffff;\n\t-webkit-transition: all .3s ease;\n\ttransition: all .3s ease;\n\tz-index: 99;\n}\n.user-info{\n\twidth:100%;\n\theight:1.38rem;\n\tborder-bottom:1px solid #e9e7e7;\n}\n.user-img{\n\twidth:0.8rem;\n\theight:0.8rem;\n\tpadding:0.4rem 0.2rem 0 0.1rem;\n\tfloat:left;\n}\n.user-img img{\n\twidth:0.8rem;\n\theight:0.8rem;\n\tdisplay:block;\n\tborder-radius: 50%;\n}\n.user-name p{\n\tfont-size:0.32rem;\n\tcolor:#424242;\n\tpadding-top:0.6rem;\n\tfloat:left;\n}\n.user-more{\n\twidth:0.54rem;\n\theight:0.54rem;\n\tpadding-top:0.59rem;\n\tfloat:right;\n}\n.user-more img{\n\tdisplay:block;\n\twidth:0.46rem;\n\theight:0.46rem;\n}\n.insurer{\n\twidth:100%;\n\theight:1.7rem;\n\tborder-bottom:1px solid #e9e7e7;\n\tfont-size:0.25rem;\n}\n.insurer-private{\n\twidth:100%;\n\theight:0.82rem;\n\tline-height:1rem;\n\tcolor:#7c7c7c;\n}\n.insurer-box{\n\twidth:100%;\n\theight:0.56rem;\n\t/*background:rgba(59,172,238,0.6);*/\n\tline-height:0.56rem;\n\tcolor:white;\n}\n.insurer-box img{\n\tdisplay:block;\n\theight:0.34rem;\n\tmargin:0.1rem;\n\tfloat:right;\n}\n.insurer .insurer-tel{\n\tfloat:left;\n\t/*margin-right:0.5rem;*/\n\t/*background:#59aeff;*/\n\t/*background: -webkit-linear-gradient(left top, #4abdee, #3bacee);*/\n\t/*background: -o-linear-gradient(bottom right, #4abdee, #3bacee);*/\n\t/*background: -moz-linear-gradient(bottom right, #4abdee, #3bacee);*/\n\t/*background: linear-gradient(to bottom right, #4abdee, #3bacee);*/\n}\n.insurer-tel span{\n\tcolor:#404040;\n\tfloat:left;\n\tfont-size:0.25rem;\n}\n.insurer-tel span:nth-of-type(2){\n\tcolor:#0089fd;\n\tfloat:right;\n}\n.insurer .insurer-evaluate{\n\tfloat:left;\n\t/*background:rgba(255,136,24,0.6);*/\n\tbackground: -webkit-linear-gradient(left, #FFBB19 , #FF8614);\n\tbackground: linear-gradient(to right, #FFBB19 , #FF8614);\n}\n.insurer .insurer-evaluate img{\n\tmargin-left:0.4rem;\n}\n.menu-ul li{\n\twidth:100%;\n\theight:0.66rem;\n\tfont-size:0.28rem;\n\tcolor:#404040;\n\tmargin-top:0.4rem;\n\tline-height:0.66rem;\n}\n.menu-ul li img{\n\twidth:0.66rem;\n\theight:0.66rem;\n\tfloat:left;\n\tpadding-right:0.35rem;\n}\n.menu-ul .menu-ul-order{\n\tmargin-left:0.07rem;\n\tpadding-right:0.29rem;\n}\n.copyright{\n\tmargin-top:1.8rem;\n}\n.copyright p{\n\tcolor:#ababab;\n\tline-height:0.4rem;\n\ttext-align:center;\n\tfont-size:0.23rem;\n}\n.showMenu {\n\t-webkit-transform: translateX(6rem);\n\t        transform: translateX(6rem);\n}\n", ""]);

	// exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(31);

	var _store2 = _interopRequireDefault(_store);

	var _getters = __webpack_require__(43);

	var _oftenUse = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		props: ['showm'],
		store: _store2.default,
		data: function data() {
			return {
				// user_name : this.ache_userLoginState ? store.state.userInfo.nickName : '登录',
				isLoginFlag: false, // 判断 登录之后 图标变化
				privateInsurerInfo: {},
				userInfo: {
					'nickName': '', // 昵称
					'password': '', // 是否有密码
					'gender': '', // 性别
					'avatar': '', // 头像
					'userAccount': '', // 账号
					'birthday': '', // 出生日期
					'cityName': '', // 城市
					'email': '', // 邮箱
					'mobile': '', // 手机号
					'userId': '' // 用户id
				},
				signToken: '',
				insurerShow: false
			};
		},
		watch: {
			isLoginFlag: function isLoginFlag() {
				// console.log("iam change")
			}
		},
		ready: function ready() {
			var _this = this;

			// console.log(this.ache_userLoginState);
			// 设置 登录之后 的状态
			this.userInfo = this.ache_getUserInfo;
			this.isLoginFlag = this.ache_userLoginState;
			this.signToken = (0, _oftenUse.getCookieResult)("sign_token");
			if (this.signToken) {
				this.isLoginFlag = true;
			}
			// 获取 绑定顾问
			$.ajax({
				type: 'post',
				url: _store2.default.state.hostUrl + 'getbindingagent',
				data: {
					loginType: 1,
					sign: this.signToken
				},
				success: function success(res) {
					var res = eval(res);
					if (res.data) {
						//console.log(res.data);
						// 显示 专属顾问
						if (_this.isLoginFlag) {
							_this.insurerShow = true;
							_this.privateInsurerInfo = res.data;
						}
					} else {
						_this.insurerShow = false;
					}
				}
			});
			//console.log(this.ache_userLoginState+"zhuye ");
			//console.log(this.getCookie('sign_token'));
			// console.log(this.ache_userLoginState+"zhuye ");
			//console.log(this.getCookie('sign_token'));
		},
		methods: {
			// 邀请好友
			inviteFriends: function inviteFriends() {
				if (this.signToken) {
					$.ajax({
						type: 'post',
						url: _store2.default.state.hostUrl + 'invitefriend',
						data: {
							loginType: 1,
							sign: this.signToken
						},
						success: function success(res) {
							var res = eval(res);
							//console.log(res);
							var shareUrlWeb = res.data.shareUrl;
							window.location.href = shareUrlWeb;
						}
					});
				} else {
					this.$router.go({ name: 'login' });
				}
				//window.location.href='http://jx.tou360.com/v1/invitefriendview?invitecode=7727&from=singlemessage&isappinstalled=1';
			},
			callInsurerTel: function callInsurerTel() {
				var callTelValue = $('.btn-call-insurer').html();
				window.location.href = "tel:" + callTelValue;
			}
		},
		vuex: {
			getters: {
				ache_userLoginState: _getters.getLoginState,
				ache_getUserInfo: _getters.getUserInfo
			}
		}
	};
	// </script>
	// <style>
	// 	.menu {
	// 		position: fixed;
	// 		left: -6rem;
	// 		top: 0;
	// 		padding:0 0.25rem;
	// 		width:5.5rem;
	// 		height: 100%;
	// 		background: #ffffff;
	// 		transition: all .3s ease;
	// 		z-index: 99;
	// 	}
	// 	.user-info{
	// 		width:100%;
	// 		height:1.38rem;
	// 		border-bottom:1px solid #e9e7e7;
	// 	}
	// 	.user-img{
	// 		width:0.8rem;
	// 		height:0.8rem;
	// 		padding:0.4rem 0.2rem 0 0.1rem;
	// 		float:left;
	// 	}
	// 	.user-img img{
	// 		width:0.8rem;
	// 		height:0.8rem;
	// 		display:block;
	// 		-webkit-border-radius: 50%;
	// 		-moz-border-radius: 50%;
	// 		border-radius: 50%;
	// 	}
	// 	.user-name p{
	// 		font-size:0.32rem;
	// 		color:#424242;
	// 		padding-top:0.6rem;
	// 		float:left;
	// 	}
	// 	.user-more{
	// 		width:0.54rem;
	// 		height:0.54rem;
	// 		padding-top:0.59rem;
	// 		float:right;
	// 	}
	// 	.user-more img{
	// 		display:block;
	// 		width:0.46rem;
	// 		height:0.46rem;
	// 	}
	// 	.insurer{
	// 		width:100%;
	// 		height:1.7rem;
	// 		border-bottom:1px solid #e9e7e7;
	// 		font-size:0.25rem;
	// 	}
	// 	.insurer-private{
	// 		width:100%;
	// 		height:0.82rem;
	// 		line-height:1rem;
	// 		color:#7c7c7c;
	// 	}
	// 	.insurer-box{
	// 		width:100%;
	// 		height:0.56rem;
	// 		/*background:rgba(59,172,238,0.6);*/
	// 		line-height:0.56rem;
	// 		color:white;
	// 	}
	// 	.insurer-box img{
	// 		display:block;
	// 		height:0.34rem;
	// 		margin:0.1rem;
	// 		float:right;
	// 	}
	// 	.insurer .insurer-tel{
	// 		float:left;
	// 		/*margin-right:0.5rem;*/
	// 		/*background:#59aeff;*/
	// 		/*background: -webkit-linear-gradient(left top, #4abdee, #3bacee);*/
	// 		/*background: -o-linear-gradient(bottom right, #4abdee, #3bacee);*/
	// 		/*background: -moz-linear-gradient(bottom right, #4abdee, #3bacee);*/
	// 		/*background: linear-gradient(to bottom right, #4abdee, #3bacee);*/
	// 	}
	// 	.insurer-tel span{
	// 		color:#404040;
	// 		float:left;
	// 		font-size:0.25rem;
	// 	}
	// 	.insurer-tel span:nth-of-type(2){
	// 		color:#0089fd;
	// 		float:right;
	// 	}
	// 	.insurer .insurer-evaluate{
	// 		float:left;
	// 		/*background:rgba(255,136,24,0.6);*/
	// 		background: -webkit-linear-gradient(left, #FFBB19 , #FF8614);
	// 		background: -o-linear-gradient(right, #FFBB19 , #FF8614);
	// 		background: -moz-linear-gradient(right, #FFBB19 , #FF8614);
	// 		background: linear-gradient(to right, #FFBB19 , #FF8614);
	// 	}
	// 	.insurer .insurer-evaluate img{
	// 		margin-left:0.4rem;
	// 	}
	// 	.menu-ul li{
	// 		width:100%;
	// 		height:0.66rem;
	// 		font-size:0.28rem;
	// 		color:#404040;
	// 		margin-top:0.4rem;
	// 		line-height:0.66rem;
	// 	}
	// 	.menu-ul li img{
	// 		width:0.66rem;
	// 		height:0.66rem;
	// 		float:left;
	// 		padding-right:0.35rem;
	// 	}
	// 	.menu-ul .menu-ul-order{
	// 		margin-left:0.07rem;
	// 		padding-right:0.29rem;
	// 	}
	// 	.copyright{
	// 		margin-top:1.8rem;
	// 	}
	// 	.copyright p{
	// 		color:#ababab;
	// 		line-height:0.4rem;
	// 		text-align:center;
	// 		font-size:0.23rem;
	// 	}
	// 	.showMenu {
	// 		transform: translateX(6rem);
	// 	}
	// </style>
	// <template>
	// 	<div class="menu" :class="{'showMenu':showm}">
	// 		<div class="user-info clearfix" v-link="this.ache_userLoginState ? {name : 'personaldata'} : {name : 'login'}">
	// 			<div class="user-img">
	// 				<img v-bind:src="userInfo.avatar" v-if="userInfo.avatar" alt=""/>
	// 				<img src="../img/nologin.png" v-else alt=""/>
	// 			</div>
	// 			<div class="user-name">
	// 				<p>{{userInfo.nickName}}</p>
	// 			</div>
	// 			<div class="user-more">
	// 				<img src="../img/menu-more.png" alt=""/>
	// 			</div>
	// 		</div>
	// 		<div class="insurer clearfix" v-show="insurerShow">
	// 			<p class="insurer-private">专属顾问</p>
	// 			<div class="insurer-tel insurer-box">
	// 				<span>{{ privateInsurerInfo.agentName }}</span>
	// 				<span class="btn-call-insurer" @click="callInsurerTel">{{ privateInsurerInfo.mobile}}</span>
	// 				<img src="../img/insurer-img@3x.png" alt=""/>
	// 			</div>
	// 			<!--<div class="insurer-evaluate insurer-box">-->
	// 				<!--<img src="../img/evaluate.png" alt=""/>评价顾问-->
	// 			<!--</div>-->
	// 		</div>
	// 		<ul class="menu-ul">
	// 			<li v-link="this.ache_userLoginState ? {name : 'advanceorder'} : {name : 'login'}">
	// 				<img class="menu-ul-order" src="../img/order.png" alt="" v-if="isLoginFlag"/>
	// 				<img class="menu-ul-order" src="../img/no-order.png" alt="" v-else/>预约订单
	// 			</li>
	// 			<li v-link="this.ache_userLoginState ? {name : 'testreport'} : {name : 'login'}">
	// 				<img src="../img/report.png" alt="" v-if="isLoginFlag"/>
	// 				<img src="../img/no-report.png" alt="" v-else/>测评报告
	// 			</li>
	// 			<li class="invite-friends" @click="inviteFriends">
	// 				<img src="../img/invite.png" alt="" v-if="isLoginFlag"/>
	// 				<img src="../img/no-invite.png" alt="" v-else/>邀请好友
	// 			</li>
	// 			<!--<li v-link="{name : 'referopinion'}">-->
	// 				<!--<img src="../img/suggest.png" alt="" v-if="isLoginFlag"/>-->
	// 				<!--<img src="../img/no-suggest.png" alt="" v-else/>意见反馈-->
	// 			<!--</li>-->
	// 			<li v-link="{name : 'userset'}">
	// 				<img src="../img/set.png" alt="" v-if="isLoginFlag"/>
	// 				<img src="../img/no-set.png" alt="" v-else/>设置
	// 			</li>
	// 		</ul>
	// 		<div class="copyright">
	// 			<p>深圳市投三六零信息科技有限公司版权所有</p>
	// 			<p>粤ICP备14088810号-1</p>
	// 			<p>@2013 tou360.All Rights Reserved.</p>
	// 		</div>
	// 	</div>
	// </template>
	// <script>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var getLoginState = exports.getLoginState = function getLoginState(state) {
		return state.isLogin;
	};
	var getUserInfo = exports.getUserInfo = function getUserInfo(state) {
		return state.userInfo;
	};
	var getTipShow = exports.getTipShow = function getTipShow(state) {
		return state.tipShow;
	};
	var getTipContent = exports.getTipContent = function getTipContent(state) {
		return state.tipContent;
	};
	var getNotMessageCount = exports.getNotMessageCount = function getNotMessageCount(state) {
		return state.message_count;
	};
	var getSignToken = exports.getSignToken = function getSignToken(state) {
		return state.sign_token;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"menu\" :class=\"{'showMenu':showm}\">\n\t<div class=\"user-info clearfix\" v-link=\"this.ache_userLoginState ? {name : 'personaldata'} : {name : 'login'}\">\n\t\t<div class=\"user-img\">\n\t\t\t<img v-bind:src=\"userInfo.avatar\" v-if=\"userInfo.avatar\" alt=\"\"/>\n\t\t\t<img src=\"" + __webpack_require__(45) + "\" v-else alt=\"\"/>\n\t\t</div>\n\t\t<div class=\"user-name\">\n\t\t\t<p>{{userInfo.nickName}}</p>\n\t\t</div>\n\t\t<div class=\"user-more\">\n\t\t\t<img src=\"" + __webpack_require__(46) + "\" alt=\"\"/>\n\t\t</div>\n\t</div>\n\t<div class=\"insurer clearfix\" v-show=\"insurerShow\">\n\t\t<p class=\"insurer-private\">专属顾问</p>\n\t\t<div class=\"insurer-tel insurer-box\">\n\t\t\t<span>{{ privateInsurerInfo.agentName }}</span>\n\t\t\t<span class=\"btn-call-insurer\" @click=\"callInsurerTel\">{{ privateInsurerInfo.mobile}}</span>\n\t\t\t<img src=\"" + __webpack_require__(47) + "\" alt=\"\"/>\n\t\t</div>\n\t\t<!--<div class=\"insurer-evaluate insurer-box\">-->\n\t\t\t<!--<img src=\"../img/evaluate.png\" alt=\"\"/>评价顾问-->\n\t\t<!--</div>-->\n\t</div>\n\t<ul class=\"menu-ul\">\n\t\t<li v-link=\"this.ache_userLoginState ? {name : 'advanceorder'} : {name : 'login'}\">\n\t\t\t<img class=\"menu-ul-order\" src=\"" + __webpack_require__(48) + "\" alt=\"\" v-if=\"isLoginFlag\"/>\n\t\t\t<img class=\"menu-ul-order\" src=\"" + __webpack_require__(49) + "\" alt=\"\" v-else/>预约订单\n\t\t</li>\n\t\t<li v-link=\"this.ache_userLoginState ? {name : 'testreport'} : {name : 'login'}\">\n\t\t\t<img src=\"" + __webpack_require__(50) + "\" alt=\"\" v-if=\"isLoginFlag\"/>\n\t\t\t<img src=\"" + __webpack_require__(51) + "\" alt=\"\" v-else/>测评报告\n\t\t</li>\n\t\t<li class=\"invite-friends\" @click=\"inviteFriends\">\n\t\t\t<img src=\"" + __webpack_require__(52) + "\" alt=\"\" v-if=\"isLoginFlag\"/>\n\t\t\t<img src=\"" + __webpack_require__(53) + "\" alt=\"\" v-else/>邀请好友\n\t\t</li>\n\t\t<!--<li v-link=\"{name : 'referopinion'}\">-->\n\t\t\t<!--<img src=\"../img/suggest.png\" alt=\"\" v-if=\"isLoginFlag\"/>-->\n\t\t\t<!--<img src=\"../img/no-suggest.png\" alt=\"\" v-else/>意见反馈-->\n\t\t<!--</li>-->\n\t\t<li v-link=\"{name : 'userset'}\">\n\t\t\t<img src=\"" + __webpack_require__(54) + "\" alt=\"\" v-if=\"isLoginFlag\"/>\n\t\t\t<img src=\"" + __webpack_require__(55) + "\" alt=\"\" v-else/>设置\n\t\t</li>\n\t</ul>\n\t<div class=\"copyright\">\n\t\t<p>深圳市投三六零信息科技有限公司版权所有</p>\n\t\t<p>粤ICP备14088810号-1</p>\n\t\t<p>@2013 tou360.All Rights Reserved.</p>\n\t</div>\n</div>\n";

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABGdBTUEAALGPC/xhBQAAAgRJREFUaAXt2T9Lw0AUAPAmsSAVLG4FQegi3Qra1g4O4tBv4Cp+EB1EBz+Dk7NOrg4uLo0glIIOIhZ0SaGTIgQy1PdKDtLY2NL35xA8KJd7yd39elzgHcnl/mhxqG7f99eHw+EB/IJSqXReLpdD6piz9CfBO53OahiGT4Bexskcx/GhajWbzY9ZJqc841I6A7pl0DgOXG9BddNut0d/hDL2tL4kuOd5j+kJtPAkeL1evwf4sQ08aY8bMGyNE1jpQ9M2teSeZ4EjVBvPBtfGs8I18exwLbwIXAMvBpfGi8Il8eJwKbwKXAKvBufGq8I58epwLrwVOAeelNYiYN4Cp6QjyB5P0/1NPt/tdlfS95JtaytuEFlZJdx/y+fzm7VabWCeTdbWVtwg4pU/M+1EvRZF0X6iPXZpHd7r9RZBtDGmihuu60aT4hizCkd0v9+/hn3dmgB8KRaLFxPio9BC1g3p+G9oeGlfYbV3K5XKZ5bDyss5A3qn0Wi8Z6Exrg7nQKvDudCqcE60GpwbrQKXQIvDpdCicEm0GFwaLQLXQLPDtdCscE00G1wbzQK3gUY4Oa0NguASxvmRT8ep6dQsDxHzFFJ2COfFbTgE3KUnlkbjfKQTEACXbKDJcPhceAv4B4OH62c4uYhtDzMP1qStggPEL+cebBmvUChcVavVL4z/l4wV+AZmcqyQx+omUwAAAABJRU5ErkJggg=="

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABGdBTUEAALGPC/xhBQAAA9NJREFUWAnVmE1IVFEUx/9nVCixkiiIij7pw2oVBREu+txJbSoEaZubkopwhBZZVDhjIURCrSsIgiCwIPpcVNAHLdOKDCUoKKIvMss8/e+M4/i+xvfevJmxu5h777n3nPPzeN59511BUldjGJcAXY5xm7yH4Bjicm7crQXcIGjTbn/AIxQif7EQldglvwvIldN0jKuLcu6wL6qWoR9T7eJizg3098AOh+AjlQJb9a0QY47+8L07u7EmOyz+KFykpdSRVnwOEasSR1rwKjC0Yj3Oa0VgvYgUTHoEh4ZOwxfURsQQ2EwMsTDQKT91gb1FpBCD4kUoW4oSQjfLa4h8CAE+N4ROJComp027n/oN8iPoC7I9yr1paMG9EEZPhNCJRCUNXYHbgayJHGWlx8qwNC0NfUB6AXnqCyEN3Oprb4E2ZXIaPPoujOtjAgAbxiz0JFxmtIc8wScIsBW6ST6y4utyhZ5AwFbo9KzNHRrPXOUlEorDb5ve4efXJotc5A0mYyWaZNAiL9Ekm9MZAMHJzHC0V12MARwanZd44Iy0AWrTW4z2Fiub/OS8Bi3Sb5UXf+aMtGEQ7OWP7WtbKyk/XXxEp0d36Li8dAVU3cF7kj1OM8WVuEMbhmocZ/X31oEzjE6021PHsaugAm/oxlQO1xP8j5VAy3kjdQWn/NxIWTWjmnlDGw9xecI0iTucqVZjCNcJPsOxVgSB++lhd5zQa1DdZhfzYX2Mcn7BHJJPzrXCSfxBd2oV76Hu8hhc60RhhSgEjwvvBAO0hDZw92F+7s1n/442TAnRxWfpARrtKWm16w/a6JhUGMJDgi+1mjAz+UqnOwnO891HS2gr/3NH3HembD3iWjf/oJ5UX85+Hr5lLj39QxsPHboAg4wEdI6ZWhsrRME+gue+Bs4JbLVomZnbWvD9QfvBoI2VNPhN94hzXeQqynCQed5ntltaWOBRI7wfb5HZwaGNgXSq3CC4S45zXWSAUT+JSWgfLbLyBh4hb4lJOGijn344LxJ8+4g5Z2eqQ8F+5uYa7xx2quWU5AWdsZzUA4RKEKo4d3uEzv1yyYDl6pulg8u1rq/8XHp5rOUPbZybN2c1VjGZ+eVjrw7zoPNQDZ/THgaR0GVMl7PMdVs97qUQUB5Jeth9mrK2RbYyXQgtfItG36KPtJ0xoesoijP6dYx+uX058DyS08Ov1zM6E79Qz7J2t+f57sdWUaHHAiX5oQxsZvQ3st/A43LW2GXvsfQw9WoKnx7eBNmVpC7hS2gF/wumGDMPsplP53gKx1WpHujlfVgDmuV5VvE/Gv0DKYfsmiEBA3IAAAAASUVORK5CYII="

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAABGVJREFUeAHtm89rE0EUx98msS1abY2g9MehpZ681IsVsYKoIK0gWDzYCvXHH+BJiyieRA/tH6EUtAj+OIgtHvxRq0i9SA96lqJWEETRoq1JxvdmdrYz6W6yszbpppkpm5mdXzvvs983s9tMAGywBCwBHwKOT5551sgiM29UpMWFmpUZW5HLyOKETFR7bEG4CkipShh8yFoyGRhGne8HBs1qmUyP9Tlllay8LsX995m/CzrwGYsnE7UwdKvX+ai2CZv2FOFCmMFLDQRBCNtp2evRTWPQn/sDMyfHWWuU63sguBIYbInSSYzapHMLMBxlPJ5rcHeI0gO1KfMMX2iYDkO3jhA8RVScOwQYize0KaCoYPYSiILV1n6h5xphTR14wKZRPQ7+JZB+AtMEk1aSBK4n4pxKMZ/hORZQPVpqeBnPw/YUUx1qgxO0w9tSXZHnUEzXQKlTP9R/EuuXLBiDwAF28dH4DArLRFBiJemV8Ty3QLaRMVXy0lhHrSs6KM2ndQ2XqwVhQeguZhVhFWEVoROwitB5GD1HrOYruBx24Ku4rBAxtpOlC86CsCB0H7KKsIrQFWG0apRqxtaHtDpn1jWsa+jKs4qwirCK0Am4Z0arhn3X8GW4tjLtZOneTwvCgtBdu6oUwRhbh0ejjkCcGa0alfyuQRDQ5Dt4tGP6IH7H+E0FUhWKUCAcQ+N34vEE89JVBSIPgrR9GYw1rYgACL4wKhJEuk7aEhz7QRh5k4VT4xn6tt39Ln7JTYwmy+DLlq/kLIq6C/f7XZ0C+PTT/7pBEIZe5NwGGedmT4rhngzad8HdxAjESr1rRF19CMKhdmHLlX3+MJJkmlgdaGLkgZSwBAFg9D0JQodRMa6hQiDrNtUCEIyWjdxW/kEQzoltLIEQZG2CcXoiQztzuJtUBIh8CDl3S40KQ0LYpWyTzVeChCDjp7MMvv4G7i+xB5EPYfRdDrpvZ+HHgpjvJIzzewBMILTWA0z1p7Jb1+PeLAyxBuEH4cxEFl7PMTh8V4fRuU3eZ4BiSpAQ2hocDgFbLsYWRBAEOe9P58GQGKJAwLZ9Yo7FVNSZXA5gJeNiENRr7W5y4PHxJDTUOpGUgH3hNnvnkdHyqQ6gVOk6HNH2zXrvz2ZzYkbTs/kZKaP3XhaOdiTg4pTUy/KKfu6AtTgEqh1LRWzA98TL3QBtjcIgWiVobhDrv8gz+SwGgfqK5Rwx/xfg+iuAD9+FubQ990ZPEgZ3ePctNIcwEGILggb2axHg2sv/gxEWQqxB0OBIGVFhmECIPYioMEwhVAQIUxhRIOggxA/EKC+WIcwEShCen0iB+sSIxnhLZCHD1FVjslDFOJQVmkAlhI5Gb2XB6TYcBLLNa0W/jqNfyWGe9k9NqhS3UF8DcGmv/pzxZR6gud4zxwgC2ecpgn4vmaiDTkQzht3Nxc14dTx+ypAQMuLhMpQ7qH1WdBr/JZfG4y0eMixg4khFGxV18Gi4hFG9ECQ8F8YBeR4l/gfDBeKSKTKeDQAAAABJRU5ErkJggg=="

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAABBZJREFUeAHtmz1PGzEYx30h4UUwRCkSKu0SXiRehnaqYEPt2Kls7Qfph+gXqfoBOnZggk6FBRhgQVEqBOqAQFAgSZ+/ucf1BV/ufITgS2zJ+PXx2T/9/fgsLkL44Al4AgYCgaHOumpzc7NlbZRgsLq62pW5JTxGNRdUbsAzHkQogKIuhO3t7ReXl5dfqG6N4rTexvleS5afi7TDFqwHQbBBXT6vrKzUdJu0eaUIQLi6utohw08UjRDSDvoE/aZbrdZHijtbW1svszxfgYASaKBnWQZxyKZCc4GirYO+NdasrUODp9wuhjlnWodSBA2Yt+1gYCAEqfq5sSGhUgeR0LW/m/WtkWql5Ll/Ukdy0kGB6BeQosz5MMXLUOp2spHjaTZyPJTD56B9iPpR1eMEaxA0jTeYCk+K06S6pHbTOHE2qO928FsjJOpBeBDRzeUV4RXhFREl4BUR5WH1HuHCnaLDVTy6MsuSd5Z+a0Ql4xXhFeEVESUQlqxOjcfy2MaZ9bjS+4gQuAfhQUT3nleEV0RUEVanhr9rROH1Zcn7CO8josL2ihhERdA/kUoUy1Et3JWsTo083zUAgZb8jWKV8u/oX4h/dCADsTU0CB9o8a8p/qA6fEuhQt+DaIPAC78Ho69BxEAwwsgliOHhYV5MbGqCUK/XxcHBAWz4+wKlDCtnGfvUHjZUq1VRqVTE7u6uoO++jE+Og3B0dMT9g7m5OcDAdxwShhWIbt01sp4+gDA1NSUXs7S0ZIRBpwHacTrAMcoAJWgQxOnpKeojMHKzNXQIWEWpVBKAMTY2hqIMgDA/P498LIS7nkLCoG0CanKb5AJEOwSSvlyPDoMhYNtwaFcC13N6dnYmbm5umihbbQ0eoJdpO4STkxNxfHwsFhYWRLFYVMq4uLgQ5XJZTS0JAhzu8vJyg2AOwchpRZggHB4eivPzc7G/vy9ub2/lwqGMLBBGRkYkBBrk2lkQcRDkyulPOwyuT6sEHQLZrksXi0GyenKeQDfTJAj6syYmJtQ2yQwhCL475yMKhYLA4vQApxYXWBnYGrVaLa6bYJ9wTwkEAUbObY1msynfD+D8OMzMzIjJyUku3ksB4yEQMKBzIDCpRqMh9vb2BMPA0Tg7O9sRBuxMIUkJbOMkCEwOJwJeox8CIy0EPM9ZEJgclJEVhg0E50FkhWELIRcgbGFkgdAOoo4KV0MaBwoIuIjFHZGd1qZ8BHnmjU4dXWjr5EAZwujoKE/1mjLrtC75nsCVcal6s8Sv4+hWh1/5/b++xVk9cT0uW4uLi2J8fFzOBLdRukXKl6ZwalYQYKMUgd9LEr1XFL9S/B0O6GRiUgYUgYAXMgqplYDOuQ+khArFXxQ5/KXM+9wvLMsCaOEMY3AhMLgQxlsuZ0n/AUvRFskmDLwlAAAAAElFTkSuQmCC"

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAAAg1JREFUeAHtm79OwzAQxs8RqEggIcHEn4fgDVpWRjaExMLIDDOsDTNvgNgYQGKmj8A7IDYWxABtVGMr7nBSUK+1YznW56HVuY5z/uW7q23FRCggAAINBFRDXWPV2bPem1RUmh/7pGm3sVEqlYo+jCujokdX90fqXeKWCMTpi96f/tCb6XBL0mkqbZSiT9WjAwmMQuL09JeGXYNgx6U1bTvf5w5TBEJpGsztKd0GfYlrIhCaaEfSWZJthPlMBCLJAQZ2CiAcUIAACB5bUAQUwRWxwk0/6+HYzOUilpNHM2UKVBAaDiRAAASPKSjC8QiaLEMmL/682regCMcYIACChxsUAUVwRQT918AUm8PtpIUcgRzBhQtFOB5BkyWm2FxlnbQQGu6xAQRA8AiGIqAIKIITgCI4D+QIKAKK4ASgCM4DOcLxCLr65Iz9rNjbflkrQmstfk0hWxAWgini9yeSDQ0WWOVYPKDZdep2QlSOjalu6HL1elb/33e2iqgHLINg22YMQg4hYxCLQcgUxOIQMgSxHITMQCwPISMQfhAyAeEPIQMQYSB0HEQ4CB0GERZCR0GEhyAHUR8ote2jF76UbgeCHZR0rTGKTsDc0EK4eKX1+t7tQbD9i0DYo8X2VG3tULzP8yfauDtU39KltI9n4h0ceza8qmhoNgYGMc6GF2u0aY4yf/kMDteCwPIE/gAJuWbi3PMubgAAAABJRU5ErkJggg=="

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAAAf1JREFUeAHtmz1rhEAQhjWkSyCQVPn4BzYptcr9qquTNvlVqbQ0jWAfrksTAtqZWRi4myA4uqvZXd6F41wZx9nHd8YPdpMEDQRAYIRAOrJvdFdd1/d9378Nw/BEBnejRv7sPKRp+k7h7PM8/9SEpQJRVdUDAfggh9cap77YEIwviuVRA+NMGfQr2QUFwYyLLt4N/ZnYJ5sWxG7Sk6cGnMqT0alAkLPbSU/+GqjqmQqEv2N0FxlAMEuAAAiZVlAEFCEVcS67dr2iKFRPqnZnOR5dluVw7NltITWYH0AAhEwlKIJ5OC2WLouXvF7r96AIZgwQACHTDYqAIqQinN418Igt4QbZQ41AjZDChSKYh9NiiUdsqbIge0gNvmwAARAyg6EIKAKKkASgCMkDNQKKgCIkAShC8kCNYB5O3z4lY7ve1p/9olYEzQZUT1OIFoSBQE09f8Lb1DhNrCUffGjadELHGTcvlGbPp/7GtqNVBA9WBcHYxgxCDSFmELMgxApiNoQYQSyCEBuIxRBiAmEFIRYQ1hBiAOEEQuggnEEIGYRTCKGCcA5hDoiDMf6P9udVehUIZlyqdw1eVbs5BwOhaZoLPvFqENQgyHDPq2o3hdG27WWWZT900lUhmEGpv+CYteFd15lVtTv6qdZSkt3iRuCvaCnz92IHOBAErAj8AtBych6pJR+3AAAAAElFTkSuQmCC"

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAABS9JREFUeAHtWk+IVWUUP+fOe5PNDLgwWkgugiiapE1JWCgSohCoo0UyNrNwoW0kyOkPVAsX6aJ6BrZKoSGcHITSGQ3BcBElRWBLiyxoYSgILYKZSee9uadz3uvJu+O79/vu/c53593hHbi8d993/v7mfOf7vvMNQJe6CHQR6CLQRcCIABo5NBiIAqjUnmVVQ/w8BUCrAZAfIbrB3/mBn/mZgrHSD4AYykie5BeIcVoBf9de44DGgOhBq8AQbzFfBVaVjsFevG0lo8DkD4hK7UWg8GMgWJPJT4TrgMHrnCFfZZJPKRSk5DezEyF8VD0MYfhlZhDEigAoOkSX6PRMugbE4Up1koPYreo3wmkYKw9z7SBVvS3KdDOiUntfHQRxVoAV3R5JLyOkJkgq+6QgeMlXzdABor46VK/V57VPIKSArio/6mM10ZkaskRmXR3SACc2GstxGikrXncgZLMk+4T8SPYk7n4v8tddoewYbTdLi4xnehVbjV1qJvE4IXcgGtvmOP2+fpetuippAMFnh9xJ3aYCEHKAypv0bSoA0TxF5gmGvk0FIPIE4H9bxIu1MikAIf2EnAnpprZFBSDqTRVtvwz69G2WDBZthqWztMmGUY2H4EpbXR/Ot58yb/YajxIKGcHttbwJYVrbpDsQjR6jtNfyIWnliU1lcgei0WitKPuVpK7io7nrDoS4LI1WOSL7pvoxnG15IB0gpNssjVbfJDY8dbaN1TRVbI1G6zupZGyZEY/AG+V36+xxq4OtriZfy2qikxFNxWOl93iKnG6+qn3Wm7es2yPpAiFd5ka3+Yiaz5IJnjvY4qsuEKJRwJAUlkarSwEVWdEhujy28cVlIX0gGnq5ecc3VNJoRXybH/t9hvCKjMjmdMslLusWyyYIiz+1L4E9FMt8gFgMjK/3OIBaVoc40/6mRpzFDv1d4/QZG9r+89Q3F8LGcAE28K3oI1xGH+bj4WpE6OfWSn9dEGGWCGY5NW8wz5/M80fQA9/3BfDd8W04F6tceUB1ahBfAo+ch2doATazn5s5wPX82ZvR53kG7EeWvYQ9cGliG/yEptXDYWqoALH/CpVn/oJhCuEtdvyJjIGbxK5iAB8MPASTx5/GalvmpQJi9CL1h3Owj//P52AuV34SPe8vuLAdDfrgxMmtOBsBZCmAGJmm7Tz3T/Cct/uXoIjH7i+cyre4luyb2IHn3LVl2EdIAZytwlHOglc1HHDVwdnxaX8ZDroW1lQ1Ys9ZkhumL7gIPuYagKY8F9XfWN8rp3ai9E8zkTUQe6ZoKxdDScOsq0AmB62FEO4wIDtODeFFa5kWRisgRs7SpgWCCyx3f4tsJ379twfhhYmd+G1a54xADJ8h2Qt8w89AWuVLxD/DdrdM7kLZg1hTIhCjX9Pa2jxcZm0rrTV2BuM/vSV47vPteNXWndizxiE+MS7Mw2cFBEFiX1mtwbjE4AzEtWk4wHuEdbaKOo1PfJcYbP1qOzX2TtGa2yH8wkqKUhfi4p1ZEcDg+BAarxraps4dgk+WAQgCzgDHYnUPck9GjJ6hx2tQz4Y4lAv3O/caBk/uwl+THL8nI0K0n1dJijtpzCamCBBSZbnIvNxJQWj4IjGZVpAIEL+fg/V8jnhAw3gn6ZCYJLYknyJA8Fni+STmIo+ZYosCQfBkkYNN8p2zIjG2CBB8ehtMUlbkMVNsESC43bbs6sPdP54htggQ3E4v2uHqbpymL6bYIkBwRtxnUljYcUNsUSAKG6W7410g3DHsaliWCPwHGdlwDf+KlyIAAAAASUVORK5CYII="

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAABSRJREFUeAHtmk2IHEUUx2dm1yRrAuYQZmElhwVRXMU9ZLO7E1GCBAQPKhgiwXPwIsJGMBBz1D2EmAU9SUBPEgIRYgKCkIOouJ8e9hBFEPYQiDA3wbh+7M74+8fuMD3b01/1up0Zp6Co7up6//fef169qq6eUmlQBgwMGBgwMGAgloFy7AiDAc1ms7K8vHwEqJeph6hj9I0Julwu36FR/Z56bWZm5jv6GlwXWnIlYmNjY0+9Xn+z0Wi8hVfVhJ7VK5XK+9Vq9YPx8fE/Eso4D8uNiKWlpVewboFf/mAWK4mK28jNzc7OfpZFPq1MJa1A3HgcLy8uLr5HezUrCdIhWWF4WLn9YL4/pgowvEwuuEz7qq/AoiU6rpA7TtI2LfDCMEwjgunwrjUJMlqYwg5zwKrPLCKUEzD4qpVhYThExPG8coZJRGh1wPCFMOON+xY8XcawpZIJEVoiiYZMq0Maj6RDutLIJB3rTATGVbx9QlKdTuOkSzqdQEKEnQG9HWPSzVKICam7qp7O1IJRAs5EAK5tc9HFXKcFEXp3KLqY67Qg4t7LU8FMmOt0JoLEZW5UHKl56HQmIs7onJ6bb7WdiWC3p7OEQgs6f7FW6EwEBhVORB46hw2Y1cnSUQOcNBBrYYN5ZQ+dMrVaLfadyiIiroUZlXPf59b4zkTojBGj6taGReDVPZ0RQ9I/ciaCxNXQGWN61dkkpEs6s0l3lnImQtA6aMU4nTHmWqRDuvJQYkKEd9o8l4eBbZhzeZ1sx2bTNkMib3XQyoCzkYOyP5wn+78j8U6rQ1ro1tXEJCJ8AzhGO0f4XvHvrVphCtsKLwzHlAgMbuq0GUXzYcoy9s3nfYItu0yJEKDIUAjTHqdmTqCSFYaHFbpRkj6rYk6Eb5hOm0dHRx9luTtDX5p9hj75nZFsXifWvo2trcUWuxUvcO1l+PO8Nl/4X38EDrBSwE2n1aR1dehkRm5To5PCbu3PdWqsra09yPH7s9vb289AwCPUceoYSXAvrarKXabOXVq9zm9Qfx4aGvqGPPH11NTU79wXUkyJwCF9BJ6hPYb1x7a2tmpc72r3hL7Wrv3cqD5MPawHEFeCwL8I9UVub0LcTZbQZdqAoMZaFZOdJb/8Axh/Egffpj5hZVwrDiTcop4nWi4TKX+3PvOvXXKEExHr6+t7Nzc3T2HIaQjI/ZOfHIYM7U0ujoyMXJqcnNSUul/+EyJQ+iIWXKIW+ZXrvtNcaG9yihXhemtn1uvUEaEEyNy/SAS8nlWppRwR8tHw8PBp18Saigj+A6EvTJ9CwmOWzrhiQcZPYLzGTlTnp5lKYiJYDZ6HgOvUHatAJs32Qn+y5L7E6vJlFuhERJAPjgL+BXUki5ICZTbR9QJ546u0OmN3lkRCDdAb1G4nQb7LxhuezbpPXCIjYnV19Un2B98yHR5KjNgFA8kZvzJNnp6enr6V1JyOEYHzFVaHj3uNBDkum/kBP5EPzkSwQrwByL0tb1KwLht32PMhkVmhU2NlZeUgjP4Awr5EKN076De25BNMkdiTstDQ4YXnwz4gQT/PPnxJ9B1kR0SwVD4OgKKhn8oES+qPUQ7tiAgyrnJDX5UkPgWI8LLsib5i4V9nTsStIAEieKHSQcqBfiNCPsm3KL8CRLBSPBc1uJefxfkWIAJHn+plZ2Nsj/StnYiJGLBefhzpW4CIfswP/i8X51uACIR66uXKdzJhG+lbOxG7E4L24rBI39qJ6EUHTWweEGFC4wCk/xj4B55mwn/bzJbfAAAAAElFTkSuQmCC"

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAABp9JREFUeAHtW11sFUUUPsO9hWpqgGATkQf1hQd5VFJexKgxESM/JdCEqgQDKRFDIrwQ+sQThhd5QtOmRoJYEkj6AwlqTPDBFwVMTAwaiagv1RgkRb2J1fZ2/L7b3WZndnZ3trcXuWU3udmZM2fOnPPtOWfPzLYixVUgUCDgQEA5aA0h7RjSuh7BZ7aqhuq6qB7lFtLcAojgaRZAFECYgV14ROERhUeYCBQeYeKRq0jpHtLbRckhiOhftkwG33lGVUxxZq/nqm6pjEmXnpb9oqXDHM3du4SS6vBgp7qcNHPfZ7rt9m3pxngP1js2uFWdS+K16d5AvHZRt09MyDUIaA+EVKDYINr9UO6rqOAdF/SDMin7QHsdv4eiY3W1lWil5eRiJQdPdqrboazuYf0E2j2oXQlCW0C/2doqa95/Ud0M+dLu3kCgRCa621zCAAiB6JfF8on+V97E09iL/n0u3nmhKfm5VJYt01M1LyMABCJ2wbhz8Iqu2ICD4AUEQwIbhbOO+Xc9CQZ2+YRIJhCOkLjrjbcU9AqRzILqnwk5AcFhXrDWaIpue2BDqrKpQAQhsT1VQhMMIqy31954KbomhsYCCAnb7NQQSfSIBRASNhCpIeIEYqGEhI1EWojEQqPRIYGaYxwKjkKp0RYt37Ytl1+ocGVcHq4ukjWoCTahuxn35aQ34HKGSNleqFEhAcQntJLjbW1yrP959Ye9LvrXg99wz6d66V8VOYQq8gAAa3Xw1kMKQ8QotAyPaGDhNFYuyZYPNqureSx4dVQ/OVWVEcxZlWeeDy8MNwotM0co2eUjJCfPWEuLdOQFgWtwDueiOZZzzWx2y1YDiNVbZCNieC9+t7IlZXMwHOgJpzaqORvCuZRBWdkrZnPQNtpIW6PcRmiEAzuH9IopJUexedqDGDXACnm87kreOtOpemO8Gtni7eoe0Xo3xtYE49dEqffkYGkAdyxrXjuGNfU5bFL9ezB0GkcIA2Utvae2qtiDdgIRin/5vF6rp+QEtFob0nzvQH0cifGxWGI8rldKdeo0QHjWKUupS1IqvyIH1K/RcSbQSkV+msvbBEZeUWV548NN6kpUZrSd+rQ5cXWnrKMr0aWiEz3aozEQ6AlpIFAoAZrhMR5SIGvUY91ZFupM3WlDGgickAoEGY4oNY2Dl340v2bf94IXxZWeCQe3J0QFEwzyWheMOm+RsrpXqTttyGLMBIICei7o+2FYtgGR1VgsRbozzZmcECM7CQ7e0nTthMzJ7iJC5+fOal1yjdk0LyD6XpK/kb6+tyen9cOK0eIJE6NFdnZjvAkynZNJRGx916VUNZEhMuAFhGIWV/JDZN7/0pz4k7blum74cnsBsf+iXoJsvcFXKPm4d3DwX3PQkkgxXlSZK5OYXXSExoYjWnvZ6MW04hG8wZX87losiTap5PHYGOsE38vBy02Z7/SA7xaU8PKiTCCI6PXrsgvSYhu0NKXAvzk2PlMsXYrRbQJrCfJaV7AztajJXeiwZGREdvt4RSpa91JB5QTini+xa2EwIixkjsINVyQ7nd8IUJ4oleSpuew8oytwO16tyudIfnWfTQQVci82XQPRQsvwCHzN+ggKvBBVYh7atW34XHegOy/oVZOT8iX0mO8ziY/xB2qzb0IjWaIzNA+G2yJqhvCp2gNZfc5pEAjcWxi2Gh5RC41h+QIumHu3mWUUw4RHdQ8kH9XNimjwUR3fp7XNZGJoUJPgTUEwDG+Z1bLOBmI08fCWtQeU5Gu3YYe3kD+NvBU7MQM9fuEzex+SZU98pPkpeBD8MwZ+rTcu51PnKU6QXQ3mZu/QJtrmssMJRHCU5ZzgEtJENOcxHfV3AsEBvmeZVNheCBdtoU1JtiQCwYzKcz4ml6TJzUKnDbQl+pawdU8Egoy1cz6c/NqTmq4PG+o+s2z2xJmWIKMPNNUjyOiTOGuuh9cSFu1AtfJbdIFGtbEmTuGwZnboJibIqG6ZQJA5LXFCEX4zWMd3M36XS4vkaUzJPnOIapGzDaX7+AdiXJNrUweXCNLTEmR0Dnj9LrvipMthZmwXF0rrHtXr8Yem23C2tR60R/FbGo7N5c71UO1+gyPpd093KuMv/Fy7ZhjGBJn5PSPUxRsITmDFyc+AcP/ET2ehYPt+J/6VKXqOQh1dFaStV9jPdfzGxFktZ2fgUPidvgf5bC+8d6A0JT/mWT+XR+QRbPPeCY+w18zT90qWeQQ2K28BRPDkCiAKIMwgLjyi8AjTI4pegUCBgBOB/wBrvW7inBky0wAAAABJRU5ErkJggg=="

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-cover\"  v-show=\"coverShow\" v-on:click=\"hideMenu\"></div>\n<div class=\"header\">\n\t<span class=\"logo\">佳保保险</span>\n\t<span class=\"left-menu\" v-on:click=\"showMenu\"></span>\n</div>\n<nv-menu :showm=\"menuShow\"></nv-menu>\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(58)
	__vue_script__ = __webpack_require__(61)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\returnTop.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(62)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-cfb0c984/returnTop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./returnTop.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./returnTop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".return-top {\n  position: fixed;\n  width: 0.7rem;\n  height: 0.7rem;\n  right: 15px;\n  bottom: 2rem;\n  background: #e1e1e1 url(" + __webpack_require__(60) + ") no-repeat;\n  background-size: 0.7rem 0.7rem;\n  border-radius: 0.7rem;\n  z-index: 9; }\n", ""]);

	// exports


/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAAVVJREFUaAXt101qhEAUBGA7xI0wy5wip0huMFdw72k8yOyydZUj5BTZJATcOl3BBhHBn64yBGpAbBzndX/1HGiLwh8n4AScgBNwAk6gCMoMmqZ56vv+hjmqqrq2bfupmk8GGRHdMAzPWHwI4SNiXlQYCWSG+Bm7cFFiHtitniKw8Fj/ggNjdCc+ah3uYc9LhcwReJTSgjFWYmiQJcT0/4CxEkOBrCFSV5SYbMhWhBqTBdmLUGIOQ44iVJhDkFyEArMbwkKwMbsgbAQTsxmiQrAwmyBqBAOzCjkLkYtZheB9Aps97JOU2/AEwXlhB/D7TjO9Zz5ehcQffEfE+1mItEBgyrJ8xdzx2le6/mfnuq4HHOoFbOmIeg2U+oZQYiQWcUeIYVJKuSOUGIlF3BFimJRS7gglRmKRR2KtxVJx0/cWv5DvtRYn90Un4AScgBNwAk7gnyZwB48Zcqrr/mBXAAAAAElFTkSuQmCC"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="return-top" v-show="showTop" v-on:click="returnTop"></div>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				showTop: false
			};
		},
		ready: function ready() {
			var _this = this;

			$(window).on('scroll', function () {
				if ($(window).scrollTop() > 150) {
					_this.showTop = true;
				} else {
					_this.showTop = false;
				}
			});
		},
		methods: {
			returnTop: function returnTop() {
				$(window).scrollTop(0);
				this.showTop = false;
			}
		}
	};
	// </script>
	// <style lang="sass">
	// 	.return-top {
	// 		position: fixed;
	// 		width: 0.7rem;
	// 		height: 0.7rem;
	// 		right: 15px;
	// 		bottom: 2rem;
	// 		background: #e1e1e1 url('../img/returnTop.png') no-repeat;
	// 		background-size: 0.7rem 0.7rem;
	// 		border-radius: 0.7rem;
	// 		z-index: 9;
	// 	}
	// </style>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"return-top\" v-show=\"showTop\" v-on:click=\"returnTop\"></div>\n";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(64)
	__vue_script__ = __webpack_require__(67)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\swiper-slide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8b85a01a/swiper-slide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper-slide.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper-slide.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	exports.i(__webpack_require__(66), "");

	// module
	exports.push([module.id, ".swiper-container1 {\n  width: 100%;\n  height: 2.8rem;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  /* Fix of Webkit flickering */\n  z-index: 1; }\n  .swiper-container1 .swiper-pagination {\n    position: absolute;\n    width: 100%;\n    height: 0rem;\n    line-height: 0.1rem;\n    bottom: 0.9rem; }\n  .swiper-container1 .swiper-wrapper .swiper-slide a {\n    display: block;\n    width: 100%;\n    height: 100%; }\n    .swiper-container1 .swiper-wrapper .swiper-slide a img {\n      width: 100%;\n      height: 100%; }\n", ""]);

	// exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "/**\n * Swiper 3.4.0\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * \n * http://www.idangero.us/swiper/\n * \n * Copyright 2016, Vladimir Kharlampidi\n * The iDangero.us\n * http://www.idangero.us/\n * \n * Licensed under MIT\n * \n * Released on: October 16, 2016\n */\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-no-flexbox .swiper-slide {\n  float: left;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -ms-flex-direction: column;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  -moz-transition-property: -moz-transform;\n  -o-transition-property: -o-transform;\n  -ms-transition-property: -ms-transform;\n  transition-property: transform;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  -webkit-transform: translate3d(0px, 0, 0);\n  -moz-transform: translate3d(0px, 0, 0);\n  -o-transform: translate(0px, 0px);\n  -ms-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-box-lines: multiple;\n  -moz-box-lines: multiple;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  -webkit-transition-timing-function: ease-out;\n  -moz-transition-timing-function: ease-out;\n  -ms-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-slide {\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n  -webkit-transition-property: -webkit-transform, height;\n  -moz-transition-property: -moz-transform;\n  -o-transition-property: -o-transform;\n  -ms-transition-property: -ms-transform;\n  transition-property: transform, height;\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n/* IE10 Windows Phone 8 Fixes */\n.swiper-wp8-horizontal {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n.swiper-wp8-vertical {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x;\n}\n/* Arrows */\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  -moz-background-size: 27px 44px;\n  -webkit-background-size: 27px 44px;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n/* Pagination Styles */\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: 300ms;\n  -moz-transition: 300ms;\n  -o-transition: 300ms;\n  transition: 300ms;\n  -webkit-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-white .swiper-pagination-bullet {\n  background: #fff;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff;\n}\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #fff;\n}\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000;\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0px, -50%, 0);\n  -moz-transform: translate3d(0px, -50%, 0);\n  -o-transform: translate(0px, -50%);\n  -ms-transform: translate3d(0px, -50%, 0);\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 5px 0;\n  display: block;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 5px;\n}\n/* Progress */\n.swiper-pagination-progress {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progress .swiper-pagination-progressbar {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  -moz-transform-origin: left top;\n  -ms-transform-origin: left top;\n  -o-transform-origin: left top;\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {\n  -webkit-transform-origin: right top;\n  -moz-transform-origin: right top;\n  -ms-transform-origin: right top;\n  -o-transform-origin: right top;\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progress {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progress {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-progress.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.5);\n}\n.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {\n  background: #fff;\n}\n.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {\n  background: #000;\n}\n/* 3D Container */\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  -moz-perspective: 1200px;\n  -o-perspective: 1200px;\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  /* Safari 4+, Chrome */\n  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  background-image: -moz-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Firefox 3.6-15 */\n  background-image: -o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Firefox 16+, IE10, Opera 12.50+ */\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  /* Safari 4+, Chrome */\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  background-image: -moz-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Firefox 3.6-15 */\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Firefox 16+, IE10, Opera 12.50+ */\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  /* Safari 4+, Chrome */\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Firefox 3.6-15 */\n  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Firefox 16+, IE10, Opera 12.50+ */\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  /* Safari 4+, Chrome */\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Firefox 3.6-15 */\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Firefox 16+, IE10, Opera 12.50+ */\n}\n/* Coverflow */\n.swiper-container-coverflow .swiper-wrapper,\n.swiper-container-flip .swiper-wrapper {\n  /* Windows 8 IE 10 fix */\n  -ms-perspective: 1200px;\n}\n/* Cube + Flip */\n.swiper-container-cube,\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide,\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-cube .swiper-slide .swiper-slide,\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/* Cube */\n.swiper-container-cube .swiper-slide {\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  -moz-transform-origin: 100% 0;\n  -ms-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0;\n}\n/* Fade */\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  -webkit-transition-timing-function: ease-out;\n  -moz-transition-timing-function: ease-out;\n  -ms-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  -webkit-transition-property: opacity;\n  -moz-transition-property: opacity;\n  -o-transition-property: opacity;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n/* Preloader */\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  -moz-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  -moz-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite;\n}\n.swiper-lazy-preloader:after {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  -webkit-background-size: 100%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(31);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// <template>
	// 	<div class="swiper-container1">
	// 	  <div class="swiper-wrapper">
	// 	    <div class="swiper-slide" v-for="imgInfor in imgInfors"><a v-bind:href="imgInfor.linkUrl"><img v-bind:src="imgInfor.imgUrl"></a></div>
	// 	    <!-- <div class="swiper-slide">slider2</div>
	// 	    <div class="swiper-slide">slider3</div> -->
	// 	  </div>
	// 	  <div class="swiper-pagination"></div>
	// 	</div>
	// </template>
	// <script type="text/javascript">
	var Swiper = __webpack_require__(68);
	exports.default = {
		data: function data() {
			return {
				imgInfors: []
			};
		},
		ready: function ready() {
			this.getBannerData();
		},
		watch: {
			imgInfors: function imgInfors() {
				this.swiperInit();
			}
		},
		methods: {
			getBannerData: function getBannerData() {
				var _this = this;

				$.ajax({
					type: "post",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					url: _store2.default.state.hostUrl + "indexbanner",
					cache: false,
					data: {},
					complete: function complete(status) {
						// console.log("complete")
					},
					error: function error() {
						// console.log("error")
					},
					success: function success(res) {
						var res = eval(res);
						for (var i = 0; i < res.data.list.length; i++) {
							var linkUrl = res.data.list[i].linkUrl;
							if (linkUrl.split("?")[1]) {
								res.data.list[i].linkUrl = res.data.list[i].linkUrl + "&tag=outer";
							} else {
								res.data.list[i].linkUrl = res.data.list[i].linkUrl + "?tag=outer";
							}
						}
						_this.imgInfors = res.data.list;
					}
				});
			},
			swiperInit: function swiperInit() {
				var _ref;

				var mySwiper1 = new Swiper('.swiper-container1', (_ref = {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					paginationElement: 'span',
					autoplayDisableOnInteraction: true,
					direction: 'horizontal'
				}, _defineProperty(_ref, 'paginationClickable', false), _defineProperty(_ref, 'autoplay', 2000), _defineProperty(_ref, 'touchRatio', 2), _defineProperty(_ref, 'speed', 1000), _defineProperty(_ref, 'loop', true), _ref));
			}
		},
		store: _store2.default
	};
	// </script>
	// <style type="text/css" lang="sass">
	// 	@import '../css/swiper.css';
	// 	.swiper-container1{
	// 		width:100%;
	// 		height:2.8rem;
	// 		margin-left: auto;
	// 		margin-right: auto;
	// 		position: relative;
	// 		overflow: hidden;
	// 		/* Fix of Webkit flickering */
	// 		z-index: 1;
	// 		.swiper-pagination{
	// 			position:absolute;
	// 			width: 100%;
	// 			height: 0rem;
	// 			line-height: 0.1rem;
	// 			bottom: 0.9rem;
	// 		}
	// 		.swiper-wrapper{
	// 			.swiper-slide a{
	// 				display: block;
	// 				width:100%;
	// 				height:100%;
	// 				img{
	// 					width: 100%;
	// 					height: 100%;
	// 				}
	// 			}
	// 		}
	// 	}
	// </style>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * Swiper 3.4.0
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: October 16, 2016
	 */
	(function () {
	    'use strict';
	    var $;
	    /*===========================
	    Swiper
	    ===========================*/
	    var Swiper = function (container, params) {
	        if (!(this instanceof Swiper)) return new Swiper(container, params);

	        var defaults = {
	            direction: 'horizontal',
	            touchEventsTarget: 'container',
	            initialSlide: 0,
	            speed: 300,
	            // autoplay
	            autoplay: false,
	            autoplayDisableOnInteraction: true,
	            autoplayStopOnLast: false,
	            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	            iOSEdgeSwipeDetection: false,
	            iOSEdgeSwipeThreshold: 20,
	            // Free mode
	            freeMode: false,
	            freeModeMomentum: true,
	            freeModeMomentumRatio: 1,
	            freeModeMomentumBounce: true,
	            freeModeMomentumBounceRatio: 1,
	            freeModeMomentumVelocityRatio: 1,
	            freeModeSticky: false,
	            freeModeMinimumVelocity: 0.02,
	            // Autoheight
	            autoHeight: false,
	            // Set wrapper width
	            setWrapperSize: false,
	            // Virtual Translate
	            virtualTranslate: false,
	            // Effects
	            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	            coverflow: {
	                rotate: 50,
	                stretch: 0,
	                depth: 100,
	                modifier: 1,
	                slideShadows : true
	            },
	            flip: {
	                slideShadows : true,
	                limitRotation: true
	            },
	            cube: {
	                slideShadows: true,
	                shadow: true,
	                shadowOffset: 20,
	                shadowScale: 0.94
	            },
	            fade: {
	                crossFade: false
	            },
	            // Parallax
	            parallax: false,
	            // Zoom
	            zoom: false,
	            zoomMax: 3,
	            zoomMin: 1,
	            zoomToggle: true,
	            // Scrollbar
	            scrollbar: null,
	            scrollbarHide: true,
	            scrollbarDraggable: false,
	            scrollbarSnapOnRelease: false,
	            // Keyboard Mousewheel
	            keyboardControl: false,
	            mousewheelControl: false,
	            mousewheelReleaseOnEdges: false,
	            mousewheelInvert: false,
	            mousewheelForceToAxis: false,
	            mousewheelSensitivity: 1,
	            mousewheelEventsTarged: 'container',
	            // Hash Navigation
	            hashnav: false,
	            hashnavWatchState: false,
	            // History
	            history: false,
	            // Commong Nav State
	            replaceState: false,
	            // Breakpoints
	            breakpoints: undefined,
	            // Slides grid
	            spaceBetween: 0,
	            slidesPerView: 1,
	            slidesPerColumn: 1,
	            slidesPerColumnFill: 'column',
	            slidesPerGroup: 1,
	            centeredSlides: false,
	            slidesOffsetBefore: 0, // in px
	            slidesOffsetAfter: 0, // in px
	            // Round length
	            roundLengths: false,
	            // Touches
	            touchRatio: 1,
	            touchAngle: 45,
	            simulateTouch: true,
	            shortSwipes: true,
	            longSwipes: true,
	            longSwipesRatio: 0.5,
	            longSwipesMs: 300,
	            followFinger: true,
	            onlyExternal: false,
	            threshold: 0,
	            touchMoveStopPropagation: true,
	            touchReleaseOnEdges: false,
	            // Unique Navigation Elements
	            uniqueNavElements: true,
	            // Pagination
	            pagination: null,
	            paginationElement: 'span',
	            paginationClickable: false,
	            paginationHide: false,
	            paginationBulletRender: null,
	            paginationProgressRender: null,
	            paginationFractionRender: null,
	            paginationCustomRender: null,
	            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
	            // Resistance
	            resistance: true,
	            resistanceRatio: 0.85,
	            // Next/prev buttons
	            nextButton: null,
	            prevButton: null,
	            // Progress
	            watchSlidesProgress: false,
	            watchSlidesVisibility: false,
	            // Cursor
	            grabCursor: false,
	            // Clicks
	            preventClicks: true,
	            preventClicksPropagation: true,
	            slideToClickedSlide: false,
	            // Lazy Loading
	            lazyLoading: false,
	            lazyLoadingInPrevNext: false,
	            lazyLoadingInPrevNextAmount: 1,
	            lazyLoadingOnTransitionStart: false,
	            // Images
	            preloadImages: true,
	            updateOnImagesReady: true,
	            // loop
	            loop: false,
	            loopAdditionalSlides: 0,
	            loopedSlides: null,
	            // Control
	            control: undefined,
	            controlInverse: false,
	            controlBy: 'slide', //or 'container'
	            normalizeSlideIndex: true,
	            // Swiping/no swiping
	            allowSwipeToPrev: true,
	            allowSwipeToNext: true,
	            swipeHandler: null, //'.swipe-handler',
	            noSwiping: true,
	            noSwipingClass: 'swiper-no-swiping',
	            // Passive Listeners
	            passiveListeners: true,
	            // NS
	            containerModifierClass: 'swiper-container-', // NEW
	            slideClass: 'swiper-slide',
	            slideActiveClass: 'swiper-slide-active',
	            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
	            slideVisibleClass: 'swiper-slide-visible',
	            slideDuplicateClass: 'swiper-slide-duplicate',
	            slideNextClass: 'swiper-slide-next',
	            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
	            slidePrevClass: 'swiper-slide-prev',
	            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
	            wrapperClass: 'swiper-wrapper',
	            bulletClass: 'swiper-pagination-bullet',
	            bulletActiveClass: 'swiper-pagination-bullet-active',
	            buttonDisabledClass: 'swiper-button-disabled',
	            paginationCurrentClass: 'swiper-pagination-current',
	            paginationTotalClass: 'swiper-pagination-total',
	            paginationHiddenClass: 'swiper-pagination-hidden',
	            paginationProgressbarClass: 'swiper-pagination-progressbar',
	            paginationClickableClass: 'swiper-pagination-clickable', // NEW
	            paginationModifierClass: 'swiper-pagination-', // NEW
	            lazyLoadingClass: 'swiper-lazy',
	            lazyStatusLoadingClass: 'swiper-lazy-loading',
	            lazyStatusLoadedClass: 'swiper-lazy-loaded',
	            lazyPreloaderClass: 'swiper-lazy-preloader',
	            notificationClass: 'swiper-notification',
	            preloaderClass: 'preloader',
	            zoomContainerClass: 'swiper-zoom-container',
	        
	            // Observer
	            observer: false,
	            observeParents: false,
	            // Accessibility
	            a11y: false,
	            prevSlideMessage: 'Previous slide',
	            nextSlideMessage: 'Next slide',
	            firstSlideMessage: 'This is the first slide',
	            lastSlideMessage: 'This is the last slide',
	            paginationBulletMessage: 'Go to slide {{index}}',
	            // Callbacks
	            runCallbacksOnInit: true
	            /*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */
	        
	        };
	        var initialVirtualTranslate = params && params.virtualTranslate;
	        
	        params = params || {};
	        var originalParams = {};
	        for (var param in params) {
	            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
	                originalParams[param] = {};
	                for (var deepParam in params[param]) {
	                    originalParams[param][deepParam] = params[param][deepParam];
	                }
	            }
	            else {
	                originalParams[param] = params[param];
	            }
	        }
	        for (var def in defaults) {
	            if (typeof params[def] === 'undefined') {
	                params[def] = defaults[def];
	            }
	            else if (typeof params[def] === 'object') {
	                for (var deepDef in defaults[def]) {
	                    if (typeof params[def][deepDef] === 'undefined') {
	                        params[def][deepDef] = defaults[def][deepDef];
	                    }
	                }
	            }
	        }
	        
	        // Swiper
	        var s = this;
	        
	        // Params
	        s.params = params;
	        s.originalParams = originalParams;
	        
	        // Classname
	        s.classNames = [];
	        /*=========================
	          Dom Library and plugins
	          ===========================*/
	        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
	            $ = Dom7;
	        }
	        if (typeof $ === 'undefined') {
	            if (typeof Dom7 === 'undefined') {
	                $ = window.Dom7 || window.Zepto || window.jQuery;
	            }
	            else {
	                $ = Dom7;
	            }
	            if (!$) return;
	        }
	        // Export it to Swiper instance
	        s.$ = $;
	        
	        /*=========================
	          Breakpoints
	          ===========================*/
	        s.currentBreakpoint = undefined;
	        s.getActiveBreakpoint = function () {
	            //Get breakpoint for window width
	            if (!s.params.breakpoints) return false;
	            var breakpoint = false;
	            var points = [], point;
	            for ( point in s.params.breakpoints ) {
	                if (s.params.breakpoints.hasOwnProperty(point)) {
	                    points.push(point);
	                }
	            }
	            points.sort(function (a, b) {
	                return parseInt(a, 10) > parseInt(b, 10);
	            });
	            for (var i = 0; i < points.length; i++) {
	                point = points[i];
	                if (point >= window.innerWidth && !breakpoint) {
	                    breakpoint = point;
	                }
	            }
	            return breakpoint || 'max';
	        };
	        s.setBreakpoint = function () {
	            //Set breakpoint for window width and update parameters
	            var breakpoint = s.getActiveBreakpoint();
	            if (breakpoint && s.currentBreakpoint !== breakpoint) {
	                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
	                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
	                for ( var param in breakPointsParams ) {
	                    s.params[param] = breakPointsParams[param];
	                }
	                s.currentBreakpoint = breakpoint;
	                if(needsReLoop && s.destroyLoop) {
	                    s.reLoop(true);
	                }
	            }
	        };
	        // Set breakpoint on load
	        if (s.params.breakpoints) {
	            s.setBreakpoint();
	        }
	        
	        /*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/
	        s.container = $(container);
	        if (s.container.length === 0) return;
	        if (s.container.length > 1) {
	            var swipers = [];
	            s.container.each(function () {
	                var container = this;
	                swipers.push(new Swiper(this, params));
	            });
	            return swipers;
	        }
	        
	        // Save instance in container HTML Element and in data
	        s.container[0].swiper = s;
	        s.container.data('swiper', s);
	        
	        s.classNames.push(s.params.containerModifierClass + s.params.direction);
	        
	        if (s.params.freeMode) {
	            s.classNames.push(s.params.containerModifierClass + 'free-mode');
	        }
	        if (!s.support.flexbox) {
	            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
	            s.params.slidesPerColumn = 1;
	        }
	        if (s.params.autoHeight) {
	            s.classNames.push(s.params.containerModifierClass + 'autoheight');
	        }
	        // Enable slides progress when required
	        if (s.params.parallax || s.params.watchSlidesVisibility) {
	            s.params.watchSlidesProgress = true;
	        }
	        // Max resistance when touchReleaseOnEdges
	        if (s.params.touchReleaseOnEdges) {
	            s.params.resistanceRatio = 0;
	        }
	        // Coverflow / 3D
	        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
	            if (s.support.transforms3d) {
	                s.params.watchSlidesProgress = true;
	                s.classNames.push(s.params.containerModifierClass + '3d');
	            }
	            else {
	                s.params.effect = 'slide';
	            }
	        }
	        if (s.params.effect !== 'slide') {
	            s.classNames.push(s.params.containerModifierClass + s.params.effect);
	        }
	        if (s.params.effect === 'cube') {
	            s.params.resistanceRatio = 0;
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.centeredSlides = false;
	            s.params.spaceBetween = 0;
	            s.params.virtualTranslate = true;
	            s.params.setWrapperSize = false;
	        }
	        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.watchSlidesProgress = true;
	            s.params.spaceBetween = 0;
	            s.params.setWrapperSize = false;
	            if (typeof initialVirtualTranslate === 'undefined') {
	                s.params.virtualTranslate = true;
	            }
	        }
	        
	        // Grab Cursor
	        if (s.params.grabCursor && s.support.touch) {
	            s.params.grabCursor = false;
	        }
	        
	        // Wrapper
	        s.wrapper = s.container.children('.' + s.params.wrapperClass);
	        
	        // Pagination
	        if (s.params.pagination) {
	            s.paginationContainer = $(s.params.pagination);
	            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
	                s.paginationContainer = s.container.find(s.params.pagination);
	            }
	        
	            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
	                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
	            }
	            else {
	                s.params.paginationClickable = false;
	            }
	            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
	        }
	        // Next/Prev Buttons
	        if (s.params.nextButton || s.params.prevButton) {
	            if (s.params.nextButton) {
	                s.nextButton = $(s.params.nextButton);
	                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
	                    s.nextButton = s.container.find(s.params.nextButton);
	                }
	            }
	            if (s.params.prevButton) {
	                s.prevButton = $(s.params.prevButton);
	                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
	                    s.prevButton = s.container.find(s.params.prevButton);
	                }
	            }
	        }
	        
	        // Is Horizontal
	        s.isHorizontal = function () {
	            return s.params.direction === 'horizontal';
	        };
	        // s.isH = isH;
	        
	        // RTL
	        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
	        if (s.rtl) {
	            s.classNames.push(s.params.containerModifierClass + 'rtl');
	        }
	        
	        // Wrong RTL support
	        if (s.rtl) {
	            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
	        }
	        
	        // Columns
	        if (s.params.slidesPerColumn > 1) {
	            s.classNames.push(s.params.containerModifierClass + 'multirow');
	        }
	        
	        // Check for Android
	        if (s.device.android) {
	            s.classNames.push(s.params.containerModifierClass + 'android');
	        }
	        
	        // Add classes
	        s.container.addClass(s.classNames.join(' '));
	        
	        // Translate
	        s.translate = 0;
	        
	        // Progress
	        s.progress = 0;
	        
	        // Velocity
	        s.velocity = 0;
	        
	        /*=========================
	          Locks, unlocks
	          ===========================*/
	        s.lockSwipeToNext = function () {
	            s.params.allowSwipeToNext = false;
	            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
	                s.unsetGrabCursor();
	            }
	        };
	        s.lockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = false;
	            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
	                s.unsetGrabCursor();
	            }
	        };
	        s.lockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
	            if (s.params.grabCursor) s.unsetGrabCursor();
	        };
	        s.unlockSwipeToNext = function () {
	            s.params.allowSwipeToNext = true;
	            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
	                s.setGrabCursor();
	            }
	        };
	        s.unlockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = true;
	            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
	                s.setGrabCursor();
	            }
	        };
	        s.unlockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
	            if (s.params.grabCursor) s.setGrabCursor();
	        };
	        
	        /*=========================
	          Round helper
	          ===========================*/
	        function round(a) {
	            return Math.floor(a);
	        }
	        /*=========================
	          Set grab cursor
	          ===========================*/
	        s.setGrabCursor = function(moving) {
	            s.container[0].style.cursor = 'move';
	            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
	            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
	            s.container[0].style.cursor = moving ? 'grabbing': 'grab';
	        };
	        s.unsetGrabCursor = function () {
	            s.container[0].style.cursor = '';
	        };
	        if (s.params.grabCursor) {
	            s.setGrabCursor();
	        }
	        /*=========================
	          Update on Images Ready
	          ===========================*/
	        s.imagesToLoad = [];
	        s.imagesLoaded = 0;
	        
	        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
	            var image;
	            function onReady () {
	                if (callback) callback();
	            }
	            if (!imgElement.complete || !checkForComplete) {
	                if (src) {
	                    image = new window.Image();
	                    image.onload = onReady;
	                    image.onerror = onReady;
	                    if (sizes) {
	                        image.sizes = sizes;
	                    }
	                    if (srcset) {
	                        image.srcset = srcset;
	                    }
	                    if (src) {
	                        image.src = src;
	                    }
	                } else {
	                    onReady();
	                }
	        
	            } else {//image already loaded...
	                onReady();
	            }
	        };
	        s.preloadImages = function () {
	            s.imagesToLoad = s.container.find('img');
	            function _onReady() {
	                if (typeof s === 'undefined' || s === null) return;
	                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
	                if (s.imagesLoaded === s.imagesToLoad.length) {
	                    if (s.params.updateOnImagesReady) s.update();
	                    s.emit('onImagesReady', s);
	                }
	            }
	            for (var i = 0; i < s.imagesToLoad.length; i++) {
	                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
	            }
	        };
	        
	        /*=========================
	          Autoplay
	          ===========================*/
	        s.autoplayTimeoutId = undefined;
	        s.autoplaying = false;
	        s.autoplayPaused = false;
	        function autoplay() {
	            var autoplayDelay = s.params.autoplay;
	            var activeSlide = s.slides.eq(s.activeIndex);
	            if (activeSlide.attr('data-swiper-autoplay')) {
	                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
	            }
	            s.autoplayTimeoutId = setTimeout(function () {
	                if (s.params.loop) {
	                    s.fixLoop();
	                    s._slideNext();
	                    s.emit('onAutoplay', s);
	                }
	                else {
	                    if (!s.isEnd) {
	                        s._slideNext();
	                        s.emit('onAutoplay', s);
	                    }
	                    else {
	                        if (!params.autoplayStopOnLast) {
	                            s._slideTo(0);
	                            s.emit('onAutoplay', s);
	                        }
	                        else {
	                            s.stopAutoplay();
	                        }
	                    }
	                }
	            }, autoplayDelay);
	        }
	        s.startAutoplay = function () {
	            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
	            if (!s.params.autoplay) return false;
	            if (s.autoplaying) return false;
	            s.autoplaying = true;
	            s.emit('onAutoplayStart', s);
	            autoplay();
	        };
	        s.stopAutoplay = function (internal) {
	            if (!s.autoplayTimeoutId) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplaying = false;
	            s.autoplayTimeoutId = undefined;
	            s.emit('onAutoplayStop', s);
	        };
	        s.pauseAutoplay = function (speed) {
	            if (s.autoplayPaused) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplayPaused = true;
	            if (speed === 0) {
	                s.autoplayPaused = false;
	                autoplay();
	            }
	            else {
	                s.wrapper.transitionEnd(function () {
	                    if (!s) return;
	                    s.autoplayPaused = false;
	                    if (!s.autoplaying) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        autoplay();
	                    }
	                });
	            }
	        };
	        /*=========================
	          Min/Max Translate
	          ===========================*/
	        s.minTranslate = function () {
	            return (-s.snapGrid[0]);
	        };
	        s.maxTranslate = function () {
	            return (-s.snapGrid[s.snapGrid.length - 1]);
	        };
	        /*=========================
	          Slider/slides sizes
	          ===========================*/
	        s.updateAutoHeight = function () {
	            var activeSlides = [];
	            var newHeight = 0;
	        
	            // Find slides currently in view
	            if(s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
	                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
	                    var index = s.activeIndex + i;
	                    if(index > s.slides.length) break;
	                    activeSlides.push(s.slides.eq(index)[0]);
	                }
	            } else {
	                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
	            }
	        
	            // Find new height from heighest slide in view
	            for (i = 0; i < activeSlides.length; i++) {
	                if (typeof activeSlides[i] !== 'undefined') {
	                    var height = activeSlides[i].offsetHeight;
	                    newHeight = height > newHeight ? height : newHeight;
	                }
	            }
	        
	            // Update Height
	            if (newHeight) s.wrapper.css('height', newHeight + 'px');
	        };
	        s.updateContainerSize = function () {
	            var width, height;
	            if (typeof s.params.width !== 'undefined') {
	                width = s.params.width;
	            }
	            else {
	                width = s.container[0].clientWidth;
	            }
	            if (typeof s.params.height !== 'undefined') {
	                height = s.params.height;
	            }
	            else {
	                height = s.container[0].clientHeight;
	            }
	            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
	                return;
	            }
	        
	            //Subtract paddings
	            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
	            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
	        
	            // Store values
	            s.width = width;
	            s.height = height;
	            s.size = s.isHorizontal() ? s.width : s.height;
	        };
	        
	        s.updateSlidesSize = function () {
	            s.slides = s.wrapper.children('.' + s.params.slideClass);
	            s.snapGrid = [];
	            s.slidesGrid = [];
	            s.slidesSizesGrid = [];
	        
	            var spaceBetween = s.params.spaceBetween,
	                slidePosition = -s.params.slidesOffsetBefore,
	                i,
	                prevSlideSize = 0,
	                index = 0;
	            if (typeof s.size === 'undefined') return;
	            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
	            }
	        
	            s.virtualSize = -spaceBetween;
	            // reset margins
	            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
	            else s.slides.css({marginRight: '', marginBottom: ''});
	        
	            var slidesNumberEvenToRows;
	            if (s.params.slidesPerColumn > 1) {
	                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
	                    slidesNumberEvenToRows = s.slides.length;
	                }
	                else {
	                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
	                }
	                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
	                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
	                }
	            }
	        
	            // Calc slides
	            var slideSize;
	            var slidesPerColumn = s.params.slidesPerColumn;
	            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
	            for (i = 0; i < s.slides.length; i++) {
	                slideSize = 0;
	                var slide = s.slides.eq(i);
	                if (s.params.slidesPerColumn > 1) {
	                    // Set slides order
	                    var newSlideOrderIndex;
	                    var column, row;
	                    if (s.params.slidesPerColumnFill === 'column') {
	                        column = Math.floor(i / slidesPerColumn);
	                        row = i - column * slidesPerColumn;
	                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
	                            if (++row >= slidesPerColumn) {
	                                row = 0;
	                                column++;
	                            }
	                        }
	                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
	                        slide
	                            .css({
	                                '-webkit-box-ordinal-group': newSlideOrderIndex,
	                                '-moz-box-ordinal-group': newSlideOrderIndex,
	                                '-ms-flex-order': newSlideOrderIndex,
	                                '-webkit-order': newSlideOrderIndex,
	                                'order': newSlideOrderIndex
	                            });
	                    }
	                    else {
	                        row = Math.floor(i / slidesPerRow);
	                        column = i - row * slidesPerRow;
	                    }
	                    slide
	                        .css(
	                            'margin-' + (s.isHorizontal() ? 'top' : 'left'),
	                            (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
	                        )
	                        .attr('data-swiper-column', column)
	                        .attr('data-swiper-row', row);
	        
	                }
	                if (slide.css('display') === 'none') continue;
	                if (s.params.slidesPerView === 'auto') {
	                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	                }
	                else {
	                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	        
	                    if (s.isHorizontal()) {
	                        s.slides[i].style.width = slideSize + 'px';
	                    }
	                    else {
	                        s.slides[i].style.height = slideSize + 'px';
	                    }
	                }
	                s.slides[i].swiperSlideSize = slideSize;
	                s.slidesSizesGrid.push(slideSize);
	        
	        
	                if (s.params.centeredSlides) {
	                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
	                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
	                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                }
	                else {
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                    slidePosition = slidePosition + slideSize + spaceBetween;
	                }
	        
	                s.virtualSize += slideSize + spaceBetween;
	        
	                prevSlideSize = slideSize;
	        
	                index ++;
	            }
	            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
	            var newSlidesGrid;
	        
	            if (
	                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
	                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	            if (!s.support.flexbox || s.params.setWrapperSize) {
	                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	        
	            if (s.params.slidesPerColumn > 1) {
	                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
	                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
	                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
	                if (s.params.centeredSlides) {
	                    newSlidesGrid = [];
	                    for (i = 0; i < s.snapGrid.length; i++) {
	                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                    s.snapGrid = newSlidesGrid;
	                }
	            }
	        
	            // Remove last grid elements depending on width
	            if (!s.params.centeredSlides) {
	                newSlidesGrid = [];
	                for (i = 0; i < s.snapGrid.length; i++) {
	                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
	                        newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                }
	                s.snapGrid = newSlidesGrid;
	                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
	                    s.snapGrid.push(s.virtualSize - s.size);
	                }
	            }
	            if (s.snapGrid.length === 0) s.snapGrid = [0];
	        
	            if (s.params.spaceBetween !== 0) {
	                if (s.isHorizontal()) {
	                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
	                    else s.slides.css({marginRight: spaceBetween + 'px'});
	                }
	                else s.slides.css({marginBottom: spaceBetween + 'px'});
	            }
	            if (s.params.watchSlidesProgress) {
	                s.updateSlidesOffset();
	            }
	        };
	        s.updateSlidesOffset = function () {
	            for (var i = 0; i < s.slides.length; i++) {
	                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
	            }
	        };
	        
	        /*=========================
	          Slider/slides progress
	          ===========================*/
	        s.updateSlidesProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            if (s.slides.length === 0) return;
	            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
	        
	            var offsetCenter = -translate;
	            if (s.rtl) offsetCenter = translate;
	        
	            // Visible Slides
	            s.slides.removeClass(s.params.slideVisibleClass);
	            for (var i = 0; i < s.slides.length; i++) {
	                var slide = s.slides[i];
	                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
	                if (s.params.watchSlidesVisibility) {
	                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
	                    var isVisible =
	                        (slideBefore >= 0 && slideBefore < s.size) ||
	                        (slideAfter > 0 && slideAfter <= s.size) ||
	                        (slideBefore <= 0 && slideAfter >= s.size);
	                    if (isVisible) {
	                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
	                    }
	                }
	                slide.progress = s.rtl ? -slideProgress : slideProgress;
	            }
	        };
	        s.updateProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            var wasBeginning = s.isBeginning;
	            var wasEnd = s.isEnd;
	            if (translatesDiff === 0) {
	                s.progress = 0;
	                s.isBeginning = s.isEnd = true;
	            }
	            else {
	                s.progress = (translate - s.minTranslate()) / (translatesDiff);
	                s.isBeginning = s.progress <= 0;
	                s.isEnd = s.progress >= 1;
	            }
	            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
	            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
	        
	            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
	            s.emit('onProgress', s, s.progress);
	        };
	        s.updateActiveIndex = function () {
	            var translate = s.rtl ? s.translate : -s.translate;
	            var newActiveIndex, i, snapIndex;
	            for (i = 0; i < s.slidesGrid.length; i ++) {
	                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
	                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
	                        newActiveIndex = i;
	                    }
	                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
	                        newActiveIndex = i + 1;
	                    }
	                }
	                else {
	                    if (translate >= s.slidesGrid[i]) {
	                        newActiveIndex = i;
	                    }
	                }
	            }
	            // Normalize slideIndex
	            if(s.params.normalizeSlideIndex){
	                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
	            }
	            // for (i = 0; i < s.slidesGrid.length; i++) {
	                // if (- translate >= s.slidesGrid[i]) {
	                    // newActiveIndex = i;
	                // }
	            // }
	            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
	            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
	        
	            if (newActiveIndex === s.activeIndex) {
	                return;
	            }
	            s.snapIndex = snapIndex;
	            s.previousIndex = s.activeIndex;
	            s.activeIndex = newActiveIndex;
	            s.updateClasses();
	            s.updateRealIndex();
	        };
	        s.updateRealIndex = function(){
	            s.realIndex = s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex;
	        };
	        
	        /*=========================
	          Classes
	          ===========================*/
	        s.updateClasses = function () {
	            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
	            var activeSlide = s.slides.eq(s.activeIndex);
	            // Active classes
	            activeSlide.addClass(s.params.slideActiveClass);
	            if (params.loop) {
	                // Duplicate to all looped slides
	                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
	                }
	                else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
	                }
	            }
	            // Next Slide
	            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
	            if (s.params.loop && nextSlide.length === 0) {
	                nextSlide = s.slides.eq(0);
	                nextSlide.addClass(s.params.slideNextClass);
	            }
	            // Prev Slide
	            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
	            if (s.params.loop && prevSlide.length === 0) {
	                prevSlide = s.slides.eq(-1);
	                prevSlide.addClass(s.params.slidePrevClass);
	            }
	            if (params.loop) {
	                // Duplicate to all looped slides
	                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
	                }
	                else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
	                }
	                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
	                }
	                else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
	                }
	            }
	        
	            // Pagination
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                // Current/Total
	                var current,
	                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                if (s.params.loop) {
	                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
	                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
	                        current = current - (s.slides.length - s.loopedSlides * 2);
	                    }
	                    if (current > total - 1) current = current - total;
	                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
	                }
	                else {
	                    if (typeof s.snapIndex !== 'undefined') {
	                        current = s.snapIndex;
	                    }
	                    else {
	                        current = s.activeIndex || 0;
	                    }
	                }
	                // Types
	                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
	                    s.bullets.removeClass(s.params.bulletActiveClass);
	                    if (s.paginationContainer.length > 1) {
	                        s.bullets.each(function () {
	                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
	                        });
	                    }
	                    else {
	                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
	                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
	                }
	                if (s.params.paginationType === 'progress') {
	                    var scale = (current + 1) / total,
	                        scaleX = scale,
	                        scaleY = 1;
	                    if (!s.isHorizontal()) {
	                        scaleY = scale;
	                        scaleX = 1;
	                    }
	                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
	                }
	                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
	                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        
	            // Next/active buttons
	            if (!s.params.loop) {
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    if (s.isBeginning) {
	                        s.prevButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
	                    }
	                    else {
	                        s.prevButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
	                    }
	                }
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    if (s.isEnd) {
	                        s.nextButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
	                    }
	                    else {
	                        s.nextButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
	                    }
	                }
	            }
	        };
	        
	        /*=========================
	          Pagination
	          ===========================*/
	        s.updatePagination = function () {
	            if (!s.params.pagination) return;
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                var paginationHTML = '';
	                if (s.params.paginationType === 'bullets') {
	                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                    for (var i = 0; i < numberOfBullets; i++) {
	                        if (s.params.paginationBulletRender) {
	                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
	                        }
	                        else {
	                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
	                        }
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
	                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
	                        s.a11y.initPagination();
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    if (s.params.paginationFractionRender) {
	                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
	                    }
	                    else {
	                        paginationHTML =
	                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
	                            ' / ' +
	                            '<span class="' + s.params.paginationTotalClass+'"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType === 'progress') {
	                    if (s.params.paginationProgressRender) {
	                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
	                    }
	                    else {
	                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType !== 'custom') {
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        };
	        /*=========================
	          Common update method
	          ===========================*/
	        s.update = function (updateTranslate) {
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updateProgress();
	            s.updatePagination();
	            s.updateClasses();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            function forceSetTranslate() {
	                var translate = s.rtl ? -s.translate : s.translate;
	                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	            }
	            if (updateTranslate) {
	                var translated, newTranslate;
	                if (s.controller && s.controller.spline) {
	                    s.controller.spline = undefined;
	                }
	                if (s.params.freeMode) {
	                    forceSetTranslate();
	                    if (s.params.autoHeight) {
	                        s.updateAutoHeight();
	                    }
	                }
	                else {
	                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
	                    }
	                    else {
	                        translated = s.slideTo(s.activeIndex, 0, false, true);
	                    }
	                    if (!translated) {
	                        forceSetTranslate();
	                    }
	                }
	            }
	            else if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	        };
	        
	        /*=========================
	          Resize Handler
	          ===========================*/
	        s.onResize = function (forceUpdatePagination) {
	            //Breakpoints
	            if (s.params.breakpoints) {
	                s.setBreakpoint();
	            }
	        
	            // Disable locks on resize
	            var allowSwipeToPrev = s.params.allowSwipeToPrev;
	            var allowSwipeToNext = s.params.allowSwipeToNext;
	            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
	        
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            if (s.controller && s.controller.spline) {
	                s.controller.spline = undefined;
	            }
	            var slideChangedBySlideTo = false;
	            if (s.params.freeMode) {
	                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	        
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	            }
	            else {
	                s.updateClasses();
	                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
	                }
	                else {
	                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
	                }
	            }
	            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
	                s.lazy.load();
	            }
	            // Return locks after resize
	            s.params.allowSwipeToPrev = allowSwipeToPrev;
	            s.params.allowSwipeToNext = allowSwipeToNext;
	        };
	        
	        /*=========================
	          Events
	          ===========================*/
	        
	        //Define Touch Events
	        s.touchEventsDesktop = {start: 'mousedown', move: 'mousemove', end: 'mouseup'};
	        if (window.navigator.pointerEnabled) s.touchEventsDesktop = {start: 'pointerdown', move: 'pointermove', end: 'pointerup'};
	        else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = {start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp'};
	        s.touchEvents = {
	            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : s.touchEventsDesktop.start,
	            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
	            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
	        };
	        
	        
	        // WP8 Touch Events Fix
	        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
	            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
	        }
	        
	        // Attach/detach events
	        s.initEvents = function (detach) {
	            var actionDom = detach ? 'off' : 'on';
	            var action = detach ? 'removeEventListener' : 'addEventListener';
	            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
	            var target = s.support.touch ? touchEventsTarget : document;
	        
	            var moveCapture = s.params.nested ? true : false;
	        
	            //Touch Events
	            if (s.browser.ie) {
	                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                target[action](s.touchEvents.end, s.onTouchEnd, false);
	            }
	            else {
	                if (s.support.touch) {
	                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
	                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
	                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
	                }
	                if ((params.simulateTouch && !s.device.ios && !s.device.android) || (params.simulateTouch && !s.support.touch && s.device.ios)) {
	                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
	                    document[action]('mousemove', s.onTouchMove, moveCapture);
	                    document[action]('mouseup', s.onTouchEnd, false);
	                }
	            }
	            window[action]('resize', s.onResize);
	        
	            // Next, Prev, Index
	            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                s.nextButton[actionDom]('click', s.onClickNext);
	                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                s.prevButton[actionDom]('click', s.onClickPrev);
	                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.pagination && s.params.paginationClickable) {
	                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
	                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
	            }
	        
	            // Prevent Links Clicks
	            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
	        };
	        s.attachEvents = function () {
	            s.initEvents();
	        };
	        s.detachEvents = function () {
	            s.initEvents(true);
	        };
	        
	        /*=========================
	          Handle Clicks
	          ===========================*/
	        // Prevent Clicks
	        s.allowClick = true;
	        s.preventClicks = function (e) {
	            if (!s.allowClick) {
	                if (s.params.preventClicks) e.preventDefault();
	                if (s.params.preventClicksPropagation && s.animating) {
	                    e.stopPropagation();
	                    e.stopImmediatePropagation();
	                }
	            }
	        };
	        // Clicks
	        s.onClickNext = function (e) {
	            e.preventDefault();
	            if (s.isEnd && !s.params.loop) return;
	            s.slideNext();
	        };
	        s.onClickPrev = function (e) {
	            e.preventDefault();
	            if (s.isBeginning && !s.params.loop) return;
	            s.slidePrev();
	        };
	        s.onClickIndex = function (e) {
	            e.preventDefault();
	            var index = $(this).index() * s.params.slidesPerGroup;
	            if (s.params.loop) index = index + s.loopedSlides;
	            s.slideTo(index);
	        };
	        
	        /*=========================
	          Handle Touches
	          ===========================*/
	        function findElementInEvent(e, selector) {
	            var el = $(e.target);
	            if (!el.is(selector)) {
	                if (typeof selector === 'string') {
	                    el = el.parents(selector);
	                }
	                else if (selector.nodeType) {
	                    var found;
	                    el.parents().each(function (index, _el) {
	                        if (_el === selector) found = selector;
	                    });
	                    if (!found) return undefined;
	                    else return selector;
	                }
	            }
	            if (el.length === 0) {
	                return undefined;
	            }
	            return el[0];
	        }
	        s.updateClickedSlide = function (e) {
	            var slide = findElementInEvent(e, '.' + s.params.slideClass);
	            var slideFound = false;
	            if (slide) {
	                for (var i = 0; i < s.slides.length; i++) {
	                    if (s.slides[i] === slide) slideFound = true;
	                }
	            }
	        
	            if (slide && slideFound) {
	                s.clickedSlide = slide;
	                s.clickedIndex = $(slide).index();
	            }
	            else {
	                s.clickedSlide = undefined;
	                s.clickedIndex = undefined;
	                return;
	            }
	            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
	                var slideToIndex = s.clickedIndex,
	                    realIndex,
	                    duplicatedSlides;
	                if (s.params.loop) {
	                    if (s.animating) return;
	                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
	                    if (s.params.centeredSlides) {
	                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView/2)) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                    else {
	                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                }
	                else {
	                    s.slideTo(slideToIndex);
	                }
	            }
	        };
	        
	        var isTouched,
	            isMoved,
	            allowTouchCallbacks,
	            touchStartTime,
	            isScrolling,
	            currentTranslate,
	            startTranslate,
	            allowThresholdMove,
	            // Form elements to match
	            formElements = 'input, select, textarea, button, video',
	            // Last click time
	            lastClickTime = Date.now(), clickTimeout,
	            //Velocities
	            velocities = [],
	            allowMomentumBounce;
	        
	        // Animating Flag
	        s.animating = false;
	        
	        // Touches information
	        s.touches = {
	            startX: 0,
	            startY: 0,
	            currentX: 0,
	            currentY: 0,
	            diff: 0
	        };
	        
	        // Touch handlers
	        var isTouchEvent, startMoving;
	        s.onTouchStart = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            isTouchEvent = e.type === 'touchstart';
	            if (!isTouchEvent && 'which' in e && e.which === 3) return;
	            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
	                s.allowClick = true;
	                return;
	            }
	            if (s.params.swipeHandler) {
	                if (!findElementInEvent(e, s.params.swipeHandler)) return;
	            }
	        
	            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	        
	            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
	                return;
	            }
	        
	            isTouched = true;
	            isMoved = false;
	            allowTouchCallbacks = true;
	            isScrolling = undefined;
	            startMoving = undefined;
	            s.touches.startX = startX;
	            s.touches.startY = startY;
	            touchStartTime = Date.now();
	            s.allowClick = true;
	            s.updateContainerSize();
	            s.swipeDirection = undefined;
	            if (s.params.threshold > 0) allowThresholdMove = false;
	            if (e.type !== 'touchstart') {
	                var preventDefault = true;
	                if ($(e.target).is(formElements)) preventDefault = false;
	                if (document.activeElement && $(document.activeElement).is(formElements)) {
	                    document.activeElement.blur();
	                }
	                if (preventDefault) {
	                    e.preventDefault();
	                }
	            }
	            s.emit('onTouchStart', s, e);
	        };
	        
	        s.onTouchMove = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (isTouchEvent && e.type === 'mousemove') return;
	            if (e.preventedByNestedSwiper) {
	                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                return;
	            }
	            if (s.params.onlyExternal) {
	                // isMoved = true;
	                s.allowClick = false;
	                if (isTouched) {
	                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                    touchStartTime = Date.now();
	                }
	                return;
	            }
	            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
	                if (!s.isHorizontal()) {
	                    // Vertical
	                    if (
	                        (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate()) ||
	                        (s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate())
	                        ) {
	                        return;
	                    }
	                }
	                else {
	                    if (
	                        (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate()) ||
	                        (s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate())
	                        ) {
	                        return;
	                    }
	                }
	            }
	            if (isTouchEvent && document.activeElement) {
	                if (e.target === document.activeElement && $(e.target).is(formElements)) {
	                    isMoved = true;
	                    s.allowClick = false;
	                    return;
	                }
	            }
	            if (allowTouchCallbacks) {
	                s.emit('onTouchMove', s, e);
	            }
	            if (e.targetTouches && e.targetTouches.length > 1) return;
	        
	            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	        
	            if (typeof isScrolling === 'undefined') {
	                var touchAngle;
	                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX !== s.touches.startX) {
	                    isScrolling = false;
	                }
	                else {
	                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
	                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
	                }
	            }
	            if (isScrolling) {
	                s.emit('onTouchMoveOpposite', s, e);
	            }
	            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
	                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
	                    startMoving = true;
	                }
	            }
	            if (!isTouched) return;
	            if (isScrolling)  {
	                isTouched = false;
	                return;
	            }
	            if (!startMoving && s.browser.ieTouch) {
	                return;
	            }
	            s.allowClick = false;
	            s.emit('onSliderMove', s, e);
	            e.preventDefault();
	            if (s.params.touchMoveStopPropagation && !s.params.nested) {
	                e.stopPropagation();
	            }
	        
	            if (!isMoved) {
	                if (params.loop) {
	                    s.fixLoop();
	                }
	                startTranslate = s.getWrapperTranslate();
	                s.setWrapperTransition(0);
	                if (s.animating) {
	                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
	                }
	                if (s.params.autoplay && s.autoplaying) {
	                    if (s.params.autoplayDisableOnInteraction) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        s.pauseAutoplay();
	                    }
	                }
	                allowMomentumBounce = false;
	                //Grab Cursor
	                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
	                    s.setGrabCursor(true);
	                }
	            }
	            isMoved = true;
	        
	            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	        
	            diff = diff * s.params.touchRatio;
	            if (s.rtl) diff = -diff;
	        
	            s.swipeDirection = diff > 0 ? 'prev' : 'next';
	            currentTranslate = diff + startTranslate;
	        
	            var disableParentSwiper = true;
	            if ((diff > 0 && currentTranslate > s.minTranslate())) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
	            }
	            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
	            }
	        
	            if (disableParentSwiper) {
	                e.preventedByNestedSwiper = true;
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
	                currentTranslate = startTranslate;
	            }
	            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
	                currentTranslate = startTranslate;
	            }
	        
	        
	            // Threshold
	            if (s.params.threshold > 0) {
	                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
	                    if (!allowThresholdMove) {
	                        allowThresholdMove = true;
	                        s.touches.startX = s.touches.currentX;
	                        s.touches.startY = s.touches.currentY;
	                        currentTranslate = startTranslate;
	                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	                        return;
	                    }
	                }
	                else {
	                    currentTranslate = startTranslate;
	                    return;
	                }
	            }
	        
	            if (!s.params.followFinger) return;
	        
	            // Update active index in free mode
	            if (s.params.freeMode || s.params.watchSlidesProgress) {
	                s.updateActiveIndex();
	            }
	            if (s.params.freeMode) {
	                //Velocity
	                if (velocities.length === 0) {
	                    velocities.push({
	                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
	                        time: touchStartTime
	                    });
	                }
	                velocities.push({
	                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
	                    time: (new window.Date()).getTime()
	                });
	            }
	            // Update progress
	            s.updateProgress(currentTranslate);
	            // Update translate
	            s.setWrapperTranslate(currentTranslate);
	        };
	        s.onTouchEnd = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (allowTouchCallbacks) {
	                s.emit('onTouchEnd', s, e);
	            }
	            allowTouchCallbacks = false;
	            if (!isTouched) return;
	            //Return Grab Cursor
	            if (s.params.grabCursor && isMoved && isTouched  && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
	                s.setGrabCursor(false);
	            }
	        
	            // Time diff
	            var touchEndTime = Date.now();
	            var timeDiff = touchEndTime - touchStartTime;
	        
	            // Tap, doubleTap, Click
	            if (s.allowClick) {
	                s.updateClickedSlide(e);
	                s.emit('onTap', s, e);
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    clickTimeout = setTimeout(function () {
	                        if (!s) return;
	                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
	                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
	                        }
	                        s.emit('onClick', s, e);
	                    }, 300);
	        
	                }
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    s.emit('onDoubleTap', s, e);
	                }
	            }
	        
	            lastClickTime = Date.now();
	            setTimeout(function () {
	                if (s) s.allowClick = true;
	            }, 0);
	        
	            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
	                isTouched = isMoved = false;
	                return;
	            }
	            isTouched = isMoved = false;
	        
	            var currentPos;
	            if (s.params.followFinger) {
	                currentPos = s.rtl ? s.translate : -s.translate;
	            }
	            else {
	                currentPos = -currentTranslate;
	            }
	            if (s.params.freeMode) {
	                if (currentPos < -s.minTranslate()) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                else if (currentPos > -s.maxTranslate()) {
	                    if (s.slides.length < s.snapGrid.length) {
	                        s.slideTo(s.snapGrid.length - 1);
	                    }
	                    else {
	                        s.slideTo(s.slides.length - 1);
	                    }
	                    return;
	                }
	        
	                if (s.params.freeModeMomentum) {
	                    if (velocities.length > 1) {
	                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
	        
	                        var distance = lastMoveEvent.position - velocityEvent.position;
	                        var time = lastMoveEvent.time - velocityEvent.time;
	                        s.velocity = distance / time;
	                        s.velocity = s.velocity / 2;
	                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
	                            s.velocity = 0;
	                        }
	                        // this implies that the user stopped moving a finger then released.
	                        // There would be no events with distance zero, so the last event is stale.
	                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
	                            s.velocity = 0;
	                        }
	                    } else {
	                        s.velocity = 0;
	                    }
	                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
	        
	                    velocities.length = 0;
	                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
	                    var momentumDistance = s.velocity * momentumDuration;
	        
	                    var newPosition = s.translate + momentumDistance;
	                    if (s.rtl) newPosition = - newPosition;
	                    var doBounce = false;
	                    var afterBouncePosition;
	                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
	                    if (newPosition < s.maxTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition + s.maxTranslate() < -bounceAmount) {
	                                newPosition = s.maxTranslate() - bounceAmount;
	                            }
	                            afterBouncePosition = s.maxTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.maxTranslate();
	                        }
	                    }
	                    else if (newPosition > s.minTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition - s.minTranslate() > bounceAmount) {
	                                newPosition = s.minTranslate() + bounceAmount;
	                            }
	                            afterBouncePosition = s.minTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.minTranslate();
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        var j = 0,
	                            nextSlide;
	                        for (j = 0; j < s.snapGrid.length; j += 1) {
	                            if (s.snapGrid[j] > -newPosition) {
	                                nextSlide = j;
	                                break;
	                            }
	        
	                        }
	                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
	                            newPosition = s.snapGrid[nextSlide];
	                        } else {
	                            newPosition = s.snapGrid[nextSlide - 1];
	                        }
	                        if (!s.rtl) newPosition = - newPosition;
	                    }
	                    //Fix duration
	                    if (s.velocity !== 0) {
	                        if (s.rtl) {
	                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
	                        }
	                        else {
	                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        s.slideReset();
	                        return;
	                    }
	        
	                    if (s.params.freeModeMomentumBounce && doBounce) {
	                        s.updateProgress(afterBouncePosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        s.animating = true;
	                        s.wrapper.transitionEnd(function () {
	                            if (!s || !allowMomentumBounce) return;
	                            s.emit('onMomentumBounce', s);
	        
	                            s.setWrapperTransition(s.params.speed);
	                            s.setWrapperTranslate(afterBouncePosition);
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        });
	                    } else if (s.velocity) {
	                        s.updateProgress(newPosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        if (!s.animating) {
	                            s.animating = true;
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        }
	        
	                    } else {
	                        s.updateProgress(newPosition);
	                    }
	        
	                    s.updateActiveIndex();
	                }
	                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
	                    s.updateProgress();
	                    s.updateActiveIndex();
	                }
	                return;
	            }
	        
	            // Find current slide
	            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
	            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
	                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
	                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
	                    }
	                }
	                else {
	                    if (currentPos >= s.slidesGrid[i]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
	                    }
	                }
	            }
	        
	            // Find current slide size
	            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
	        
	            if (timeDiff > s.params.longSwipesMs) {
	                // Long touches
	                if (!s.params.longSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	                }
	            }
	            else {
	                // Short swipes
	                if (!s.params.shortSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    s.slideTo(stopIndex + s.params.slidesPerGroup);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    s.slideTo(stopIndex);
	                }
	            }
	        };
	        /*=========================
	          Transitions
	          ===========================*/
	        s._slideTo = function (slideIndex, speed) {
	            return s.slideTo(slideIndex, speed, true, true);
	        };
	        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (typeof slideIndex === 'undefined') slideIndex = 0;
	            if (slideIndex < 0) slideIndex = 0;
	            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
	            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
	        
	            var translate = - s.snapGrid[s.snapIndex];
	            // Stop autoplay
	            if (s.params.autoplay && s.autoplaying) {
	                if (internal || !s.params.autoplayDisableOnInteraction) {
	                    s.pauseAutoplay(speed);
	                }
	                else {
	                    s.stopAutoplay();
	                }
	            }
	            // Update progress
	            s.updateProgress(translate);
	        
	            // Normalize slideIndex
	            if(s.params.normalizeSlideIndex){
	                for (var i = 0; i < s.slidesGrid.length; i++) {
	                    if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
	                        slideIndex = i;
	                    }
	                }
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
	                if ((s.activeIndex || 0) !== slideIndex ) return false;
	            }
	        
	            // Update Index
	            if (typeof speed === 'undefined') speed = s.params.speed;
	            s.previousIndex = s.activeIndex || 0;
	            s.activeIndex = slideIndex;
	            s.updateRealIndex();
	            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
	                // Update Height
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	                s.updateClasses();
	                if (s.params.effect !== 'slide') {
	                    s.setWrapperTranslate(translate);
	                }
	                return false;
	            }
	            s.updateClasses();
	            s.onTransitionStart(runCallbacks);
	        
	            if (speed === 0 || s.browser.lteIE9) {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(0);
	                s.onTransitionEnd(runCallbacks);
	            }
	            else {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(speed);
	                if (!s.animating) {
	                    s.animating = true;
	                    s.wrapper.transitionEnd(function () {
	                        if (!s) return;
	                        s.onTransitionEnd(runCallbacks);
	                    });
	                }
	        
	            }
	        
	            return true;
	        };
	        
	        s.onTransitionStart = function (runCallbacks) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	            if (s.lazy) s.lazy.onTransitionStart();
	            if (runCallbacks) {
	                s.emit('onTransitionStart', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeStart', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextStart', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevStart', s);
	                    }
	                }
	        
	            }
	        };
	        s.onTransitionEnd = function (runCallbacks) {
	            s.animating = false;
	            s.setWrapperTransition(0);
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.lazy) s.lazy.onTransitionEnd();
	            if (runCallbacks) {
	                s.emit('onTransitionEnd', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeEnd', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextEnd', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevEnd', s);
	                    }
	                }
	            }
	            if (s.params.history && s.history) {
	                s.history.setHistory(s.params.history, s.activeIndex);
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.setHash();
	            }
	        
	        };
	        s.slideNext = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	        };
	        s._slideNext = function (speed) {
	            return s.slideNext(true, speed, true);
	        };
	        s.slidePrev = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	        };
	        s._slidePrev = function (speed) {
	            return s.slidePrev(true, speed, true);
	        };
	        s.slideReset = function (runCallbacks, speed, internal) {
	            return s.slideTo(s.activeIndex, speed, runCallbacks);
	        };
	        
	        s.disableTouchControl = function () {
	            s.params.onlyExternal = true;
	            return true;
	        };
	        s.enableTouchControl = function () {
	            s.params.onlyExternal = false;
	            return true;
	        };
	        
	        /*=========================
	          Translate/transition helpers
	          ===========================*/
	        s.setWrapperTransition = function (duration, byController) {
	            s.wrapper.transition(duration);
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTransition(duration);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTransition(duration);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTransition(duration);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTransition(duration, byController);
	            }
	            s.emit('onSetTransition', s, duration);
	        };
	        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
	            var x = 0, y = 0, z = 0;
	            if (s.isHorizontal()) {
	                x = s.rtl ? -translate : translate;
	            }
	            else {
	                y = translate;
	            }
	        
	            if (s.params.roundLengths) {
	                x = round(x);
	                y = round(y);
	            }
	        
	            if (!s.params.virtualTranslate) {
	                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
	                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
	            }
	        
	            s.translate = s.isHorizontal() ? x : y;
	        
	            // Check if we need to update progress
	            var progress;
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            if (translatesDiff === 0) {
	                progress = 0;
	            }
	            else {
	                progress = (translate - s.minTranslate()) / (translatesDiff);
	            }
	            if (progress !== s.progress) {
	                s.updateProgress(translate);
	            }
	        
	            if (updateActiveIndex) s.updateActiveIndex();
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTranslate(s.translate);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTranslate(s.translate);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTranslate(s.translate);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTranslate(s.translate, byController);
	            }
	            s.emit('onSetTranslate', s, s.translate);
	        };
	        
	        s.getTranslate = function (el, axis) {
	            var matrix, curTransform, curStyle, transformMatrix;
	        
	            // automatic axis detection
	            if (typeof axis === 'undefined') {
	                axis = 'x';
	            }
	        
	            if (s.params.virtualTranslate) {
	                return s.rtl ? -s.translate : s.translate;
	            }
	        
	            curStyle = window.getComputedStyle(el, null);
	            if (window.WebKitCSSMatrix) {
	                curTransform = curStyle.transform || curStyle.webkitTransform;
	                if (curTransform.split(',').length > 6) {
	                    curTransform = curTransform.split(', ').map(function(a){
	                        return a.replace(',','.');
	                    }).join(', ');
	                }
	                // Some old versions of Webkit choke when 'none' is passed; pass
	                // empty string instead in this case
	                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	            }
	            else {
	                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	                matrix = transformMatrix.toString().split(',');
	            }
	        
	            if (axis === 'x') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m41;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[12]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[4]);
	            }
	            if (axis === 'y') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m42;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[13]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[5]);
	            }
	            if (s.rtl && curTransform) curTransform = -curTransform;
	            return curTransform || 0;
	        };
	        s.getWrapperTranslate = function (axis) {
	            if (typeof axis === 'undefined') {
	                axis = s.isHorizontal() ? 'x' : 'y';
	            }
	            return s.getTranslate(s.wrapper[0], axis);
	        };
	        
	        /*=========================
	          Observer
	          ===========================*/
	        s.observers = [];
	        function initObserver(target, options) {
	            options = options || {};
	            // create an observer instance
	            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
	            var observer = new ObserverFunc(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    s.onResize(true);
	                    s.emit('onObserverUpdate', s, mutation);
	                });
	            });
	        
	            observer.observe(target, {
	                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	                childList: typeof options.childList === 'undefined' ? true : options.childList,
	                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
	            });
	        
	            s.observers.push(observer);
	        }
	        s.initObservers = function () {
	            if (s.params.observeParents) {
	                var containerParents = s.container.parents();
	                for (var i = 0; i < containerParents.length; i++) {
	                    initObserver(containerParents[i]);
	                }
	            }
	        
	            // Observe container
	            initObserver(s.container[0], {childList: false});
	        
	            // Observe wrapper
	            initObserver(s.wrapper[0], {attributes: false});
	        };
	        s.disconnectObservers = function () {
	            for (var i = 0; i < s.observers.length; i++) {
	                s.observers[i].disconnect();
	            }
	            s.observers = [];
	        };
	        /*=========================
	          Loop
	          ===========================*/
	        // Create looped slides
	        s.createLoop = function () {
	            // Remove duplicated slides
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	        
	            var slides = s.wrapper.children('.' + s.params.slideClass);
	        
	            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
	        
	            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
	            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
	            if (s.loopedSlides > slides.length) {
	                s.loopedSlides = slides.length;
	            }
	        
	            var prependSlides = [], appendSlides = [], i;
	            slides.each(function (index, el) {
	                var slide = $(this);
	                if (index < s.loopedSlides) appendSlides.push(el);
	                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
	                slide.attr('data-swiper-slide-index', index);
	            });
	            for (i = 0; i < appendSlides.length; i++) {
	                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	            for (i = prependSlides.length - 1; i >= 0; i--) {
	                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	        };
	        s.destroyLoop = function () {
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	            s.slides.removeAttr('data-swiper-slide-index');
	        };
	        s.reLoop = function (updatePosition) {
	            var oldIndex = s.activeIndex - s.loopedSlides;
	            s.destroyLoop();
	            s.createLoop();
	            s.updateSlidesSize();
	            if (updatePosition) {
	                s.slideTo(oldIndex + s.loopedSlides, 0, false);
	            }
	        
	        };
	        s.fixLoop = function () {
	            var newIndex;
	            //Fix For Negative Oversliding
	            if (s.activeIndex < s.loopedSlides) {
	                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	            //Fix For Positive Oversliding
	            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
	                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	        };
	        /*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/
	        s.appendSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.append(slides[i]);
	                }
	            }
	            else {
	                s.wrapper.append(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	        };
	        s.prependSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            var newActiveIndex = s.activeIndex + 1;
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.prepend(slides[i]);
	                }
	                newActiveIndex = s.activeIndex + slides.length;
	            }
	            else {
	                s.wrapper.prepend(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            s.slideTo(newActiveIndex, 0, false);
	        };
	        s.removeSlide = function (slidesIndexes) {
	            if (s.params.loop) {
	                s.destroyLoop();
	                s.slides = s.wrapper.children('.' + s.params.slideClass);
	            }
	            var newActiveIndex = s.activeIndex,
	                indexToRemove;
	            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
	                for (var i = 0; i < slidesIndexes.length; i++) {
	                    indexToRemove = slidesIndexes[i];
	                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                    if (indexToRemove < newActiveIndex) newActiveIndex--;
	                }
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	            else {
	                indexToRemove = slidesIndexes;
	                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                if (indexToRemove < newActiveIndex) newActiveIndex--;
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	        
	            if (s.params.loop) {
	                s.createLoop();
	            }
	        
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            if (s.params.loop) {
	                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
	            }
	            else {
	                s.slideTo(newActiveIndex, 0, false);
	            }
	        
	        };
	        s.removeAllSlides = function () {
	            var slidesIndexes = [];
	            for (var i = 0; i < s.slides.length; i++) {
	                slidesIndexes.push(i);
	            }
	            s.removeSlide(slidesIndexes);
	        };
	        

	        /*=========================
	          Effects
	          ===========================*/
	        s.effects = {
	            fade: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var offset = slide[0].swiperSlideOffset;
	                        var tx = -offset;
	                        if (!s.params.virtualTranslate) tx = tx - s.translate;
	                        var ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	                        var slideOpacity = s.params.fade.crossFade ?
	                                Math.max(1 - Math.abs(slide[0].progress), 0) :
	                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
	                        slide
	                            .css({
	                                opacity: slideOpacity
	                            })
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
	        
	                    }
	        
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            flip: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var progress = slide[0].progress;
	                        if (s.params.flip.limitRotation) {
	                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        }
	                        var offset = slide[0].swiperSlideOffset;
	                        var rotate = -180 * progress,
	                            rotateY = rotate,
	                            rotateX = 0,
	                            tx = -offset,
	                            ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                            rotateX = -rotateY;
	                            rotateY = 0;
	                        }
	                        else if (s.rtl) {
	                            rotateY = -rotateY;
	                        }
	        
	                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
	        
	                        if (s.params.flip.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	        
	                        slide
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.eq(s.activeIndex).transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            cube: {
	                setTranslate: function () {
	                    var wrapperRotate = 0, cubeShadow;
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.wrapper.append(cubeShadow);
	                            }
	                            cubeShadow.css({height: s.width + 'px'});
	                        }
	                        else {
	                            cubeShadow = s.container.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.container.append(cubeShadow);
	                            }
	                        }
	                    }
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideAngle = i * 90;
	                        var round = Math.floor(slideAngle / 360);
	                        if (s.rtl) {
	                            slideAngle = -slideAngle;
	                            round = Math.floor(-slideAngle / 360);
	                        }
	                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        var tx = 0, ty = 0, tz = 0;
	                        if (i % 4 === 0) {
	                            tx = - round * 4 * s.size;
	                            tz = 0;
	                        }
	                        else if ((i - 1) % 4 === 0) {
	                            tx = 0;
	                            tz = - round * 4 * s.size;
	                        }
	                        else if ((i - 2) % 4 === 0) {
	                            tx = s.size + round * 4 * s.size;
	                            tz = s.size;
	                        }
	                        else if ((i - 3) % 4 === 0) {
	                            tx = - s.size;
	                            tz = 3 * s.size + s.size * 4 * round;
	                        }
	                        if (s.rtl) {
	                            tx = -tx;
	                        }
	        
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	        
	                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
	                        if (progress <= 1 && progress > -1) {
	                            wrapperRotate = i * 90 + progress * 90;
	                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
	                        }
	                        slide.transform(transform);
	                        if (s.params.cube.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	                    }
	                    s.wrapper.css({
	                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
	                    });
	        
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
	                        }
	                        else {
	                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
	                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
	                            var scale1 = s.params.cube.shadowScale,
	                                scale2 = s.params.cube.shadowScale / multiplier,
	                                offset = s.params.cube.shadowOffset;
	                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
	                        }
	                    }
	                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
	                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.cube.shadow && !s.isHorizontal()) {
	                        s.container.find('.swiper-cube-shadow').transition(duration);
	                    }
	                }
	            },
	            coverflow: {
	                setTranslate: function () {
	                    var transform = s.translate;
	                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
	                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
	                    var translate = s.params.coverflow.depth;
	                    //Each slide offset from center
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideSize = s.slidesSizesGrid[i];
	                        var slideOffset = slide[0].swiperSlideOffset;
	                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
	        
	                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
	                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
	                        // var rotateZ = 0
	                        var translateZ = -translate * Math.abs(offsetMultiplier);
	        
	                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
	                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
	        
	                        //Fix for ultra small values
	                        if (Math.abs(translateX) < 0.001) translateX = 0;
	                        if (Math.abs(translateY) < 0.001) translateY = 0;
	                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
	                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
	                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
	        
	                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
	        
	                        slide.transform(slideTransform);
	                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	                        if (s.params.coverflow.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
	                        }
	                    }
	        
	                    //Set correct perspective for IE10
	                    if (s.browser.ie) {
	                        var ws = s.wrapper[0].style;
	                        ws.perspectiveOrigin = center + 'px 50%';
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                }
	            }
	        };

	        /*=========================
	          Images Lazy Loading
	          ===========================*/
	        s.lazy = {
	            initialImageLoaded: false,
	            loadImageInSlide: function (index, loadInDuplicate) {
	                if (typeof index === 'undefined') return;
	                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
	                if (s.slides.length === 0) return;
	        
	                var slide = s.slides.eq(index);
	                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
	                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
	                    img = img.add(slide[0]);
	                }
	                if (img.length === 0) return;
	        
	                img.each(function () {
	                    var _img = $(this);
	                    _img.addClass(s.params.lazyStatusLoadingClass);
	                    var background = _img.attr('data-background');
	                    var src = _img.attr('data-src'),
	                        srcset = _img.attr('data-srcset'),
	                        sizes = _img.attr('data-sizes');
	                    s.loadImage(_img[0], (src || background), srcset, sizes, false, function () {
	                        if (background) {
	                            _img.css('background-image', 'url("' + background + '")');
	                            _img.removeAttr('data-background');
	                        }
	                        else {
	                            if (srcset) {
	                                _img.attr('srcset', srcset);
	                                _img.removeAttr('data-srcset');
	                            }
	                            if (sizes) {
	                                _img.attr('sizes', sizes);
	                                _img.removeAttr('data-sizes');
	                            }
	                            if (src) {
	                                _img.attr('src', src);
	                                _img.removeAttr('data-src');
	                            }
	        
	                        }
	        
	                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
	                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
	                        if (s.params.loop && loadInDuplicate) {
	                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
	                            if (slide.hasClass(s.params.slideDuplicateClass)) {
	                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
	                                s.lazy.loadImageInSlide(originalSlide.index(), false);
	                            }
	                            else {
	                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
	                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
	                            }
	                        }
	                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
	                    });
	        
	                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
	                });
	        
	            },
	            load: function () {
	                var i;
	                var slidesPerView = s.params.slidesPerView;
	                if (slidesPerView === 'auto') {
	                    slidesPerView = 0;
	                }
	                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
	                if (s.params.watchSlidesVisibility) {
	                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
	                        s.lazy.loadImageInSlide($(this).index());
	                    });
	                }
	                else {
	                    if (slidesPerView > 1) {
	                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        s.lazy.loadImageInSlide(s.activeIndex);
	                    }
	                }
	                if (s.params.lazyLoadingInPrevNext) {
	                    if (slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
	                        var amount = s.params.lazyLoadingInPrevNextAmount;
	                        var spv = slidesPerView;
	                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
	                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
	                        // Next Slides
	                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                        // Prev Slides
	                        for (i = minIndex; i < s.activeIndex ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
	                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
	        
	                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
	                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
	                    }
	                }
	            },
	            onTransitionStart: function () {
	                if (s.params.lazyLoading) {
	                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
	                        s.lazy.load();
	                    }
	                }
	            },
	            onTransitionEnd: function () {
	                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
	                    s.lazy.load();
	                }
	            }
	        };
	        

	        /*=========================
	          Scrollbar
	          ===========================*/
	        s.scrollbar = {
	            isTouched: false,
	            setDragPosition: function (e) {
	                var sb = s.scrollbar;
	                var x = 0, y = 0;
	                var translate;
	                var pointerPosition = s.isHorizontal() ?
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
	                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
	                var positionMin = -s.minTranslate() * sb.moveDivider;
	                var positionMax = -s.maxTranslate() * sb.moveDivider;
	                if (position < positionMin) {
	                    position = positionMin;
	                }
	                else if (position > positionMax) {
	                    position = positionMax;
	                }
	                position = -position / sb.moveDivider;
	                s.updateProgress(position);
	                s.setWrapperTranslate(position, true);
	            },
	            dragStart: function (e) {
	                var sb = s.scrollbar;
	                sb.isTouched = true;
	                e.preventDefault();
	                e.stopPropagation();
	        
	                sb.setDragPosition(e);
	                clearTimeout(sb.dragTimeout);
	        
	                sb.track.transition(0);
	                if (s.params.scrollbarHide) {
	                    sb.track.css('opacity', 1);
	                }
	                s.wrapper.transition(100);
	                sb.drag.transition(100);
	                s.emit('onScrollbarDragStart', s);
	            },
	            dragMove: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                if (e.preventDefault) e.preventDefault();
	                else e.returnValue = false;
	                sb.setDragPosition(e);
	                s.wrapper.transition(0);
	                sb.track.transition(0);
	                sb.drag.transition(0);
	                s.emit('onScrollbarDragMove', s);
	            },
	            dragEnd: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                sb.isTouched = false;
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.dragTimeout);
	                    sb.dragTimeout = setTimeout(function () {
	                        sb.track.css('opacity', 0);
	                        sb.track.transition(400);
	                    }, 1000);
	        
	                }
	                s.emit('onScrollbarDragEnd', s);
	                if (s.params.scrollbarSnapOnRelease) {
	                    s.slideReset();
	                }
	            },
	            draggableEvents: (function () {
	                if ((s.params.simulateTouch === false && !s.support.touch)) return s.touchEventsDesktop;
	                else return s.touchEvents;
	            })(),
	            enableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
	                $(target).on(sb.draggableEvents.move, sb.dragMove);
	                $(target).on(sb.draggableEvents.end, sb.dragEnd);
	            },
	            disableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).off(s.draggableEvents.start, sb.dragStart);
	                $(target).off(s.draggableEvents.move, sb.dragMove);
	                $(target).off(s.draggableEvents.end, sb.dragEnd);
	            },
	            set: function () {
	                if (!s.params.scrollbar) return;
	                var sb = s.scrollbar;
	                sb.track = $(s.params.scrollbar);
	                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
	                    sb.track = s.container.find(s.params.scrollbar);
	                }
	                sb.drag = sb.track.find('.swiper-scrollbar-drag');
	                if (sb.drag.length === 0) {
	                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
	                    sb.track.append(sb.drag);
	                }
	                sb.drag[0].style.width = '';
	                sb.drag[0].style.height = '';
	                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
	        
	                sb.divider = s.size / s.virtualSize;
	                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
	                sb.dragSize = sb.trackSize * sb.divider;
	        
	                if (s.isHorizontal()) {
	                    sb.drag[0].style.width = sb.dragSize + 'px';
	                }
	                else {
	                    sb.drag[0].style.height = sb.dragSize + 'px';
	                }
	        
	                if (sb.divider >= 1) {
	                    sb.track[0].style.display = 'none';
	                }
	                else {
	                    sb.track[0].style.display = '';
	                }
	                if (s.params.scrollbarHide) {
	                    sb.track[0].style.opacity = 0;
	                }
	            },
	            setTranslate: function () {
	                if (!s.params.scrollbar) return;
	                var diff;
	                var sb = s.scrollbar;
	                var translate = s.translate || 0;
	                var newPos;
	        
	                var newSize = sb.dragSize;
	                newPos = (sb.trackSize - sb.dragSize) * s.progress;
	                if (s.rtl && s.isHorizontal()) {
	                    newPos = -newPos;
	                    if (newPos > 0) {
	                        newSize = sb.dragSize - newPos;
	                        newPos = 0;
	                    }
	                    else if (-newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize + newPos;
	                    }
	                }
	                else {
	                    if (newPos < 0) {
	                        newSize = sb.dragSize + newPos;
	                        newPos = 0;
	                    }
	                    else if (newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize - newPos;
	                    }
	                }
	                if (s.isHorizontal()) {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateX(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.width = newSize + 'px';
	                }
	                else {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateY(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.height = newSize + 'px';
	                }
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.timeout);
	                    sb.track[0].style.opacity = 1;
	                    sb.timeout = setTimeout(function () {
	                        sb.track[0].style.opacity = 0;
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	            },
	            setTransition: function (duration) {
	                if (!s.params.scrollbar) return;
	                s.scrollbar.drag.transition(duration);
	            }
	        };

	        /*=========================
	          Controller
	          ===========================*/
	        s.controller = {
	            LinearSpline: function (x, y) {
	                this.x = x;
	                this.y = y;
	                this.lastIndex = x.length - 1;
	                // Given an x value (x2), return the expected y2 value:
	                // (x1,y1) is the known point before given value,
	                // (x3,y3) is the known point after given value.
	                var i1, i3;
	                var l = this.x.length;
	        
	                this.interpolate = function (x2) {
	                    if (!x2) return 0;
	        
	                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	                    i3 = binarySearch(this.x, x2);
	                    i1 = i3 - 1;
	        
	                    // We have our indexes i1 & i3, so we can calculate already:
	                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
	                };
	        
	                var binarySearch = (function() {
	                    var maxIndex, minIndex, guess;
	                    return function(array, val) {
	                        minIndex = -1;
	                        maxIndex = array.length;
	                        while (maxIndex - minIndex > 1)
	                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
	                                minIndex = guess;
	                            } else {
	                                maxIndex = guess;
	                            }
	                        return maxIndex;
	                    };
	                })();
	            },
	            //xxx: for now i will just save one spline function to to
	            getInterpolateFunction: function(c){
	                if(!s.controller.spline) s.controller.spline = s.params.loop ?
	                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
	                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
	            },
	            setTranslate: function (translate, byController) {
	               var controlled = s.params.control;
	               var multiplier, controlledTranslate;
	               function setControlledTranslate(c) {
	                    // this will create an Interpolate function based on the snapGrids
	                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
	                    // it makes sense to create this only once and recall it for the interpolation
	                    // the function does a lot of value caching for performance
	                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
	                    if (s.params.controlBy === 'slide') {
	                        s.controller.getInterpolateFunction(c);
	                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	                        // but it did not work out
	                        controlledTranslate = -s.controller.spline.interpolate(-translate);
	                    }
	        
	                    if(!controlledTranslate || s.params.controlBy === 'container'){
	                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
	                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
	                    }
	        
	                    if (s.params.controlInverse) {
	                        controlledTranslate = c.maxTranslate() - controlledTranslate;
	                    }
	                    c.updateProgress(controlledTranslate);
	                    c.setWrapperTranslate(controlledTranslate, false, s);
	                    c.updateActiveIndex();
	               }
	               if (s.isArray(controlled)) {
	                   for (var i = 0; i < controlled.length; i++) {
	                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                           setControlledTranslate(controlled[i]);
	                       }
	                   }
	               }
	               else if (controlled instanceof Swiper && byController !== controlled) {
	        
	                   setControlledTranslate(controlled);
	               }
	            },
	            setTransition: function (duration, byController) {
	                var controlled = s.params.control;
	                var i;
	                function setControlledTransition(c) {
	                    c.setWrapperTransition(duration, s);
	                    if (duration !== 0) {
	                        c.onTransitionStart();
	                        c.wrapper.transitionEnd(function(){
	                            if (!controlled) return;
	                            if (c.params.loop && s.params.controlBy === 'slide') {
	                                c.fixLoop();
	                            }
	                            c.onTransitionEnd();
	        
	                        });
	                    }
	                }
	                if (s.isArray(controlled)) {
	                    for (i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTransition(controlled[i]);
	                        }
	                    }
	                }
	                else if (controlled instanceof Swiper && byController !== controlled) {
	                    setControlledTransition(controlled);
	                }
	            }
	        };

	        /*=========================
	          Hash Navigation
	          ===========================*/
	        s.hashnav = {
	            onHashCange: function (e, a) {
	                var newHash = document.location.hash.replace('#', '');
	                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
	                if (newHash !== activeSlideHash) {
	                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
	                }
	            },
	            attachEvents: function (detach) {
	                var action = detach ? 'off' : 'on';
	                $(window)[action]('hashchange', s.hashnav.onHashCange);
	            },
	            setHash: function () {
	                if (!s.hashnav.initialized || !s.params.hashnav) return;
	                if (s.params.replaceState && window.history && window.history.replaceState) {
	                    window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
	                } else {
	                    var slide = s.slides.eq(s.activeIndex);
	                    var hash = slide.attr('data-hash') || slide.attr('data-history');
	                    document.location.hash = hash || '';
	                }
	            },
	            init: function () {
	                if (!s.params.hashnav || s.params.history) return;
	                s.hashnav.initialized = true;
	                var hash = document.location.hash.replace('#', '');
	                if (!hash) return;
	                var speed = 0;
	                for (var i = 0, length = s.slides.length; i < length; i++) {
	                    var slide = s.slides.eq(i);
	                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');
	                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
	                        var index = slide.index();
	                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
	                    }
	                }
	                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
	            },
	            destroy: function () {
	                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
	            }
	        };

	        /*=========================
	          History Api with fallback to Hashnav
	          ===========================*/
	        s.history = {
	            init: function () {
	                if (!s.params.history) return;
	                if (!window.history || !window.history.pushState) {
	                    s.params.history = false;
	                    s.params.hashnav = true;
	                    return;
	                }
	                s.history.initialized = true;
	                this.paths = this.getPathValues();
	                if (!this.paths.key && !this.paths.value) return;
	                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
	                if (!s.params.replaceState) {
	                    window.addEventListener('popstate', this.setHistoryPopState);
	                }
	            },
	            setHistoryPopState: function() {
	                s.history.paths = s.history.getPathValues();
	                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
	            },
	            getPathValues: function() {
	                var pathArray = window.location.pathname.slice(1).split('/');
	                var total = pathArray.length;
	                var key = pathArray[total - 2];
	                var value = pathArray[total - 1];
	                return { key: key, value: value };
	            },
	            setHistory: function (key, index) {
	                if (!s.history.initialized || !s.params.history) return;
	                var slide = s.slides.eq(index);
	                var value = this.slugify(slide.attr('data-history'));
	                if (!window.location.pathname.includes(key)) {
	                    value = key + '/' + value;
	                }
	                if (s.params.replaceState) {
	                    window.history.replaceState(null, null, value);
	                } else {
	                    window.history.pushState(null, null, value);
	                }
	            },
	            slugify: function(text) {
	                return text.toString().toLowerCase()
	                    .replace(/\s+/g, '-')
	                    .replace(/[^\w\-]+/g, '')
	                    .replace(/\-\-+/g, '-')
	                    .replace(/^-+/, '')
	                    .replace(/-+$/, '');
	            },
	            scrollToSlide: function(speed, value, runCallbacks) {
	                if (value) {
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideHistory = this.slugify(slide.attr('data-history'));
	                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
	                            var index = slide.index();
	                            s.slideTo(index, speed, runCallbacks);
	                        }
	                    }
	                } else {
	                    s.slideTo(0, speed, runCallbacks);
	                }
	            }
	        };

	        /*=========================
	          Keyboard Control
	          ===========================*/
	        function handleKeyboard(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var kc = e.keyCode || e.charCode;
	            // Directions locks
	            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
	                return false;
	            }
	            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	                return;
	            }
	            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
	                return;
	            }
	            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
	                var inView = false;
	                //Check that swiper should be inside of visible area of window
	                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
	                    return;
	                }
	                var windowScroll = {
	                    left: window.pageXOffset,
	                    top: window.pageYOffset
	                };
	                var windowWidth = window.innerWidth;
	                var windowHeight = window.innerHeight;
	                var swiperOffset = s.container.offset();
	                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
	                var swiperCoord = [
	                    [swiperOffset.left, swiperOffset.top],
	                    [swiperOffset.left + s.width, swiperOffset.top],
	                    [swiperOffset.left, swiperOffset.top + s.height],
	                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
	                ];
	                for (var i = 0; i < swiperCoord.length; i++) {
	                    var point = swiperCoord[i];
	                    if (
	                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
	                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
	                    ) {
	                        inView = true;
	                    }
	        
	                }
	                if (!inView) return;
	            }
	            if (s.isHorizontal()) {
	                if (kc === 37 || kc === 39) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
	                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
	            }
	            else {
	                if (kc === 38 || kc === 40) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if (kc === 40) s.slideNext();
	                if (kc === 38) s.slidePrev();
	            }
	        }
	        s.disableKeyboardControl = function () {
	            s.params.keyboardControl = false;
	            $(document).off('keydown', handleKeyboard);
	        };
	        s.enableKeyboardControl = function () {
	            s.params.keyboardControl = true;
	            $(document).on('keydown', handleKeyboard);
	        };
	        

	        /*=========================
	          Mousewheel Control
	          ===========================*/
	        s.mousewheel = {
	            event: false,
	            lastScrollTime: (new window.Date()).getTime()
	        };
	        if (s.params.mousewheelControl) {
	            /**
	             * The best combination if you prefer spinX + spinY normalization.  It favors
	             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
	             * 'wheel' event, making spin speed determination impossible.
	             */
	            s.mousewheel.event = (navigator.userAgent.indexOf('firefox') > -1) ?
	                'DOMMouseScroll' :
	                isEventSupported() ?
	                    'wheel' : 'mousewheel';
	        }
	        
	        function isEventSupported() {
	            var eventName = 'onwheel';
	            var isSupported = eventName in document;
	        
	            if (!isSupported) {
	                var element = document.createElement('div');
	                element.setAttribute(eventName, 'return;');
	                isSupported = typeof element[eventName] === 'function';
	            }
	        
	            if (!isSupported &&
	                document.implementation &&
	                document.implementation.hasFeature &&
	                    // always returns true in newer browsers as per the standard.
	                    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	                document.implementation.hasFeature('', '') !== true ) {
	                // This is the only way to test support for the `wheel` event in IE9+.
	                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	            }
	        
	            return isSupported;
	        }
	        
	        function handleMousewheel(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var delta = 0;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            var data = normalizeWheel( e );
	        
	            if (s.params.mousewheelForceToAxis) {
	                if (s.isHorizontal()) {
	                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
	                    else return;
	                }
	                else {
	                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
	                    else return;
	                }
	            }
	            else {
	                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? - data.pixelX * rtlFactor : - data.pixelY;
	            }
	        
	            if (delta === 0) return;
	        
	            if (s.params.mousewheelInvert) delta = -delta;
	        
	            if (!s.params.freeMode) {
	                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
	                    if (delta < 0) {
	                        if ((!s.isEnd || s.params.loop) && !s.animating) {
	                            s.slideNext();
	                            s.emit('onScroll', s, e);
	                        }
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                    else {
	                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
	                            s.slidePrev();
	                            s.emit('onScroll', s, e);
	                        }
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                }
	                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
	        
	            }
	            else {
	                //Freemode or scrollContainer:
	                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
	                var wasBeginning = s.isBeginning,
	                    wasEnd = s.isEnd;
	        
	                if (position >= s.minTranslate()) position = s.minTranslate();
	                if (position <= s.maxTranslate()) position = s.maxTranslate();
	        
	                s.setWrapperTransition(0);
	                s.setWrapperTranslate(position);
	                s.updateProgress();
	                s.updateActiveIndex();
	        
	                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
	                    s.updateClasses();
	                }
	        
	                if (s.params.freeModeSticky) {
	                    clearTimeout(s.mousewheel.timeout);
	                    s.mousewheel.timeout = setTimeout(function () {
	                        s.slideReset();
	                    }, 300);
	                }
	                else {
	                    if (s.params.lazyLoading && s.lazy) {
	                        s.lazy.load();
	                    }
	                }
	                // Emit event
	                s.emit('onScroll', s, e);
	        
	                // Stop autoplay
	                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
	        
	                // Return page scroll on edge positions
	                if (position === 0 || position === s.maxTranslate()) return;
	            }
	        
	            if (e.preventDefault) e.preventDefault();
	            else e.returnValue = false;
	            return false;
	        }
	        s.disableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            var target = s.container;
	            if (s.params.mousewheelEventsTarged !== 'container') {
	                target = $(s.params.mousewheelEventsTarged);
	            }
	            target.off(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        
	        s.enableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            var target = s.container;
	            if (s.params.mousewheelEventsTarged !== 'container') {
	                target = $(s.params.mousewheelEventsTarged);
	            }
	            target.on(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        
	        /**
	         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
	         * complicated, thus this doc is long and (hopefully) detailed enough to answer
	         * your questions.
	         *
	         * If you need to react to the mouse wheel in a predictable way, this code is
	         * like your bestest friend. * hugs *
	         *
	         * As of today, there are 4 DOM event types you can listen to:
	         *
	         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
	         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
	         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
	         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
	         *
	         * So what to do?  The is the best:
	         *
	         *   normalizeWheel.getEventType();
	         *
	         * In your event callback, use this code to get sane interpretation of the
	         * deltas.  This code will return an object with properties:
	         *
	         *   spinX   -- normalized spin speed (use for zoom) - x plane
	         *   spinY   -- " - y plane
	         *   pixelX  -- normalized distance (to pixels) - x plane
	         *   pixelY  -- " - y plane
	         *
	         * Wheel values are provided by the browser assuming you are using the wheel to
	         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
	         * significantly on different platforms and browsers, forgetting that you can
	         * scroll at different speeds.  Some devices (like trackpads) emit more events
	         * at smaller increments with fine granularity, and some emit massive jumps with
	         * linear speed or acceleration.
	         *
	         * This code does its best to normalize the deltas for you:
	         *
	         *   - spin is trying to normalize how far the wheel was spun (or trackpad
	         *     dragged).  This is super useful for zoom support where you want to
	         *     throw away the chunky scroll steps on the PC and make those equal to
	         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
	         *     resolve a single slow step on a wheel to 1.
	         *
	         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
	         *     get the crazy differences between browsers, but at least it'll be in
	         *     pixels!
	         *
	         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
	         *     should translate to positive value zooming IN, negative zooming OUT.
	         *     This matches the newer 'wheel' event.
	         *
	         * Why are there spinX, spinY (or pixels)?
	         *
	         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
	         *     with a mouse.  It results in side-scrolling in the browser by default.
	         *
	         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
	         *
	         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
	         *     probably is by browsers in conjunction with fancy 3D controllers .. but
	         *     you know.
	         *
	         * Implementation info:
	         *
	         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
	         * average mouse:
	         *
	         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
	         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
	         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
	         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
	         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
	         *
	         * On the trackpad:
	         *
	         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
	         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
	         *
	         * On other/older browsers.. it's more complicated as there can be multiple and
	         * also missing delta values.
	         *
	         * The 'wheel' event is more standard:
	         *
	         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
	         *
	         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
	         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
	         * backward compatibility with older events.  Those other values help us
	         * better normalize spin speed.  Example of what the browsers provide:
	         *
	         *                          | event.wheelDelta | event.detail
	         *        ------------------+------------------+--------------
	         *          Safari v5/OS X  |       -120       |       0
	         *          Safari v5/Win7  |       -120       |       0
	         *         Chrome v17/OS X  |       -120       |       0
	         *         Chrome v17/Win7  |       -120       |       0
	         *                IE9/Win7  |       -120       |   undefined
	         *         Firefox v4/OS X  |     undefined    |       1
	         *         Firefox v4/Win7  |     undefined    |       3
	         *
	         */
	        function normalizeWheel( /*object*/ event ) /*object*/ {
	            // Reasonable defaults
	            var PIXEL_STEP = 10;
	            var LINE_HEIGHT = 40;
	            var PAGE_HEIGHT = 800;
	        
	            var sX = 0, sY = 0,       // spinX, spinY
	                pX = 0, pY = 0;       // pixelX, pixelY
	        
	            // Legacy
	            if( 'detail' in event ) {
	                sY = event.detail;
	            }
	            if( 'wheelDelta' in event ) {
	                sY = -event.wheelDelta / 120;
	            }
	            if( 'wheelDeltaY' in event ) {
	                sY = -event.wheelDeltaY / 120;
	            }
	            if( 'wheelDeltaX' in event ) {
	                sX = -event.wheelDeltaX / 120;
	            }
	        
	            // side scrolling on FF with DOMMouseScroll
	            if( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
	                sX = sY;
	                sY = 0;
	            }
	        
	            pX = sX * PIXEL_STEP;
	            pY = sY * PIXEL_STEP;
	        
	            if( 'deltaY' in event ) {
	                pY = event.deltaY;
	            }
	            if( 'deltaX' in event ) {
	                pX = event.deltaX;
	            }
	        
	            if( (pX || pY) && event.deltaMode ) {
	                if( event.deltaMode === 1 ) {          // delta in LINE units
	                    pX *= LINE_HEIGHT;
	                    pY *= LINE_HEIGHT;
	                } else {                             // delta in PAGE units
	                    pX *= PAGE_HEIGHT;
	                    pY *= PAGE_HEIGHT;
	                }
	            }
	        
	            // Fall-back if spin cannot be determined
	            if( pX && !sX ) {
	                sX = (pX < 1) ? -1 : 1;
	            }
	            if( pY && !sY ) {
	                sY = (pY < 1) ? -1 : 1;
	            }
	        
	            return {
	                spinX: sX,
	                spinY: sY,
	                pixelX: pX,
	                pixelY: pY
	            };
	        }

	        /*=========================
	          Parallax
	          ===========================*/
	        function setParallaxTransform(el, progress) {
	            el = $(el);
	            var p, pX, pY;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            p = el.attr('data-swiper-parallax') || '0';
	            pX = el.attr('data-swiper-parallax-x');
	            pY = el.attr('data-swiper-parallax-y');
	            if (pX || pY) {
	                pX = pX || '0';
	                pY = pY || '0';
	            }
	            else {
	                if (s.isHorizontal()) {
	                    pX = p;
	                    pY = '0';
	                }
	                else {
	                    pY = p;
	                    pX = '0';
	                }
	            }
	        
	            if ((pX).indexOf('%') >= 0) {
	                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
	            }
	            else {
	                pX = pX * progress * rtlFactor + 'px' ;
	            }
	            if ((pY).indexOf('%') >= 0) {
	                pY = parseInt(pY, 10) * progress + '%';
	            }
	            else {
	                pY = pY * progress + 'px' ;
	            }
	        
	            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
	        }
	        s.parallax = {
	            setTranslate: function () {
	                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    setParallaxTransform(this, s.progress);
	        
	                });
	                s.slides.each(function () {
	                    var slide = $(this);
	                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
	                        setParallaxTransform(this, progress);
	                    });
	                });
	            },
	            setTransition: function (duration) {
	                if (typeof duration === 'undefined') duration = s.params.speed;
	                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    var el = $(this);
	                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
	                    if (duration === 0) parallaxDuration = 0;
	                    el.transition(parallaxDuration);
	                });
	            }
	        };
	        

	        /*=========================
	          Zoom
	          ===========================*/
	        s.zoom = {
	            // "Global" Props
	            scale: 1,
	            currentScale: 1,
	            isScaling: false,
	            gesture: {
	                slide: undefined,
	                slideWidth: undefined,
	                slideHeight: undefined,
	                image: undefined,
	                imageWrap: undefined,
	                zoomMax: s.params.zoomMax
	            },
	            image: {
	                isTouched: undefined,
	                isMoved: undefined,
	                currentX: undefined,
	                currentY: undefined,
	                minX: undefined,
	                minY: undefined,
	                maxX: undefined,
	                maxY: undefined,
	                width: undefined,
	                height: undefined,
	                startX: undefined,
	                startY: undefined,
	                touchesStart: {},
	                touchesCurrent: {}
	            },
	            velocity: {
	                x: undefined,
	                y: undefined,
	                prevPositionX: undefined,
	                prevPositionY: undefined,
	                prevTime: undefined
	            },
	            // Calc Scale From Multi-touches
	            getDistanceBetweenTouches: function (e) {
	                if (e.targetTouches.length < 2) return 1;
	                var x1 = e.targetTouches[0].pageX,
	                    y1 = e.targetTouches[0].pageY,
	                    x2 = e.targetTouches[1].pageX,
	                    y2 = e.targetTouches[1].pageY;
	                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	                return distance;
	            },
	            // Events
	            onGestureStart: function (e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
	                        return;
	                    }
	                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
	                }
	                if (!z.gesture.slide || !z.gesture.slide.length) {
	                    z.gesture.slide = $(this);
	                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
	                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
	                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
	                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax ;
	                    if (z.gesture.imageWrap.length === 0) {
	                        z.gesture.image = undefined;
	                        return;
	                    }
	                }
	                z.gesture.image.transition(0);
	                z.isScaling = true;
	            },
	            onGestureChange: function (e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
	                        return;
	                    }
	                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (s.support.gestures) {
	                    z.scale = e.scale * z.currentScale;
	                }
	                else {
	                    z.scale = (z.gesture.scaleMove / z.gesture.scaleStart) * z.currentScale;
	                }
	                if (z.scale > z.gesture.zoomMax) {
	                    z.scale = z.gesture.zoomMax - 1 + Math.pow((z.scale - z.gesture.zoomMax + 1), 0.5);
	                }
	                if (z.scale < s.params.zoomMin) {
	                    z.scale =  s.params.zoomMin + 1 - Math.pow((s.params.zoomMin - z.scale + 1), 0.5);
	                }
	                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
	            },
	            onGestureEnd: function (e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
	                        return;
	                    }
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
	                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
	                z.currentScale = z.scale;
	                z.isScaling = false;
	                if (z.scale === 1) z.gesture.slide = undefined;
	            },
	            onTouchStart: function (s, e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (z.image.isTouched) return;
	                if (s.device.os === 'android') e.preventDefault();
	                z.image.isTouched = true;
	                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	            },
	            onTouchMove: function (e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                s.allowClick = false;
	                if (!z.image.isTouched || !z.gesture.slide) return;
	        
	                if (!z.image.isMoved) {
	                    z.image.width = z.gesture.image[0].offsetWidth;
	                    z.image.height = z.gesture.image[0].offsetHeight;
	                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
	                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
	                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
	                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
	                    z.gesture.imageWrap.transition(0);
	                }
	                // Define if we need image drag
	                var scaledWidth = z.image.width * z.scale;
	                var scaledHeight = z.image.height * z.scale;
	        
	                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
	        
	                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
	                z.image.maxX = -z.image.minX;
	                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
	                z.image.maxY = -z.image.minY;
	        
	                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	        
	                if (!z.image.isMoved && !z.isScaling) {
	                    if (s.isHorizontal() &&
	                        (Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x) ||
	                        (Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x)
	                        ) {
	                        z.image.isTouched = false;
	                        return;
	                    }
	                    else if (!s.isHorizontal() &&
	                        (Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y) ||
	                        (Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y)
	                        ) {
	                        z.image.isTouched = false;
	                        return;
	                    }
	                }
	                e.preventDefault();
	                e.stopPropagation();
	        
	                z.image.isMoved = true;
	                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
	                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
	        
	                if (z.image.currentX < z.image.minX) {
	                    z.image.currentX =  z.image.minX + 1 - Math.pow((z.image.minX - z.image.currentX + 1), 0.8);
	                }
	                if (z.image.currentX > z.image.maxX) {
	                    z.image.currentX = z.image.maxX - 1 + Math.pow((z.image.currentX - z.image.maxX + 1), 0.8);
	                }
	        
	                if (z.image.currentY < z.image.minY) {
	                    z.image.currentY =  z.image.minY + 1 - Math.pow((z.image.minY - z.image.currentY + 1), 0.8);
	                }
	                if (z.image.currentY > z.image.maxY) {
	                    z.image.currentY = z.image.maxY - 1 + Math.pow((z.image.currentY - z.image.maxY + 1), 0.8);
	                }
	        
	                //Velocity
	                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
	                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
	                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
	                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
	                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
	                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
	                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
	                z.velocity.prevPositionX = z.image.touchesCurrent.x;
	                z.velocity.prevPositionY = z.image.touchesCurrent.y;
	                z.velocity.prevTime = Date.now();
	        
	                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
	            },
	            onTouchEnd: function (s, e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (!z.image.isTouched || !z.image.isMoved) {
	                    z.image.isTouched = false;
	                    z.image.isMoved = false;
	                    return;
	                }
	                z.image.isTouched = false;
	                z.image.isMoved = false;
	                var momentumDurationX = 300;
	                var momentumDurationY = 300;
	                var momentumDistanceX = z.velocity.x * momentumDurationX;
	                var newPositionX = z.image.currentX + momentumDistanceX;
	                var momentumDistanceY = z.velocity.y * momentumDurationY;
	                var newPositionY = z.image.currentY + momentumDistanceY;
	        
	                //Fix duration
	                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
	                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
	                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
	        
	                z.image.currentX = newPositionX;
	                z.image.currentY = newPositionY;
	        
	                // Define if we need image drag
	                var scaledWidth = z.image.width * z.scale;
	                var scaledHeight = z.image.height * z.scale;
	                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
	                z.image.maxX = -z.image.minX;
	                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
	                z.image.maxY = -z.image.minY;
	                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
	                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
	        
	                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
	            },
	            onTransitionEnd: function (s) {
	                var z = s.zoom;
	                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
	                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
	                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
	                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
	                    z.scale = z.currentScale = 1;
	                }
	            },
	            // Toggle Zoom
	            toggleZoom: function (s, e) {
	                var z = s.zoom;
	                if (!z.gesture.slide) {
	                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
	                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
	                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	        
	                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
	        
	                if (typeof z.image.touchesStart.x === 'undefined' && e) {
	                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
	                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
	                }
	                else {
	                    touchX = z.image.touchesStart.x;
	                    touchY = z.image.touchesStart.y;
	                }
	        
	                if (z.scale && z.scale !== 1) {
	                    // Zoom Out
	                    z.scale = z.currentScale = 1;
	                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
	                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
	                    z.gesture.slide = undefined;
	                }
	                else {
	                    // Zoom In
	                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
	                    if (e) {
	                        slideWidth = z.gesture.slide[0].offsetWidth;
	                        slideHeight = z.gesture.slide[0].offsetHeight;
	                        offsetX = z.gesture.slide.offset().left;
	                        offsetY = z.gesture.slide.offset().top;
	                        diffX = offsetX + slideWidth/2 - touchX;
	                        diffY = offsetY + slideHeight/2 - touchY;
	        
	                        imageWidth = z.gesture.image[0].offsetWidth;
	                        imageHeight = z.gesture.image[0].offsetHeight;
	                        scaledWidth = imageWidth * z.scale;
	                        scaledHeight = imageHeight * z.scale;
	        
	                        translateMinX = Math.min((slideWidth / 2 - scaledWidth / 2), 0);
	                        translateMinY = Math.min((slideHeight / 2 - scaledHeight / 2), 0);
	                        translateMaxX = -translateMinX;
	                        translateMaxY = -translateMinY;
	        
	                        translateX = diffX * z.scale;
	                        translateY = diffY * z.scale;
	        
	                        if (translateX < translateMinX) {
	                            translateX =  translateMinX;
	                        }
	                        if (translateX > translateMaxX) {
	                            translateX = translateMaxX;
	                        }
	        
	                        if (translateY < translateMinY) {
	                            translateY =  translateMinY;
	                        }
	                        if (translateY > translateMaxY) {
	                            translateY = translateMaxY;
	                        }
	                    }
	                    else {
	                        translateX = 0;
	                        translateY = 0;
	                    }
	                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
	                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
	                }
	            },
	            // Attach/Detach Events
	            attachEvents: function (detach) {
	                var action = detach ? 'off' : 'on';
	        
	                if (s.params.zoom) {
	                    var target = s.slides;
	                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
	                    // Scale image
	                    if (s.support.gestures) {
	                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
	                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
	                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
	                    }
	                    else if (s.touchEvents.start === 'touchstart') {
	                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
	                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
	                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
	                    }
	        
	                    // Move image
	                    s[action]('touchStart', s.zoom.onTouchStart);
	                    s.slides.each(function (index, slide){
	                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
	                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
	                        }
	                    });
	                    s[action]('touchEnd', s.zoom.onTouchEnd);
	        
	                    // Scale Out
	                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
	                    if (s.params.zoomToggle) {
	                        s.on('doubleTap', s.zoom.toggleZoom);
	                    }
	                }
	            },
	            init: function () {
	                s.zoom.attachEvents();
	            },
	            destroy: function () {
	                s.zoom.attachEvents(true);
	            }
	        };

	        /*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/
	        s._plugins = [];
	        for (var plugin in s.plugins) {
	            var p = s.plugins[plugin](s, s.params[plugin]);
	            if (p) s._plugins.push(p);
	        }
	        // Method to call all plugins event/method
	        s.callPlugins = function (eventName) {
	            for (var i = 0; i < s._plugins.length; i++) {
	                if (eventName in s._plugins[i]) {
	                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	        };

	        /*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/
	        function normalizeEventName (eventName) {
	            if (eventName.indexOf('on') !== 0) {
	                if (eventName[0] !== eventName[0].toUpperCase()) {
	                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
	                }
	                else {
	                    eventName = 'on' + eventName;
	                }
	            }
	            return eventName;
	        }
	        s.emitterEventListeners = {
	        
	        };
	        s.emit = function (eventName) {
	            // Trigger callbacks
	            if (s.params[eventName]) {
	                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	            }
	            var i;
	            // Trigger events
	            if (s.emitterEventListeners[eventName]) {
	                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	            // Trigger plugins
	            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        };
	        s.on = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
	            s.emitterEventListeners[eventName].push(handler);
	            return s;
	        };
	        s.off = function (eventName, handler) {
	            var i;
	            eventName = normalizeEventName(eventName);
	            if (typeof handler === 'undefined') {
	                // Remove all handlers for such event
	                s.emitterEventListeners[eventName] = [];
	                return s;
	            }
	            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
	            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
	            }
	            return s;
	        };
	        s.once = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            var _handler = function () {
	                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
	                s.off(eventName, _handler);
	            };
	            s.on(eventName, _handler);
	            return s;
	        };

	        // Accessibility tools
	        s.a11y = {
	            makeFocusable: function ($el) {
	                $el.attr('tabIndex', '0');
	                return $el;
	            },
	            addRole: function ($el, role) {
	                $el.attr('role', role);
	                return $el;
	            },
	        
	            addLabel: function ($el, label) {
	                $el.attr('aria-label', label);
	                return $el;
	            },
	        
	            disable: function ($el) {
	                $el.attr('aria-disabled', true);
	                return $el;
	            },
	        
	            enable: function ($el) {
	                $el.attr('aria-disabled', false);
	                return $el;
	            },
	        
	            onEnterKey: function (event) {
	                if (event.keyCode !== 13) return;
	                if ($(event.target).is(s.params.nextButton)) {
	                    s.onClickNext(event);
	                    if (s.isEnd) {
	                        s.a11y.notify(s.params.lastSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.nextSlideMessage);
	                    }
	                }
	                else if ($(event.target).is(s.params.prevButton)) {
	                    s.onClickPrev(event);
	                    if (s.isBeginning) {
	                        s.a11y.notify(s.params.firstSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.prevSlideMessage);
	                    }
	                }
	                if ($(event.target).is('.' + s.params.bulletClass)) {
	                    $(event.target)[0].click();
	                }
	            },
	        
	            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
	        
	            notify: function (message) {
	                var notification = s.a11y.liveRegion;
	                if (notification.length === 0) return;
	                notification.html('');
	                notification.html(message);
	            },
	            init: function () {
	                // Setup accessibility
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    s.a11y.makeFocusable(s.nextButton);
	                    s.a11y.addRole(s.nextButton, 'button');
	                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
	                }
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    s.a11y.makeFocusable(s.prevButton);
	                    s.a11y.addRole(s.prevButton, 'button');
	                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
	                }
	        
	                $(s.container).append(s.a11y.liveRegion);
	            },
	            initPagination: function () {
	                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
	                    s.bullets.each(function () {
	                        var bullet = $(this);
	                        s.a11y.makeFocusable(bullet);
	                        s.a11y.addRole(bullet, 'button');
	                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
	                    });
	                }
	            },
	            destroy: function () {
	                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
	            }
	        };
	        

	        /*=========================
	          Init/Destroy
	          ===========================*/
	        s.init = function () {
	            if (s.params.loop) s.createLoop();
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.enableDraggable();
	                }
	            }
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                if (!s.params.loop) s.updateProgress();
	                s.effects[s.params.effect].setTranslate();
	            }
	            if (s.params.loop) {
	                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
	            }
	            else {
	                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
	                if (s.params.initialSlide === 0) {
	                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
	                    if (s.lazy && s.params.lazyLoading) {
	                        s.lazy.load();
	                        s.lazy.initialImageLoaded = true;
	                    }
	                }
	            }
	            s.attachEvents();
	            if (s.params.observer && s.support.observer) {
	                s.initObservers();
	            }
	            if (s.params.preloadImages && !s.params.lazyLoading) {
	                s.preloadImages();
	            }
	            if (s.params.zoom && s.zoom) {
	                s.zoom.init();
	            }
	            if (s.params.autoplay) {
	                s.startAutoplay();
	            }
	            if (s.params.keyboardControl) {
	                if (s.enableKeyboardControl) s.enableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.enableMousewheelControl) s.enableMousewheelControl();
	            }
	            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
	            if (s.params.hashnavReplaceState) {
	                s.params.replaceState = s.params.hashnavReplaceState;
	            }
	            if (s.params.history) {
	                if (s.history) s.history.init();
	            }
	            if (s.params.hashnav) {
	                if (s.hashnav) s.hashnav.init();
	            }
	            if (s.params.a11y && s.a11y) s.a11y.init();
	            s.emit('onInit', s);
	        };
	        
	        // Cleanup dynamic styles
	        s.cleanupStyles = function () {
	            // Container
	            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
	        
	            // Wrapper
	            s.wrapper.removeAttr('style');
	        
	            // Slides
	            if (s.slides && s.slides.length) {
	                s.slides
	                    .removeClass([
	                      s.params.slideVisibleClass,
	                      s.params.slideActiveClass,
	                      s.params.slideNextClass,
	                      s.params.slidePrevClass
	                    ].join(' '))
	                    .removeAttr('style')
	                    .removeAttr('data-swiper-column')
	                    .removeAttr('data-swiper-row');
	            }
	        
	            // Pagination/Bullets
	            if (s.paginationContainer && s.paginationContainer.length) {
	                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
	            }
	            if (s.bullets && s.bullets.length) {
	                s.bullets.removeClass(s.params.bulletActiveClass);
	            }
	        
	            // Buttons
	            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
	            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
	        
	            // Scrollbar
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
	                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
	            }
	        };
	        
	        // Destroy
	        s.destroy = function (deleteInstance, cleanupStyles) {
	            // Detach evebts
	            s.detachEvents();
	            // Stop autoplay
	            s.stopAutoplay();
	            // Disable draggable
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.disableDraggable();
	                }
	            }
	            // Destroy loop
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            // Cleanup styles
	            if (cleanupStyles) {
	                s.cleanupStyles();
	            }
	            // Disconnect observer
	            s.disconnectObservers();
	        
	            // Destroy zoom
	            if (s.params.zoom && s.zoom) {
	                s.zoom.destroy();
	            }
	            // Disable keyboard/mousewheel
	            if (s.params.keyboardControl) {
	                if (s.disableKeyboardControl) s.disableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.disableMousewheelControl) s.disableMousewheelControl();
	            }
	            // Disable a11y
	            if (s.params.a11y && s.a11y) s.a11y.destroy();
	            // Delete history popstate
	            if (s.params.history && !s.params.replaceState) {
	                window.removeEventListener('popstate', s.history.setHistoryPopState);
	            }
	            if (s.params.hashnav && s.hashnav)  {
	                s.hashnav.destroy();
	            }
	            // Destroy callback
	            s.emit('onDestroy');
	            // Delete instance
	            if (deleteInstance !== false) s = null;
	        };
	        
	        s.init();
	        

	    
	        // Return swiper instance
	        return s;
	    };
	    

	    /*==================================================
	        Prototype
	    ====================================================*/
	    Swiper.prototype = {
	        isSafari: (function () {
	            var ua = navigator.userAgent.toLowerCase();
	            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
	        })(),
	        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
	        isArray: function (arr) {
	            return Object.prototype.toString.apply(arr) === '[object Array]';
	        },
	        /*==================================================
	        Browser
	        ====================================================*/
	        browser: {
	            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
	            lteIE9: (function() {
	                // create temporary DIV
	                var div = document.createElement('div');
	                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
	                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
	                // return true / false value based on what will browser render
	                return div.getElementsByTagName('i').length === 1;
	            })()
	        },
	        /*==================================================
	        Devices
	        ====================================================*/
	        device: (function () {
	            var ua = navigator.userAgent;
	            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
	            return {
	                ios: ipad || iphone || ipod,
	                android: android
	            };
	        })(),
	        /*==================================================
	        Feature Detection
	        ====================================================*/
	        support: {
	            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
	                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
	            })(),
	    
	            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
	                var div = document.createElement('div').style;
	                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
	            })(),
	    
	            flexbox: (function () {
	                var div = document.createElement('div').style;
	                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
	                for (var i = 0; i < styles.length; i++) {
	                    if (styles[i] in div) return true;
	                }
	            })(),
	    
	            observer: (function () {
	                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
	            })(),
	    
	            passiveListener: (function () {
	                var supportsPassive = false;
	                try {
	                    var opts = Object.defineProperty({}, 'passive', {
	                        get: function() {
	                            supportsPassive = true;
	                        }
	                    });
	                    window.addEventListener('testPassiveListener', null, opts);
	                } catch (e) {}
	                return supportsPassive;
	            })(),
	    
	            gestures: (function () {
	                return 'ongesturestart' in window;
	            })()
	        },
	        /*==================================================
	        Plugins
	        ====================================================*/
	        plugins: {}
	    };
	    

	    /*===========================
	    Dom7 Library
	    ===========================*/
	    var Dom7 = (function () {
	        var Dom7 = function (arr) {
	            var _this = this, i = 0;
	            // Create array-like object
	            for (i = 0; i < arr.length; i++) {
	                _this[i] = arr[i];
	            }
	            _this.length = arr.length;
	            // Return collection with methods
	            return this;
	        };
	        var $ = function (selector, context) {
	            var arr = [], i = 0;
	            if (selector && !context) {
	                if (selector instanceof Dom7) {
	                    return selector;
	                }
	            }
	            if (selector) {
	                // String
	                if (typeof selector === 'string') {
	                    var els, tempParent, html = selector.trim();
	                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
	                        var toCreate = 'div';
	                        if (html.indexOf('<li') === 0) toCreate = 'ul';
	                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
	                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
	                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
	                        if (html.indexOf('<option') === 0) toCreate = 'select';
	                        tempParent = document.createElement(toCreate);
	                        tempParent.innerHTML = selector;
	                        for (i = 0; i < tempParent.childNodes.length; i++) {
	                            arr.push(tempParent.childNodes[i]);
	                        }
	                    }
	                    else {
	                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
	                            // Pure ID selector
	                            els = [document.getElementById(selector.split('#')[1])];
	                        }
	                        else {
	                            // Other selectors
	                            els = (context || document).querySelectorAll(selector);
	                        }
	                        for (i = 0; i < els.length; i++) {
	                            if (els[i]) arr.push(els[i]);
	                        }
	                    }
	                }
	                // Node/element
	                else if (selector.nodeType || selector === window || selector === document) {
	                    arr.push(selector);
	                }
	                //Array of elements or instance of Dom
	                else if (selector.length > 0 && selector[0].nodeType) {
	                    for (i = 0; i < selector.length; i++) {
	                        arr.push(selector[i]);
	                    }
	                }
	            }
	            return new Dom7(arr);
	        };
	        Dom7.prototype = {
	            // Classes and attriutes
	            addClass: function (className) {
	                if (typeof className === 'undefined') {
	                    return this;
	                }
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.add(classes[i]);
	                    }
	                }
	                return this;
	            },
	            removeClass: function (className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.remove(classes[i]);
	                    }
	                }
	                return this;
	            },
	            hasClass: function (className) {
	                if (!this[0]) return false;
	                else return this[0].classList.contains(className);
	            },
	            toggleClass: function (className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.toggle(classes[i]);
	                    }
	                }
	                return this;
	            },
	            attr: function (attrs, value) {
	                if (arguments.length === 1 && typeof attrs === 'string') {
	                    // Get attr
	                    if (this[0]) return this[0].getAttribute(attrs);
	                    else return undefined;
	                }
	                else {
	                    // Set attrs
	                    for (var i = 0; i < this.length; i++) {
	                        if (arguments.length === 2) {
	                            // String
	                            this[i].setAttribute(attrs, value);
	                        }
	                        else {
	                            // Object
	                            for (var attrName in attrs) {
	                                this[i][attrName] = attrs[attrName];
	                                this[i].setAttribute(attrName, attrs[attrName]);
	                            }
	                        }
	                    }
	                    return this;
	                }
	            },
	            removeAttr: function (attr) {
	                for (var i = 0; i < this.length; i++) {
	                    this[i].removeAttribute(attr);
	                }
	                return this;
	            },
	            data: function (key, value) {
	                if (typeof value === 'undefined') {
	                    // Get value
	                    if (this[0]) {
	                        var dataKey = this[0].getAttribute('data-' + key);
	                        if (dataKey) return dataKey;
	                        else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
	                        else return undefined;
	                    }
	                    else return undefined;
	                }
	                else {
	                    // Set value
	                    for (var i = 0; i < this.length; i++) {
	                        var el = this[i];
	                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
	                        el.dom7ElementDataStorage[key] = value;
	                    }
	                    return this;
	                }
	            },
	            // Transforms
	            transform : function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            },
	            transition: function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            },
	            //Events
	            on: function (eventName, targetSelector, listener, capture) {
	                function handleLiveEvent(e) {
	                    var target = e.target;
	                    if ($(target).is(targetSelector)) listener.call(target, e);
	                    else {
	                        var parents = $(target).parents();
	                        for (var k = 0; k < parents.length; k++) {
	                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
	                        }
	                    }
	                }
	                var events = eventName.split(' ');
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof targetSelector === 'function' || targetSelector === false) {
	                        // Usual events
	                        if (typeof targetSelector === 'function') {
	                            listener = arguments[1];
	                            capture = arguments[2] || false;
	                        }
	                        for (j = 0; j < events.length; j++) {
	                            this[i].addEventListener(events[j], listener, capture);
	                        }
	                    }
	                    else {
	                        //Live events
	                        for (j = 0; j < events.length; j++) {
	                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
	                            this[i].dom7LiveListeners.push({listener: listener, liveListener: handleLiveEvent});
	                            this[i].addEventListener(events[j], handleLiveEvent, capture);
	                        }
	                    }
	                }
	    
	                return this;
	            },
	            off: function (eventName, targetSelector, listener, capture) {
	                var events = eventName.split(' ');
	                for (var i = 0; i < events.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        if (typeof targetSelector === 'function' || targetSelector === false) {
	                            // Usual events
	                            if (typeof targetSelector === 'function') {
	                                listener = arguments[1];
	                                capture = arguments[2] || false;
	                            }
	                            this[j].removeEventListener(events[i], listener, capture);
	                        }
	                        else {
	                            // Live event
	                            if (this[j].dom7LiveListeners) {
	                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
	                                    if (this[j].dom7LiveListeners[k].listener === listener) {
	                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                return this;
	            },
	            once: function (eventName, targetSelector, listener, capture) {
	                var dom = this;
	                if (typeof targetSelector === 'function') {
	                    targetSelector = false;
	                    listener = arguments[1];
	                    capture = arguments[2];
	                }
	                function proxy(e) {
	                    listener(e);
	                    dom.off(eventName, targetSelector, proxy, capture);
	                }
	                dom.on(eventName, targetSelector, proxy, capture);
	            },
	            trigger: function (eventName, eventData) {
	                for (var i = 0; i < this.length; i++) {
	                    var evt;
	                    try {
	                        evt = new window.CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
	                    }
	                    catch (e) {
	                        evt = document.createEvent('Event');
	                        evt.initEvent(eventName, true, true);
	                        evt.detail = eventData;
	                    }
	                    this[i].dispatchEvent(evt);
	                }
	                return this;
	            },
	            transitionEnd: function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i, j, dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            },
	            // Sizing/Styles
	            width: function () {
	                if (this[0] === window) {
	                    return window.innerWidth;
	                }
	                else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('width'));
	                    }
	                    else {
	                        return null;
	                    }
	                }
	            },
	            outerWidth: function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins)
	                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
	                    else
	                        return this[0].offsetWidth;
	                }
	                else return null;
	            },
	            height: function () {
	                if (this[0] === window) {
	                    return window.innerHeight;
	                }
	                else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('height'));
	                    }
	                    else {
	                        return null;
	                    }
	                }
	            },
	            outerHeight: function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins)
	                        return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
	                    else
	                        return this[0].offsetHeight;
	                }
	                else return null;
	            },
	            offset: function () {
	                if (this.length > 0) {
	                    var el = this[0];
	                    var box = el.getBoundingClientRect();
	                    var body = document.body;
	                    var clientTop  = el.clientTop  || body.clientTop  || 0;
	                    var clientLeft = el.clientLeft || body.clientLeft || 0;
	                    var scrollTop  = window.pageYOffset || el.scrollTop;
	                    var scrollLeft = window.pageXOffset || el.scrollLeft;
	                    return {
	                        top: box.top  + scrollTop  - clientTop,
	                        left: box.left + scrollLeft - clientLeft
	                    };
	                }
	                else {
	                    return null;
	                }
	            },
	            css: function (props, value) {
	                var i;
	                if (arguments.length === 1) {
	                    if (typeof props === 'string') {
	                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
	                    }
	                    else {
	                        for (i = 0; i < this.length; i++) {
	                            for (var prop in props) {
	                                this[i].style[prop] = props[prop];
	                            }
	                        }
	                        return this;
	                    }
	                }
	                if (arguments.length === 2 && typeof props === 'string') {
	                    for (i = 0; i < this.length; i++) {
	                        this[i].style[props] = value;
	                    }
	                    return this;
	                }
	                return this;
	            },
	    
	            //Dom manipulation
	            each: function (callback) {
	                for (var i = 0; i < this.length; i++) {
	                    callback.call(this[i], i, this[i]);
	                }
	                return this;
	            },
	            html: function (html) {
	                if (typeof html === 'undefined') {
	                    return this[0] ? this[0].innerHTML : undefined;
	                }
	                else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].innerHTML = html;
	                    }
	                    return this;
	                }
	            },
	            text: function (text) {
	                if (typeof text === 'undefined') {
	                    if (this[0]) {
	                        return this[0].textContent.trim();
	                    }
	                    else return null;
	                }
	                else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].textContent = text;
	                    }
	                    return this;
	                }
	            },
	            is: function (selector) {
	                if (!this[0]) return false;
	                var compareWith, i;
	                if (typeof selector === 'string') {
	                    var el = this[0];
	                    if (el === document) return selector === document;
	                    if (el === window) return selector === window;
	    
	                    if (el.matches) return el.matches(selector);
	                    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
	                    else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
	                    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
	                    else {
	                        compareWith = $(selector);
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                }
	                else if (selector === document) return this[0] === document;
	                else if (selector === window) return this[0] === window;
	                else {
	                    if (selector.nodeType || selector instanceof Dom7) {
	                        compareWith = selector.nodeType ? [selector] : selector;
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                    return false;
	                }
	    
	            },
	            index: function () {
	                if (this[0]) {
	                    var child = this[0];
	                    var i = 0;
	                    while ((child = child.previousSibling) !== null) {
	                        if (child.nodeType === 1) i++;
	                    }
	                    return i;
	                }
	                else return undefined;
	            },
	            eq: function (index) {
	                if (typeof index === 'undefined') return this;
	                var length = this.length;
	                var returnIndex;
	                if (index > length - 1) {
	                    return new Dom7([]);
	                }
	                if (index < 0) {
	                    returnIndex = length + index;
	                    if (returnIndex < 0) return new Dom7([]);
	                    else return new Dom7([this[returnIndex]]);
	                }
	                return new Dom7([this[index]]);
	            },
	            append: function (newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        while (tempDiv.firstChild) {
	                            this[i].appendChild(tempDiv.firstChild);
	                        }
	                    }
	                    else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].appendChild(newChild[j]);
	                        }
	                    }
	                    else {
	                        this[i].appendChild(newChild);
	                    }
	                }
	                return this;
	            },
	            prepend: function (newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
	                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
	                        }
	                        // this[i].insertAdjacentHTML('afterbegin', newChild);
	                    }
	                    else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
	                        }
	                    }
	                    else {
	                        this[i].insertBefore(newChild, this[i].childNodes[0]);
	                    }
	                }
	                return this;
	            },
	            insertBefore: function (selector) {
	                var before = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (before.length === 1) {
	                        before[0].parentNode.insertBefore(this[i], before[0]);
	                    }
	                    else if (before.length > 1) {
	                        for (var j = 0; j < before.length; j++) {
	                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
	                        }
	                    }
	                }
	            },
	            insertAfter: function (selector) {
	                var after = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (after.length === 1) {
	                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
	                    }
	                    else if (after.length > 1) {
	                        for (var j = 0; j < after.length; j++) {
	                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
	                        }
	                    }
	                }
	            },
	            next: function (selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
	                        else return new Dom7([]);
	                    }
	                    else {
	                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
	                        else return new Dom7([]);
	                    }
	                }
	                else return new Dom7([]);
	            },
	            nextAll: function (selector) {
	                var nextEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.nextElementSibling) {
	                    var next = el.nextElementSibling;
	                    if (selector) {
	                        if($(next).is(selector)) nextEls.push(next);
	                    }
	                    else nextEls.push(next);
	                    el = next;
	                }
	                return new Dom7(nextEls);
	            },
	            prev: function (selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
	                        else return new Dom7([]);
	                    }
	                    else {
	                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
	                        else return new Dom7([]);
	                    }
	                }
	                else return new Dom7([]);
	            },
	            prevAll: function (selector) {
	                var prevEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.previousElementSibling) {
	                    var prev = el.previousElementSibling;
	                    if (selector) {
	                        if($(prev).is(selector)) prevEls.push(prev);
	                    }
	                    else prevEls.push(prev);
	                    el = prev;
	                }
	                return new Dom7(prevEls);
	            },
	            parent: function (selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    if (selector) {
	                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
	                    }
	                    else {
	                        parents.push(this[i].parentNode);
	                    }
	                }
	                return $($.unique(parents));
	            },
	            parents: function (selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    var parent = this[i].parentNode;
	                    while (parent) {
	                        if (selector) {
	                            if ($(parent).is(selector)) parents.push(parent);
	                        }
	                        else {
	                            parents.push(parent);
	                        }
	                        parent = parent.parentNode;
	                    }
	                }
	                return $($.unique(parents));
	            },
	            find : function (selector) {
	                var foundElements = [];
	                for (var i = 0; i < this.length; i++) {
	                    var found = this[i].querySelectorAll(selector);
	                    for (var j = 0; j < found.length; j++) {
	                        foundElements.push(found[j]);
	                    }
	                }
	                return new Dom7(foundElements);
	            },
	            children: function (selector) {
	                var children = [];
	                for (var i = 0; i < this.length; i++) {
	                    var childNodes = this[i].childNodes;
	    
	                    for (var j = 0; j < childNodes.length; j++) {
	                        if (!selector) {
	                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
	                        }
	                        else {
	                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
	                        }
	                    }
	                }
	                return new Dom7($.unique(children));
	            },
	            remove: function () {
	                for (var i = 0; i < this.length; i++) {
	                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
	                }
	                return this;
	            },
	            add: function () {
	                var dom = this;
	                var i, j;
	                for (i = 0; i < arguments.length; i++) {
	                    var toAdd = $(arguments[i]);
	                    for (j = 0; j < toAdd.length; j++) {
	                        dom[dom.length] = toAdd[j];
	                        dom.length++;
	                    }
	                }
	                return dom;
	            }
	        };
	        $.fn = Dom7.prototype;
	        $.unique = function (arr) {
	            var unique = [];
	            for (var i = 0; i < arr.length; i++) {
	                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
	            }
	            return unique;
	        };
	    
	        return $;
	    })();
	    

	    /*===========================
	     Get Dom libraries
	     ===========================*/
	    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
	    for (var i = 0; i < swiperDomPlugins.length; i++) {
	    	if (window[swiperDomPlugins[i]]) {
	    		addLibraryPlugin(window[swiperDomPlugins[i]]);
	    	}
	    }
	    // Required DOM Plugins
	    var domLib;
	    if (typeof Dom7 === 'undefined') {
	    	domLib = window.Dom7 || window.Zepto || window.jQuery;
	    }
	    else {
	    	domLib = Dom7;
	    }

	    /*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/
	    function addLibraryPlugin(lib) {
	        lib.fn.swiper = function (params) {
	            var firstInstance;
	            lib(this).each(function () {
	                var s = new Swiper(this, params);
	                if (!firstInstance) firstInstance = s;
	            });
	            return firstInstance;
	        };
	    }
	    
	    if (domLib) {
	        if (!('transitionEnd' in domLib.fn)) {
	            domLib.fn.transitionEnd = function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i, j, dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            };
	        }
	        if (!('transform' in domLib.fn)) {
	            domLib.fn.transform = function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            };
	        }
	        if (!('transition' in domLib.fn)) {
	            domLib.fn.transition = function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            };
	        }
	        if (!('outerWidth' in domLib.fn)) {
	            domLib.fn.outerWidth = function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins)
	                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
	                    else
	                        return this[0].offsetWidth;
	                }
	                else return null;
	            };
	        }
	    }

	    window.Swiper = Swiper;
	})();
	/*===========================
	Swiper AMD Export
	===========================*/
	if (true)
	{
	    module.exports = window.Swiper;
	}
	else if (typeof define === 'function' && define.amd) {
	    define([], function () {
	        'use strict';
	        return window.Swiper;
	    });
	}
	//# sourceMappingURL=maps/swiper.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper-container1\">\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide\" v-for=\"imgInfor in imgInfors\"><a v-bind:href=\"imgInfor.linkUrl\"><img v-bind:src=\"imgInfor.imgUrl\"></a></div>\n    <!-- <div class=\"swiper-slide\">slider2</div>\n    <div class=\"swiper-slide\">slider3</div> -->\n  </div>\n  <div class=\"swiper-pagination\"></div>\n</div>\n";

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 修改用户登录状态为已经登录
	var isLogin = exports.isLogin = function isLogin(_ref) {
	  var dispatch = _ref.dispatch;
	  return dispatch('ISLOGIN');
	};
	// 未登录的状态
	var loginOut = exports.loginOut = function loginOut(_ref2) {
	  var dispatch = _ref2.dispatch;
	  return dispatch('NOTLOGIN');
	};
	/**
	  *设置用户的登录信息
	  *参数 name用户名 avatar用户头像 id用户id accesstoken用户登录标识
	**/
	var setUserInfo = exports.setUserInfo = function setUserInfo(_ref3, obj) {
	  var dispatch = _ref3.dispatch;

	  dispatch('SETUSERINFO', obj);
	};
	/**
	  *设置弹框组件tips的提示内容
	  *
	**/
	var setTipContent = exports.setTipContent = function setTipContent(_ref4, content) {
	  var dispatch = _ref4.dispatch;

	  dispatch('SETTIPCONTENT', content);
	};
	/*
	 *设置tip弹窗组件的显示隐藏状态
	 */
	var setTipShow = exports.setTipShow = function setTipShow(_ref5, status) {
	  var dispatch = _ref5.dispatch;

	  dispatch('SETTIPSHOW', status);
	};
	/*
	 *设置未读消息的次数
	 */
	var setNotMessageCount = exports.setNotMessageCount = function setNotMessageCount(_ref6, count) {
	  var dispatch = _ref6.dispatch;

	  dispatch('SETNOTMESSAGECOUNT', count);
	};

	var setSignToken = exports.setSignToken = function setSignToken(_ref7, token) {
	  var dispatch = _ref7.dispatch;

	  dispatch('SETTOKEN', token);
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };

	var utils = (function () {
		var me = {};

		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;

			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}

			return false;
		})();

		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}

		me.getTime = Date.now || function getTime () { return new Date().getTime(); };

		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};

		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};

		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};

		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ?
				'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
				pointerEvent;
		};

		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;

			deceleration = deceleration === undefined ? 0.0006 : deceleration;

			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;

			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}

			return {
				destination: Math.round(destination),
				duration: duration
			};
		};

		var _transform = _prefixStyle('transform');

		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});

		/*
		This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		- galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	  */
		me.isBadAndroid = (function() {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		})();

		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});

		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};

		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}

			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};

		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}

			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};

		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;

			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084

			return {
				left: left,
				top: top
			};
		};

		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}

			return false;
		};

		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,

			mousedown: 2,
			mousemove: 2,
			mouseup: 2,

			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,

			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});

		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;

					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }

					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});

		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};

		me.click = function (e) {
			var target = e.target,
				ev;

			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1,
					target.screenX, target.screenY, target.clientX, target.clientY,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					0, null);

				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};

		return me;
	})();
	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance

		this.options = {

			resizeScrollbars: true,

			mouseWheelSpeed: 20,

			snapThreshold: 0.334,

	// INSERT POINT: OPTIONS
			disablePointer : !utils.hasPointer,
			disableTouch : utils.hasPointer || !utils.hasTouch,
			disableMouse : utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,

			bounce: true,
			bounceTime: 600,
			bounceEasing: '',

			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};

		for ( var i in options ) {
			this.options[i] = options[i];
		}

		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;

		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}

		if ( this.options.shrinkScrollbars == 'scale' ) {
			this.options.useTransition = false;
		}

		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

	// INSERT POINT: NORMALIZATION

		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};

	// INSERT POINT: DEFAULTS

		this._init();
		this.refresh();

		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}

	IScroll.prototype = {
		version: '5.2.0',

		_init: function () {
			this._initEvents();

			if ( this.options.scrollbars || this.options.indicators ) {
				this._initIndicators();
			}

			if ( this.options.mouseWheel ) {
				this._initWheel();
			}

			if ( this.options.snap ) {
				this._initSnap();
			}

			if ( this.options.keyBindings ) {
				this._initKeys();
			}

	// INSERT POINT: _init

		},

		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
	 		this.resizeTimeout = null;
			this._execEvent('destroy');
		},

		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}

			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},

		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
			  // for button property
			  // http://unixpapa.com/js/mouse.html
			  var button;
		    if (!e.which) {
		      /* IE case */
		      button = (e.button < 2) ? 0 :
		               ((e.button == 4) ? 1 : 2);
		    } else {
		      /* All others */
		      button = e.button;
		    }
				if ( button !== 0 ) {
					return;
				}
			}

			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}

			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
				pos;

			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;

			this.startTime = utils.getTime();

			if ( this.options.useTransition && this.isInTransition ) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}

			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;

			this._execEvent('beforeScrollStart');
		},

		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}

			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}

			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;

			this.pointX		= point.pageX;
			this.pointY		= point.pageY;

			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);

			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}

			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}

			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}

				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}

				deltaX = 0;
			}

			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}

			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}

			this.moved = true;

			this._translate(newX, newY);

	/* REPLACE START: _move */

			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}

	/* REPLACE END: _move */

		},

		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}

			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}

			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';

			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();

			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}

			this.scrollTo(newX, newY);	// ensures that the last position is rounded

			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}

				if ( this.options.click ) {
					utils.click(e);
				}

				this._execEvent('scrollCancel');
				return;
			}

			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}

			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}


			if ( this.options.snap ) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(newX - snap.x), 1000),
							Math.min(Math.abs(newY - snap.y), 1000)
						), 300);
				newX = snap.x;
				newY = snap.y;

				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}

	// INSERT POINT: _end

			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}

				this.scrollTo(newX, newY, time, easing);
				return;
			}

			this._execEvent('scrollEnd');
		},

		_resize: function () {
			var that = this;

			clearTimeout(this.resizeTimeout);

			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},

		resetPosition: function (time) {
			var x = this.x,
				y = this.y;

			time = time || 0;

			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}

			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}

			if ( x == this.x && y == this.y ) {
				return false;
			}

			this.scrollTo(x, y, time, this.options.bounceEasing);

			return true;
		},

		disable: function () {
			this.enabled = false;
		},

		enable: function () {
			this.enabled = true;
		},

		refresh: function () {
			var rf = this.wrapper.offsetHeight;		// Force reflow

			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;

	/* REPLACE START: refresh */

			this.scrollerWidth	= this.scroller.offsetWidth;
			this.scrollerHeight	= this.scroller.offsetHeight;

			this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

	/* REPLACE END: refresh */

			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}

			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}

			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;

			this.wrapperOffset = utils.offset(this.wrapper);

			this._execEvent('refresh');

			this.resetPosition();

	// INSERT POINT: _refresh

		},

		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}

			this._events[type].push(fn);
		},

		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}

			var index = this._events[type].indexOf(fn);

			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},

		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}

			var i = 0,
				l = this._events[type].length;

			if ( !l ) {
				return;
			}

			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},

		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;

			this.scrollTo(x, y, time, easing);
		},

		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;

			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if ( !time || transitionType ) {
					if(transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},

		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);

			if ( !el ) {
				return;
			}

			var pos = utils.offset(el);

			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;

			// if offsetX/Y are true we center the element to the screen
			if ( offsetX === true ) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}

			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;

			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

			this.scrollTo(pos.left, pos.top, time, easing);
		},

		_transitionTime: function (time) {
			time = time || 0;

			var durationProp = utils.style.transitionDuration;
			this.scrollerStyle[durationProp] = time + 'ms';

			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.scrollerStyle[durationProp] === '0.0001ms') {
						self.scrollerStyle[durationProp] = '0s';
					}
				});
			}


			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTime(time);
				}
			}


	// INSERT POINT: _transitionTime

		},

		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}


	// INSERT POINT: _transitionTimingFunction

		},

		_translate: function (x, y) {
			if ( this.options.useTransform ) {

	/* REPLACE START: _translate */

				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

	/* REPLACE END: _translate */

			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}

			this.x = x;
			this.y = y;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].updatePosition();
			}
		}


	// INSERT POINT: _translate

		},

		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;

			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);

			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}

			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}

			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}

			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}

			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},

		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;

			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}

			return { x: x, y: y };
		},
		_initIndicators: function () {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != 'string',
				indicators = [],
				indicator;

			var that = this;

			this.indicators = [];

			if ( this.options.scrollbars ) {
				// Vertical scrollbar
				if ( this.options.scrollY ) {
					indicator = {
						el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}

				// Horizontal scrollbar
				if ( this.options.scrollX ) {
					indicator = {
						el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
			}

			if ( this.options.indicators ) {
				// TODO: check concat compatibility
				indicators = indicators.concat(this.options.indicators);
			}

			for ( var i = indicators.length; i--; ) {
				this.indicators.push( new Indicator(this, indicators[i]) );
			}

			// TODO: check if we can use array.map (wide compatibility and performance issues)
			function _indicatorsMap (fn) {
				if (that.indicators) {
					for ( var i = that.indicators.length; i--; ) {
						fn.call(that.indicators[i]);
					}
				}
			}

			if ( this.options.fadeScrollbars ) {
				this.on('scrollEnd', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on('scrollCancel', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on('scrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1);
					});
				});

				this.on('beforeScrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1, true);
					});
				});
			}


			this.on('refresh', function () {
				_indicatorsMap(function () {
					this.refresh();
				});
			});

			this.on('destroy', function () {
				_indicatorsMap(function () {
					this.destroy();
				});

				delete this.indicators;
			});
		},

		_initWheel: function () {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

			this.on('destroy', function () {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
				utils.removeEvent(this.wrapper, 'wheel', this);
				utils.removeEvent(this.wrapper, 'mousewheel', this);
				utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
			});
		},

		_wheel: function (e) {
			if ( !this.enabled ) {
				return;
			}

			e.preventDefault();

			var wheelDeltaX, wheelDeltaY,
				newX, newY,
				that = this;

			if ( this.wheelTimeout === undefined ) {
				that._execEvent('scrollStart');
			}

			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				if(!that.options.snap) {
					that._execEvent('scrollEnd');
				}
				that.wheelTimeout = undefined;
			}, 400);

			if ( 'deltaX' in e ) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ( 'wheelDeltaX' in e ) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
			} else if ( 'wheelDelta' in e ) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
			} else if ( 'detail' in e ) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
			} else {
				return;
			}

			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;

			if ( !this.hasVerticalScroll ) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}

			if ( this.options.snap ) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;

				if ( wheelDeltaX > 0 ) {
					newX--;
				} else if ( wheelDeltaX < 0 ) {
					newX++;
				}

				if ( wheelDeltaY > 0 ) {
					newY--;
				} else if ( wheelDeltaY < 0 ) {
					newY++;
				}

				this.goToPage(newX, newY);

				return;
			}

			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

			this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
			this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

			if ( newX > 0 ) {
				newX = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
			}

			if ( newY > 0 ) {
				newY = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
			}

			this.scrollTo(newX, newY, 0);

	// INSERT POINT: _wheel
		},

		_initSnap: function () {
			this.currentPage = {};

			if ( typeof this.options.snap == 'string' ) {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}

			this.on('refresh', function () {
				var i = 0, l,
					m = 0, n,
					cx, cy,
					x = 0, y,
					stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el;

				this.pages = [];

				if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
					return;
				}

				if ( this.options.snap === true ) {
					cx = Math.round( stepX / 2 );
					cy = Math.round( stepY / 2 );

					while ( x > -this.scrollerWidth ) {
						this.pages[i] = [];
						l = 0;
						y = 0;

						while ( y > -this.scrollerHeight ) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};

							y -= stepY;
							l++;
						}

						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;

					for ( ; i < l; i++ ) {
						if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
							m = 0;
							n++;
						}

						if ( !this.pages[m] ) {
							this.pages[m] = [];
						}

						x = Math.max(-el[i].offsetLeft, this.maxScrollX);
						y = Math.max(-el[i].offsetTop, this.maxScrollY);
						cx = x - Math.round(el[i].offsetWidth / 2);
						cy = y - Math.round(el[i].offsetHeight / 2);

						this.pages[m][n] = {
							x: x,
							y: y,
							width: el[i].offsetWidth,
							height: el[i].offsetHeight,
							cx: cx,
							cy: cy
						};

						if ( x > this.maxScrollX ) {
							m++;
						}
					}
				}

				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

				// Update snap threshold if needed
				if ( this.options.snapThreshold % 1 === 0 ) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});

			this.on('flick', function () {
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.x - this.startX), 1000),
							Math.min(Math.abs(this.y - this.startY), 1000)
						), 300);

				this.goToPage(
					this.currentPage.pageX + this.directionX,
					this.currentPage.pageY + this.directionY,
					time
				);
			});
		},

		_nearestSnap: function (x, y) {
			if ( !this.pages.length ) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}

			var i = 0,
				l = this.pages.length,
				m = 0;

			// Check if we exceeded the snap threshold
			if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
				Math.abs(y - this.absStartY) < this.snapThresholdY ) {
				return this.currentPage;
			}

			if ( x > 0 ) {
				x = 0;
			} else if ( x < this.maxScrollX ) {
				x = this.maxScrollX;
			}

			if ( y > 0 ) {
				y = 0;
			} else if ( y < this.maxScrollY ) {
				y = this.maxScrollY;
			}

			for ( ; i < l; i++ ) {
				if ( x >= this.pages[i][0].cx ) {
					x = this.pages[i][0].x;
					break;
				}
			}

			l = this.pages[i].length;

			for ( ; m < l; m++ ) {
				if ( y >= this.pages[0][m].cy ) {
					y = this.pages[0][m].y;
					break;
				}
			}

			if ( i == this.currentPage.pageX ) {
				i += this.directionX;

				if ( i < 0 ) {
					i = 0;
				} else if ( i >= this.pages.length ) {
					i = this.pages.length - 1;
				}

				x = this.pages[i][0].x;
			}

			if ( m == this.currentPage.pageY ) {
				m += this.directionY;

				if ( m < 0 ) {
					m = 0;
				} else if ( m >= this.pages[0].length ) {
					m = this.pages[0].length - 1;
				}

				y = this.pages[0][m].y;
			}

			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			};
		},

		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;

			if ( x >= this.pages.length ) {
				x = this.pages.length - 1;
			} else if ( x < 0 ) {
				x = 0;
			}

			if ( y >= this.pages[x].length ) {
				y = this.pages[x].length - 1;
			} else if ( y < 0 ) {
				y = 0;
			}

			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;

			time = time === undefined ? this.options.snapSpeed || Math.max(
				Math.max(
					Math.min(Math.abs(posX - this.x), 1000),
					Math.min(Math.abs(posY - this.y), 1000)
				), 300) : time;

			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};

			this.scrollTo(posX, posY, time, easing);
		},

		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;

			x++;

			if ( x >= this.pages.length && this.hasVerticalScroll ) {
				x = 0;
				y++;
			}

			this.goToPage(x, y, time, easing);
		},

		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;

			x--;

			if ( x < 0 && this.hasVerticalScroll ) {
				x = 0;
				y--;
			}

			this.goToPage(x, y, time, easing);
		},

		_initKeys: function (e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;

			// if you give me characters I give you keycode
			if ( typeof this.options.keyBindings == 'object' ) {
				for ( i in this.options.keyBindings ) {
					if ( typeof this.options.keyBindings[i] == 'string' ) {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}

			for ( i in keys ) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}

			utils.addEvent(window, 'keydown', this);

			this.on('destroy', function () {
				utils.removeEvent(window, 'keydown', this);
			});
		},

		_key: function (e) {
			if ( !this.enabled ) {
				return;
			}

			var snap = this.options.snap,	// we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.250,
				pos;

			if ( this.options.useTransition && this.isInTransition ) {
				pos = this.getComputedPosition();

				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}

			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

			switch ( e.keyCode ) {
				case this.options.keyBindings.pageUp:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length-1 : this.maxScrollX;
					newY = snap ? this.pages[0].length-1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				default:
					return;
			}

			if ( snap ) {
				this.goToPage(newX, newY);
				return;
			}

			if ( newX > 0 ) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}

			if ( newY > 0 ) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}

			this.scrollTo(newX, newY, 0);

			this.keyTime = now;
		},

		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;

			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;

				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);

					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}

					return;
				}

				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);

				if ( that.isAnimating ) {
					rAF(step);
				}
			}

			this.isAnimating = true;
			step();
		},
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if ( this.enabled && !e._constructed ) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	function createDefaultScrollbar (direction, interactive, type) {
		var scrollbar = document.createElement('div'),
			indicator = document.createElement('div');

		if ( type === true ) {
			scrollbar.style.cssText = 'position:absolute;z-index:9999';
			indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
		}

		indicator.className = 'iScrollIndicator';

		if ( direction == 'h' ) {
			if ( type === true ) {
				scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
				indicator.style.height = '100%';
			}
			scrollbar.className = 'iScrollHorizontalScrollbar';
		} else {
			if ( type === true ) {
				scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
				indicator.style.width = '100%';
			}
			scrollbar.className = 'iScrollVerticalScrollbar';
		}

		scrollbar.style.cssText += ';overflow:hidden';

		if ( !interactive ) {
			scrollbar.style.pointerEvents = 'none';
		}

		scrollbar.appendChild(indicator);

		return scrollbar;
	}

	function Indicator (scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;

		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};

		for ( var i in options ) {
			this.options[i] = options[i];
		}

		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;

		if ( this.options.interactive ) {
			if ( !this.options.disableTouch ) {
				utils.addEvent(this.indicator, 'touchstart', this);
				utils.addEvent(window, 'touchend', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(this.indicator, 'mousedown', this);
				utils.addEvent(window, 'mouseup', this);
			}
		}

		if ( this.options.fade ) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			var durationProp = utils.style.transitionDuration;
			this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
			// remove 0.0001ms
			var self = this;
			if(utils.isBadAndroid) {
				rAF(function() {
					if(self.wrapperStyle[durationProp] === '0.0001ms') {
						self.wrapperStyle[durationProp] = '0s';
					}
				});
			}
			this.wrapperStyle.opacity = '0';
		}
	}

	Indicator.prototype = {
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
			}
		},

		destroy: function () {
			if ( this.options.fadeScrollbars ) {
				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;
			}
			if ( this.options.interactive ) {
				utils.removeEvent(this.indicator, 'touchstart', this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.removeEvent(this.indicator, 'mousedown', this);

				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);

				utils.removeEvent(window, 'touchend', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
				utils.removeEvent(window, 'mouseup', this);
			}

			if ( this.options.defaultScrollbars ) {
				this.wrapper.parentNode.removeChild(this.wrapper);
			}
		},

		_start: function (e) {
			var point = e.touches ? e.touches[0] : e;

			e.preventDefault();
			e.stopPropagation();

			this.transitionTime();

			this.initiated = true;
			this.moved = false;
			this.lastPointX	= point.pageX;
			this.lastPointY	= point.pageY;

			this.startTime	= utils.getTime();

			if ( !this.options.disableTouch ) {
				utils.addEvent(window, 'touchmove', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(window, 'mousemove', this);
			}

			this.scroller._execEvent('beforeScrollStart');
		},

		_move: function (e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX, deltaY,
				newX, newY,
				timestamp = utils.getTime();

			if ( !this.moved ) {
				this.scroller._execEvent('scrollStart');
			}

			this.moved = true;

			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;

			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			this._pos(newX, newY);

	// INSERT POINT: indicator._move

			e.preventDefault();
			e.stopPropagation();
		},

		_end: function (e) {
			if ( !this.initiated ) {
				return;
			}

			this.initiated = false;

			e.preventDefault();
			e.stopPropagation();

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			if ( this.scroller.options.snap ) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.scroller.x - snap.x), 1000),
							Math.min(Math.abs(this.scroller.y - snap.y), 1000)
						), 300);

				if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
				}
			}

			if ( this.moved ) {
				this.scroller._execEvent('scrollEnd');
			}
		},

		transitionTime: function (time) {
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			this.indicatorStyle[durationProp] = time + 'ms';

			if ( !time && utils.isBadAndroid ) {
				this.indicatorStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.indicatorStyle[durationProp] === '0.0001ms') {
						self.indicatorStyle[durationProp] = '0s';
					}
				});
			}
		},

		transitionTimingFunction: function (easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
		},

		refresh: function () {
			this.transitionTime();

			if ( this.options.listenX && !this.options.listenY ) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
			} else if ( this.options.listenY && !this.options.listenX ) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
			}

			if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
				utils.addClass(this.wrapper, 'iScrollBothScrollbars');
				utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '8px';
					} else {
						this.wrapper.style.bottom = '8px';
					}
				}
			} else {
				utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
				utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '2px';
					} else {
						this.wrapper.style.bottom = '2px';
					}
				}
			}

			var r = this.wrapper.offsetHeight;	// force refresh

			if ( this.options.listenX ) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if ( this.options.resize ) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + 'px';
				} else {
					this.indicatorWidth = this.indicator.clientWidth;
				}

				this.maxPosX = this.wrapperWidth - this.indicatorWidth;

				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8;
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX;
				}

				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
			}

			if ( this.options.listenY ) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if ( this.options.resize ) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + 'px';
				} else {
					this.indicatorHeight = this.indicator.clientHeight;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;

				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8;
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
			}

			this.updatePosition();
		},

		updatePosition: function () {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

			if ( !this.options.ignoreBoundaries ) {
				if ( x < this.minBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + 'px';
					}
					x = this.minBoundaryX;
				} else if ( x > this.maxBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + 'px';
						x = this.maxPosX + this.indicatorWidth - this.width;
					} else {
						x = this.maxBoundaryX;
					}
				} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + 'px';
				}

				if ( y < this.minBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
					}
					y = this.minBoundaryY;
				} else if ( y > this.maxBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
						y = this.maxPosY + this.indicatorHeight - this.height;
					} else {
						y = this.maxBoundaryY;
					}
				} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + 'px';
				}
			}

			this.x = x;
			this.y = y;

			if ( this.scroller.options.useTransform ) {
				this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
			} else {
				this.indicatorStyle.left = x + 'px';
				this.indicatorStyle.top = y + 'px';
			}
		},

		_pos: function (x, y) {
			if ( x < 0 ) {
				x = 0;
			} else if ( x > this.maxPosX ) {
				x = this.maxPosX;
			}

			if ( y < 0 ) {
				y = 0;
			} else if ( y > this.maxPosY ) {
				y = this.maxPosY;
			}

			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

			this.scroller.scrollTo(x, y);
		},

		fade: function (val, hold) {
			if ( hold && !this.visible ) {
				return;
			}

			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;

			var time = val ? 250 : 500,
				delay = val ? 0 : 300;

			val = val ? '1' : '0';

			this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

			this.fadeTimeout = setTimeout((function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val;
			}).bind(this, val), delay);
		}
	};

	IScroll.utils = utils;

	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else if ( true ) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.IScroll = IScroll;
	}

	})(window, document, Math);


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<nv-header></nv-header>\n<div class=\"artlist\">\n\t<swiper-slide></swiper-slide>\n\t<ul class=\"insurance-entry clearfloat\">\n\t\t<li v-link=\"{name:'productlist',params:{id:2}}\">重疾险</li>\n\t\t<li v-link=\"{name:'productlist',params:{id:1}}\">医疗险</li>\n\t\t<li v-link=\"{name:'productlist',params:{id:5}}\">意外险</li>\n\t\t<li v-link=\"{name:'productlist',params:{id:3}}\">人寿险</li>\n\t\t<li v-link=\"{name:'productlist',params:{id:4}}\">理财险</li>\n\t</ul>\n\t<ul class=\"function-entry clearfloat\">\n\t\t<li v-link=\"{name: isLoginFlag?'require-assess':'login'}\">\n\t\t\t<span class=\"function-name\">需求测评</span>\n\t\t\t<span class=\"function-describe\">30秒完成测评</span>\n\t\t</li>\n\t\t<li v-link=\"{name:'solution-made'}\">\n\t\t\t<span class=\"function-name\">方案定制</span>\n\t\t\t<span class=\"function-describe\">为你量身定制</span>\n\t\t</li>\n\t\t<li v-link=\"{name:'insurance-strategy'}\">\n\t\t\t<span class=\"function-name\">投保攻略</span>\n\t\t\t<span class=\"function-describe\">买对保险必读</span>\n\t\t</li>\n\t</ul>\n\t<div class=\"purchase-discount\">\n\t\t<div class=\"index-more\" v-link=\"{name:'discount-list'}\">购险优惠<i>更多</i></div>\n\t\t<div class=\"discount-box clearfloat\">\n\t\t\t<div class=\"discount\" v-for=\"indexDis in discountArr\">\n\t\t\t\t<a v-bind:href=\"indexDis.linkUrl\"><img v-bind:src=\"indexDis.imgUrl\"></a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"insurance-ask\">\n\t\t<div class=\"index-more\" v-link=\"{name:'question-answer-list'}\">保险问答<i>更多</i></div>\n\t\t<div class=\"questions-and-answers-list\" v-for=\"queAndAnsList in queAndAnsLists\" >\n\t\t\t<div class=\"questions-and-answers\">\n\t\t\t\t<div class=\"link-wrapper\" v-link=\"{name:'question-and-answer-detail',params:{id:queAndAnsList.qstId+',index'}}\">\n\t\t\t\t\t<div class=\"question-information clearfloat\">\n\t\t\t\t\t\t<div class=\"questioner-name\" v-if=\"queAndAnsList.asker\">{{queAndAnsList.asker}}</div>\n\t\t\t\t\t\t<div class=\"questioner-name\" v-else>匿名用户</div>\n\t\t\t\t\t\t<div class=\"question-watch\">\n\t\t\t\t\t\t\t浏览<i class=\"question-watch-time\">{{queAndAnsList.readQty}}</i>次\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"question-date\">{{queAndAnsList.askDate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"question\">\n\t\t\t\t\t\t<i></i><span>{{queAndAnsList.askContent}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"answer\">\n\t\t\t\t\t\t<img src=\"" + __webpack_require__(24) + "\"><span>{{queAndAnsList.replyContent}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"answer-information\">\n\t\t\t\t\t<div class=\"answer-name\">{{queAndAnsList.agentName}}</div>\n\t\t\t\t\t<div class=\"answer-occupation\">{{queAndAnsList.titleName}}</div>\n\t\t\t\t\t<div class=\"demote\" v-bind:opFlag=\"queAndAnsList.opFlag\"><i v-bind:class=\"[((queAndAnsList.opFlag == '2')&&isLoginFlag)?'active':'']\"></i><span>{{queAndAnsList.cpCnt}}</span></div>\n\t\t\t\t\t<div class=\"fabulous\" v-bind:replyId = \"queAndAnsList.replyId\"><i v-bind:class=\"[((queAndAnsList.opFlag == '1')&&isLoginFlag)?'active':'']\"></i><span>{{queAndAnsList.dzCnt}}</span></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"our-advantage\">\n\t\t<div class=\"index-more\" v-on:click=\"moreAdvantage()\">平台优势<i>更多</i></div>\n\t\t<div class=\"advantage-box\" id=\"wrapper\">\n\t\t\t<ul class=\"clearfloat\">\n\t\t\t\t<li v-on:click=\"jumpAdvantage(index)\" v-for=\"(index,advantageArr) in advantageArrs\">\n\t\t\t\t\t<img v-bind:src=\"advantageArr.imgsrc\" v-bind:alt=\"advantageArr.text\">\n\t\t\t\t\t<!-- <span>{{advantageArr.text}}</span> -->\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"loadingbox\" v-show=\"showLoading\">\n\t\t<div class=\"loading\"></div>\n\t</div>\n</div>\n";

/***/ }
]);
webpackJsonp([29,30],{

/***/ 13:
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

/***/ 29:
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

/***/ 76:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABGdBTUEAALGPC/xhBQAAAm5JREFUeAHt3E1Kw0AUB/BGQVtsD9Bds3Dr0oVdFaHUTXGjR/EQeoCew1UEF0XBE3iACi5cuEz29T0kUMQ2TT/mfcx/IIQkj5mX30BKMtNpNFAgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAATqCRzWC7cTPR6PO91u9zFN0w8qn9KZH0gnsI/2GTnP84zqHs3n82wwGPT30U6dOpM6wRZiS2QCXsTNkyS5mk6nb1L34Ap6CXJpK4rtBroCWRzbBfSayKLY5n8MayIzdoe2+1I91N409AbI7PrebDavQwGX7Zh9dGyK3Gq1LrMs+y4BQu1NQltD5s40B20R2Ry0VWRT0JaRzUBbRzYB7QFZPbQXZNXQnpDVQntDVgntEVkdtFdkVdCekdVAe0dWAR0Dsjh0LMii0DEhi0HHhiwCHSMyQwcfMyyK4pQmt5xx4zXKi8TwU438KkODz72bzWZfNB/ulTK7oe24MsPfgPNer9emOXTPa8arCwsOzQI86XAD7AvL2CLQMWKLQceGLQodE7Y4dCzYKqBjwFYD7R1bFbRnbHXQXrFVQnvEVgv9B/uWjo/43BpF5RukamhGXXhdN42tHnobbPqeckIdpeJDlAnoLbD7WrDNQFvHNgVtGdsctFVsk9AWsc1CW8MOPjjLQLssvGIBrVwwojqLXda767rM/f1tGQCvyUGj6090vb0shs9TpzxQ59ytitnHNTfQjFOFLYXMubmCXoUtiewS+j9saWS30IvYhDyReCZzDtGU4XCYRnOzuFEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAATCCfwAz+YhtEKsitsAAAAASUVORK5CYII="

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(274)
	__vue_template__ = __webpack_require__(276)
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
	  var id = "_v-668947da/userProtocol.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(275);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./userProtocol.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./userProtocol.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.protocol{\n    width:7rem;\n    padding:0 0.25rem;\n    margin-top:0.9rem;\n}\n.protocol h2,.protocol h3,.protocol h4,.protocol h5,.protocol h6,.protocol p{\n    font-weight: normal;\n    font-size:0.26rem;\n    /*text-indent:24px;*/\n}\n.protocol h1{\n    font-size:0.3rem;\n    text-align:center;\n    padding-top:0.15rem;\n    margin-bottom:0.05rem;\n}\n.protocol h4,.protocol span{\n    font-weight:bold;\n}\n.protocol span{\n    display:block;\n    text-align:right;\n    font-size:0.26rem;\n    padding-bottom:0.2rem;\n}\n.ins-header {\n    position:fixed;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 0.9rem;\n    font-size: 0.34rem;\n    color: #404040;\n    text-align: center;\n    box-sizing: border-box;\n    line-height: 0.9rem;\n    border-bottom: 1px solid #e6e6e6;\n    background: #fff;\n}\n.goback-Btn{\n    position:absolute;\n    width: 0.9rem;\n    height:0.9rem;\n    left: 0;\n    top: 0;\n    background: url(" + __webpack_require__(76) + ") no-repeat center center;\n    background-size: 80% 80%;\n}\n", ""]);

	// exports


/***/ },

/***/ 276:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ins-header\">\n    <div class=\"goback-Btn\" v-link=\"{name:'userset'}\"></div>\n    用户协议\n</div>\n<div class=\"protocol\">\n    <h1>《佳保保险用户协议》</h1>\n    <div class=\"protocol-txt\">\n        <h2>本协议是深圳市投三六零信息科技有限公司(以下简称“本公司”)与用户(以下简称“您”)就您使用佳保保险平台相关服务所订立的协议。</h2>\n        <h3>您加入或使用佳保保险平台表明您已阅读并同意接受本协议的全部约定内容以及与本协议有关的已经发布或将来可能发布的各项协议、规则、说明、用户须知、页面展示、操作流程、公告或通知（以下统称“规则”）。在接受本协议之前，请您仔细阅读本协议的全部内容。如果您不同意本协议的任意内容、或者无法准确理解该条款的含义，请不要进行后续操作。</h3>\n        <h4>一、相关定义</h4>\n        <h5>除非本协议另有明确约定，以下术语定义如下：</h5>\n        <p>1.1 佳保保险平台：是本公司开发的为保险机构及保险从业人员提供网络技术支持辅助服务以及为用户提供其他增值服务的平台，佳保保险平台的所有权和运营权归本公司所有。</p>\n        <p>1.2 佳保保险平台服务：佳保保险平台服务是佳保保险平台为您提供的通过本平台系统查询保险产品信息、制作保险计划书、在线与快速咨询，在线进行保险产品投保（通过佳保保险平台系统与保险机构系统相联实现）、进行交易资金结算（由支付机构提供）等相关增值服务。具体服务以本公司实际提供为准。</p>\n        <p>1.3 保险机构：是指经保险监督管理机构批准设立，并依法登记注册的与本公司签订合作协议的保险公司和保险专业中介机构。</p>\n        <p>1.4 支付机构：指经本公司指定授权、并与本公司有合作协议的支付机构。支付机构可以是第三方支付公司，也可以是发卡银行本身。您通过佳保保险平台投保时，资金往来均应通过支付机构划付。</p>\n        <h4>二、账户注册及管理</h4>\n        <p>2.1 申请资格</p>\n        <p class=\"level-2\">2.1.1 若您申请注册成为佳保保险平台的会员或使用、接受佳保保险平台的服务，您须满足以下条件：</p>\n        <p>2.1.2 您应当是具有完全民事权利能力和完全民事行为能力的自然人、法人或其他组织，您自愿申请注册成为佳保保险平台用户。</p>\n        <p>2.1.3 若您不具备2.1.2所述条件，佳保保险平台有权注销您的账户，若因您不具备上述主体资格而使本公司遭受任何损失的，本公司有权要求您及您的监护人赔偿本公司的一切损失。</p>\n        <p>2.2 账户</p>\n        <p>2.2.1 您一旦注册成功，便成为佳保保险平台的合法用户，您将得到一个帐号和密码。您设置的账号、密码是您用以登录佳保保险平台，接受本公司服务，持有相关虚拟物品的凭证。您应采取合理措施保护您的账号和密码的安全。您对利用该账号和密码所进行的一切活动负全部责任，由该等活动所导致的任何损失由您承担，本公司不承担任何责任。</p>\n        <p>2.2.2 您一旦注册佳保保险平台账号，除本公司提供的其他服务要求您单独开通权限外，您有权利用该账号使用本公司提供的各个单项服务，当您使用本公司提供的各个单项服务时，您的使用行为视为对该单项服务的服务条款以及本公司在该单项服务中发布的各类规则、公告、说明等的同意。</p>\n        <p>2.2.3 您的账号和密码遭到未授权的使用或发生其他任何安全问题，您可以立即通知本公司。对非本公司原因造成的账户、密码等信息被冒用、盗用或非法使用，由此引起的一切风险、责任、损失、费用等由您自行承担。</p>\n        <p>2.2.4 为了确保您的合法权益，您应确保账户是您本人实名开立并使用。如非本人实名开立的账户请勿进行使用，否则本公司有权拒绝您的交易申请。如因您的行为造成您自身、本公司或第三方损失的，您同意就该等损失承担全部责任。</p>\n        <p>2.2.5 本公司依据本协议及本公司发布的相关规则限制、冻洁、回收、替换或终止您对本账号的使用，可能对您造成的一切损失由您自行承担，本公司不承担任何责任。</p>\n        <p>2.3 身份认证</p>\n        <p>2.3.1 您同意，本公司有权采取各种必要手段，包括但不限于通过您的第三方支付机构、银行或者本公司认可的其他方式对您进行身份验证。</p>\n        <p>2.3.2 您应根据本公司要求提交身份认证要素（包括但不限于电子邮箱、手机号码、证件类型及证件号码、密码、支付账号等）进行身份认证。身份认证要素是本公司识别用户的依据，您必须妥善保管，不得将身份认证要素提供给任何第三方使用。使用上述身份认证要素所发出的一切指令均视为您本人所为，您应对此产生的后果负责，如您的上述身份认证要素发生变化，您应当按照规则及时办理变更手续，因您未能及时办理变更手续所可能导致的损失由您承担。</p>\n        <h4>三、佳保保险平台服务</h4>\n        <h5>3.1 服务内容</h5>\n        <p>3.1.1 在本协议项下，本公司向您提供以下服务：</p>\n        <p>（1）查询保险产品、相关资讯等信息；</p>\n        <p>（2）制作保险计划书；</p>\n        <p>（3）佣金结算；</p>\n        <p>（4）通过佳保保险平台系统与保险机构系统相联实现在线投保服务；</p>\n        <p>（5）视频直播服务；</p>\n        <p>（6）保单管理包括保单查询、增加删减保单信息，续费提醒等服务；</p>\n        <p>（7）其他本公司提供的服务。</p>\n        <p>3.1.2 在线投保服务是指保险机构在佳保保险平台上设置保险机构交易前台，以便于您通过佳保保险平台向保险机构申请购买保险。</p>\n        <p>3.1.3 在线投保服务将采取支付机构作为交易资金渠道。您必须开立支付机构交易账户，才能使用线投保服务。您在佳保保险平台上产生的购买保险的指令将通过支付机构处理。您应保证您在支付机构所开立的账户或其他指定账户状态正常，交易款项可正常划转。因前述原因导致交易无法实现的或其他损失的，所有损失由您自行承担，本公司、保险机构不承担任何责任。</p>\n        <p>3.1.4 您理解并同意，您可在其他媒介查询保险基础知识，保险相关法律法规等资讯、佳保保险平台以及保险机构交易前台不展示前述全部或部分资讯不构成对本协议的违约。</p>\n        <p>3.2 服务费 你知晓并同意，本公司有权向您收取一定的费用，本公司收取的服务费标准及方式以佳保保险平台展示或您与本公司的约定为准，本公司有权单方面调整上述费用，但须提前进行通知，上述通知构成了本协议的有效补充，具有同等法律效力，在通知之日起，如您继续使用本服务的，即视为您同意本公司按照调整后的收费标准向您收取费用，否则您应立即停止使用本服务。</p>\n        <p>3.3 推广费 您在使用佳保保险平台服务的过程中，可以通过佳保保险平台提供的链接进行线上或线下推广，对于您的推广行为，本公司将向您支付一定的推广费用，有关推广费的相关事项依据《推广规则》执行。</p>\n        <h4>四、隐私政策</h4>\n        <p>4.1 为了更好的为您提供服务，您同意本公司有权获得、留存您的个人信息（包括但不限于：姓名、证件类型、证件号码、证件有效期限、手机号、邮箱、联系地址、第三方支付账户等），您授权本公司在以下情况下有权公开、编辑或透露您的个人信息。</p>\n        <p>（1）提供给在佳保保险平台设置交易前台的保险机构；</p>\n        <p>（2）依据有关法律规定或本公司合法服务程序规定的要求；</p>\n        <p>（3）在紧急情况下，为维护佳保保险平台用户及公众的权益；</p>\n        <p>（4）为维护本公司知识产权及其他任何合法权益；</p>\n        <p>（5）其他需要公开、编辑或透露个人信息的情况。</p>\n        <p>4.2 本公司将基于合法、合理和诚实信用的法定原则妥善处理或使用您的个人信息并竭尽全力保护您的信息，但本公司对您的个人信息的安全性不做任何担保与承诺。</p>\n        <h4>五、知识产权</h4>\n        <p>5.1 本公司的服务包括本公司运营的网站、网页应用、APP以及内涵的文字、图片、视频、音频等元素，本公司对本公司提供的上述服务享有知识产权。</p>\n        <p>5.2 您不得对本公司服务涉及的相关网页、应用、APP等产品进行反向工程、反向汇编、反向编译等。</p>\n        <p>5.3 您使用本公司服务只能在本协议以及相应的授权许可协议授权的范围使用本公司知识产权，未经授权超范围使用的构成对本公司的侵权。</p>\n        <p>5.4 您在使用本公司服务时发表上传的文字、图片、视频、以及表演等您的原创的信息，此部分信息的知识产权归您所有，但您的发表、上传行为是对本公司佳保保险平台的授权，您确认发表、上传的信息为非独占性、永久性的授权，且该授权可转授权。本公司可将前述信息在本公司旗下的服务平台上使用，可再次编辑后使用，也可以由本公司授权给合作方使用。</p>\n        <h4>六、您的保证与承诺</h4>\n        <p>6.1 除应遵守本协议约定外，您还应遵本公司制定的相关规则等约定，特别是在关于个人信息更新，账户安全等方面的约定。<p>\n        <p>6.2 您确认已详细阅读并理解保险条款等保险机构的相关规定，您自愿通过保险机构交易前台办理投保业务，并承诺上述业务视同您亲临保险机构柜台办理。<p>\n        <p>6.3 您自行承担账户信息和密码的保密义务，您应采取合理措施保护您的账户信息和密码，不应将密码记载在任何他人可以看到的载体上，不应将账户信息和密码告知任何第三方（包括您的配偶、子女或其他关系亲密的人员），并应定期更换您的密码，您确认，凡是使用您的账户进行的一切活动，均应视为您亲自办理的，您由于自己疏忽或其他原因而致使密码失密造成的损失由您自己承担，本公司不承担任何责任。<p>\n        <p>6.4 您在发现或有理由认为存在未被授权的人正在或可能使用您的账号、密码时，应及时告知本公司。<p>\n        <p>6.5 您承诺不以任何方式攻击本公司网络或破坏本公司系统，否则承担由此给本公司或任何第三方造成的损失。<p>\n        <p>6.6 您保证用于购买保险产品的资金来源合法，否则由此引起的一切责任由您承担，您承诺不为任何目的或以任何非法方式使用本服务，并承诺遵守中国相关法律、法规及互联网之使用惯例。<p>\n        <p>6.7 您承诺，本协议项下所涉及的所有意思表示均不可变更、撤回或撤销，包括但不限于以同意、承诺、授权、认可或指令形式作出的意思表示，但本协议及规则另有约定的除外。 6.8您同意，即便您已符合本协议约定的条件，投保的实现仍受制于其他因素，本公司和保险机构对此不做任何可实现的承诺。<p>\n        <p>6.9 您知晓并同意，为更好地为您提供服务，若出现因保险机构自身原因、系统差错、故障或其他原因引发的展示延误、错误或您不当获利等情形的，您同意本公司和保险机构可以采取更正差错、扣划款项、暂停服务等适当纠正措施。您同意并授权保险机构可以直接或通过第三方机构从您的资金渠道上扣划相应款项，您同意并授权第三方机构根据保险机构的指令进行相应操作，且第三方机构不因前述操作对您承担任何责任。<p>\n        <p>6.10 你知晓并同意。本公司和保险机构有权保留您网上交易的相关电子数据以作为交易证明。 6.11您保证不得从事以下禁止行为：<p>\n        <p>（1）利用本公司服务产品发表、传送、传播、储存危害国家安全、国家统一、社会稳定的内容，或侮辱、诽谤、色情、暴力、引起他人不安及任何违反国家法律法规政策的内容或者设置含有上述内容的用户名。<p>\n        <p>（2）利用本公司服务发表、传送、传播、储存侵害他人知识产权、商业机密权、肖像权、隐私权等合法权利的内容。<p>\n        <p>（3）进行任何危害计算机网络安全的行为，包括但不限于：使用未经许可的数据或进入未经许可的服务器/账户；未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；未经许可，企图探查、扫描、测试本“软件”系统或网络的弱点或其它实施破坏网络安全的行为；企图干涉、破坏佳保保险平台系统的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为；伪造TCP/IP数据包名称或部分名称。<p>\n        <p>（4）进行任何破坏本公司服务公平性或者其他影响应用正常秩序的行为，如主动或被动刷分、合伙作弊、使用外挂或者其他的作弊软件、利用BUG（又叫“漏洞”或者“缺陷”）来获得不正当的非法利益，或者利用互联网或其他方式将外挂、作弊软件、BUG公之于众。<p>\n        <p>（5）进行任何诸如发布广告、销售商品的商业行为，或者进行任何非法的侵害本公司利益的行为。<p>\n        <p>（6）进行其他任何违法以及侵犯其他个人、公司、社会团体、组织的合法权益的行为。<p>\n        <h4>七、风险提示及责任免除</h4>\n        <p>7.1 您知晓并同意，您通过佳保保险平台所从事的交易可能面临如下风险，该此风险需由您自行承担。<p>\n        <p>（1）监管风险：有关法律、法规及相关政策、规则发生变化，导致本公司无法为您提供服务，您由此可能遭受损失。<p>\n        <p>（2）因您的过错导致的任何损失，该过错包括但不限于：决策失误、操作不当、密码泄漏、密码被他人破解、您使用的计算机系统被第三方侵入。<p>\n        <p>7.2 您知晓并同意，本公司仅向您提供保险信息平台服务及网络技术支持辅助服务，本公司并非保险交易等行为的参与方，不对此行为的任一方作任何口头、书面陈述或对保险机构的承诺的真实性、合法性、准确性、完整性做任何明示或暗示的担保，或对此承担任何责任，本公司无义务参与到保险产品等有关任何理赔、纠纷处理等活动。<p>\n        <p>7.3 佳保保险平台因下列状况无法正常动作，使您无法使用本服务时，本公司不承担任何责任，该状况包括但不限于：<p>\n        <p>（1）佳保保险平台停机维护或升级；<p>\n        <p>（2）佳保保险平台所依赖的电信设备出现故障；<p>\n        <p>（3）因台风、地震、海啸、洪水、雷电、停电、战争等的影响；<p>\n        <p>（4）您的电脑软件、系统、硬件或通信线路、供电线路出现故障的；<p>\n        <p>（5）您操作不当或通过非本公司授权或认可的方式使用本服务；<p>\n        <p>（6）因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、银行原因、第三方服务瑕疵或政府行为等原因。<p>\n        <p>（7）其他不可归因于本公司的原因。<p>\n        <p>7.4 在任何情况下，本公司因本协议所承担的违约赔偿责任总额不超过向您收取的当次服务费用总额。<p>\n        <h4>八、法律适用及争议解决</h4>\n        <p>8.1 本协议的成立、生效、履行和解释，均适用中华人民共和国法律；法律无明文规定的，应适用本公司制定的业务规则和通行的商业惯例。<p>\n        <p>8.2 您同意，因履行本协议发生纠纷的，任何一方应向被告住所地人民法院提起诉讼。<p>\n        <h4>九、协议终止</h4>\n        <p>9.1 您同意遵守有关计算机及互联网规定的相关法律法规之规定。在任何情况下，若本公司合理地认为您的行为可能违反上述法律法规，本公司可在不事先通知您的情况下随时终止向您提供服务。<p>\n        <p>9.2 除本协议另有规定外，本公司在提前通知的情况下，可以单方面终止向您提供本协议项下服务而不承担任何赔偿责任。<p>\n        <h4>十、其他</h4>\n        <p>10.1 本协议履行过程中，本公司向您发出的书面通知方式包括但不限于邮寄纸质通知、佳保保险平台公告、电子邮件、站内信、手机短信等方式。如本公司以邮寄方式向您发出书面通知的，则在按照您在本公司留存的通讯地址交邮后的第三个自然日即视为送达，如以佳保保险平台公告，电子邮件、手机短信等电子方式发出书面通告的，则在通知发送成功即视为送达。<p>\n        <p>10.2 本公司重视对用户隐私的保护，除本协议约定外，本公司将按照《法律条款和隐私政策》保护您的身份信息和其他个人信息，详情请参阅《法律条款和隐私政策》。<p>\n    </div>\n    <span>投360</span>\n</div>\n";

/***/ }

});
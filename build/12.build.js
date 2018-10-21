webpackJsonp([12,30],[
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
/* 10 */,
/* 11 */,
/* 12 */,
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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
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
/* 30 */,
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
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
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
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABGdBTUEAALGPC/xhBQAAAm5JREFUeAHt3E1Kw0AUB/BGQVtsD9Bds3Dr0oVdFaHUTXGjR/EQeoCew1UEF0XBE3iACi5cuEz29T0kUMQ2TT/mfcx/IIQkj5mX30BKMtNpNFAgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAATqCRzWC7cTPR6PO91u9zFN0w8qn9KZH0gnsI/2GTnP84zqHs3n82wwGPT30U6dOpM6wRZiS2QCXsTNkyS5mk6nb1L34Ap6CXJpK4rtBroCWRzbBfSayKLY5n8MayIzdoe2+1I91N409AbI7PrebDavQwGX7Zh9dGyK3Gq1LrMs+y4BQu1NQltD5s40B20R2Ry0VWRT0JaRzUBbRzYB7QFZPbQXZNXQnpDVQntDVgntEVkdtFdkVdCekdVAe0dWAR0Dsjh0LMii0DEhi0HHhiwCHSMyQwcfMyyK4pQmt5xx4zXKi8TwU438KkODz72bzWZfNB/ulTK7oe24MsPfgPNer9emOXTPa8arCwsOzQI86XAD7AvL2CLQMWKLQceGLQodE7Y4dCzYKqBjwFYD7R1bFbRnbHXQXrFVQnvEVgv9B/uWjo/43BpF5RukamhGXXhdN42tHnobbPqeckIdpeJDlAnoLbD7WrDNQFvHNgVtGdsctFVsk9AWsc1CW8MOPjjLQLssvGIBrVwwojqLXda767rM/f1tGQCvyUGj6090vb0shs9TpzxQ59ytitnHNTfQjFOFLYXMubmCXoUtiewS+j9saWS30IvYhDyReCZzDtGU4XCYRnOzuFEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAATCCfwAz+YhtEKsitsAAAAASUVORK5CYII="

/***/ },
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var crypt = __webpack_require__(96),
	      utf8 = __webpack_require__(97).utf8,
	      isBuffer = __webpack_require__(98),
	      bin = __webpack_require__(97).bin,

	  // The core
	  md5 = function (message, options) {
	    // Convert to byte array
	    if (message.constructor == String)
	      if (options && options.encoding === 'binary')
	        message = bin.stringToBytes(message);
	      else
	        message = utf8.stringToBytes(message);
	    else if (isBuffer(message))
	      message = Array.prototype.slice.call(message, 0);
	    else if (!Array.isArray(message))
	      message = message.toString();
	    // else, assume byte array already

	    var m = crypt.bytesToWords(message),
	        l = message.length * 8,
	        a =  1732584193,
	        b = -271733879,
	        c = -1732584194,
	        d =  271733878;

	    // Swap endian
	    for (var i = 0; i < m.length; i++) {
	      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
	             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
	    }

	    // Padding
	    m[l >>> 5] |= 0x80 << (l % 32);
	    m[(((l + 64) >>> 9) << 4) + 14] = l;

	    // Method shortcuts
	    var FF = md5._ff,
	        GG = md5._gg,
	        HH = md5._hh,
	        II = md5._ii;

	    for (var i = 0; i < m.length; i += 16) {

	      var aa = a,
	          bb = b,
	          cc = c,
	          dd = d;

	      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
	      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
	      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
	      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
	      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
	      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
	      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
	      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
	      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
	      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
	      c = FF(c, d, a, b, m[i+10], 17, -42063);
	      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
	      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
	      d = FF(d, a, b, c, m[i+13], 12, -40341101);
	      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
	      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

	      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
	      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
	      c = GG(c, d, a, b, m[i+11], 14,  643717713);
	      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
	      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
	      d = GG(d, a, b, c, m[i+10],  9,  38016083);
	      c = GG(c, d, a, b, m[i+15], 14, -660478335);
	      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
	      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
	      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
	      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
	      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
	      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
	      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
	      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
	      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

	      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
	      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
	      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
	      b = HH(b, c, d, a, m[i+14], 23, -35309556);
	      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
	      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
	      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
	      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
	      a = HH(a, b, c, d, m[i+13],  4,  681279174);
	      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
	      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
	      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
	      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
	      d = HH(d, a, b, c, m[i+12], 11, -421815835);
	      c = HH(c, d, a, b, m[i+15], 16,  530742520);
	      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

	      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
	      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
	      c = II(c, d, a, b, m[i+14], 15, -1416354905);
	      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
	      a = II(a, b, c, d, m[i+12],  6,  1700485571);
	      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
	      c = II(c, d, a, b, m[i+10], 15, -1051523);
	      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
	      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
	      d = II(d, a, b, c, m[i+15], 10, -30611744);
	      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
	      b = II(b, c, d, a, m[i+13], 21,  1309151649);
	      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
	      d = II(d, a, b, c, m[i+11], 10, -1120210379);
	      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
	      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

	      a = (a + aa) >>> 0;
	      b = (b + bb) >>> 0;
	      c = (c + cc) >>> 0;
	      d = (d + dd) >>> 0;
	    }

	    return crypt.endian([a, b, c, d]);
	  };

	  // Auxiliary functions
	  md5._ff  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._gg  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._hh  = function (a, b, c, d, x, s, t) {
	    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._ii  = function (a, b, c, d, x, s, t) {
	    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };

	  // Package private blocksize
	  md5._blocksize = 16;
	  md5._digestsize = 16;

	  module.exports = function (message, options) {
	    if (message === undefined || message === null)
	      throw new Error('Illegal argument ' + message);

	    var digestbytes = crypt.wordsToBytes(md5(message, options));
	    return options && options.asBytes ? digestbytes :
	        options && options.asString ? bin.bytesToString(digestbytes) :
	        crypt.bytesToHex(digestbytes);
	  };

	})();


/***/ },
/* 96 */
/***/ function(module, exports) {

	(function() {
	  var base64map
	      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

	  crypt = {
	    // Bit-wise rotation left
	    rotl: function(n, b) {
	      return (n << b) | (n >>> (32 - b));
	    },

	    // Bit-wise rotation right
	    rotr: function(n, b) {
	      return (n << (32 - b)) | (n >>> b);
	    },

	    // Swap big-endian to little-endian and vice versa
	    endian: function(n) {
	      // If number given, swap endian
	      if (n.constructor == Number) {
	        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
	      }

	      // Else, assume array and swap all items
	      for (var i = 0; i < n.length; i++)
	        n[i] = crypt.endian(n[i]);
	      return n;
	    },

	    // Generate an array of any length of random bytes
	    randomBytes: function(n) {
	      for (var bytes = []; n > 0; n--)
	        bytes.push(Math.floor(Math.random() * 256));
	      return bytes;
	    },

	    // Convert a byte array to big-endian 32-bit words
	    bytesToWords: function(bytes) {
	      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
	        words[b >>> 5] |= bytes[i] << (24 - b % 32);
	      return words;
	    },

	    // Convert big-endian 32-bit words to a byte array
	    wordsToBytes: function(words) {
	      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
	        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a hex string
	    bytesToHex: function(bytes) {
	      for (var hex = [], i = 0; i < bytes.length; i++) {
	        hex.push((bytes[i] >>> 4).toString(16));
	        hex.push((bytes[i] & 0xF).toString(16));
	      }
	      return hex.join('');
	    },

	    // Convert a hex string to a byte array
	    hexToBytes: function(hex) {
	      for (var bytes = [], c = 0; c < hex.length; c += 2)
	        bytes.push(parseInt(hex.substr(c, 2), 16));
	      return bytes;
	    },

	    // Convert a byte array to a base-64 string
	    bytesToBase64: function(bytes) {
	      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
	        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
	        for (var j = 0; j < 4; j++)
	          if (i * 8 + j * 6 <= bytes.length * 8)
	            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
	          else
	            base64.push('=');
	      }
	      return base64.join('');
	    },

	    // Convert a base-64 string to a byte array
	    base64ToBytes: function(base64) {
	      // Remove non-base-64 characters
	      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

	      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
	          imod4 = ++i % 4) {
	        if (imod4 == 0) continue;
	        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
	            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
	            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
	      }
	      return bytes;
	    }
	  };

	  module.exports = crypt;
	})();


/***/ },
/* 97 */
/***/ function(module, exports) {

	var charenc = {
	  // UTF-8 encoding
	  utf8: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
	    }
	  },

	  // Binary encoding
	  bin: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      for (var bytes = [], i = 0; i < str.length; i++)
	        bytes.push(str.charCodeAt(i) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      for (var str = [], i = 0; i < bytes.length; i++)
	        str.push(String.fromCharCode(bytes[i]));
	      return str.join('');
	    }
	  }
	};

	module.exports = charenc;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}

	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ },
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(157)
	__vue_script__ = __webpack_require__(159)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\vue\\login.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(170)
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
	  var id = "_v-4da474b8/login.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./login.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./login.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.login-con {\n\tbackground: #fff;\n\tfont-size: 0.28rem;\n\tmargin-top:1.2rem;\n}\n.login-way{\n\twidth:100%;\n\theight:0.8rem;\n\tborder-bottom:1px solid #dddada;\n}\n.login-way li{\n\tfloat:left;\n\twidth:2.1rem;\n}\n.login-way a{\n\tdisplay:block;\n\twidth:2.1rem;\n\theight:0.75rem;\n\tline-height:0.75rem;\n\tcolor:#c3c3c3;\n\ttext-align:center;\n}\n.login-way li:first-child{\n\tmargin-left:1.35rem;\n\tmargin-right:0.92rem;\n}\n.login-way .login-way-border{\n\tborder-bottom:3px solid #0088fe;\n\tcolor:#0088fe;\n}\n.login-box{\n\tpadding:0 0.35rem;\n\twidth:6.8rem;\n\theight:0.96rem;\n\tline-height:0.96rem;\n}\n.login-box span{\n\tfont-size:0.24rem;\n\tcolor:#7c7c7c;\n}\n.register{\n\tfloat:left;\n}\n.forget{\n\tfloat:right;\n}\n.fade-transition {\n\t-webkit-transition: opacity .2s ease;\n\ttransition: opacity .2s ease;\n}\n.fade-enter,.fade-leave {\n\topacity: 0;\n}\n.ins-header {\n\tposition:fixed;\n\ttop:0;\n\tleft:0;\n\twidth: 100%;\n\theight: 0.9rem;\n\tfont-size: 0.34rem;\n\tcolor: #404040;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\tline-height: 0.9rem;\n\tborder-bottom: 1px solid #e6e6e6;\n\tbackground: #fff;\n}\n.goback-Btn{\n\tposition:absolute;\n\twidth: 0.9rem;\n\theight:0.9rem;\n\tleft: 0;\n\ttop: 0;\n\tbackground: url(" + __webpack_require__(76) + ") no-repeat center center;\n\tbackground-size: 80% 80%;\n}\n\n", ""]);

	// exports


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _header = __webpack_require__(34);

	var _header2 = _interopRequireDefault(_header);

	var _tabTelephone = __webpack_require__(160);

	var _tabTelephone2 = _interopRequireDefault(_tabTelephone);

	var _tabAccount = __webpack_require__(165);

	var _tabAccount2 = _interopRequireDefault(_tabAccount);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				phoneLogin: '短信验证码登录',
				accountLogin: '账号密码登录',
				currentTab: 'tab-account' // 默认选中的 Tab
			};
		},
		components: {
			nvHeader: _header2.default,
			tabTelephone: _tabTelephone2.default,
			'tab-account': _tabAccount2.default
		},
		methods: {
			// 绑定 Tab 切换事件
			toggleTabs: function toggleTabs(tabText) {
				if (tabText === "短信验证码登录") {
					this.currentTab = 'tab-telephone';
				} else {
					this.currentTab = 'tab-account';
				}
			}
		}
	};
	// </script>
	// <style>
	// 	.login-con {
	// 		background: #fff;
	// 		font-size: 0.28rem;
	// 		margin-top:1.2rem;
	// 	}
	// 	.login-way{
	// 		width:100%;
	// 		height:0.8rem;
	// 		border-bottom:1px solid #dddada;
	// 	}
	// 	.login-way li{
	// 		float:left;
	// 		width:2.1rem;
	// 	}
	// 	.login-way a{
	// 		display:block;
	// 		width:2.1rem;
	// 		height:0.75rem;
	// 		line-height:0.75rem;
	// 		color:#c3c3c3;
	// 		text-align:center;
	// 	}
	// 	.login-way li:first-child{
	// 		margin-left:1.35rem;
	// 		margin-right:0.92rem;
	// 	}
	// 	.login-way .login-way-border{
	// 		border-bottom:3px solid #0088fe;
	// 		color:#0088fe;
	// 	}
	// 	.login-box{
	// 		padding:0 0.35rem;
	// 		width:6.8rem;
	// 		height:0.96rem;
	// 		line-height:0.96rem;
	// 	}
	// 	.login-box span{
	// 		font-size:0.24rem;
	// 		color:#7c7c7c;
	// 	}
	// 	.register{
	// 		float:left;
	// 	}
	// 	.forget{
	// 		float:right;
	// 	}
	// 	.fade-transition {
	// 		transition: opacity .2s ease;
	// 	}
	// 	.fade-enter,.fade-leave {
	// 		opacity: 0;
	// 	}
	// 	.ins-header {
	// 		position:fixed;
	// 		top:0;
	// 		left:0;
	// 		width: 100%;
	// 		height: 0.9rem;
	// 		font-size: 0.34rem;
	// 		color: #404040;
	// 		text-align: center;
	// 		box-sizing: border-box;
	// 		line-height: 0.9rem;
	// 		border-bottom: 1px solid #e6e6e6;
	// 		background: #fff;
	// 	}
	// 	.goback-Btn{
	// 		position:absolute;
	// 		width: 0.9rem;
	// 		height:0.9rem;
	// 		left: 0;
	// 		top: 0;
	// 		background: url('../img/topbar_back@3x.png') no-repeat center center;
	// 		background-size: 80% 80%;
	// 	}
	//
	// </style>
	// <template>
	// 	<div class="ins-header">
	// 		<div class="goback-Btn" v-link="{name:'artlist'}"></div>
	// 		登录
	// 	</div>
	// 	<div class="login-con">
	// 		<ul class="login-way">
	// 			<li><a class="login-way-border" href="javascript:void(0);" @click="toggleTabs(accountLogin)" :class="[currentTab=='tab-account' ?'login-way-border':'']"> {{ accountLogin }}</a></li>
	// 			<li><a href="javascript:void(0);" @click="toggleTabs(phoneLogin)" :class="[currentTab=='tab-telephone' ?'login-way-border':'']">{{ phoneLogin }}</a></li>
	// 		</ul>
	// 		<div class="tab-content">
	// 			<component :is="currentTab" transition="fade" transition-mode="out-in" keep-alive></component>
	// 		</div>
	// 		<div class="login-box">
	// 			<span class="register" v-link="{name:'register'}">立即注册</span>
	// 			<span class="forget" v-link="{name:'forget'}">忘记密码？</span>
	// 		</div>
	// 	</div>
	// </template>
	// <script>

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(161)
	__vue_script__ = __webpack_require__(163)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\tabTelephone.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(164)
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
	  var id = "_v-f731cb74/tabTelephone.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabTelephone.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabTelephone.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.tab-account{\n    padding:0 0.35rem;\n    width:6.8rem;\n    height:auto;\n    margin-top:0.6rem;\n}\n.tab-account input,.tab-account button{\n    border:none;\n    background:none;\n    outline:none;\n}\n.tab-write{\n    width:6.78rem;\n    height:0.78rem;\n    line-height:0.78rem;\n    border:1px solid #dddada;\n    margin-bottom:0.25rem;\n}\n.tab-write span{\n    padding:0 0.28rem;\n    color:#494949;\n}\n.tab-write input{\n    color:#c3c3c3;\n    font-size:0.28rem;\n    /*line-height:0.78rem;*/\n    height:0.28rem;\n    padding:0.2rem 0 0.3rem 0;\n    width:5rem;\n}\n.tab-captcha{\n    width:4.78rem;\n    float:left;\n}\n.tab-captcha .input-code{\n    width:3.2rem;\n}\n.btn-captcha-box{\n    float:left;\n    width:2rem;\n    height:0.78rem;\n    background:#f2f2f2;\n    line-height:0.78rem;\n    text-align:center;\n}\n.btn-captcha{\n    color:#7c7c7c;\n    font-size:0.26rem;\n}\n.btn-login-box{\n    width:6.78rem;\n    height:0.78rem;\n    /*background:rgba(0,136,254,0.6);*/\n    border-radius:3px;\n    text-align:center;\n    line-height:0.8rem;\n    margin-top:0.35rem;\n    border:1px solid #10b1ff;\n    background: -webkit-linear-gradient(#025dff, #10b1ff);\n    background: linear-gradient(#025dff, #10b1ff); /* 从上到下 */\n}\n.btn-login{\n    width:100%;\n    height:100%;\n    font-size:0.28rem;\n    color:white;\n}\n.quick-login-tips{\n    display:none;\n    position:absolute;\n    bottom:0;\n    left:0;\n    top:0;\n    right:0;\n    margin:auto;\n    width:4.8rem;\n    height:0.8rem;\n    background:rgba(64,64,64,0.7);\n    font-size:0.28rem;\n    text-align:center;\n    line-height:0.8rem;\n    color:white;\n    border-radius:5px;\n}\n", ""]);

	// exports


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(31);

	var _store2 = _interopRequireDefault(_store);

	var _actions = __webpack_require__(70);

	var _getters = __webpack_require__(43);

	var _oftenUse = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="tab-account">
	//         <div class="tab-phone tab-write">
	//             <span>手机号</span>
	//             <input type="text" value="" v-model="quickTel" placeholder="请输入手机号码"/>
	//         </div>
	//         <div class="tab-phone tab-write">
	//             <div class="tab-captcha">
	//                 <span>验证码</span>
	//                 <input class="input-code" v-model="quickCode" type="text" value="" placeholder="请输入短信验证码"/>
	//             </div>
	//             <div class="btn-captcha-box">
	//                 <button class="btn-captcha" @click="quickGetCode">
	//                     获取验证码
	//                 </button>
	//             </div>
	//         </div>
	//         <div class="btn-login-box">
	//             <button class="btn-login" @click="quickLogin">登录</button>
	//         </div>
	//         <div class="quick-login-tips">
	//             账号错误
	//         </div>
	//     </div>
	// </template>
	// <script>
	var telReg = /^1(3[0-9]|4[57]|[0-35-9]|7[01678]|8[0-9])\d{8}$/;
	var codeReg = /\d{6}/;
	var waitTime = 60;
	exports.default = {
	    data: function data() {
	        return {
	            quickTel: '',
	            quickCode: '',
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
	            }
	        };
	    },
	    ready: function ready() {},
	    methods: {
	        quickGetCode: function quickGetCode() {
	            if (this.quickTel == '') {
	                $('.quick-login-tips').html('账号不能为空').fadeIn('slow');
	                setTimeout(function () {
	                    $('.quick-login-tips').fadeOut('slow');
	                }, 1500);
	            } else {
	                if (telReg.test(this.quickTel)) {
	                    var data = {
	                        "mobile": this.quickTel,
	                        "validType": 1,
	                        "sendType": 3 // quick login
	                    };
	                    $.post(_store2.default.state.hostUrl + 'getvalidcode', data, function (d) {
	                        //console.log(d)
	                        if (d) {
	                            if (d.retcode == 1000) {
	                                getCode($(".btn-captcha"));
	                            } else if (d.retcode == 2301) {
	                                $('.quick-login-tips').html('发送过于频繁').fadeIn('slow');
	                                setTimeout(function () {
	                                    $('.quick-login-tips').fadeOut('slow');
	                                }, 1500);
	                            } else if (d.retcode == 2302) {
	                                $('.quick-login-tips').html('您今天发送次数过多').fadeIn('slow');
	                                setTimeout(function () {
	                                    $('.quick-login-tips').fadeOut('slow');
	                                }, 1500);
	                            } else if (d.retcode == 2201) {
	                                $('.quick-login-tips').html('账户不存在，请先注册').fadeIn('slow');
	                                setTimeout(function () {
	                                    $('.quick-login-tips').fadeOut('slow');
	                                }, 1500);
	                            }
	                        }
	                    });
	                } else {
	                    $('.quick-login-tips').html('请输入正确的手机号码').fadeIn('slow');
	                    setTimeout(function () {
	                        $('.quick-login-tips').fadeOut('slow');
	                    }, 1500);
	                }
	            }
	        },
	        quickLogin: function quickLogin() {
	            var _this = this;

	            if (this.quickTel == '') {
	                $('.quick-login-tips').html('账号不能为空').fadeIn('slow');
	                setTimeout(function () {
	                    $('.quick-login-tips').fadeOut('slow');
	                }, 1500);
	            } else {
	                if (this.quickCode != '') {
	                    $.ajax({
	                        type: 'post',
	                        url: _store2.default.state.hostUrl + 'quicklogin',
	                        data: {
	                            userAccount: this.quickTel,
	                            validcode: this.quickCode,
	                            registerWay: 7
	                        },
	                        success: function success(data) {
	                            //console.log(data);
	                            var res = eval(data);
	                            if (data) {
	                                if (data.retcode == 2102) {
	                                    $('.quick-login-tips').html('验证码错误').fadeIn('slow');
	                                    setTimeout(function () {
	                                        $('.quick-login-tips').fadeOut('slow');
	                                    }, 1500);
	                                } else if (data.retcode == 1000) {
	                                    // 输入成功 进行登录
	                                    _this.hand_userLogin();
	                                    _this.userInfo.userId = data.data.userId;
	                                    (0, _oftenUse.setCookie)("sign_token", data.data.sign, 30);
	                                    (0, _oftenUse.setCookie)("token_id", data.data.userId, 30);
	                                    var sign_token = data.data.sign;
	                                    $.ajax({
	                                        type: 'post',
	                                        url: _store2.default.state.hostUrl + 'userinfo',
	                                        data: {
	                                            loginType: 1,
	                                            sign: sign_token
	                                        },
	                                        success: function success(res) {
	                                            //console.log(res);
	                                            if (res.data) {
	                                                if (res.data.userAccount) _this.userInfo.userAccount = res.data.userAccount;
	                                                if (res.data.avatar) _this.userInfo.avatar = res.data.avatar;
	                                                if (res.data.nickName) _this.userInfo.nickName = res.data.nickName;
	                                                if (res.data.birthday) _this.userInfo.birthday = res.data.birthday;
	                                                if (res.data.gender) _this.userInfo.gender = res.data.gender;
	                                                if (res.data.cityName) _this.userInfo.cityName = res.data.cityName;
	                                                if (res.data.email) _this.userInfo.email = res.data.email;
	                                                if (res.data.mobile) _this.userInfo.mobile = res.data.mobile;
	                                                _this.quickSetUserInfo(_this.userInfo);
	                                            }
	                                            //console.log(this.ache_getUserInfo);
	                                        }
	                                    });
	                                    _this.$router.go({ name: 'artlist' }); // 跳转到主页
	                                }
	                            }
	                        }
	                    });
	                } else {
	                    $('.quick-login-tips').html('请输入验证码').fadeIn('slow');
	                    setTimeout(function () {
	                        $('.quick-login-tips').fadeOut('slow');
	                    }, 1500);
	                }
	            }
	        }
	    },
	    store: _store2.default,
	    vuex: {
	        actions: {
	            hand_userLogin: _actions.isLogin,
	            quickSetUserInfo: _actions.setUserInfo
	        },
	        getters: {
	            ache_userLoginState: _getters.getLoginState,
	            ache_getUserInfo: _getters.getUserInfo
	        }
	    }
	};

	function getCode(O) {
	    if (waitTime == 0) {
	        O.attr('disabled', false);
	        O.html('获取验证码');
	        waitTime = 60;
	    } else {
	        O.attr('disabled', true);
	        O.html(waitTime + 's');
	        waitTime--;
	        setTimeout(function () {
	            getCode(O);
	        }, 1000);
	    }
	}
	// </script>
	// <style>
	//     .tab-account{
	//         padding:0 0.35rem;
	//         width:6.8rem;
	//         height:auto;
	//         margin-top:0.6rem;
	//     }
	//     .tab-account input,.tab-account button{
	//         border:none;
	//         background:none;
	//         outline:none;
	//     }
	//     .tab-write{
	//         width:6.78rem;
	//         height:0.78rem;
	//         line-height:0.78rem;
	//         border:1px solid #dddada;
	//         margin-bottom:0.25rem;
	//     }
	//     .tab-write span{
	//         padding:0 0.28rem;
	//         color:#494949;
	//     }
	//     .tab-write input{
	//         color:#c3c3c3;
	//         font-size:0.28rem;
	//         /*line-height:0.78rem;*/
	//         height:0.28rem;
	//         padding:0.2rem 0 0.3rem 0;
	//         width:5rem;
	//     }
	//     .tab-captcha{
	//         width:4.78rem;
	//         float:left;
	//     }
	//     .tab-captcha .input-code{
	//         width:3.2rem;
	//     }
	//     .btn-captcha-box{
	//         float:left;
	//         width:2rem;
	//         height:0.78rem;
	//         background:#f2f2f2;
	//         line-height:0.78rem;
	//         text-align:center;
	//     }
	//     .btn-captcha{
	//         color:#7c7c7c;
	//         font-size:0.26rem;
	//     }
	//     .btn-login-box{
	//         width:6.78rem;
	//         height:0.78rem;
	//         /*background:rgba(0,136,254,0.6);*/
	//         border-radius:3px;
	//         text-align:center;
	//         line-height:0.8rem;
	//         margin-top:0.35rem;
	//         border:1px solid #10b1ff;
	//         background: -webkit-linear-gradient(#025dff, #10b1ff);
	//         background: -o-linear-gradient(#025dff, #10b1ff);
	//         background: -moz-linear-gradient(#025dff, #10b1ff);
	//         background: linear-gradient(#025dff, #10b1ff); /* 从上到下 */
	//     }
	//     .btn-login{
	//         width:100%;
	//         height:100%;
	//         font-size:0.28rem;
	//         color:white;
	//     }
	//     .quick-login-tips{
	//         display:none;
	//         position:absolute;
	//         bottom:0;
	//         left:0;
	//         top:0;
	//         right:0;
	//         margin:auto;
	//         width:4.8rem;
	//         height:0.8rem;
	//         background:rgba(64,64,64,0.7);
	//         font-size:0.28rem;
	//         text-align:center;
	//         line-height:0.8rem;
	//         color:white;
	//         border-radius:5px;
	//     }
	// </style>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"tab-account\">\n    <div class=\"tab-phone tab-write\">\n        <span>手机号</span>\n        <input type=\"text\" value=\"\" v-model=\"quickTel\" placeholder=\"请输入手机号码\"/>\n    </div>\n    <div class=\"tab-phone tab-write\">\n        <div class=\"tab-captcha\">\n            <span>验证码</span>\n            <input class=\"input-code\" v-model=\"quickCode\" type=\"text\" value=\"\" placeholder=\"请输入短信验证码\"/>\n        </div>\n        <div class=\"btn-captcha-box\">\n            <button class=\"btn-captcha\" @click=\"quickGetCode\">\n                获取验证码\n            </button>\n        </div>\n    </div>\n    <div class=\"btn-login-box\">\n        <button class=\"btn-login\" @click=\"quickLogin\">登录</button>\n    </div>\n    <div class=\"quick-login-tips\">\n        账号错误\n    </div>\n</div>\n";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(166)
	__vue_script__ = __webpack_require__(168)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\tabAccount.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(169)
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
	  var id = "_v-30c0166f/tabAccount.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(167);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabAccount.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabAccount.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.login-tips{\n    display:none;\n    position:absolute;\n    bottom:0;\n    left:0;\n    top:0;\n    right:0;\n    margin:auto;\n    width:4.8rem;\n    height:0.8rem;\n    background:rgba(64,64,64,0.7);\n    font-size:0.28rem;\n    text-align:center;\n    line-height:0.8rem;\n    color:white;\n    border-radius:5px;\n}\n", ""]);

	// exports


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(31);

	var _store2 = _interopRequireDefault(_store);

	var _actions = __webpack_require__(70);

	var _getters = __webpack_require__(43);

	var _oftenUse = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div id="accountLogin">
	//         <div class="tab-account">
	//             <div class="tab-phone tab-write">
	//                 <span>手机号</span>
	//                 <input type="text" value="" v-model="accountPhone" placeholder="请输入手机号"/>
	//             </div>
	//             <div class="tab-phone tab-write">
	//                 <span>密&nbsp;&nbsp;&nbsp;码</span>
	//                 <input type="password" value="" v-model="accountPassword" placeholder="请输入密码"/>
	//             </div>
	//             <div class="btn-login-box">
	//                 <button class="btn-login" @click="accountLogin">登录</button>
	//             </div>
	//         </div>
	//         <div class="login-tips">
	//             用户不存在
	//         </div>
	//     </div>
	// </template>
	// <script>
	var md5 = __webpack_require__(95);
	exports.default = {
	    data: function data() {
	        return {
	            accountPhone: '',
	            accountPassword: '',
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
	            }
	        };
	    },
	    methods: {
	        accountLogin: function accountLogin() {
	            var _this = this;

	            // from store params
	            var hash = md5(this.accountPassword);
	            this.userInfo.password = this.accountPassword;
	            // judge input not null
	            if (this.accountPhone != '' && this.accountPassword != '') {
	                $.ajax({
	                    type: "post",
	                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	                    url: _store2.default.state.hostUrl + "login",
	                    cache: false,
	                    data: {
	                        "userAccount": this.accountPhone,
	                        "password": hash
	                    },
	                    complete: function complete(resp) {
	                        //console.log(resp.getAllResponseHeaders());
	                    },
	                    error: function error() {
	                        //console.log("error")
	                    },
	                    success: function success(data) {
	                        var res = eval(data);
	                        //console.log(data);
	                        if (data) {
	                            if (data.retcode == 1000) {
	                                // 设置登录状态为 true
	                                _this.hand_userLogin();
	                                //console.log(this.ache_userLoginState);   //true
	                                // this.ache_getUserInfo.userId = data.data.userId;  // 把登录成功的 userId 放进 store
	                                _this.userInfo.userId = data.data.userId;
	                                (0, _oftenUse.setCookie)("sign_token", data.data.sign, 30);
	                                (0, _oftenUse.setCookie)("token_id", data.data.userId, 30);
	                                var sign_token = data.data.sign;
	                                $.ajax({
	                                    type: 'post',
	                                    url: _store2.default.state.hostUrl + 'userinfo',
	                                    data: {
	                                        loginType: 1,
	                                        sign: sign_token
	                                    },
	                                    success: function success(res) {
	                                        //console.log(res);
	                                        if (res.data) {
	                                            // this.ache_getUserInfo.nickName = res.data.nickName;
	                                            // this.ache_getUserInfo.userAccount = res.data.userAccount;
	                                            // this.ache_getUserInfo.avatar = res.data.avatar;
	                                            // this.ache_getUserInfo.password = res.data.hasPwd;
	                                            // this.ache_getUserInfo.gender = res.data.gender;
	                                            // this.ache_getUserInfo.birthday = res.data.birthday;
	                                            // this.ache_getUserInfo.cityName = res.data.cityName;
	                                            // this.ache_getUserInfo.email = res.data.email;
	                                            if (res.data.userAccount) _this.userInfo.userAccount = res.data.userAccount;
	                                            if (res.data.avatar) _this.userInfo.avatar = res.data.avatar;
	                                            if (res.data.nickName) _this.userInfo.nickName = res.data.nickName;
	                                            if (res.data.birthday) _this.userInfo.birthday = res.data.birthday;
	                                            if (res.data.gender) _this.userInfo.gender = res.data.gender;
	                                            if (res.data.cityName) _this.userInfo.cityName = res.data.cityName;
	                                            if (res.data.email) _this.userInfo.email = res.data.email;
	                                            if (res.data.mobile) _this.userInfo.mobile = res.data.mobile;
	                                            _this.tabSetUserInfo(_this.userInfo);
	                                        }
	                                        //console.log(this.ache_getUserInfo);
	                                    }
	                                });
	                                _this.$router.go({ name: 'artlist' }); // jump to the home page
	                            } else if (data.retcode == 2201) {
	                                $('.login-tips').html('用户名不存在').fadeIn('slow');
	                                setTimeout(function () {
	                                    $('.login-tips').fadeOut('slow');
	                                }, 1500);
	                            } else if (data.retcode == 2202) {
	                                $('.login-tips').html('账号名错误').fadeIn('slow');
	                                setTimeout(function () {
	                                    $('.login-tips').fadeOut('slow');
	                                }, 1500);
	                            } else if (data.retcode == 2203) {
	                                $('.login-tips').html('密码错误').fadeIn('slow');
	                                setTimeout(function () {
	                                    $('.login-tips').fadeOut('slow');
	                                }, 1500);
	                            }
	                        }
	                    }
	                });
	            } else {
	                $('.login-tips').html('账户名和密码不能为空').fadeIn('slow');
	                setTimeout(function () {
	                    $('.login-tips').fadeOut('slow');
	                }, 1500);
	            }
	        }
	    },
	    store: _store2.default,
	    vuex: {
	        actions: {
	            hand_userLogin: _actions.isLogin,
	            tabSetUserInfo: _actions.setUserInfo
	        },
	        getters: {
	            ache_userLoginState: _getters.getLoginState,
	            ache_getUserInfo: _getters.getUserInfo
	        }
	    }
	};
	// </script>
	// <style>
	//     .login-tips{
	//         display:none;
	//         position:absolute;
	//         bottom:0;
	//         left:0;
	//         top:0;
	//         right:0;
	//         margin:auto;
	//         width:4.8rem;
	//         height:0.8rem;
	//         background:rgba(64,64,64,0.7);
	//         font-size:0.28rem;
	//         text-align:center;
	//         line-height:0.8rem;
	//         color:white;
	//         border-radius:5px;
	//     }
	// </style>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"accountLogin\">\n    <div class=\"tab-account\">\n        <div class=\"tab-phone tab-write\">\n            <span>手机号</span>\n            <input type=\"text\" value=\"\" v-model=\"accountPhone\" placeholder=\"请输入手机号\"/>\n        </div>\n        <div class=\"tab-phone tab-write\">\n            <span>密&nbsp;&nbsp;&nbsp;码</span>\n            <input type=\"password\" value=\"\" v-model=\"accountPassword\" placeholder=\"请输入密码\"/>\n        </div>\n        <div class=\"btn-login-box\">\n            <button class=\"btn-login\" @click=\"accountLogin\">登录</button>\n        </div>\n    </div>\n    <div class=\"login-tips\">\n        用户不存在\n    </div>\n</div>\n";

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ins-header\">\n\t<div class=\"goback-Btn\" v-link=\"{name:'artlist'}\"></div>\n\t登录\n</div>\n<div class=\"login-con\">\n\t<ul class=\"login-way\">\n\t\t<li><a class=\"login-way-border\" href=\"javascript:void(0);\" @click=\"toggleTabs(accountLogin)\" :class=\"[currentTab=='tab-account' ?'login-way-border':'']\"> {{ accountLogin }}</a></li>\n\t\t<li><a href=\"javascript:void(0);\" @click=\"toggleTabs(phoneLogin)\" :class=\"[currentTab=='tab-telephone' ?'login-way-border':'']\">{{ phoneLogin }}</a></li>\n\t</ul>\n\t<div class=\"tab-content\">\n\t\t<component :is=\"currentTab\" transition=\"fade\" transition-mode=\"out-in\" keep-alive></component>\n\t</div>\n\t<div class=\"login-box\">\n\t\t<span class=\"register\" v-link=\"{name:'register'}\">立即注册</span>\n\t\t<span class=\"forget\" v-link=\"{name:'forget'}\">忘记密码？</span>\n\t</div>\n</div>\n";

/***/ }
]);
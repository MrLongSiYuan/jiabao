webpackJsonp([18,30],{

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

/***/ 31:
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

/***/ 32:
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

/***/ 33:
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

/***/ 43:
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

/***/ 70:
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

/***/ 76:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABGdBTUEAALGPC/xhBQAAAm5JREFUeAHt3E1Kw0AUB/BGQVtsD9Bds3Dr0oVdFaHUTXGjR/EQeoCew1UEF0XBE3iACi5cuEz29T0kUMQ2TT/mfcx/IIQkj5mX30BKMtNpNFAgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAATqCRzWC7cTPR6PO91u9zFN0w8qn9KZH0gnsI/2GTnP84zqHs3n82wwGPT30U6dOpM6wRZiS2QCXsTNkyS5mk6nb1L34Ap6CXJpK4rtBroCWRzbBfSayKLY5n8MayIzdoe2+1I91N409AbI7PrebDavQwGX7Zh9dGyK3Gq1LrMs+y4BQu1NQltD5s40B20R2Ry0VWRT0JaRzUBbRzYB7QFZPbQXZNXQnpDVQntDVgntEVkdtFdkVdCekdVAe0dWAR0Dsjh0LMii0DEhi0HHhiwCHSMyQwcfMyyK4pQmt5xx4zXKi8TwU438KkODz72bzWZfNB/ulTK7oe24MsPfgPNer9emOXTPa8arCwsOzQI86XAD7AvL2CLQMWKLQceGLQodE7Y4dCzYKqBjwFYD7R1bFbRnbHXQXrFVQnvEVgv9B/uWjo/43BpF5RukamhGXXhdN42tHnobbPqeckIdpeJDlAnoLbD7WrDNQFvHNgVtGdsctFVsk9AWsc1CW8MOPjjLQLssvGIBrVwwojqLXda767rM/f1tGQCvyUGj6090vb0shs9TpzxQ59ytitnHNTfQjFOFLYXMubmCXoUtiewS+j9saWS30IvYhDyReCZzDtGU4XCYRnOzuFEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAATCCfwAz+YhtEKsitsAAAAASUVORK5CYII="

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(199)
	__vue_script__ = __webpack_require__(201)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\chooseCity.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(202)
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
	  var id = "_v-04453e8e/chooseCity.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(200);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./chooseCity.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./chooseCity.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.hot-city{\n    width:100%;\n    font-size:0.3rem;\n    color:#404040;\n    margin-top:0.9rem;\n}\n.hot-city-title{\n    width:7.15rem;\n    display:inline-block;\n    color:#a6c7e0;\n    padding:0.2rem 0 0.18rem 0.35rem;\n    border-bottom:1px solid #e6e6e6;\n}\n.hot-city-list li{\n    float:left;\n    width:1.7rem;\n    height:0.6rem;\n    border-bottom:1px solid #e6e6e6;\n    border-right:1px solid #e6e6e6;\n    line-height:0.6rem;\n    text-align:center;\n    background:#fff;\n    cursor: pointer;\n}\n.hot-city-list .hot-no-border{\n    border-right:none;\n}\n.loan_jm_l1{\n    margin-top:0.9rem;\n    width:100%;\n    height:0.5rem;\n    line-height:0.5rem;\n    background: #89aee0;\n    color:#fff;\n}\n.loan_jm_spa1{\n    width:2rem;\n    font-size:0.3rem;\n    float:left;\n    height:0.3rem;\n    display:block;\n}\n.has-chose-city{\n    display:block;\n    float:left;\n    width:5rem;\n    height:0.46rem;\n    border:1px solid #a29f8e;\n    background:#fff;\n    font-size:0.3rem;\n    color: #657ee0;\n}\n.city{\n    width:100%;\n    height:auto;\n    font-size:0.3rem;\n    color:#404040;\n    background:#fff;\n}\n.city-list{\n    width:100%;\n    overflow:hidden;\n}\n.city-list .city-letter{\n    width:100%;\n    display:inline-block;\n    color:#a6c7e0;\n    padding:0.2rem 0 0.14rem 0.2rem;\n    background:#f8f8f8;\n    /*border-bottom:1px solid #b9b9b9;*/\n}\n.city-list p{\n    height:0.8rem;\n    width:88%;\n    margin-left:4%;\n    line-height:0.8rem;\n    border-bottom:1px solid #d2d2d2;\n    cursor: pointer;\n}\n.city-list p:last-child{\n    border-bottom:none;\n}\n.letter{\n    width:0.6rem;\n    position:fixed;\n    right:0;\n    top:2.3rem;\n}\n.letter-ul li{\n    width:100%;\n    height:0.38rem;\n    font-size:0.22rem;\n    color:#89aee0;\n    text-align:center;\n    line-height:0.38rem;\n}\n.letter .letter-hot-fixed{\n    font-size:0.2rem;\n    position:absolute;\n    top:-0.4rem;\n    right:0.1rem;\n    color:#89aee0;\n}\n.ins-header {\n    position:fixed;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 0.9rem;\n    font-size: 0.34rem;\n    color: #404040;\n    text-align: center;\n    box-sizing: border-box;\n    line-height: 0.9rem;\n    border-bottom: 1px solid #e6e6e6;\n    background: #fff;\n}\n.goback-Btn{\n    position:absolute;\n    width: 0.9rem;\n    height:0.9rem;\n    left: 0;\n    top: 0;\n    background: url(" + __webpack_require__(76) + ") no-repeat center center;\n    background-size: 80% 80%;\n}\n", ""]);

	// exports


/***/ },

/***/ 201:
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
	//     <div class="choose-all-city">
	//         <div class="ins-header">
	//             <div class="goback-Btn" v-link="{name:'personaldata'}"></div>
	//             选择城市
	//         </div>
	//         <!--<div class="loan_jm_l1 ">-->
	//             <!--<span class="loan_jm_spa1">工作所在城市</span>-->
	//             <!--<span class="has-chose-city" id="hasChoseCity" data-id="130100"></span>-->
	//         <!--</div>-->
	//         <div class="hot-city">
	//             <span id="hotCities" class="hot-city-title">热门城市</span>
	//             <ul class="hot-city-list">
	//                 <li data-id="{{ hotCityList.id }}" v-for="hotCityList in hotCityLists" @click="choseHotCityMethod"> {{ hotCityList.name }} </li>
	//             </ul>
	//         </div>
	//         <div class="city">
	//             <div class="city-list">
	//                 <span class="city-letter" id="A1">A</span>
	//                 <p data-id="{{ cityAlist.id }}" v-for="(index,cityAlist) in cityAlists">{{ cityAlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="B1">B</span>
	//                 <p data-id="{{ cityBlist.id }}" v-for="(index,cityBlist) in cityBlists">{{ cityBlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="C1">C</span>
	//                 <p data-id="{{ cityClist.id }}" v-for="(index,cityClist) in cityClists">{{ cityClist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="D1">D</span>
	//                 <p data-id="{{ cityDlist.id }}" v-for="(index,cityDlist) in cityDlists">{{ cityDlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="E1">E</span>
	//                 <p data-id="{{ cityElist.id }}" v-for="(index,cityElist) in cityElists">{{ cityElist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="F1">F</span>
	//                 <p data-id="{{ cityFlist.id }}" v-for="(index,cityFlist) in cityFlists">{{ cityFlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="G1">G</span>
	//                 <p data-id="{{ cityGlist.id }}" v-for="(index,cityGlist) in cityGlists">{{ cityGlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="H1">H</span>
	//                 <p data-id="{{ cityHlist.id }}" v-for="(index,cityHlist) in cityHlists">{{ cityHlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="J1">J</span>
	//                 <p data-id="{{ cityJlist.id }}" v-for="(index,cityJlist) in cityJlists">{{ cityJlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="K1">K</span>
	//                 <p data-id="{{ cityKlist.id }}" v-for="(index,cityKlist) in cityKlists">{{ cityKlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="L1">L</span>
	//                 <p data-id="{{ cityLlist.id }}" v-for="(index,cityLlist) in cityLlists">{{ cityLlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="M1">M</span>
	//                 <p data-id="{{ cityMlist.id }}" v-for="(index,cityMlist) in cityMlists">{{ cityMlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="N1">N</span>
	//                 <p data-id="{{ cityNlist.id }}" v-for="(index,cityNlist) in cityNlists">{{ cityNlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="P1">P</span>
	//                 <p data-id="{{ cityPlist.id }}" v-for="(index,cityPlist) in cityPlists">{{ cityPlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="Q1">Q</span>
	//                 <p data-id="{{ cityQlist.id }}" v-for="(index,cityQlist) in cityQlists">{{ cityQlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="R1">R</span>
	//                 <p data-id="{{ cityRlist.id }}" v-for="(index,cityRlist) in cityRlists">{{ cityRlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="S1">S</span>
	//                 <p data-id="{{ citySlist.id }}" v-for="(index,citySlist) in citySlists">{{ citySlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="T1">T</span>
	//                 <p data-id="{{ cityTlist.id }}" v-for="(index,cityTlist) in cityTlists">{{ cityTlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="W1">W</span>
	//                 <p data-id="{{ cityWlist.id }}" v-for="(index,cityWlist) in cityWlists">{{ cityWlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="X1">X</span>
	//                 <p data-id="{{ cityXlist.id }}" v-for="(index,cityXlist) in cityXlists">{{ cityXlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="Y1">Y</span>
	//                 <p data-id="{{ cityYlist.id }}" v-for="(index,cityYlist) in cityYlists">{{ cityYlist.name }}</p>
	//             </div>
	//             <div class="city-list">
	//                 <span class="city-letter" id="Z1">Z</span>
	//                 <p data-id="{{ cityZlist.id }}" v-for="(index,cityZlist) in cityZlists">{{ cityZlist.name }}</p>
	//             </div>
	//         </div>
	//         <div class="letter">
	//             <div class="letter-hot-fixed">热门</div>
	//             <ul class="letter-ul">
	//                 <li>A</li>
	//                 <li>B</li>
	//                 <li>C</li>
	//                 <li>D</li>
	//                 <li>E</li>
	//                 <li>F</li>
	//                 <li>G</li>
	//                 <li>H</li>
	//                 <li>J</li>
	//                 <li>K</li>
	//                 <li>L</li>
	//                 <li>M</li>
	//                 <li>N</li>
	//                 <li>P</li>
	//                 <li>Q</li>
	//                 <li>R</li>
	//                 <li>S</li>
	//                 <li>T</li>
	//                 <li>W</li>
	//                 <li>X</li>
	//                 <li>Y</li>
	//                 <li>Z</li>
	//             </ul>
	//         </div>
	//     </div>
	//
	// </template>
	// <script>
	var minusTop = document.documentElement.clientWidth / 750 * 90;
	var getChoseCity;
	exports.default = {
	    store: _store2.default,
	    data: function data() {
	        return {
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
	            hotCityLists: [],
	            cityAlists: [],
	            cityBlists: [],
	            cityClists: [],
	            cityDlists: [],
	            cityElists: [],
	            cityFlists: [],
	            cityGlists: [],
	            cityHlists: [],
	            cityJlists: [],
	            cityKlists: [],
	            cityLlists: [],
	            cityMlists: [],
	            cityNlists: [],
	            cityPlists: [],
	            cityQlists: [],
	            cityRlists: [],
	            citySlists: [],
	            cityTlists: [],
	            cityWlists: [],
	            cityXlists: [],
	            cityYlists: [],
	            cityZlists: []
	        };
	    },
	    ready: function ready() {
	        var _this = this;

	        // 获取登录 sign
	        if ((0, _oftenUse.getCookieResult)("sign_token")) {
	            this.signToken = (0, _oftenUse.getCookieResult)("sign_token");
	            this.hand_userLogin();
	            this.isLoginFlag = this.ache_userLoginState;
	        }
	        this.userInfo = this.ache_getUserInfo;
	        // 获取城市信息
	        $.ajax({
	            type: 'post',
	            url: _store2.default.state.hostUrl + 'allcity',
	            complete: function complete(d) {},
	            success: function success(res) {
	                //console.log(this.userInfo.nickName);
	                var res = eval(res);
	                //console.log(res.data.map.a)
	                _this.hotCityLists = res.data.hots;
	                _this.cityAlists = res.data.map.a;
	                _this.cityBlists = res.data.map.b;
	                _this.cityClists = res.data.map.c;
	                _this.cityDlists = res.data.map.d;
	                _this.cityElists = res.data.map.e;
	                _this.cityFlists = res.data.map.f;
	                _this.cityGlists = res.data.map.g;
	                _this.cityHlists = res.data.map.h;
	                _this.cityJlists = res.data.map.j;
	                _this.cityKlists = res.data.map.k;
	                _this.cityLlists = res.data.map.l;
	                _this.cityMlists = res.data.map.m;
	                _this.cityNlists = res.data.map.n;
	                _this.cityPlists = res.data.map.p;
	                _this.cityQlists = res.data.map.q;
	                _this.cityRlists = res.data.map.r;
	                _this.citySlists = res.data.map.s;
	                _this.cityTlists = res.data.map.t;
	                _this.cityWlists = res.data.map.w;
	                _this.cityXlists = res.data.map.x;
	                _this.cityYlists = res.data.map.y;
	                _this.cityZlists = res.data.map.z;
	            }

	        });
	        // 点击 字母 跳转
	        $('.letter-ul li').on('click', function () {
	            //console.log(minusTop);
	            var getLetter = $(this).html();
	            $(window).scrollTop($('#' + getLetter + '1').offset().top - minusTop);
	        });
	        // 点击 hot 跳转
	        $('.letter-hot-fixed').on('click', function () {
	            $(window).scrollTop($('#hotCities').offset().top - minusTop);
	        });
	        // 选择 城市
	        $('body').on('click', '.city p', function (e) {
	            var currentP = e.target;
	            var currentAllCityId = $(currentP).attr('data-id');
	            var currentAllCity = $(currentP).html();
	            //console.log($(currentP).html());
	            _this.userInfo.cityName = currentAllCity;
	            $.ajax({
	                type: 'post',
	                url: _store2.default.state.hostUrl + 'modifyuserinfo',
	                data: {
	                    loginType: 1,
	                    sign: _this.signToken,
	                    city: currentAllCityId
	                },
	                success: function success(res) {
	                    //console.log(res);
	                    _this.citySetUserInfo(_this.userInfo);
	                    _this.$router.go({ name: 'personaldata' });
	                }
	            });
	        });
	    },
	    methods: {
	        // 选择热门城市
	        choseHotCityMethod: function choseHotCityMethod(event) {
	            var _this2 = this;

	            var currentChose = event.currentTarget;
	            var currentChoseHotCityId = $(currentChose).attr('data-id');
	            var currentChoseHotCity = $(currentChose).html();
	            //console.log(currentChoseHotCity);
	            //console.log(currentChoseHotCityId);
	            this.userInfo.cityName = currentChoseHotCity;
	            $.ajax({
	                type: 'post',
	                url: _store2.default.state.hostUrl + 'modifyuserinfo',
	                data: {
	                    loginType: 1,
	                    sign: this.signToken,
	                    city: currentChoseHotCityId
	                },
	                success: function success(res) {
	                    _this2.citySetUserInfo(_this2.userInfo);
	                    _this2.$router.go({ name: 'personaldata' });
	                }
	            });
	        }
	    },
	    vuex: {
	        actions: {
	            hand_userLogin: _actions.isLogin,
	            citySetUserInfo: _actions.setUserInfo
	        },
	        getters: {
	            ache_userLoginState: _getters.getLoginState,
	            ache_getUserInfo: _getters.getUserInfo,
	            ache_getSignToken: _getters.getSignToken
	        }
	    }
	};
	// </script>
	// <style>
	//     .hot-city{
	//         width:100%;
	//         font-size:0.3rem;
	//         color:#404040;
	//         margin-top:0.9rem;
	//     }
	//     .hot-city-title{
	//         width:7.15rem;
	//         display:inline-block;
	//         color:#a6c7e0;
	//         padding:0.2rem 0 0.18rem 0.35rem;
	//         border-bottom:1px solid #e6e6e6;
	//     }
	//     .hot-city-list li{
	//         float:left;
	//         width:1.7rem;
	//         height:0.6rem;
	//         border-bottom:1px solid #e6e6e6;
	//         border-right:1px solid #e6e6e6;
	//         line-height:0.6rem;
	//         text-align:center;
	//         background:#fff;
	//         cursor: pointer;
	//     }
	//     .hot-city-list .hot-no-border{
	//         border-right:none;
	//     }
	//     .loan_jm_l1{
	//         margin-top:0.9rem;
	//         width:100%;
	//         height:0.5rem;
	//         line-height:0.5rem;
	//         background: #89aee0;
	//         color:#fff;
	//     }
	//     .loan_jm_spa1{
	//         width:2rem;
	//         font-size:0.3rem;
	//         float:left;
	//         height:0.3rem;
	//         display:block;
	//     }
	//     .has-chose-city{
	//         display:block;
	//         float:left;
	//         width:5rem;
	//         height:0.46rem;
	//         border:1px solid #a29f8e;
	//         background:#fff;
	//         font-size:0.3rem;
	//         color: #657ee0;
	//     }
	//     .city{
	//         width:100%;
	//         height:auto;
	//         font-size:0.3rem;
	//         color:#404040;
	//         background:#fff;
	//     }
	//     .city-list{
	//         width:100%;
	//         overflow:hidden;
	//     }
	//     .city-list .city-letter{
	//         width:100%;
	//         display:inline-block;
	//         color:#a6c7e0;
	//         padding:0.2rem 0 0.14rem 0.2rem;
	//         background:#f8f8f8;
	//         /*border-bottom:1px solid #b9b9b9;*/
	//     }
	//     .city-list p{
	//         height:0.8rem;
	//         width:88%;
	//         margin-left:4%;
	//         line-height:0.8rem;
	//         border-bottom:1px solid #d2d2d2;
	//         cursor: pointer;
	//     }
	//     .city-list p:last-child{
	//         border-bottom:none;
	//     }
	//     .letter{
	//         width:0.6rem;
	//         position:fixed;
	//         right:0;
	//         top:2.3rem;
	//     }
	//     .letter-ul li{
	//         width:100%;
	//         height:0.38rem;
	//         font-size:0.22rem;
	//         color:#89aee0;
	//         text-align:center;
	//         line-height:0.38rem;
	//     }
	//     .letter .letter-hot-fixed{
	//         font-size:0.2rem;
	//         position:absolute;
	//         top:-0.4rem;
	//         right:0.1rem;
	//         color:#89aee0;
	//     }
	//     .ins-header {
	//         position:fixed;
	//         top:0;
	//         left:0;
	//         width: 100%;
	//         height: 0.9rem;
	//         font-size: 0.34rem;
	//         color: #404040;
	//         text-align: center;
	//         box-sizing: border-box;
	//         line-height: 0.9rem;
	//         border-bottom: 1px solid #e6e6e6;
	//         background: #fff;
	//     }
	//     .goback-Btn{
	//         position:absolute;
	//         width: 0.9rem;
	//         height:0.9rem;
	//         left: 0;
	//         top: 0;
	//         background: url('../img/topbar_back@3x.png') no-repeat center center;
	//         background-size: 80% 80%;
	//     }
	// </style>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 202:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"choose-all-city\">\n    <div class=\"ins-header\">\n        <div class=\"goback-Btn\" v-link=\"{name:'personaldata'}\"></div>\n        选择城市\n    </div>\n    <!--<div class=\"loan_jm_l1 \">-->\n        <!--<span class=\"loan_jm_spa1\">工作所在城市</span>-->\n        <!--<span class=\"has-chose-city\" id=\"hasChoseCity\" data-id=\"130100\"></span>-->\n    <!--</div>-->\n    <div class=\"hot-city\">\n        <span id=\"hotCities\" class=\"hot-city-title\">热门城市</span>\n        <ul class=\"hot-city-list\">\n            <li data-id=\"{{ hotCityList.id }}\" v-for=\"hotCityList in hotCityLists\" @click=\"choseHotCityMethod\"> {{ hotCityList.name }} </li>\n        </ul>\n    </div>\n    <div class=\"city\">\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"A1\">A</span>\n            <p data-id=\"{{ cityAlist.id }}\" v-for=\"(index,cityAlist) in cityAlists\">{{ cityAlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"B1\">B</span>\n            <p data-id=\"{{ cityBlist.id }}\" v-for=\"(index,cityBlist) in cityBlists\">{{ cityBlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"C1\">C</span>\n            <p data-id=\"{{ cityClist.id }}\" v-for=\"(index,cityClist) in cityClists\">{{ cityClist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"D1\">D</span>\n            <p data-id=\"{{ cityDlist.id }}\" v-for=\"(index,cityDlist) in cityDlists\">{{ cityDlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"E1\">E</span>\n            <p data-id=\"{{ cityElist.id }}\" v-for=\"(index,cityElist) in cityElists\">{{ cityElist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"F1\">F</span>\n            <p data-id=\"{{ cityFlist.id }}\" v-for=\"(index,cityFlist) in cityFlists\">{{ cityFlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"G1\">G</span>\n            <p data-id=\"{{ cityGlist.id }}\" v-for=\"(index,cityGlist) in cityGlists\">{{ cityGlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"H1\">H</span>\n            <p data-id=\"{{ cityHlist.id }}\" v-for=\"(index,cityHlist) in cityHlists\">{{ cityHlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"J1\">J</span>\n            <p data-id=\"{{ cityJlist.id }}\" v-for=\"(index,cityJlist) in cityJlists\">{{ cityJlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"K1\">K</span>\n            <p data-id=\"{{ cityKlist.id }}\" v-for=\"(index,cityKlist) in cityKlists\">{{ cityKlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"L1\">L</span>\n            <p data-id=\"{{ cityLlist.id }}\" v-for=\"(index,cityLlist) in cityLlists\">{{ cityLlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"M1\">M</span>\n            <p data-id=\"{{ cityMlist.id }}\" v-for=\"(index,cityMlist) in cityMlists\">{{ cityMlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"N1\">N</span>\n            <p data-id=\"{{ cityNlist.id }}\" v-for=\"(index,cityNlist) in cityNlists\">{{ cityNlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"P1\">P</span>\n            <p data-id=\"{{ cityPlist.id }}\" v-for=\"(index,cityPlist) in cityPlists\">{{ cityPlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"Q1\">Q</span>\n            <p data-id=\"{{ cityQlist.id }}\" v-for=\"(index,cityQlist) in cityQlists\">{{ cityQlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"R1\">R</span>\n            <p data-id=\"{{ cityRlist.id }}\" v-for=\"(index,cityRlist) in cityRlists\">{{ cityRlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"S1\">S</span>\n            <p data-id=\"{{ citySlist.id }}\" v-for=\"(index,citySlist) in citySlists\">{{ citySlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"T1\">T</span>\n            <p data-id=\"{{ cityTlist.id }}\" v-for=\"(index,cityTlist) in cityTlists\">{{ cityTlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"W1\">W</span>\n            <p data-id=\"{{ cityWlist.id }}\" v-for=\"(index,cityWlist) in cityWlists\">{{ cityWlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"X1\">X</span>\n            <p data-id=\"{{ cityXlist.id }}\" v-for=\"(index,cityXlist) in cityXlists\">{{ cityXlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"Y1\">Y</span>\n            <p data-id=\"{{ cityYlist.id }}\" v-for=\"(index,cityYlist) in cityYlists\">{{ cityYlist.name }}</p>\n        </div>\n        <div class=\"city-list\">\n            <span class=\"city-letter\" id=\"Z1\">Z</span>\n            <p data-id=\"{{ cityZlist.id }}\" v-for=\"(index,cityZlist) in cityZlists\">{{ cityZlist.name }}</p>\n        </div>\n    </div>\n    <div class=\"letter\">\n        <div class=\"letter-hot-fixed\">热门</div>\n        <ul class=\"letter-ul\">\n            <li>A</li>\n            <li>B</li>\n            <li>C</li>\n            <li>D</li>\n            <li>E</li>\n            <li>F</li>\n            <li>G</li>\n            <li>H</li>\n            <li>J</li>\n            <li>K</li>\n            <li>L</li>\n            <li>M</li>\n            <li>N</li>\n            <li>P</li>\n            <li>Q</li>\n            <li>R</li>\n            <li>S</li>\n            <li>T</li>\n            <li>W</li>\n            <li>X</li>\n            <li>Y</li>\n            <li>Z</li>\n        </ul>\n    </div>\n</div>\n\n";

/***/ }

});
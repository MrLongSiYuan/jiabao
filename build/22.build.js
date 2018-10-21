webpackJsonp([22,30],{

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

/***/ 46:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABGdBTUEAALGPC/xhBQAAAgRJREFUaAXt2T9Lw0AUAPAmsSAVLG4FQegi3Qra1g4O4tBv4Cp+EB1EBz+Dk7NOrg4uLo0glIIOIhZ0SaGTIgQy1PdKDtLY2NL35xA8KJd7yd39elzgHcnl/mhxqG7f99eHw+EB/IJSqXReLpdD6piz9CfBO53OahiGT4Bexskcx/GhajWbzY9ZJqc841I6A7pl0DgOXG9BddNut0d/hDL2tL4kuOd5j+kJtPAkeL1evwf4sQ08aY8bMGyNE1jpQ9M2teSeZ4EjVBvPBtfGs8I18exwLbwIXAMvBpfGi8Il8eJwKbwKXAKvBufGq8I58epwLrwVOAeelNYiYN4Cp6QjyB5P0/1NPt/tdlfS95JtaytuEFlZJdx/y+fzm7VabWCeTdbWVtwg4pU/M+1EvRZF0X6iPXZpHd7r9RZBtDGmihuu60aT4hizCkd0v9+/hn3dmgB8KRaLFxPio9BC1g3p+G9oeGlfYbV3K5XKZ5bDyss5A3qn0Wi8Z6Exrg7nQKvDudCqcE60GpwbrQKXQIvDpdCicEm0GFwaLQLXQLPDtdCscE00G1wbzQK3gUY4Oa0NguASxvmRT8ep6dQsDxHzFFJ2COfFbTgE3KUnlkbjfKQTEACXbKDJcPhceAv4B4OH62c4uYhtDzMP1qStggPEL+cebBmvUChcVavVL4z/l4wV+AZmcqyQx+omUwAAAABJRU5ErkJggg=="

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAAAf1JREFUeAHtmz1rhEAQhjWkSyCQVPn4BzYptcr9qquTNvlVqbQ0jWAfrksTAtqZWRi4myA4uqvZXd6F41wZx9nHd8YPdpMEDQRAYIRAOrJvdFdd1/d9378Nw/BEBnejRv7sPKRp+k7h7PM8/9SEpQJRVdUDAfggh9cap77YEIwviuVRA+NMGfQr2QUFwYyLLt4N/ZnYJ5sWxG7Sk6cGnMqT0alAkLPbSU/+GqjqmQqEv2N0FxlAMEuAAAiZVlAEFCEVcS67dr2iKFRPqnZnOR5dluVw7NltITWYH0AAhEwlKIJ5OC2WLouXvF7r96AIZgwQACHTDYqAIqQinN418Igt4QbZQ41AjZDChSKYh9NiiUdsqbIge0gNvmwAARAyg6EIKAKKkASgCMkDNQKKgCIkAShC8kCNYB5O3z4lY7ve1p/9olYEzQZUT1OIFoSBQE09f8Lb1DhNrCUffGjadELHGTcvlGbPp/7GtqNVBA9WBcHYxgxCDSFmELMgxApiNoQYQSyCEBuIxRBiAmEFIRYQ1hBiAOEEQuggnEEIGYRTCKGCcA5hDoiDMf6P9udVehUIZlyqdw1eVbs5BwOhaZoLPvFqENQgyHDPq2o3hdG27WWWZT900lUhmEGpv+CYteFd15lVtTv6qdZSkt3iRuCvaCnz92IHOBAErAj8AtBych6pJR+3AAAAAElFTkSuQmCC"

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

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(80)
	__vue_script__ = __webpack_require__(82)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\loading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(83)
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
	  var id = "_v-7faf1f35/loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loading.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.dropload-refresh,.dropload-update,.dropload-load,.dropload-noData{\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    font-size: 14px;\n    color: #404040;\n    background: #fff;\n    border-top: 1px solid #f3f3f3;\n}\n.dropload-load .loading{\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    border-radius: 100%;\n    margin: 6px;\n    border: 2px solid #666;\n    border-bottom-color: transparent;\n    vertical-align: middle;\n    -webkit-animation: rotate 0.75s linear infinite;\n    animation: rotate 0.75s linear infinite;\n}\n@-webkit-keyframes rotate {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    50% {\n        -webkit-transform: rotate(180deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@keyframes rotate {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50% {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n", ""]);

	// exports


/***/ },

/***/ 82:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="loading">
	// 		<div class="dropload-refresh" v-show="loaddata.showRefresh">↑&nbsp;上拉加载更多</div>
	// 		<div class="dropload-load" v-show="loaddata.showLoad"><span class="loading"></span>加载中...</div>
	// 		<div class="dropload-noData" v-show="loaddata.showNoData">没有更多了~</div>	
	// 	</div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
		props: ['loaddata'],
		data: function data() {
			return {};
		},
		ready: function ready() {
			// console.log(this.loaddata)
		}
	};
	// </script>
	// <style type="text/css">
	// 	.dropload-refresh,.dropload-update,.dropload-load,.dropload-noData{
	// 	    height: 50px;
	// 	    line-height: 50px;
	// 	    text-align: center;
	// 	    font-size: 14px;
	// 	    color: #404040;
	// 	    background: #fff;
	// 	    border-top: 1px solid #f3f3f3;
	// 	}
	// 	.dropload-load .loading{
	// 	    display: inline-block;
	// 	    height: 15px;
	// 	    width: 15px;
	// 	    border-radius: 100%;
	// 	    margin: 6px;
	// 	    border: 2px solid #666;
	// 	    border-bottom-color: transparent;
	// 	    vertical-align: middle;
	// 	    -webkit-animation: rotate 0.75s linear infinite;
	// 	    animation: rotate 0.75s linear infinite;
	// 	}
	// 	@-webkit-keyframes rotate {
	// 	    0% {
	// 	        -webkit-transform: rotate(0deg);
	// 	    }
	// 	    50% {
	// 	        -webkit-transform: rotate(180deg);
	// 	    }
	// 	    100% {
	// 	        -webkit-transform: rotate(360deg);
	// 	    }
	// 	}
	// 	@keyframes rotate {
	// 	    0% {
	// 	        transform: rotate(0deg);
	// 	    }
	// 	    50% {
	// 	        transform: rotate(180deg);
	// 	    }
	// 	    100% {
	// 	        transform: rotate(360deg);
	// 	    }
	// 	}
	// </style>

/***/ },

/***/ 83:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"loading\">\n\t<div class=\"dropload-refresh\" v-show=\"loaddata.showRefresh\">↑&nbsp;上拉加载更多</div>\n\t<div class=\"dropload-load\" v-show=\"loaddata.showLoad\"><span class=\"loading\"></span>加载中...</div>\n\t<div class=\"dropload-noData\" v-show=\"loaddata.showNoData\">没有更多了~</div>\t\n</div>\n";

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(221)
	__vue_script__ = __webpack_require__(223)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\testReport.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(224)
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
	  var id = "_v-381f4efd/testReport.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(222);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./testReport.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./testReport.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.report{\n    margin-top:0.9rem;\n}\n.report-myself{\n    margin-top:0.2rem;\n}\n.report-list{\n    padding:0 0.25rem;\n    width:7rem;\n    height:1.3rem;\n    background:#fff;\n    border-bottom:1px solid #f6f6f6;\n}\n.report-list a{\n    display:block;\n}\n.reportlist-box{\n    width:6rem;\n    float:left;\n}\n.report-name{\n    font-size:0.24rem;\n    color:#7a7a7a;\n    padding-top:0.25rem;\n    margin-bottom:0.18rem;\n    height:0.3rem;\n}\n.report-name span{\n    font-size:0.3rem;\n    color: #232323;\n}\n.report-date{\n    height:0.18rem;\n    font-size:0.18rem;\n    color:#c7c7c7;\n}\n.report-list img{\n    float:right;\n    width:0.46rem;\n    height:0.46rem;\n    margin-top:0.42rem;\n}\n.no-test-report{\n    width:100%;\n    height:100%;\n    display:none;\n}\n.no-test-report img{\n    display:block;\n    margin:2.5rem auto 0.2rem;\n    width:0.8rem;\n    height:0.8rem;\n}\n.no-test-report span{\n    display:block;\n    text-align:center;\n    color:#c7c7c7;\n    font-size:0.24rem;\n}\n.ins-header {\n    width: 100%;\n    height: 0.9rem;\n    font-size: 0.34rem;\n    color: #404040;\n    text-align: center;\n    box-sizing: border-box;\n    line-height: 0.9rem;\n    border-bottom: 1px solid #e6e6e6;\n    background: #fff;\n    position:fixed;\n    top:0;\n    left:0;\n}\n.goback-Btn{\n    position:absolute;\n    width: 0.9rem;\n    height:0.9rem;\n    left: 0;\n    top: 0;\n    background: url(" + __webpack_require__(76) + ") no-repeat center center;\n    background-size: 80% 80%;\n}\n", ""]);

	// exports


/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(31);

	var _store2 = _interopRequireDefault(_store);

	var _loading = __webpack_require__(79);

	var _loading2 = _interopRequireDefault(_loading);

	var _actions = __webpack_require__(70);

	var _getters = __webpack_require__(43);

	var _oftenUse = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    store: _store2.default,
	    data: function data() {
	        return {
	            testReportLists: [],
	            loaddata: {
	                showRefresh: false,
	                showLoad: true,
	                showNoData: false
	            },
	            noMoreData: false,
	            signToken: '',
	            isLoginFlag: false,
	            scroll: true
	        };
	    },
	    ready: function ready() {
	        var _this = this;

	        if ((0, _oftenUse.getCookieResult)("sign_token")) {
	            this.signToken = (0, _oftenUse.getCookieResult)("sign_token");
	            this.hand_userLogin();
	            this.isLoginFlag = this.ache_userLoginState;
	        }
	        this.getTestReportData();
	        $(window).on('scroll', function () {
	            _this.scrollAffect();
	        });
	    },
	    methods: {
	        getTestReportData: function getTestReportData() {
	            var _this2 = this;

	            $.ajax({
	                type: 'post',
	                url: _store2.default.state.hostUrl + 'requirelist',
	                data: {
	                    loginType: 1,
	                    sign: this.signToken
	                },
	                success: function success(res) {
	                    var res = eval(res);
	                    //console.log(res);
	                    if (res.data) {
	                        $('.no-test-report').hide();
	                        $('.dropload-load').hide();
	                        if (res.data.list) {
	                            _this2.testReportLists = res.data.list;
	                        }
	                        _this2.scroll = true;
	                    } else {
	                        $('.no-test-report').show();
	                        $('.dropload-load').hide();
	                    }
	                }
	            });
	        },
	        scrollAffect: function scrollAffect() {
	            if (this.scroll) {
	                var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
	                if ($(document).height() <= totalheight && !this.noMoreData && !this.firstGetData) {
	                    this.scroll = false;
	                    this.loaddata.showRefresh = false;
	                    this.loaddata.showLoad = true;
	                    this.loaddata.showNoData = false;
	                    this.getTestReportData();
	                }
	            }
	        }
	    },
	    components: {
	        loading: _loading2.default
	    },
	    vuex: {
	        actions: {
	            hand_userLogin: _actions.isLogin,
	            tabSetUserInfo: _actions.setUserInfo
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
	//     .report{
	//         margin-top:0.9rem;
	//     }
	//     .report-myself{
	//         margin-top:0.2rem;
	//     }
	//     .report-list{
	//         padding:0 0.25rem;
	//         width:7rem;
	//         height:1.3rem;
	//         background:#fff;
	//         border-bottom:1px solid #f6f6f6;
	//     }
	//     .report-list a{
	//         display:block;
	//     }
	//     .reportlist-box{
	//         width:6rem;
	//         float:left;
	//     }
	//     .report-name{
	//         font-size:0.24rem;
	//         color:#7a7a7a;
	//         padding-top:0.25rem;
	//         margin-bottom:0.18rem;
	//         height:0.3rem;
	//     }
	//     .report-name span{
	//         font-size:0.3rem;
	//         color: #232323;
	//     }
	//     .report-date{
	//         height:0.18rem;
	//         font-size:0.18rem;
	//         color:#c7c7c7;
	//     }
	//     .report-list img{
	//         float:right;
	//         width:0.46rem;
	//         height:0.46rem;
	//         margin-top:0.42rem;
	//     }
	//     .no-test-report{
	//         width:100%;
	//         height:100%;
	//         display:none;
	//     }
	//     .no-test-report img{
	//         display:block;
	//         margin:2.5rem auto 0.2rem;
	//         width:0.8rem;
	//         height:0.8rem;
	//     }
	//     .no-test-report span{
	//         display:block;
	//         text-align:center;
	//         color:#c7c7c7;
	//         font-size:0.24rem;
	//     }
	//     .ins-header {
	//         width: 100%;
	//         height: 0.9rem;
	//         font-size: 0.34rem;
	//         color: #404040;
	//         text-align: center;
	//         box-sizing: border-box;
	//         line-height: 0.9rem;
	//         border-bottom: 1px solid #e6e6e6;
	//         background: #fff;
	//         position:fixed;
	//         top:0;
	//         left:0;
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
	// <template>
	//     <div class="test-report-box">
	//         <div class="ins-header">
	//             <div class="goback-Btn" v-link="{name:'artlist'}"></div>
	//             测评报告
	//         </div>
	//         <div class="report clearfix">
	//             <div class="no-test-report">
	//                 <img src="../img/no-report.png" alt=""/>
	//                 <span>您还没有测评报告</span>
	//             </div>
	//             <div class="report-list report-myself" v-for="testReportList in testReportLists">
	//                 <a v-bind:href="testReportList.href">
	//                     <div class="reportlist-box">
	//                         <p class="report-name"><span>{{ testReportList.fullName }}</span>的测评报告</p>
	//                         <p class="report-date">{{ testReportList.createDate }}</p>
	//                     </div>
	//                     <img src="../img/menu-more.png"/>
	//                 </a>
	//             </div>
	//             <loading v-bind:loaddata="loaddata"></loading>
	//         </div>
	//     </div>
	// </template>
	// <script>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"test-report-box\">\n    <div class=\"ins-header\">\n        <div class=\"goback-Btn\" v-link=\"{name:'artlist'}\"></div>\n        测评报告\n    </div>\n    <div class=\"report clearfix\">\n        <div class=\"no-test-report\">\n            <img src=\"" + __webpack_require__(51) + "\" alt=\"\"/>\n            <span>您还没有测评报告</span>\n        </div>\n        <div class=\"report-list report-myself\" v-for=\"testReportList in testReportLists\">\n            <a v-bind:href=\"testReportList.href\">\n                <div class=\"reportlist-box\">\n                    <p class=\"report-name\"><span>{{ testReportList.fullName }}</span>的测评报告</p>\n                    <p class=\"report-date\">{{ testReportList.createDate }}</p>\n                </div>\n                <img src=\"" + __webpack_require__(46) + "\"/>\n            </a>\n        </div>\n        <loading v-bind:loaddata=\"loaddata\"></loading>\n    </div>\n</div>\n";

/***/ }

});
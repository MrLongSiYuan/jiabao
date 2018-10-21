export default {
	components: {},
	ready: function() {
		var _this = this;
		var timer = setInterval(function() {
			if (_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
				_this.shufflingId = parseInt(_this.shufflingId) + 1;
			} else if (_this.shufflingId == _this.shufflingData.length - 1) {
				_this.shufflingId = 0;
			}
		}, 5000)
	},
	methods: {
		bulletFunOne: function() {
			this.shufflingId = 0;
		},
		bulletFunTwo: function() {
			this.shufflingId = 1;
		},
		bulletFunThree: function() {
			this.shufflingId = 2;
		},
		showPreNext: function() {
			this.PreNext = true;
		},
		hiddenPreNext: function() {
			this.PreNext = false;
		},
		preFun: function() {
			var _this = this;
			if (_this.shufflingId > 0 && _this.shufflingId < _this.shufflingData.length) {
				_this.shufflingId = parseInt(_this.shufflingId) - 1;
			}
		},
		nextFun: function() {
			var _this = this;
			if (_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
				_this.shufflingId = parseInt(_this.shufflingId) + 1;
			}
		}
	},
	data() {
		return {
			shufflingData: [{
				title: '喵来个米',
				href: '1',
				url: '/xxx/xx/src/img/1.png'
			}, {
				title: '豆豆',
				href: '2',
				url: '/xxx/xx/src/img/2.png'
			}, {
				title: '猫咪咪',
				href: '3',
				url: '/xxx/xx/src/img/3.jpg'
			}],
			shufflingId: 0,
			PreNext: false,
		}
	}
}
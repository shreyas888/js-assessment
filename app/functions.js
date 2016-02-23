exports = ( typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
	argsAsArray : function(fn, arr) {
		return fn.apply(null, arr);
	},

	speak : function(fn, obj) {
		//Set callee functions this pointer to obj
		return fn.apply(obj, obj);
	},

	functionFunction : function(str) {
		var me = this;
		me.str = str;
		return function(str1) {
			me.str += ', ' + str1;
			return me.str;
		};
	},

	makeClosures : function(arr, fn) {
		var funcs = [];
		//Inner function for clusure on elem
		function callFunction(ele) {
			return function() {
				return fn.call(null, ele);
			};
		}


		arr.forEach(function(ele) {
			funcs.push(callFunction(ele));
		});
		return funcs;
	},

	partial : function(fn, str1, str2) {
		return function(arg) {
			return fn.call(null, str1, str2, arg);
		};
	},

	useArguments : function() {
		var sum = 0;
		for (var i = 0; i < arguments.length; i++) {
			var val = parseFloat(arguments[i]);
			if (!isNaN(val))
				sum += val;
		}
		return sum;
	},

	callIt : function(fn) {
		var args = Array.prototype.slice.call(arguments, 1);
		return fn.apply(null, args);
	},

	partialUsingArguments : function(fn) {
		var args = Array.prototype.slice.call(arguments, 1) || [];
		return function() {
			var partialargs = Array.prototype.slice.call(arguments, 0);
			args = args.concat(partialargs);
			return fn.apply(null, args);
		};
	},

	curryIt : function(fn) {
		//Curry function of level 3
		return function f1() {
			var args = Array.prototype.slice.call(arguments, 0);
			//return function recursively until 3 args are collected
			if (args.length == 3) {
				return fn.apply(null, args);
			} else {
				return function f2() {
					var args2 = Array.prototype.slice.call(arguments, 0);
					return f1.apply(null, args.concat(args2));
				};
			}
		};
	}
};

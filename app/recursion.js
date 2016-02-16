exports = ( typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
	listFiles : function(data, dirName) {
		var files = [];
		function getFiles(node, ext) {
			if ('files' in node) {
				list = node['files'];
				list.forEach(function(file) {
					//Push file name if file is string
					if ( typeof file === 'string') {
						if (ext) {
							if (ext === file.split('.')[1])
								files.push(file);
						} else
							files.push(file);
					}
					//if file is object then call resursive function
					else if ( typeof file === 'object')
						getFiles(file, ext);
				});
			}
		}
		getFiles(data, dirName);
		return files;
	},

	permute : function(arr) {
		var permutations = [],
		    stack = [];
		
		function doPerm() {
			//if arr is exahusted push data to o/p
			if (arr.length == 0) {
				permutations.push(stack.slice());
			}
			for (var i = 0; i < arr.length; i++) {
				//reduce array one elem each cycle
				var x = arr.splice(i, 1);
				// push removed elem to stack
				stack.push(x);
				//resursive call permutation
				doPerm();
				stack.pop();
				arr.splice(i, 0, x);
			}
		}
		doPerm();
		return permutations;

	},

	fibonacci : function(n) {
		var me = this;
		if (n <= 2) {
			return 1;
		} else {
			//call fibonacci until n <= 2
			return me.fibonacci(n - 1) + me.fibonacci(n - 2);
		}
	},

	validParentheses : function(n) {
		var me = this, combinations = [];
		//call brackets with number for pairs reqd
		brackets("", 0, 0, n);
		function brackets(output, open, close, pairs) {
			//if open and closed anre eqal to pairs push op to result
			if (open == pairs && close == pairs) {
				combinations.push(output);
			} else {
				//call recursively unitl open and close brackets are < no of pairs
				if (open < pairs)
					brackets(output + "(", open + 1, close, pairs);
				if (close < open)
					brackets(output + ")", open, close + 1, pairs);
			}
		}
		return combinations;

	}
};

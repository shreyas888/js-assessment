exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  //Not familiar with bit logic
	valueAtBit : function(num, bit) {
		var result = num.toString(2), 
			index = result.length-bit < 0 ? result.length-1: result.length-bit;
		return parseInt(result.charAt(index),10);
	},

	base10 : function(str) {
		return parseInt(str, 2);
	},

	convertToBinary : function(num) {
		var result = num.toString(2);
		if(result.length < 8){
			while(result.length != 8){
				result = '0' + result;
			};
		}
		return result;
	},

	multiply : function(a, b) {
		var precision = (b + '').split('.');
		if(precision.length > 1) 
			precision = precision[1].length;
		else 
			precision = 0;   
		return parseFloat((a*b).toFixed(precision));

	}
};

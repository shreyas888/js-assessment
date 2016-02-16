exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  //Not familiar with bit logic
	valueAtBit : function(num, bit) {

	},

	base10 : function(str) {

	},

	convertToBinary : function(num) {
		return num.toString(2);
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

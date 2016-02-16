exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
		return /[0-9]/g.test(str);
	},

	containsRepeatingLetter : function(str) {
		return /([a-zA-z])\1+/g.test(str);
	},

	endsWithVowel : function(str) {
		return /([aeiouAEIOU])$/.test(str);
	},

	captureThreeNumbers : function(str) {
		var pattern =  str.match(/\d{3}/) || [];
		if(pattern.length > 0) return pattern[0];
		return false;
	},

	matchesPattern : function(str) {
		return /^\d{3}-\d{3}(?!\d)-\d{4}$/.test(str);
	},
	isUSD : function(str) {
		return /^[$]\d{1,3}(,\d{3})*(?:\.\d\d)?$/.test(str);
	}
};

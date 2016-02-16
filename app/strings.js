exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString : function(str, amount) {
		//Check for duplicate pattern
		var duplicates = str.match(/(.)\1+/g);
		duplicates.forEach(function(pattern){
			//replace by substring of required length of the pattern 
			str = str.replace(pattern, pattern.substring(0, amount));
		});
		return str;
	},
	wordWrap : function(str, cols) {
		//split str by spaces
		var list = str.split(' ');
		list.forEach(function(ele, i){
			//IF not last elemetnt
			if(i !== list.length-1){ 
				//IF next element is big word append new line
				if(list[i+1].length > 1)
					list[i] = ele + '\n';
				//ELSE add a leading space
				else list[i] = ele + ' ';
			}
		});
		// join list
		return list.join('');
	},
	reverseString : function(str) {
		//convert string to singel char array reverse and join
		return str.split("").reverse().join('');
	}
};

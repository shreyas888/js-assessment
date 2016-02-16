exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  //Not sure about expected o/p
	count : function(start, end) {
		var object = {};
		var counter = setInterval(function(){
			if(start < end){
				start++;
				nums.push(start);
			}
			else
				object.cancel(); 
		},100);
		object.cancel = function(){
			clearInterval(counter);
		};
		return object;
	}
};

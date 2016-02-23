exports = ( typeof window === 'undefined') ? global : window;

exports.countAnswers = {
	count : function(start, end) {
		var object = {
			startcounter : function() {
				var me = this;
				counting();
				me.counter = setInterval(counting, 100);
			},
			cancel : function() {
				var me = this;
				clearInterval(me.counter);
			},
		};
		function counting() {
			if (start <= end) {
				console.log(start);
			} else{
				object.cancel();
				return;
			}
			start += 1;
		}
		object.startcounter();
		return object;
	}
};

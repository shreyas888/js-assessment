exports = ( typeof window === 'undefined') ? global : window;

exports.objectsAnswers = {
	alterContext : function(fn, obj) {
		//call function with obj as this pointer
		return fn.call(obj, obj);
	},

	alterObjects : function(constructor, greeting) {
		//Add method to prototype of constructor
		constructor.prototype.greeting = greeting;
	},

	iterate : function(obj) {
		var iterate = [];
		for (var key in obj) {
			//Check if key is own property and not prototype property
			if (obj.hasOwnProperty(key)) {
				iterate.push(key + ': ' + obj[key]);
			}
		}
		return iterate;
	}
};

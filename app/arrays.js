exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  //Check if passged aregument is array
	isArray : function(arr) {
		//IF passed aregument is array
		return (Object.prototype.toString.call(arr) === '[object Array]' );
	},
	indexOf : function(arr, item) {
		var me = this;
		if (me.isArray(arr)) {
			var index = [];
			//Checking for multiple occurances of items in array
			// instead of using Array.prototype.indexOf() method (not supported in lower IE verions)
			arr.forEach(function(ele, i) {
				if (ele === item)
					index.push(i);
			});
			// IF muiltiple instances of the element found, return the array of indexs
			// ELSE return the index
			return index.length > 0 ? index.length > 1 ? index : index[0] : -1;
		}
		return -1;
	},

	sum : function(arr) {
		var me = this,
		    sum = 0;
		if (me.isArray(arr)) {
			arr.forEach(function(ele) {
				//Check if element is string or float
				// IF String return concatenated string
				if ( typeof ele === 'string' || typeof ele === 'number') {
					sum += ele;
				}
				// IF element is array return sum of array
				else if (me.isArray(ele))
					sum += me.sum(ele);
			});
			return sum;
		}
		return 0;
	},

	remove : function(arr, item) {
		var me = this;
		if (me.isArray(arr)) {
			return arr.filter(function(i) {
				return i !== item;
			});
		}
		//else return original
		return arr;

	},

	removeWithoutCopy : function(arr, item) {
		var me = this,
			// Get indexes of item in array
		    indexes = me.indexOf(arr, item);
	    // IF mutliple occurances found
		if (me.isArray(indexes)) {
			// sort indexes in descending order for splice as it will not affect the index of ealrier elements
			indexes.sort(function(a, b) {
				return b - a;
			});
			// splice based of indexes
			indexes.forEach(function(index) {
				arr.splice(index, 1);
			});
		}
		// ELSE remove single occurance
		else{
			arr.splice(indexes, 1);
		}
		return arr;

	},

	append : function(arr, item) {
		var me = this;
		if(me.isArray(arr)){
			//IF passed item is not array
			if(!me.isArray(item))
				arr.push(item);
			//ELSE concat arrays
			else
				arr.concat(item);
		}
		return arr;
	},

	truncate : function(arr) {
		var me = this;
		//IF argument is array THEN pop last element
		if(me.isArray(arr)){
			arr.pop();
		}
		return arr;
	},

	prepend : function(arr, item) {
		var me = this;
		//IF argument is array THEN insert elem at start
		if(me.isArray(arr)){
			arr.unshift(item);
		}
		return arr;

	},

	curtail : function(arr) {
		var me = this;
		//IF argument is array THEN delete last elem
		if(me.isArray(arr)){
			arr.shift(arr);
		}
		return arr;
	},

	concat : function(arr1, arr2) {
		var me = this;
		//IF arguments are arrays THEN concat
		if(me.isArray(arr1) && me.isArray(arr2)){
			return arr1.concat(arr2);
		}
		return [];
	},

	insert : function(arr, item, index) {
		var me = this;
		//IF arguments are arrays THEN insert elem at give index
		if(me.isArray(arr)){
			arr.splice(index, 0, item);
		}
		return arr;
	},

	count : function(arr, item) {
		var me = this, occ = 0;
		if(me.isArray(arr)){
			 // Use indexOf method to get indexes of the item 
			var indexes = me.indexOf(arr, item);
			//IF indexes is array if more than one occurance of item
			if(me.isArray(indexes))
				occ = indexes.length;
			//ELSE indexes is index 
			else
				occ = indexes;
		}
		return occ;
		
	},

	duplicates : function(arr) {
		var me = this, duplicates = [];
		if(me.isArray(arr)){
			//Sort the array in ASC
			arr.sort(function(a,b){
				return a - b;
			});
			//Check each elem with next for duplicate
			arr.forEach(function(ele, i){
				if(ele === arr[i+1]){
					if(me.indexOf(duplicates, ele) === -1){
						duplicates.push(ele);
					}
				};
			});
		}
		return duplicates;
	},

	square : function(arr) {
		var me = this;
		if(me.isArray(arr)){
			arr.forEach(function(ele, i){
				//Check if elem is number
				var val = parseFloat(ele);
				if(!isNaN(val)){
					arr[i] = val*val;
				}
			});
		}
		return arr;
	},

	findAllOccurrences : function(arr, target) {
		var me = this, occ = [];
		if(me.isArray(arr)){
			//Get indexes of target
			var indexes = me.indexOf(arr, target);
			if(me.isArray(indexes)) occ = indexes;
			else occ = [indexes];
		}
		return occ;		
		
	}
};

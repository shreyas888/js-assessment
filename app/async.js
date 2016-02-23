exports = ( typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
	async : function(value) {
		//Create promise and resolve after timeout of 1000ms
		return new Promise(function(resolve, reject) {
			window.setTimeout(function() {
				resolve(value);
			}, 1000);
		});
	},

	manipulateRemoteData : function(url) {
		//Create AJAX call using native JS
		if (window.XMLHttpRequest) {
			return new Promise(function(resolve, reject) {
				xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == XMLHttpRequest.DONE) {
						if (xmlhttp.status == 200) {
							//On success resolve promise
							var data = JSON.parse(xmlhttp.response);
							var result = [];
							//Push names
							data['people'].forEach(function(ele) {
								result.push(ele['name']);
							});
							//Sort ACS
							result.sort();
							resolve(result);
						} else if (xmlhttp.status == 400) {
							reject();
						} else {
							alert('Internl server error');
						}
					}
				};
				xmlhttp.open("GET", url, true);
				xmlhttp.send();
			});
		}

	}
};

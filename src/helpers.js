'use strict';

var myApp = myApp || {};

myApp.helpers = (function(){
	function inherit(child, parent) {
		var F = function () {};
		F.prototype = parent.prototype;
		child.prototype = new F();
		child.uber = parent.prototype;
	}
	
	return {
		inherit : inherit
	}
}());
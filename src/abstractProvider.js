'use strict';
var myApp = myApp || {};

myApp.AbstractProvider = (function(){
	function AbstractProvider(options){};
	AbstractProvider.prototype.getSocialCount = function(){};
	AbstractProvider.prototype.getFormattedResults = function(){};
	AbstractProvider.prototype.setPageUrl = function(pageUrl){
		this.pageUrl = pageUrl;
	}
	AbstractProvider.prototype.getPageUrl = function(){
		return this.pageUrl;
	}
	return AbstractProvider;
}());
'use strict';
var myApp = myApp || {};
myApp.providers = myApp.providers || {};

myApp.providers.pinterest = (function(){
	function PinterestProvider(pageUrl){
		this.pageUrl = pageUrl;
	} 
	PinterestProvider.prototype.setPageUrl = function(pageUrl){
		this.pageUrl = pageUrl;
	}
	PinterestProvider.prototype.getPageUrl = function(){
		return this.pageUrl;
	}
	myApp.helpers.inherit(PinterestProvider, myApp.AbstractProvider);
	
	/**
	 * get social count
	 *
	 * @returns {promise} the number of pins for the object's pageUrl
	 */
	PinterestProvider.prototype.getSocialCount = function(){
		//Return the number of pins
		var that = this;
		return new Promise(function(resolve, reject){ 
			$.ajax({
				dataType: 'jsonp',	
				url: 'https://widgets.pinterest.com/v1/urls/count.json?url=' + encodeURI(that.pageUrl)})
				.done(function(response){
					resolve(response);
				})
				.fail(function(qXHR, textStatus, errorThrown){
					reject(errorThrown);
				});	
		});
	}
	/**
	 * getFormattedResults
	 *	@param	 {object} result
	 * 	@returns {string} the number of pins for the object's pageUrl
	 */
	PinterestProvider.prototype.getFormattedResults = function(result){
		return result.count + " Pins";
	};

	return PinterestProvider;
}());
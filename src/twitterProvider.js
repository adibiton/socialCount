'use strict';
var myApp = myApp || {};
myApp.providers = myApp.providers || {};

myApp.providers.twitter = (function(){
	function TwitterProvider(pageUrl){
		this.pageUrl = pageUrl; 
	}
	myApp.helpers.inherit(TwitterProvider, myApp.AbstractProvider);
	
	/**
	 * get social count
	 *
	 * @returns {promise} the number of tweets for the object's pageUrl
	 */
	TwitterProvider.prototype.getSocialCount = function(){
		//Return the number of tweets
		var that = this;
		return new Promise(function(resolve, reject){
			$.ajax({
				dataType: 'jsonp',				
				url: 'http://urls.api.twitter.com/1/urls/count.json?url=' + encodeURI(that.pageUrl)})	
				.done(function(response){
					resolve(response);
				})
				.fail(function(qXHR, textStatus, errorThrown){
					reject(errorThrown);
				});	
		});
	};

	/**
	 * getFormattedResults
	 *	@param	{object} result
	 * 	@returns {string} the number of tweets for the object's pageUrl
	 */
	TwitterProvider.prototype.getFormattedResults = function(result){
		return result.count + " Tweets";
	};

	return TwitterProvider;
}());
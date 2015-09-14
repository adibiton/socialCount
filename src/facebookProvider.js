'use strict';
var myApp = myApp || {};
myApp.providers = myApp.providers || {};

myApp.providers.facebook = (function(){
	function FacebookProvider(pageUrl){
		this.pageUrl = pageUrl;
	}

	myApp.helpers.inherit(FacebookProvider, myApp.AbstractProvider);

	/**
	 * getSocialCount
	 *
	 * @returns {promise} the number of likes shares and comments for the object's pageUrl
	 */
	FacebookProvider.prototype.getSocialCount = function(){
		var that = this;
		return new Promise(function(resolve, reject){
			$.ajax({
				url: 'https://api.facebook.com/method/fql.query?query=' + encodeURI('select url, like_count, share_count, comment_count from link_stat where url=\'' + that.pageUrl + '\'') + 
						'&format=json'})
				.done(function(response){
					resolve(response[0]);
				})
				.fail(function(qXHR, textStatus, errorThrown){
					reject(errorThrown);
				});
		});
	};
	/**
	 * getFormattedResults
	 *	@param	{object} result
	 * 	@returns {string} the number of likes shares and comments for the object's pageUrl
	 */
	FacebookProvider.prototype.getFormattedResults = function(result){
		return result.like_count + " Likes " + result.share_count + " Shares " + result.comment_count + " Comments";
	};
	
	return FacebookProvider;
}());
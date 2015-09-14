'use strict';
var myApp = myApp || {};


myApp.api = (function (){
		
	/**
	 * Get social count
	 *
	 * @param {string | array} provider name of the provider (twitter, facebook...)
	 * @param {string | array} pageurl the page url for social counting
	 */
	function getSocialCount(provider, pageurl){
		if(typeof provider === 'string'){
			if(typeof pageurl === 'string'){
				var provider = myApp.providerFactory.createProvider({
					providerName : provider,					
					pageUrl : pageurl
				});
				return provider.getSocialCount();		
			}
			else if(Array.isArray(pageurl)){
				var provider = myApp.providerFactory.createProvider({
					providerName : provider,					
				});
				var promises = [];
				pageurl.forEach(function(element){
					provider.setPageUrl(element);
					promises.push(provider.getSocialCount());
				});
				
				return Promise.all(promises)
							.then(function(results){
									return results;
							});
				
			}
		}
		if(Array.isArray(provider) && Array.isArray(pageurl)){
			var promises = [];
			provider.forEach(function(providerName){
				var specificProvider = myApp.providerFactory.createProvider({
					providerName : providerName
				});
				pageurl.forEach(function(specificPageUrl){
					specificProvider.setPageUrl(specificPageUrl);
					promises.push(specificProvider.getSocialCount());
				})
			});

			return new Promise(function(resolve, reject){
				Promise.all(promises).then(function(results){
					resolve(results);
				});
			});				
		}		
		
	}
	/**
	 * Get social count
	 *
	 * @param {string} provider - name of the provider (twitter, facebook...)
	 * @param {object} results social counting 
	 */
	function getFormattedResults(provider, results){
		var provider = myApp.providerFactory.createProvider({providerName : provider});
		return provider.getFormattedResults(results);
	}
	return {
		getSocialCount : getSocialCount,
		getFormattedResults : getFormattedResults		
	}	
}());


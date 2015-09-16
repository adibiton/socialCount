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
				if(myApp.helpers.validateURL(pageurl) === false){
					throw new Error('url ' + pageurl + ' is not formatted');
				};
				
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
				pageurl.forEach(function(specificPageUrl){
					if(myApp.helpers.validateURL(specificPageUrl) === false){
						throw new Error('url ' + specificPageUrl + ' is not formatted');
					}
					else{
						provider.setPageUrl(specificPageUrl);
						promises.push(provider.getSocialCount());	
					}
					
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
					if(myApp.helpers.validateURL(specificPageUrl) === false){
						throw new Error('url ' + specificPageUrl + ' is not formatted');
					}
					else{
						specificProvider.setPageUrl(specificPageUrl);
						promises.push(specificProvider.getSocialCount());	
					}
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
	 * Get formatted results
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


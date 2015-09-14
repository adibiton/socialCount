'use strict';
var myApp = myApp || {};

myApp.providerFactory = (function(){
	function ProviderFactory(){
		this.providers = {};
	}
	ProviderFactory.prototype.createProvider = function (options){		
		this.checkIfProviderExist(options.providerName);
		if(this.providers[options.providerName] == undefined){
			this.providers[options.providerName] = new myApp.providers[options.providerName](options.pageUrl);
		}
		else{
			this.providers[options.providerName].setPageUrl(options.pageUrl);
		}
		return this.providers[options.providerName];
	};

	ProviderFactory.prototype.checkIfProviderExist = function(providerName){
		if(typeof myApp.providers[providerName] !== 'function'){
			throw new Error(providerName + " provider doesn't exist");		
		}
	} 
	return new ProviderFactory();
}());
	
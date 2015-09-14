'use strict';
require('mock-promises');

describe("MyApp", function() {
    describe("app.spec", function(){
    	it("should create provider with the correct options", function() {
	        var socialProviderCount = myApp.api.getSocialCount('facebook', 'http://ynet.co.il');
	        //var actual = App.api.GetSocialCount();        
	        var expected = 5;
	        expect(socialProviderCount).toEqual(expected);
    	});
    	it("should throw an error for an unprovided provider blabla", function(){
    		expect(function(){ myApp.api.getSocialCount('blabla', 'http://www.blabla.com'); } ).toThrow(new Error("blabla provider doesn't exist"));
    	})
    });
    
    describe("facebookProvider.spec", function(){
    	it("facebook getSocialCount", function(){
    		expect(1).toEqual(1);
    	});
    });
});
'use strict';

(function(){
	//  myApp.api.getSocialCount('facebook','http://walla.co.il')
	//  								.then(function (result){
	//  										console.log(result);
	//  								})
	//  								.catch(function (result){
	//  									console.error(result);
	//  								});
	// myApp.api.getSocialCount('twitter','http://walla.co.il')
	//   								.then(function (result){
	//   										console.log(result);
	//   								});
	
	// myApp.api.getSocialCount('pinterest','http://walla.co.il')
	//   								.then(function (result){
	//   										console.log(result);
	//   								});

	myApp.api.getSocialCount('facebook',['ifjdsodo', 'http://ynet.co.il', 'http://yahoo.com'])
	  								.then(function (result){
	  								 		console.log(result);
	  								 })
	  								.catch(function (result){
	  									console.error(result);
	  								});

	// myApp.api.getSocialCount(['facebook', 'twitter'],['http://walla.co.il', 'http://ynet.co.il', 'http://yahoo.com'])
	// 								.then(function (result){
	// 								 		console.log(result);
	// 								 });
}());


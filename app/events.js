$('.form-wrapper').submit( function (event) {
	    myApp.api.getSocialCount(['facebook', 'twitter', 'pinterest'],[$('#search').val()])
	 								.then(function (results){
	 										$('#results-facebook').text( myApp.api.getFormattedResults('facebook', results[0]) );
	 										$('#results-twitter').text( myApp.api.getFormattedResults('twitter', results[1]) );
	 										$('#results-pinterest').text( myApp.api.getFormattedResults('pinterest', results[2]) );
	 	
	 										$('.results').show();
	 								});
	    event.preventDefault();
});

$('#search').keyup(function(e){
	if(e.keyCode == 8) {
	    $('.results').hide();
	}
});
	
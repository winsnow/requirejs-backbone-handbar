
require.config({
	baseUrl: "./js/",
	paths: {
		"jquery": "libs/jquery-1.11.3.min",
		"handlebars": "libs/handlebars.min"
	}
});

require(['jquery', 'handlebars'], function($, Handlebars){
	// use case
	var template = Handlebars.compile($("#view-template").html());
	var data = {isTrue: false};
	var html = template(data);
	$('#id').html(html);
});
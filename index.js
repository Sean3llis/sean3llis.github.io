$(document).ready(function() {
	$('div').mouseenter(function() {
		$(this).animate({
			height: '+=60px'
		});
	});
	$('div').mouseleave(function() {
		$(this).animate({
			height: '-=60px'
		});
	});
});
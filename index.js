$(document).ready(function() {
	$('li').mouseenter(function() {
		$(this).animate({
			height: '+=60px'
		});
	});
	$('li').mouseleave(function() {
		$(this).animate({
			height: '-=60px'
		});
	});
});
$(document).ready(function() {
	$('.titlebar').mouseenter(function() {
		$(this).animate({
			height: '+=60px'
		});
	});
	$('.titlebar').mouseleave(function() {
		$(this).animate({
			height: '-=60px'
		});
	});
});
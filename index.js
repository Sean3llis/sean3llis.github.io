$(document).ready(function() {
	$('.titlebar').mouseenter(function(){
		$(this).animate({
			height: '+=150px'
		});
	});
	$('.titlebar').mouseleave(function() {
		$(this).animate({
			height: '-=150px'
		});
	});
});
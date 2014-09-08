$(document).ready(function() {
	$('.titlebar').mouseenter(function(){
		$(this).animate({
			height: '+=50px'
		});
	});
	$('.titlebar').mouseleave(function() {
		$(this).animate({
			height: '-=50px'
		});
	});
});
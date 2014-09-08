var main = function() {
	$('.titlebar').mouseenter(function(){
		$(this).animate({
			height: '+=65px'
		});
	});
	$('.titlebar').mouseleave(function() {
		$(this).animate({
			height: '-=65px'
		});
	});
	$('.boxmain').mouseenter(function(){
		$(this).animate({
			height: '+=15px'
		});
	});
	$('.boxmain').mouseleave(function() {
		$(this).animate({
			height: '-=15px'
		});
	});
};

$(document).ready(main);
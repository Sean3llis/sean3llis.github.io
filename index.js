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
			height: '+=5px'
		});
	});
	$('.boxmain').mouseleave(function() {
		$(this).animate({
			height: '-=5px'
		});
	});
};

$(document).ready(main);
var main = function() {
	$('.titlebar').mouseenter(function(){
		$(this).animate({
			height: '+=100px'
		});
	});
	$('.titlebar').mouseleave(function() {
		$(this).animate({
			height: '-=100px'
		});
	});
};

$(document).ready(main);
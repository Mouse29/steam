$(document).ready(function() {
	$('.js-open').hover(function() {
			$(this).children().removeClass('icon-arrow-left').addClass('icon-arrow-down')
		}, function(){
			$(this).children().removeClass('icon-arrow-down').addClass('icon-arrow-left')
		});
});

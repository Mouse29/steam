$(document).ready(function() {
	// $('.js-open').children().toggleClass('icon-arrow-down')


	$('.js-open').mouseover(function() {
		$(this).next('.submenu').slideDown(300).and().slideUp(300)
	})
		$(".js-open").onclick(function() {
			$("icon-arrow-left").removeClass("icon-arrow-left")
	})
		// $(this).children().removeClass("icon-arrow-left").addClass("icon-arrow-down")


});



// 	var sprach = $('.content').addClass("is-active");

// 	$('.title').click(function(){
// 		sprach.slideUp();
// 		$(this).next().slideDown();

// 	})

// });
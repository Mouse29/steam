/**
 *
 * Developer: pcvector.net
 * Name: script.js
 * Version: 1.0
 *
 */

(function($) {

	"use strict"; // mode ES5

/*	==========================================================================
	backToTop
	========================================================================== */

	function backToTop() {

		$('#back-to-top').click(function(){
			$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});

	}
	function backToTopShowHide() {
	
		if ($(window).scrollTop() > $(window).height() / 2 ) {
			$("#back-to-top").removeClass('gone');
			$("#back-to-top").addClass('visible');
		} else {
			$("#back-to-top").removeClass('visible');
			$("#back-to-top").addClass('gone');
		}

	}

/*	==========================================================================
	customSelect
	========================================================================== */

	function customSelect() {

		if(typeof $.fn.selectric != 'undefined'){
	
			$('select').selectric({
				arrowButtonMarkup:'<b class="icon-arrow-down3"></b>',
				disableOnMobile:false,
				maxHeight:'198'
			});
		}

	}


/*	==========================================================================
	search
	========================================================================== */

	function searchFocus(){

		$('.search .search_input').blur(function(){
			$(this).removeClass("focus").parent().next().hide();
		}).focus(function() {		
			$(this).addClass("focus").parent().next().show();
		});

	}
	
/*	==========================================================================
	slider
	========================================================================== */

	function sliderFlex(){
		
		if(typeof $.fn.flexslider != 'undefined'){
			$('.flexslider').flexslider({
				animation: "fade",
				animationSpeed: "300",
				controlNav: false,
				prevText:'Назад',
				nextText:'Вперед'
			});
		}
	}
	
	function toolTip(){
		$('[data-toggle="tooltip"]').tooltip();
	}
	
	
/*	==========================================================================
	carousel
	========================================================================== */

	function scrollSlider(){

		if(typeof $.fn.mCustomScrollbar != 'undefined'){
			
			var game_series_count = $('#game-series .carousel-block .article').length;
			var game_recommend_count = $('#game-recommend .carousel-block .article').length;
			var game_new_count = $('#game-new .carousel-block .article').length;
			var game_dlc_count = $('#game-dlc .carousel-block .article').length;
			
			if(game_series_count > 6){
				$('#game-series .carousel-block').addClass('scrolling');
				$('#game-series').removeClass('no_arrows');
			}else{
				$('#game-series .carousel-block').removeClass('scrolling');
				$('#game-series').addClass('no_arrows');
			}
		
			if(game_dlc_count > 6){
				$('#game-dlc .carousel-block').addClass('scrolling');
				$('#game-dlc').removeClass('no_arrows');
			}else{
				$('#game-dlc .carousel-block').removeClass('scrolling');
				$('#game-dlc').addClass('no_arrows');
			}
					
			if(game_recommend_count > 6){
				$('#game-recommend .carousel-block').addClass('scrolling');
				$('#game-recommend').removeClass('no_arrows');
			}else{
				$('#game-recommend .carousel-block').removeClass('scrolling');
				$('#game-recommend').addClass('no_arrows');
			}
			
			if(game_new_count > 6){
				$('#game-new .carousel-block').addClass('scrolling');
				$('#game-new').removeClass('no_arrows');
			}else{
				$('#game-new .carousel-block').removeClass('scrolling');
				$('#game-new').addClass('no_arrows');
			}			

			var amount=Math.max.apply(Math,$(".scrolling .article").map(function(){
				return $(this).outerWidth(true);
			}).get());
			
			$(".carousel-left").click(function(e){
				e.preventDefault();
				$(this).parent().find(".scrolling").mCustomScrollbar("scrollTo","+="+140,{scrollInertia:300});
			});
			$(".carousel-right").click(function(e){
				e.preventDefault();
				$(this).parent().find(".scrolling").mCustomScrollbar("scrollTo","-="+140,{scrollInertia:300});
			});		
			
			$(".scrolling").mCustomScrollbar({
				axis:"x",
				theme:"dark-thick",
				scrollbarPosition: "outside",
				autoDraggerLength: false,
				advanced:{
					autoExpandHorizontalScroll:true
				},
				keyboard:{scrollType:"stepped"},
				snapAmount:amount,
				mouseWheel:{scrollAmount:amount}
			});
				
		}
	}

/*	==========================================================================
	dropdown menu
	========================================================================== */

	function dropdown(){
		
		$('.btn-group').hover(function(){
			$('.btn-group').removeClass('open');
			$(this).addClass('open');
		},function(){
			$(this).removeClass('open');
		});
	}
	
/*	==========================================================================
	add favourite
	========================================================================== */

	function addWish(){

		$('.add_wish a').click(function(){
			if ($(this).hasClass('active')){
				$(this).html('добавить в&nbsp;желаемое').removeClass('active')
			}else{
				$(this).html('добавлено в&nbsp;желаемое').addClass('active');
			}
			return false;
		});

	}
	
/*	==========================================================================
	popup
	========================================================================== */

	function popup(){
		
		if(typeof $.fn.popover != 'undefined'){
		
			$('[data-toggle="popover"]').popover({
				trigger: 'click',
				html:true,
				title: function(){
					return $(this).parent().find('.popover-block .p-title').html();
				},
				content: function(){
					return $(this).parent().find('.popover-block .p-content').html();
				}
			});
			
		}
	}


/*	==========================================================================
	magnificPopup
	========================================================================== */

		function magnific(){

			if(typeof $.fn.magnificPopup != 'undefined'){
	
				$('.screenshots').magnificPopup({
					delegate: 'a',
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: true,
					fixedContentPos: true,
					mainClass: 'mfp-with-zoom mfp-fade',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0,2],
						arrowMarkup: '<button title="%title%" type="button" class="icon-arrow-%dir%3"></button>', 
						tPrev: 'Назад', // title for left button
						tNext: 'Вперед', // title for right button
						tCounter: ''
					},
					image: {
						markup:'<div class="mfp-figure">'+
						'<div class="mfp-close"></div>'+
						'<div class="mfp-img"></div>'+
						'<div class="mfp-bottom-bar">'+
						'<div class="mfp-title"></div>'+
						'<div class="mfp-counter"></div>'+
						'</div>'+
						'</div>',
						tError:'<a href="%url%">Изображение</a> не может быть загружено.',
						verticalFit: true
					}
				});
				
			}

		}
		
/*	==========================================================================
	priceRange
	========================================================================== */

	// переделать как нужно!

	function priceRange(){
		
		if(typeof $.fn.noUiSlider != 'undefined'){
		
			$('#price-range-slider').change(function() {
	
				var minPrice = $('#min-price').val();
				var maxPrice = $('#max-price').val();
				return false;
	
			});		
	
			$('#price-range-slider').noUiSlider({
				range: [0,3000],
				start: [1,3000],
				step: 1,
				margin: 20,
				connect: true,
				serialization: {
					resolution: 1,
					to:
						[
							[$("#min-price")],
							[$("#max-price")]
						]
				}
			});
			
		}	

	}

/*	==========================================================================
	filterAccordion
	========================================================================== */

	function filterAccordion(){

		$('.filter-field > .field-title > span').click(function(){
			$(this).parent().toggleClass('open');
			$(this).parent().next('.field-container').slideToggle(300);
			return false;
		});

	}

/*	==========================================================================
	filter Checked
	========================================================================== */

	function filterChecked(){

		$('.ul-checkbox li a').click(function() {
			$(this).toggleClass('checked');
			return false;
		});

	}
	
/*	==========================================================================
	Read More
	========================================================================== */
	
	function showMore(){
		
		if(typeof $.fn.readmore != 'undefined'){

			$('.about').readmore({
				moreLink: '<a href="#">Показать полностью</a>',
				lessLink: '<a href="#">Скрыть</a>',
			    maxHeight: 270
			});
	
		}
	
	}

/*	==========================================================================
	view list or tile
	========================================================================== */

	function catalogView(){

		$('.catalog-view a').click(function() {
			var view = $(this).attr('data-view');
			$('.catalog-view li').removeClass('active');
			$(this).parent().addClass('active');
			if (view == 'view-list'){
				$('.catalog-list').removeClass('tile').addClass('list')
			}else if(view == 'view-tile'){
				$('.catalog-list').removeClass('list').addClass('tile');
			}
			return false;
		});

	}

/*	==========================================================================
	When document is ready, do
	========================================================================== */

	$(document).ready(function() {

		showMore(); // show more text
		catalogView();
		filterAccordion();
		filterChecked();
		priceRange(); // filter price range slider
		magnific(); // lightbox for image
		popup();	// popup
		addWish(); // add wish
		toolTip(); // tooltip
		dropdown(); // dropdown menu
		scrollSlider(); // new on homepage
		sliderFlex(); // slider on homepage
		searchFocus(); // search form
		customSelect(); // select
		//showMore();

		backToTop();
		backToTopShowHide();
		
	});

/*	==========================================================================
	When the window is scrolled, do
	========================================================================== */

	$(window).scroll(function() {

		backToTopShowHide();

	});

})(window.jQuery);

// non jQuery scripts below

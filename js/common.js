$(document).ready(function() {



$('.js-open').click(function(){
  $(this).next('.submenu').toggle();
   $(this).children().toggleClass('icon-arrow-right').toggleClass('icon-arrow-down')
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.js-open') && !$(target).parents().is('.js-open')) {
    $('.submenu').hide();
  }

});




});
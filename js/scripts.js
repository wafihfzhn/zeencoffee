$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open');
  $(this).toggleClass('open');
  
});

$('.page-scroll').on('click', function(e){

	var href = $(this).attr('href');
	var elemenHref = $(href);
	$('body').animate({
		scrollTop: elemenHref.offset().top - 80
	}, 1500, 'easeInOutExpo');

	e.preventDefault();

});
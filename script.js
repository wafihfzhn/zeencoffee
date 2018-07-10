$(document).ready(function(){
	$('.menu-toggle').click(function() {
	  
	  $(this).toggleClass('open');
	  $('nav').toggleClass('active');
	  
	});
});

$(window).on('scroll',function(){
  if ($(window).scrollTop()>50){
    $('header').addClass('headerfill');
  }
  else
  {
    $('header').removeClass('headerfill');
  }
})

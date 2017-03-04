$(function(){
	
	
	
	
	$("#goToTop").click( function(){
			 $("html,body").stop(true);
			 $("html,body").animate({scrollTop: $("#topDiv").offset().top}, 500);
	});
	
	
  $(window).scrollTop() < 1 && $("#goToTop").hide();
  $(window).scroll(function() {
        $(this).scrollTop() > 1 ? $("#goToTop").fadeIn() : $("#goToTop").fadeOut()
   });
 
	
});

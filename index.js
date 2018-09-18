$(document).ready(function(){
	$(".blockquote").hide();
	$(".header-text").hide();
	$("#ourCoffee").hide();
	$("#coffeeContent").hide();
});

$(document).on('scroll', function() {
	$(".header-text").show();	
	$(".header-text").addClass('animated fadeIn slow');

    if( $(this).scrollTop() >= $('#divider').position().top ){

    	$('.blockquote').show();
        $('.blockquote').addClass('animated fadeInLeft slow');

        if( $(this).scrollTop() >= $('.page-content').position().top ){
	        $("#ourCoffee").show();
	        $("#ourCoffee").addClass('animated fadeInLeft delay-4s');
			
			$("#coffeeContent").show();
	        $("#coffeeContent").addClass('animated fadeInLeft slower delay-4s');
    	}

    }


});
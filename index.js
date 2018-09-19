$(document).ready(function(){
	$(".blockquote").hide();
	$(".header-text").hide();
	$("#ourCoffee").hide();
	$("#coffeeContent").hide();
	$("#food").hide();
	$("#drink").hide();
	$("#sample1").hide();
	$("#sample2").hide();
	$("#source1").hide();
	$("#source2").hide();
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

	        if( $(this).scrollTop() > $('#hitpoint').position().top )
	    	{
	    		$("#source1").show();
	    		$("#drink").show(3000);
		        $("#drink").addClass('animated fadeInLeft delay-4s');

		        $("#sample1").show("fast");
		        $("#sample1").addClass('animated fadeIn slow');

		        if( $(this).scrollTop() > $('#sample1').position().top )
	    		{
	    			$("#source2").show();
	    			$("#food").show(3000);
		        	$("#food").addClass('animated fadeInLeft delay-4s');

	    			$("#sample2").show();
	    			$("#sample2").addClass('animated fadeIn slow');
	    		}
	    	}

    	}    	

    }

});
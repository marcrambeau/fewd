var burgerclicked = false;
jQuery(document).ready(function() {
	jQuery("#hamburger").on("click", function(e){
		e.preventDefault();
		jQuery(".menu").slideToggle();
		 if(burgerclicked == false) {
				burgerclicked = true;
			} else{
				burgerclicked = false;
			}
	});
	jQuery(window).on("resize", function(){
	var screen = jQuery(window).width();
	if(screen > 720) {
		jQuery(".menu").show();
	} else{
		if(burgerclicked == true){
			jQuery(".menu").show();
		} else{
			jQuery(".menu").hide();
		}
	}
	});
	jQuery("#back-to-top").hide(); //hide icon initially
    var pastAbout = jQuery("#about").offset().top;
    jQuery(window).scroll(function() {
        if(jQuery(window).scrollTop() > pastAbout) { //scrolled past the anchor
            jQuery("#back-to-top").show(); //reached the desired point -- show div
        }
    });
    jQuery('#back-to-top').each(function(){
    jQuery(this).click(function(){ 
        jQuery('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
});
});
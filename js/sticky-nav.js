// Stickey Nav
jQuery(document).ready(function ($) {
	$(window).scroll(function(){
		var scrollTop = 1;
		if($(window).scrollTop() >= scrollTop){
			$('nav').addClass('fixed');
			$('nav').removeClass('nav-still');
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').addClass('nav-still');
			$('nav').removeClass('fixed');
		}
	})

  // Add smooth scrolling to all links

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -60
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
jQuery(document).ready(function ($) {
	$(window).scroll(function(){

	});
});

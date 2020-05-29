
// --------- SECTIONS FROM HTML DOCUMENT IS SELECTED --------- //

(function($) {
  var selector = ".section";

  var $slides = $(selector);

  var currentSlide = 0;
  var isAnimating = false;
	
// --------- ANIMATION BRAKE. THE ANIMATION STOPS BEING CALLED --------- //
	
  var stopAnimation = function() {
    setTimeout(function() {
      isAnimating = false;
    }, 300);
  };


	
  var bottomIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.bottom <= $(window).height();
  };

  var topIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.top >= 0;
  };
// --------- EVENT LISTENER BOUND TO WHEEL(SCROLL) --------- //
	
  document.addEventListener(
    "wheel",
    function(event) {
      var $currentSlide = $($slides[currentSlide]);

      if (isAnimating) {
        event.preventDefault();
        return;
      }

      var direction = -event.deltaY;

// --------- CURRENT SLIDE THAT USER IS ON, IS INCREASED WITH ONE ON SCROLL --------- //
		
      if (direction < 0) {

        if (currentSlide + 1 >= $slides.length) return;
        if (!bottomIsReached($currentSlide)) return;
        event.preventDefault();
        currentSlide++;
        var $slide = $($slides[currentSlide]);
        var offsetTop = $slide.offset().top;
        isAnimating = true;
        $("html, body").animate(
          {
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      } else {  
// --------- THE SAME, BUT NEGATIVE DIRECTION--------- //  
        if (currentSlide - 1 < 0) return;
        if (!topIsReached($currentSlide)) return;
        event.preventDefault();
        currentSlide--;
		var $slide = $($slides[currentSlide]);
        var offsetTop = $slide.offset().top;
        isAnimating = true;
        $("html, body").animate(
          {
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      }
    },
    { passive: false }
  );
})(jQuery);

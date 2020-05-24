$(document).ready(function(){
	
	var scrollLink = $('.scroll');
	
	// smoothscroll når man benytter top menuen
	
	scrollLink.click(function(e) {
		e.preventDefault();
		$('body, html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1500)
	})
})

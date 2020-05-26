$(document).ready(function(){
	
	var scrollLink = $('.scroll');
	
	// smoothscroll when using the top-menu bar
	
	scrollLink.click(function(e) {
		e.preventDefault();
		$('body, html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1500)
	})
})


	
// 	read more buttons image change 

	// BUTTON IN SECTION 1

var b1 = document.getElementById('b1')
var iT = 'f'
function hideImage() {
	var image = document.getElementById('b1');
	
	if(iT=='f'){
		image.src = 'images/top-fold.svg';
		iT = 't';
	}else {
		image.src = 'images/bottom-fold.svg';
		iT = 'f';
	}
	
}

b1.addEventListener('click', hideImage);

// BUTTON IN SECTION 2

var b2 = document.getElementById('b2')
var iT2 = 'f'
function hideImage2() {
	var image = document.getElementById('b2');
	
	if(iT2=='f'){
		image.src = 'images/top-fold.svg';
		iT2 = 't';
	}else {
		image.src = 'images/bottom-fold.svg';
		iT2 = 'f';
	}
	
}

b2.addEventListener('click', hideImage2);

// BUTTON IN SECTION 3

var b3 = document.getElementById('b3')
var iT3 = 'f'
function hideImage3() {
	var image = document.getElementById('b3');
	
	if(iT3=='f'){
		image.src = 'images/top-fold.svg';
		iT3 = 't';
	}else {
		image.src = 'images/bottom-fold.svg';
		iT3 = 'f';
	}
	
}

b3.addEventListener('click', hideImage3);

// BUTTON IN SECTION 4

var b4 = document.getElementById('b4')
var iT4 = 'f'
function hideImage4() {
	var image = document.getElementById('b4');
	
	if(iT4=='f'){
		image.src = 'images/top-fold.svg';
		iT4 = 't';
	}else {
		image.src = 'images/bottom-fold.svg';
		iT4 = 'f';
	}
	
}

b4.addEventListener('click', hideImage4);

// BUTTON IN SECTION 5

var b5 = document.getElementById('b5')
var iT5 = 'f'
function hideImage5() {
	var image = document.getElementById('b5');
	
	if(iT5=='f'){
		image.src = 'images/top-fold.svg';
		iT5 = 't';
	}else {
		image.src = 'images/bottom-fold.svg';
		iT5 = 'f';
	}
	
}

b5.addEventListener('click', hideImage5);

// BUTTON IN SECTION 6

var b6 = document.getElementById('b6')
var iT6 = 'f'
function hideImage6() {
	var image = document.getElementById('b6');
	
	if(iT6=='f'){
		image.src = 'images/top-fold.svg';
		iT6 = 't';
	}else {
		image.src = 'images/bottom-fold.svg';
		iT6 = 'f';
	}
	
}

b6.addEventListener('click', hideImage6);

// BUTTON IN SECTION 7

var b7 = document.getElementById('b7')
var iT7 = 'f'
function hideImage7() {
	var image = document.getElementById('b7');
	
	if(iT7=='f'){
		image.src = 'images/top-fold.svg';
		iT7 = 't';
	}else {
		image.src = 'images/bottom-fold.svg';
		iT7 = 'f';
	}
	
}

b7.addEventListener('click', hideImage7);

// BUTTON IN SECTION 8

var b8 = document.getElementById('b8')
var iT8 = 'f'
function hideImage8() {
	var image = document.getElementById('b8');
	
	if(iT8=='f'){
		image.src = 'images/top-fold.svg';
		iT8 = 't';
	}else {
		image.src = 'images/bottom-fold.svg';
		iT8 = 'f';
	}
	
}

b8.addEventListener('click', hideImage8);
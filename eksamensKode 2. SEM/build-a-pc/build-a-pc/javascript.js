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


	


// hover effect read more

var b1c = document.getElementById('b1')
	function color() {
		var change = document.getElementById('b1');
		
		change.src = 'images/bottom-fold-hover.svg';
		}
	function normal(){
		var unchange = document.getElementById('b1');
		
		unchange.src = 'images/bottom-fold.svg'
	}
	

b1c.addEventListener('mouseenter',color)
b1c.addEventListener('mouseout',normal)

// READ MORE 2

var b2c = document.getElementById('b2')
	function color2() {
		var change2 = document.getElementById('b2');
		
		change2.src = 'images/bottom-fold-hover.svg';
		}
	function normal2(){
		var unchange2 = document.getElementById('b2');
		
		unchange2.src = 'images/bottom-fold.svg'
	}
	

b2c.addEventListener('mouseenter',color2)
b2c.addEventListener('mouseout',normal2)

// READ MORE 3

var b3c = document.getElementById('b3')
	function color3() {
		var change3 = document.getElementById('b3');
		
		change3.src = 'images/bottom-fold-hover.svg';
		}
	function normal3(){
		var unchange3 = document.getElementById('b3');
		
		unchange3.src = 'images/bottom-fold.svg'
	}
	

b3c.addEventListener('mouseenter',color3)
b3c.addEventListener('mouseout',normal3)

// READ MORE 4

var b4c = document.getElementById('b4')
	function color4() {
		var change4 = document.getElementById('b4');
		
		change4.src = 'images/bottom-fold-hover.svg';
		}
	function normal4(){
		var unchange4 = document.getElementById('b4');
		
		unchange4.src = 'images/bottom-fold.svg'
	}
	

b4c.addEventListener('mouseenter',color4)
b4c.addEventListener('mouseout',normal4)

// READ MORE 5

var b5c = document.getElementById('b5')
	function color5() {
		var change5 = document.getElementById('b5');
		
		change5.src = 'images/bottom-fold-hover.svg';
		}
	function normal5(){
		var unchange5 = document.getElementById('b5');
		
		unchange5.src = 'images/bottom-fold.svg'
	}
	

b5c.addEventListener('mouseenter',color5)
b5c.addEventListener('mouseout',normal5)

// READ MORE 6

var b6c = document.getElementById('b6')
	function color6() {
		var change6 = document.getElementById('b6');
		
		change6.src = 'images/bottom-fold-hover.svg';
		}
	function normal6(){
		var unchange6 = document.getElementById('b6');
		
		unchange6.src = 'images/bottom-fold.svg'
	}
	

b6c.addEventListener('mouseenter',color6)
b6c.addEventListener('mouseout',normal6)

// READ MORE 7

var b7c = document.getElementById('b7')
	function color7() {
		var change7 = document.getElementById('b7');
		
		change7.src = 'images/bottom-fold-hover.svg';
		}
	function normal7(){
		var unchange7 = document.getElementById('b7');
		
		unchange7.src = 'images/bottom-fold.svg'
	}
	

b7c.addEventListener('mouseenter',color7)
b7c.addEventListener('mouseout',normal7)

// READ MORE 8

var b8c = document.getElementById('b8')
	function color8() {
		var change8 = document.getElementById('b8');
		
		change8.src = 'images/bottom-fold-hover.svg';
		}
	function normal8(){
		var unchange8 = document.getElementById('b8');
		
		unchange8.src = 'images/bottom-fold.svg'
	}
	

b8c.addEventListener('mouseenter',color8)
b8c.addEventListener('mouseout',normal8)

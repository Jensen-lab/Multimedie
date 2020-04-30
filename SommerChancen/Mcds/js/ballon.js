
var ballon1, ballon2, ballon3

ballon1 = document.getElementById('ballon1')
ballon2 = document.getElementById('ballon2')
ballon3 = document.getElementById('ballon3')




function hideImage() {
	ballon1.src = 'images/cheese2.png'
	
}

ballon1.addEventListener('click', hideImage);


function hideImage2() {
	ballon2.src = 'images/pommes.png'
	
}

ballon2.addEventListener('click', hideImage2);


function hideImage3() {
	ballon3.src = 'images/cola.png'
	
}

ballon3.addEventListener('click', hideImage3);


function validation() {
	var mail = document.getElementById('mail').value;
	var text = document.getElementById('tekst');
	
	if(mail.indexOf("@") == -1) {
		text.innerHTML = 'Indtast gyldig mail';
		return false;
	}
	
	
}
	

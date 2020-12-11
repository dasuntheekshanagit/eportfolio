function rotateright(){
	var elem = document.getElementById("menu_bar");   
	var pos = 0;
	var id = setInterval(frame, 1);
	function frame() {
		if (pos == 360) {
			elem.style.width = '1.5em';
			clearInterval(id);
		} else {
			pos++;
			elem.style.width = '1.7em';
			elem.style.transform = 'rotate('+pos+'deg)';
		}
	}
}

function rotateleft(){
	var elem = document.getElementById("menu_bar");   
	var pos = 360;
	var id = setInterval(frame, 1);
	function frame() {
		if (pos == 0) {
			elem.style.width = '1.5em';
			clearInterval(id);
		} else {
			pos--;
			elem.style.width = '1.7em';
			elem.style.transform = 'rotate('+pos+'deg)';
		}
	}
}

function rotate() {
	var nav = document.getElementById("nav");
	if (nav.style.visibility == 'hidden'){
		rotateright();
		nav.style.visibility = 'visible';
	}else{
		rotateleft();
		nav.style.visibility = 'hidden';
	} 
	
}

function hide(){
	var nav = document.getElementById("nav");
	rotateleft();
	nav.style.visibility = 'hidden';
}
var currentLeft = 100;
var direction = 20;

function moveBox(){
	var mybox = document.getElementById("box");
	mybox.innerHTML = " Shuttle!";
	mybox.style.color = "blue";
	if(currentLeft >= 700){
		direction = -1;
		}else if (currentLeft <= 0){
			direction - 1;
		}
		currentLeft += 1 * direction;
		mybox.style.left = currentLeft + "px";
}

function triggerTime(){
//registers function to timer (name of function, interval in ms)
	window.setInterval ("moveBox()", 5);
}
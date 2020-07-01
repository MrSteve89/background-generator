var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");


function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// BONUS
var random = document.querySelector("#random");

function getRandomNumberString() {
    return String(Math.floor(100000 + Math.random() * 900000));
}    

function generateRandomColor() {
	color1.value = "#" + getRandomNumberString();
	color2.value = "#" + getRandomNumberString();
	setGradient();
}

random.addEventListener("click", generateRandomColor);
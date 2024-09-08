// var home = document.getElementById("home");
// var dev = document.getElementById("development");
// var music = document.getElementById("music");
// var art = document.getElementById("art");
// var yt = document.getElementById("youtube");

document.addEventListener('DOMContentLoaded', function() {
	var home = document.getElementById("home");
	home.classList.add("fadeIn");
});

function development() {
	var home = document.getElementById("home");
	var dev = document.getElementById("software");
	dev.classList.add("fadeIn");
	home.classList.add("fadeOut");
	dev.classList.remove("fadeOut");
	home.classList.remove("fadeIn");
};

function music() {
	var home = document.getElementById("home");
	var dev = document.getElementById("software");
	dev.classList.add("fadeIn");
	home.classList.add("fadeOut");
	dev.classList.remove("fadeOut");
	home.classList.remove("fadeIn");
};
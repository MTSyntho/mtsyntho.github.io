// var home = document.getElementById("home");
// var dev = document.getElementById("development");
// var music = document.getElementById("music");
// var art = document.getElementById("art");
// var yt = document.getElementById("youtube");

document.addEventListener('DOMContentLoaded', function() {
	var home = document.getElementById("home");
	var software = document.getElementById("Software");
	var music = document.getElementById("Music");
	var art = document.getElementById("Artworks");
	var youtube = document.getElementById("YouTube");
	var navbtn = document.getElementById("navbtn");
	var navbar = document.getElementById('navbar');
	var hash = window.location.hash
	home.classList.add("zoomIn");

	if (hash === '#development') {
		console.log('Opened Software Section')
		window.obj = document.getElementById('Software')

		window.obj.classList.add("fadeIn");
		home.classList.add("zoomOut");
		window.obj.classList.remove("fadeOut");
		home.classList.remove("zoomIn");

		navbtn.textContent = window.obj.id;
	};
	if (hash === '#music') {
		console.log('Opened Music Section')
		window.obj = document.getElementById('Music')

		window.obj.classList.add("fadeIn");
		home.classList.add("zoomOut");
		window.obj.classList.remove("fadeOut");
		home.classList.remove("zoomIn");

		navbtn.textContent = window.obj.id;
	};
	if (hash === '#art') {
		console.log('Opened Art Section')
		window.obj = document.getElementById('Artworks')

		window.obj.classList.add("fadeIn");
		home.classList.add("zoomOut");
		window.obj.classList.remove("fadeOut");
		home.classList.remove("zoomIn");

		navbtn.textContent = window.obj.id;
	};
	if (hash === '#youtube') {
		console.log('Opened YouTube Section')
		window.obj = document.getElementById('YouTube')

		window.obj.classList.add("fadeIn");
		home.classList.add("zoomOut");
		window.obj.classList.remove("fadeOut");
		home.classList.remove("zoomIn");

		navbtn.textContent = window.obj.id;
	};
	if (hash !== '') {
		navbar.classList.remove("navbarOut");
		navbar.classList.add("navbarIn");
	}
});

function home() {
	var home = document.getElementById("home");
	var navbtn = document.getElementById("navbtn");
	var navbar = document.getElementById('navbar');
	
	window.obj.classList.remove("fadeIn");
	home.classList.remove("zoomOut");
	window.obj.classList.add("fadeOut");
	home.classList.add("zoomIn");

	navbar.classList.remove("navbarIn");
	navbar.classList.add("navbarOut");
};

function section(id) {
	var home = document.getElementById("home");
	var navbtn = document.getElementById("navbtn");
	var navbar = document.getElementById('navbar');
	window.obj = document.getElementById(id);

	window.obj.classList.add("fadeIn");
	home.classList.add("zoomOut");
	window.obj.classList.remove("fadeOut");
	home.classList.remove("zoomIn");

	navbtn.textContent = id;

	if (getComputedStyle(navbar).opacity === '0') {
		navbar.classList.remove("navbarOut");
		navbar.classList.add("navbarIn");
	}
};
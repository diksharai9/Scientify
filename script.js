let menuBtn = document.getElementById("menu-toggle");
let menuContainer = document.getElementById("menu-container");
let menuIsOpen = false;

function showMenu() {
	if(document.body.clientWidth > 1480) {
		menuContainer.style.display = "none";
		menuContainer.style.top = "-100%";
		menuIsOpen = false;
		menuContainer.style.transition = "all 0.4s";
		menuBtn.innerHTML = "<i class='bx bx-menu'></i>";
	}
}

window.onload = showMenu;
window.onresize = showMenu;

menuBtn.addEventListener("click", () => {
	if(menuIsOpen) {
		menuIsOpen = false;
		menuContainer.style.display = "none";
		menuContainer.style.top = "-100%";
		menuContainer.style.transition = "all 0.4s";
		menuBtn.style.color = "rgba(255, 255, 255, 0.85)";
		menuBtn.innerHTML = "<i class='bx bx-menu'></i>";
	
	} else {
		menuIsOpen = true;
		menuContainer.style.display = "block";
		menuContainer.style.top = "150px";
		menuContainer.style.transition = "all 0.4s";
		menuBtn.style.color = "white";
		menuBtn.innerHTML = "<i class='bx bx-x' ></i>";
	}
})







let aboutPageLinks = document.querySelectorAll(".about-page-link");

for (let item of aboutPageLinks) {
	item.setAttribute("href", window.location.protocol + "//" + window.location.host + "/about/");
}

/* Games Page Redirect */

let gamePageLinks = document.querySelectorAll(".game-page-link");

for (let item of gamePageLinks) {
	item.setAttribute("href", window.location.protocol + "//" + window.location.host + "/game/");
}


/* Button Redirect */

let exploreBtn = document.getElementById("explore-btn");
let homeDownBtn = document.getElementById("home-down-btn");
let newsBtn = document.getElementById("learn-more-news-btn");
let planetsBtn = document.getElementById("learn-more-planets-btn");

exploreBtn.addEventListener("click", () => {
	window.location.href = "#planets";
})

homeDownBtn.addEventListener("click", () => {
	window.location.href = "#planets";
});

newsBtn.addEventListener("click", () => {
	window.location.href = "https://www.space.com/";
})

planetsBtn.addEventListener("click", () => {
	window.location.href = window.location.protocol + "//" + window.location.host + "/planets";
})
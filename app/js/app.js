// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
	const text = document.querySelector(".banner p");

	animate(text);

	function animate(element) {
		let elementWidth = element.offsetWidth;
		let parentWidth = element.parentElement.offsetWidth;
		let flag = 0;

		setInterval(() => {
			element.style.marginLeft = --flag * 2 + "px";

			if (elementWidth == -flag) {
				flag = parentWidth;
			}
		}, 10);
	}

	// Получаем актуальный год в copiright
	const currentDate = () => {
		let currentYear = new Date().getFullYear();
		document.getElementById("current-year").innerHTML = currentYear;
	}
	currentDate()

	const menuBurger = () => {
		const menuButton = document.querySelector("#nav-icon");
		const navigation = document.querySelector(".navigation");
		const body = document.querySelector("body");
		const bodyOverlay = document.querySelector(".body-overlay");

		document.addEventListener("click", (event) => {
			if (event.target.closest(".menu-item")) toggleNavActive();
			if (event.target.closest("#nav-icon")) toggleNavActive();
			if (event.target.closest(".body-overlay")) toggleNavActive();
		});

		const toggleNavActive = () => {
			menuButton.classList.toggle("_active");
			navigation.classList.toggle("_active");
			body.classList.toggle("_lock");
			bodyOverlay.classList.toggle("_active");
		};
	};
	menuBurger();
});

// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
	
//  Бегущая строка
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
	};
	currentDate();	

	const menu = () => {
		const menuButton = document.querySelector("#nav-icon");
		const navigation = document.querySelector(".navigation");
		const body = document.querySelector("body");
		const bodyOverlay = document.querySelector(".body-overlay");

		document.addEventListener("click", (e) => {
			let el = e.target;
			el.closest("#nav-icon") &&toggleNavActive();
			el.closest(".menu-item") &&toggleNavActive()
			el.closest(".body-overlay") &&toggleNavActive()
			el.closest(".menu-game__item") &&toggleNavActive()

			
		});

		const toggleNavActive = () => {
			menuButton.classList.toggle("_active");
			navigation.classList.toggle("_active");
			body.classList.toggle("_lock");
			bodyOverlay.classList.toggle("_active");
		};
	};
	menu();
});

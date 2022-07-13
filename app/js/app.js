import Swiper, { Navigation, Thumbs } from "swiper";
import marketplace from "./modules/marketplace.js";
import sliderServices from "./modules/services.js";
import sliderCases from "./modules/cases.js";
import aboutUs from "./modules/about-us.js";
import principles from "./modules/principles.js";
import contacts from "./modules/contacts.js";
import team from "./modules/team.js";
import startContent from "./modules/start-content.js";
import {
	contactUsMessage,
	menuLinkMessage,
	cookieMessage,
	assistantMessage,
} from "./modules/messages.js";
import {
	preloaderToHtml,
	acquaintanceToHtml,
	acquaintanceFormNameToHtml,
	acquaintanceFormRoleToHtml,
	settingsToHtml,
} from "./modules/game.js";
import marquee from "./modules/marquee.js";

document.addEventListener("DOMContentLoaded", () => {
	settingsToHtml();
	marquee();
	cookieMessage();

	const currentDate = () => {
		let currentYear = new Date().getFullYear();
		document.getElementById("current-year").innerHTML = currentYear;
	};
	currentDate();

	const menuSettings = () => {
		const settingsBurger = document.querySelector("#settings-burger");
		const headerLeft = document.querySelector(".game-navigation");
		const body = document.querySelector("body");
		const bodyOverlay = document.querySelector(".body-overlay");

		document.addEventListener("click", (e) => {
			let el = e.target;
			el.closest("#settings-burger") && toggleNavActive();
		});

		const toggleNavActive = () => {
			settingsBurger.classList.toggle("_active");
			headerLeft.classList.toggle("_active");
		};
	};
	menuSettings();

	const currentPageToHTML = () => {
		if (sessionStorage.getItem("menuButton")) {
			pageContent(sessionStorage.getItem("menuButton"));
			addActiveItem(sessionStorage.getItem("menuButton"));
		} else {
			startContent();
			addActiveItem("home");
		}
	};
	currentPageToHTML();

	const changeActiveItem = (indexClickedItem) => {
		const menuItems = document.querySelectorAll("[data-menu]");
		menuItems.forEach((item, index) => {
			item.classList.remove("_active");
			if (index === indexClickedItem) {
				item.classList.add("_active");
			}
		});
	};

	function addActiveItem(dataActiveItem) {
		const menuItems = document.querySelectorAll("[data-menu]");
		menuItems.forEach((item) => {
			let dataValue = item.attributes["data-menu"].value;
			item.classList.remove("_active");
			if (dataValue === dataActiveItem) {
				item.classList.add("_active");
			}
		});
	}

	const menu = () => {
		const navBurger = document.querySelector("#nav-burger");
		const navigation = document.querySelector(".navigation");
		const body = document.querySelector("body");
		const bodyOverlay = document.querySelector(".body-overlay");

		navBurger.addEventListener("click", (e) => {
			let el = e.target;
			el.closest("._active") ? removeNavActive() : addNavActive();
		});

		bodyOverlay.addEventListener("click", () => {
			removeNavActive();
		});

		const addNavActive = () => {
			navBurger.classList.add("_active");
			navigation.classList.add("_active");
			body.classList.add("_lock");
			bodyOverlay.classList.add("_active");
		};

		const removeNavActive = () => {
			navBurger.classList.remove("_active");
			navigation.classList.remove("_active");
			body.classList.remove("_lock");
			bodyOverlay.classList.remove("_active");
		};
	};
	menu();

	function navigation() {
		const menuItems = document.querySelectorAll("[data-menu]");
		const navBurger = document.querySelector("#nav-burger");
		const navigation = document.querySelector(".navigation");
		const body = document.querySelector("body");
		const bodyOverlay = document.querySelector(".body-overlay");

		menuItems.forEach((item, index) => {
			item.addEventListener("click", () => {
				let dataValue = item.attributes["data-menu"].value;
				pageContent(dataValue);
				sessionStorage.setItem("menuButton", dataValue);
				changeActiveItem(index);
				navBurger.classList.remove("_active");
				navigation.classList.remove("_active");
				body.classList.remove("_lock");
				bodyOverlay.classList.remove("_active");
			});
		});
	}
	navigation();

	function pageContent(page) {
		
		page === "home" && startContent();
		page === "about-us" && aboutUs();
		page === "services" && sliderServices();
		page === "team" && team();
		page === "cases" && sliderCases();
		page === "contacts" && contacts();
		page === "principles" && principles();
		page === "marketplace" && marketplace();
	}

	function messageTimer() {
		const messageTimerTime = document.querySelector(".message-timer__time");
		const messageTimerSpan = document.querySelector(
			".message-timer__track span"
		);
		const messageTimerTrack = document.querySelector(".message-timer__track");
		messageTimerTime.textContent = "0:00";

		let timerShow = document.getElementById("timer");
		let timeMinut = 0;
		let duration = 10;

		const timer = setInterval(function () {
			let seconds = timeMinut % 60;
			let minutes = (timeMinut / 60) % 60;
			let trackWidth = 0;

			if (timeMinut - 1 >= duration) {
				clearInterval(timer);
			} else {
				let strTimer = `${Math.trunc(minutes)}:${
					seconds < 10 ? "0" + seconds : seconds
				}`;
				timerShow.innerHTML = strTimer;
				// trackWidth += (messageTimerTrack.offsetWidth * seconds) / duration;
				// messageTimerSpan.style.width = trackWidth + "px";
			}
			++timeMinut;
		}, 1000);
	}
	messageTimer();
});

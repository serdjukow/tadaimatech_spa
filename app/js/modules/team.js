import Swiper, { Navigation, Pagination } from "swiper";
const team = () => {
	function teamToHtml(el) {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		<div class="page-content__container block-team">
			<div class="page-content__title page-title">
					<h2>${el.pageTitle || ""}</h2>
			</div>
			<div class="block-team__container">
				<div class="swiper-pagination"></div>		
					<!-- Slider main container -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
					<div class="swiper slider-team-logo">
							<div class="swiper-wrapper">
									<!-- Slides -->
									${slideRender(el)}
									<!--/  Slides -->
							</div>
					</div>
			</div>
		</div>
		`;
	}

	const slideTohtml = (slideContent) => `
		<div class="swiper-slide slider-team-logo__slide">
				<div class="slider-team-logo__img">
						<img src="images/dist/${slideContent.personPhoto}" />
				</div>
				<div class="slider-team-logo__title">
					<h5 class="slider-team-logo__title">
						<span>${slideContent.personSurname}</span>
						<span>${slideContent.personName}</span>
					</h5>
				</div>
				<div class="slider-team-logo__content">
					<h5 class="slider-team-logo__content-title">
						${slideContent.personSurname} ${slideContent.personName}
					</h5>
					<p class="slider-team-logo__content-post">
						${slideContent.personPosition}
					</p>
					<p class="slider-team-logo__content-text">
						${slideContent.personInfo}
					</p>
				</div>
		</div>
	`;

	const slideRender = (slideItems) =>
		slideItems.slides.map(slideTohtml).join("");

	const sliderTeamLogo = new Swiper(".slider-team-logo", {
		modules: [Navigation, Pagination],
		spaceBetween: 20,
		slidesPerView: 1,
		centeredSlides: true,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
		breakpoints: {
			991.98: {
				slidesPerView: 3,
			},
		},
	});

	const sendRequest = async () => {
		const url = "../db/pages.json";

		try {
			const response = await fetch(url);			
			const bd = await response.json();
			const  { sliderTeam }  = bd[0]
			teamToHtml( ...sliderTeam );
			sliderTeamLogo.init();
		} catch (e) {
			console.error(e.message);
		}
	};
	sendRequest();
};
export default team;

import Swiper, { Navigation, Thumbs, Pagination } from "swiper";
const sliderServices = () => {
	function servicesToHtml(el) {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
        <div class="page-content__container block-services">
						<div class="page-content__title page-title">
								<h2>${el.pageTitle || ""}</h2>
						</div>
						<div class="block-services__container">
								<div class="swiper-pagination"></div>
								<!-- Slider main container -->
								<div class="swiper slider-services">
										<!-- Additional required wrapper -->
										<div class="swiper-wrapper">
												<!-- Slides -->
												${slideRender(el)}
												<!-- / Slides -->
										</div>
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
								<div thumbsSlider="" class="swiper slider-services-logo">
										<div class="swiper-wrapper">
												<!-- Slides -->
												${slideLogoRender(el)}
												<!--/  Slides -->
										</div>
								</div>
						</div>
				</div>
    `;
	}

	const slideTohtml = (slideContent) => `
		<div class="swiper-slide slider-services__slide">
			<div class="slider-services__img">
					<img src="images/dist/slider/${slideContent.slidePhoto}" alt="${slideContent.slideTitle}" />
			</div>
			<div class="slider-services__title">
					<h3>${slideContent.slideTitle}</h3>
					<p>
							${slideContent.slideSudtitle}
					</p>
			</div>
		</div>
	`;

	const slideRender = (slideItems) =>
		slideItems.slides.map(slideTohtml).join("");

	const slideLogoTohtml = (slideContent) => `
		<div class="swiper-slide slider-services-logo__slide">
				<div class="slider-services-logo__items">
					${slideLogoItemsRender(slideContent)}
				</div>
		</div>
	`;

	const slideLogoRender = (slideItems) =>
		slideItems.slides.map(slideLogoTohtml).join("");

	const slideLogoItemTohtml = (slideIcon) => `
		<div class="slider-services-logo__item">
				<img src="images/dist/slider/slider-icons/${slideIcon}" />
		</div>
	`;
	const slideLogoItemsRender = (slideItems) =>
		slideItems.slideIcons.map(slideLogoItemTohtml).join("");

	const sendRequest = async () => {
		const url = `./db/pages.json`;
		try {
			const response = await fetch(url);
			const bd = await response.json();
			const { sliderServices } = bd[0];
			servicesToHtml(...sliderServices);

			const sliderServicesLogo = new Swiper(".slider-services-logo", {
				loop: false,
				slidesPerView: 1,
				freeMode: true,
				watchSlidesProgress: true,
			});

			const sliderServicesSwiper = new Swiper(".slider-services", {
				modules: [Navigation, Thumbs, Pagination],
				loop: false,
				slidesPerView: 1,
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
				thumbs: {
					swiper: sliderServicesLogo,
				},
			});
		} catch (e) {
			console.error(e.message);
		}
	};
	sendRequest();
};

export default sliderServices;

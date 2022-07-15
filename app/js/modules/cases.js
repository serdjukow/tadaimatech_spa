import Swiper, { Navigation, Thumbs, Pagination } from "swiper";
const sliderCases = () => {
	function casesToHtml(el) {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
        <div class="page-content__container block-cases">
        <div class="page-content__title page-title">
            <h2>${el.pageTitle || ""}</h2>
            <p>
								${el.pageSubTitle || ""}
            </p>
        </div>
        <div class="block-cases__container">
				<div class="swiper-pagination"></div>
        <!-- Slider main container -->
        <div class="swiper slider-cases">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
								${slideRender(el)}
                <!--/  Slides -->
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div thumbsSlider="" class="swiper slider-cases-logo">
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
	// ${slideContent.slidePhoto}
	const slideTohtml = (slideContent) => `
	<div class="swiper-slide slider-cases__slide">
		<div class="slider-cases__video">
				${imgOrVideo(slideContent) || "Медиа файл не найден"}
		</div>
		<div class="slider-cases__title">
				<p>
						${slideContent.slideSudtitle}
				</p>
		</div>
	</div>
`;

	function imgOrVideo(el) {
		console.log(el);
		if (el.slideVideo) {
			return `
			<video
			controls="controls"
			poster=""
			loop
			muted
			>
				<source src="images/dist/video/${el.slideVideo}" type="video/mp4" />
			</video>
			`;
		} else if (el.slideImg) {
			return `
				<img src="images/dist/slider/${el.slideImg}" type="video/mp4" />
			`;
		}
	}

	const slideRender = (slideItems) =>
		slideItems.slides.map(slideTohtml).join("");

	const slideLogoTohtml = (slideContent) => `
		<div class="swiper-slide slider-cases-logo__slide">
				<div class="slider-cases-logo__items">
						${slideLogoItemsRender(slideContent)}
				</div>
		</div>
	`;
	const slideLogoRender = (slideItems) =>
		slideItems.slides.map(slideLogoTohtml).join("");

	const slideLogoItemTohtml = (slideIcon) => `
	<div class="slider-cases-logo__item">
		<div class="slider-cases-logo__icon">
				<img
						src="images/dist/slider/slider-icons/${slideIcon.icon}"
				/>
		</div>
		<div class="slider-cases-logo__text">
				<p>
						${slideIcon.text}
				</p>
		</div>
	</div>
`;
	const slideLogoItemsRender = (slideItems) =>
		slideItems.slideIinfo.map(slideLogoItemTohtml).join("");

	const sendRequest = async () => {
		const url = `./db/pages.json`;
		try {
			const response = await fetch(url);
			const bd = await response.json();
			const { sliderCases } = bd[0];
			casesToHtml(...sliderCases);

			const sliderCasesLogo = new Swiper(".slider-cases-logo", {
				loop: false,
				slidesPerView: 1,
				freeMode: false,
				watchSlidesProgress: false,
			});

			const sliderCasesSwiper = new Swiper(".slider-cases", {
				modules: [Navigation, Thumbs, Pagination],
				loop: false,
				slidesPerView: 1,
				freeMode: false,
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
					swiper: sliderCasesLogo,
				},
			});
		} catch (e) {
			console.error(e.message);
		}
	};
	sendRequest();
};

export default sliderCases;

import Swiper, { Navigation, Thumbs, Pagination } from "swiper";
const team = () => {
	function teamToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		<div class="page-content__container block-team">
		<div class="page-content__title page-title">
				<h2>Наша команда</h2>
		</div>
		<div class="block-team__container">
		<div class="swiper-pagination"></div>

		
		<!-- Slider main container -->		
		<div class="swiper slider-team">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">

						<!-- Slides -->

							<div class="swiper-slide slider-team__slide">
									<div class="slider-team__img">
											<img src="images/dist/team/leonid.jpg" alt="" />
									</div>
									<div class="slider-team__title">
											<h3> Орещенко Леонид</h3>
											<p>
											Посредник между бизнесом и программистами - бизнес консультант, разрабатываю алгоритмы автоматизации бизнес-процессов для крупных компаний и государственных учреждениях, точный "переводчик" клиентских желаний на технический  язык и неиссякаемый генератор бизнес-идей
											</p>
									</div>
							</div>

							<div class="swiper-slide slider-team__slide">
									<div class="slider-team__img">
											<img src="images/dist/team/leonid.jpg" alt="" />
									</div>
									<div class="slider-team__title">
											<h3> Орещенко Леонид</h3>
											<p>
											Посредник между бизнесом и программистами - бизнес консультант, разрабатываю алгоритмы автоматизации бизнес-процессов для крупных компаний и государственных учреждениях, точный "переводчик" клиентских желаний на технический  язык и неиссякаемый генератор бизнес-идей
											</p>
									</div>
							</div>

					<!--/  Slides -->
				</div>
		</div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>

		<div thumbsSlider="" class="swiper slider-team-logo">
				<div class="swiper-wrapper">

						<!-- Slides -->

						<div class="swiper-slide slider-team-logo__slide">
							<div class="slider-team-logo__img">
									<img src="images/dist/assistant.png" />
							</div>
							<div class="slider-team-logo__title">
								<h5 class="slider-team-logo__title">Орещенко Леонид</h5>
								<p>Продюсер цифровых решений</p>
							</div>							
						</div>

						<div class="swiper-slide slider-team-logo__slide">
							<div class="slider-team-logo__img">
									<img src="images/dist/assistant.png" />
							</div>
							<div class="slider-team-logo__title">
								<h5 class="slider-team-logo__title">Орещенко Леонид</h5>
								<p>Продюсер цифровых решений</p>
							</div>							
						</div>

						<!--/  Slides -->
				</div>
		</div>
		</div>

</div>
		`;
	}
    teamToHtml()

    const sliderTeamLogo = new Swiper(".slider-team-logo", {
			loop: false,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesProgress: true,
	});

	const sliderTeam = new Swiper(".slider-team", {
			modules: [Navigation, Thumbs, Pagination],
			loop: true,
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
					swiper: sliderTeamLogo,
			},
	});
}
export default team
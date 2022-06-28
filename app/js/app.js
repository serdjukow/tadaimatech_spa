import Swiper, { Navigation, Thumbs } from "swiper";
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



	function preloaderToHtml() {
		const gameBody = document.querySelector(".game__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
			<div class="game__preloader preloader">
			<div class="preloader__container">
				<div class="preloader__track">
					<span></span>
				</div>
				<div class="preloader__title">Подгружается геймификация...</div>
			</div>
		</div>
		`;
	}

	function acquaintanceToHtml() {
		const gameBody = document.querySelector(".game__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
		<div class="game__acquaintance acquaintance">
		<div class="acquaintance__header">
			<p>
				Давайте знакомиться с возможностями геймификации
				бизнесс-процессов и с нами. Поиграем?
			</p>
		</div>
		<div class="acquaintance__footer">
			<p>Кем будете играть?</p>
			<div class="acquaintance__buttons">
				<button class="acquaintance__button button">Женщиной</button>
				<button class="acquaintance__button button">Мужчиной</button>
			</div>
		</div>
	</div>
		`;
	}

	function acquaintanceFormNameToHtml() {
		const gameBody = document.querySelector(".game__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
		<div class="game__acquaintance acquaintance acquaintance-input">
		<div class="acquaintance__header">
			<p class="acquaintance__title">
				Давайте знакомиться с возможностями геймификации
				бизнесс-процессов и с нами. Поиграем?
			</p>
		</div>
		<div class="acquaintance__footer">
			<form class="acquaintance__form">
				<div class="acquaintance__item item-text">
					<span class="item-text__title">Как Вас зовут?</span>
					<input
						id="name"
						class="item-text__input"
						type="text"
						placeholder="Введите своё имя"
						required
					/>
				</div>
				<div class="acquaintance__buttons">
					<button class="acquaintance__button button">
						Знакомиться
					</button>
				</div>
			</form>
		</div>
	</div>
		`;
	}

	function acquaintanceFormRoleToHtml() {
		const gameBody = document.querySelector(".game__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
		<div class="game__acquaintance acquaintance">
		<div class="acquaintance__header">
			<p class="acquaintance__title">
				Давайте знакомиться с возможностями геймификации
				бизнесс-процессов и с нами. Поиграем?
			</p>
		</div>
		<div class="acquaintance__footer">
			<form class="acquaintance__form">
				<div class="acquaintance__item item-radio">
					<p class="item-radio__title">Давайте выберем Вашу роль</p>

					<div class="item-radio__elem">
						<input
							id="acquaintance-guest"
							class="item-radio__input"
							name="acquaintance"
							value="guest"
							type="radio"
							checked
						/>
						<label class="item-radio__label" for="acquaintance-guest">
							<span class="item-radio__role">гость</span>
							<span class="item-radio__description"
								>Решил посмотреть интересный сайт</span
							>
						</label>
					</div>
					<div class="item-radio__elem">
						<input
							id="acquaintance-busines"
							class="item-radio__input"
							name="acquaintance"
							value="busines"
							type="radio"
						/>
						<label class="item-radio__label" for="acquaintance-busines">
							<span class="item-radio__role">ПРЕДПРИНИМАТЕЛЬ</span>
							<span class="item-radio__description"
								>У меня есть идея, которую хочу реализовать и ищу
								исполнителей
							</span>
						</label>
					</div>
					<div class="item-radio__elem">
						<input
							id="acquaintance-partner"
							class="item-radio__input"
							name="acquaintance"
							value="partne"
							type="radio"
						/>
						<label class="item-radio__label" for="acquaintance-partner">
							<span class="item-radio__role">Партнер</span>
							<span class="item-radio__description"
								>У меня много бизнес контактов, могу рекомендовать Вас
								как хороших специалистов
							</span>
						</label>
					</div>
				</div>
				<div class="acquaintance__buttons">
					<button class="acquaintance__button button">
						Знакомиться
					</button>
				</div>
			</form>
		</div>
	</div>
		`;
	}

	function settingsToHtml() {
		const gameBody = document.querySelector(".game__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
		<div class="game__settings settings">
		<div class="settings__progress progress-block progress-full">
			<div class="progress-block__title">
				<div class="progress-block__title-name">Леонид</div>
				<div class="progress-block__title-category">
					— предприниматель
				</div>
			</div>
			<div class="progress-block__body">
				<div class="progress-block__track">
					<span class="_active"></span><span class="_active"></span
					><span class="_active"></span><span class="_active"></span
					><span class="_active"></span><span class="_active"></span
					><span class="_active"></span><span class="_active"></span
					><span></span><span></span><span></span><span></span
					><span></span><span></span><span></span><span></span
					><span></span><span></span><span></span><span></span
					><span></span><span></span><span></span><span></span
					><span></span><span></span><span></span><span></span
					><span></span><span></span><span></span><span></span
					><span></span><span></span><span></span><span></span
					><span></span>
				</div>
				<div class="progress-block__value"><span>1</span>ур.</div>
			</div>
		</div>

		<div class="game__settings-panel panel-settings">
			<div class="panel-settings__tracks">
				<div class="panel-settings__bonuses">
					<div class="panel-settings__bonus bonus-block">
						<span>25</span>
					</div>
					<div class="panel-settings__bonus bonus-block">
						<span>24</span>
					</div>
					<div class="panel-settings__bonus bonus-block">
						<span>100</span>k
					</div>
					
				</div>

				<div class="panel-settings__progress progress-block">
					<div class="progress-block__title">
						<div class="progress-block__title-category">
							Предприимчивость
						</div>
					</div>
					<div class="progress-block__body">
						<div class="progress-block__track">
							<span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span></span><span></span><span></span><span></span
							><span></span><span></span><span></span>
						</div>
						<div class="progress-block__value"><span>1</span></div>
					</div>
				</div>
				<div class="panel-settings__progress progress-block">
					<div class="progress-block__title">
						<div class="progress-block__title-category">
							Познавательность
						</div>
					</div>
					<div class="progress-block__body">
						<div class="progress-block__track">
							<span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span><span></span><span></span
							><span></span><span></span><span></span>
						</div>
						<div class="progress-block__value"><span>2</span></div>
					</div>
				</div>
				<div class="panel-settings__progress progress-block">
					<div class="progress-block__title">
						<div class="progress-block__title-category">
							Пунктуальность
						</div>
					</div>
					<div class="progress-block__body">
						<div class="progress-block__track">
							<span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span></span><span></span><span></span><span></span
							><span></span><span></span><span></span>
						</div>
						<div class="progress-block__value"><span>1</span></div>
					</div>
				</div>
				<div class="panel-settings__progress progress-block">
					<div class="progress-block__title">
						<div class="progress-block__title-category">Лояльность</div>
					</div>
					<div class="progress-block__body">
						<div class="progress-block__track">
							<span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span></span><span></span
							><span></span><span></span><span></span><span></span
							><span></span><span></span><span></span>
						</div>
						<div class="progress-block__value"><span>1</span></div>
					</div>
				</div>
				<div class="panel-settings__progress progress-block">
					<div class="progress-block__title">
						<div class="progress-block__title-category">
							Коммуникабельность
						</div>
					</div>
					<div class="progress-block__body">
						<div class="progress-block__track">
							<span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span><span class="_active"></span><span></span
							><span></span><span></span><span></span>
						</div>
						<div class="progress-block__value"><span>1</span></div>
					</div>
				</div>
				<div class="panel-settings__progress progress-block">
					<div class="progress-block__title">
						<div class="progress-block__title-category">
							Элегантность
						</div>
					</div>
					<div class="progress-block__body">
						<div class="progress-block__track">
							<span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span class="_active"></span
							><span class="_active"></span><span></span><span></span><span></span
							><span></span><span></span><span></span>
						</div>
						<div class="progress-block__value"><span>1</span></div>
					</div>
				</div>
			</div>

			<div class="panel-settings__photo">
				<img src="images/dist/gamer.png" alt="" />
			</div>
			<div class="panel-settings__icons">
				<div class="panel-settings__icon"></div>
				<div class="panel-settings__icon  _active"></div>
				<div class="panel-settings__icon"></div>
				<div class="panel-settings__icon"></div>
				<div class="panel-settings__icon"></div>
				<div class="panel-settings__icon"></div>
			</div>
		</div>
	</div>
		`;
	}
	settingsToHtml()
	
	const sliderServices = () => {
		function servicesToHtml() {
			const pageBody = document.querySelector(".page-content");
			pageBody.innerHTML = "";
			pageBody.innerHTML = `
			<div class="page-content__container block-services">
			<div class="page-content__title page-title">
				<h2>Мы разрабатываем</h2>
			</div>
			<div class="block-services__container">
			<!-- Slider main container -->
			<div class="swiper slider-services">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide slider-services__slide">
						<div class="slider-services__img">
							<img src="images/dist/slider/services-4.jpg" alt="" />
						</div>
						<div class="slider-services__title">
							<h3>Решения виртуальной и дополненной реальности</h3>
							<p>
								VR, AR приложения для бизнеса, метавселенные, игры
								дополненной реальности, NFT платформы
							</p>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="slider-services__img">
							<img src="images/dist/slider/services-1.jpg" alt="" />
						</div>
						<div class="slider-services__title">
							<h3>Системы Автоматизации и Геймификации бизнеса</h3>
							<p>
								Автоматизация и геймификация бизнес процессов любых
								масштабов, ERP, CRM, API интеграции разных систем
							</p>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="slider-services__img">
							<img src="images/dist/slider/services-2.jpg" alt="" />
						</div>
						<div class="slider-services__title">
							<h3>Уникальные сайты, приложения и маркетплейсы</h3>
							<p>
								Приложения для IOS и Android, сайты корпоративные,
								высоконагруженные маркетплейсы и порталы
							</p>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="slider-services__img">
							<img src="images/dist/slider/services-3.jpg" alt="" />
						</div>
						<div class="slider-services__title">
							<h3>Решения виртуальной и дополненной реальности</h3>
							<p>
								VR, AR приложения для бизнеса, метавселенные, игры
								дополненной реальности, NFT платформы
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
	
			<div thumbsSlider="" class="swiper slider-services-logo">
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide slider-services-logo__slide">
						<div class="slider-services-logo__items">
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/unreal.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/swift.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/unity.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/blockchain.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/kotlin.svg" />
							</div>
						</div>
					</div>
					<div class="swiper-slide slider-services-logo__slide">
						<div class="slider-services-logo__items">
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/web.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/mysql.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/aws.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/api.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/1c.svg" />
							</div>
						</div>
					</div>
					<div class="swiper-slide slider-services-logo__slide">
						<div class="slider-services-logo__items">
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/web.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/ispring.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/moodle.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/getcourse.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/webinar.svg" />
							</div>
						</div>
					</div>
					<div class="swiper-slide slider-services-logo__slide">
						<div class="slider-services-logo__items">
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/web.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/mysql.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/swift.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/kotlin.svg" />
							</div>
							<div class="slider-services-logo__item">
								<img src="images/dist/slider/slider-icons/aws.svg" />
							</div>
						</div>
					</div>
	
	
					<!--/  Slides -->
				</div>
			</div>
			</div>

		</div>
			`;
		}
		servicesToHtml();

		const sliderServicesLogo = new Swiper(".slider-services-logo", {
			loop: false,
			slidesPerView: 1,
			freeMode: true,
			watchSlidesProgress: true,
		});

		const sliderServices = new Swiper(".slider-services", {
			modules: [Navigation, Thumbs],
			loop: false,
			slidesPerView: 1,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: sliderServicesLogo,
			},
		});
	};

	const sliderCases = () => {
		function casesToHtml() {
			const pageBody = document.querySelector(".page-content");
			pageBody.innerHTML = "";
			pageBody.innerHTML = `
			<div class="page-content__container block-cases">
			<div class="page-content__title page-title">
				<h2>Наши кейсы</h2>
				<p>
					Кейсы нашей команды ярко показывают возможности технологических
					решений, которые могут усилить Ваш бизнес.
				</p>
			</div>
			<div class="block-cases__container">
			<!-- Slider main container -->
			<div class="swiper slider-cases">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->

					<div class="swiper-slide slider-cases__slide">
						<div class="slider-cases__video">
							<video
								controls="controls"
								poster="video/duel.jpg"
								autoplay
								loop
								muted
							>
								<source src="images/dist/video-bg.mp4" type="video/mp4" />
							</video>
						</div>
						<div class="slider-cases__title">
							<p>
								Промо приложение электрической щетки IQ для Oral-B с
								технологией дополненной реальности.
							</p>
						</div>
					</div>

					<div class="swiper-slide slider-cases__slide">
						<div class="slider-cases__video">
							<video
								controls="controls"
								poster="video/duel.jpg"
								autoplay
								loop
								muted
							>
								<source src="images/dist/video-bg.mp4" type="video/mp4" />
							</video>
						</div>
						<div class="slider-cases__title">
							<p>
								Промо приложение электрической щетки IQ для Oral-B с
								технологией дополненной реальности.
							</p>
						</div>
					</div>

					<!--/  Slides -->
				</div>
			</div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<div thumbsSlider="" class="swiper slider-cases-logo">
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide slider-cases-logo__slide">
						<div class="slider-cases-logo__items">
							<div class="slider-cases-logo__item">
								<div class="slider-cases-logo__icon">
									<img
										src="images/dist/slider/slider-icons/dental-expo.svg"
									/>
								</div>
								<div class="slider-cases-logo__text">
									<p>
										Приложение разрабатывалось для конференции Dental expo
										2020.
									</p>
								</div>
							</div>
							<div class="slider-cases-logo__item">
								<div class="slider-cases-logo__icon">
									<img src="images/dist/slider/slider-icons/3d.svg" />
								</div>
								<div class="slider-cases-logo__text">
									<p>
										При наведении телефона на образец, он оживал в телефоне
										в виде 3D модели. Приложение имело интерактивное меню с
										которым пользователь может взаимодействовать в
										зависимости от образца на стенде, и получать
										исчерпывающую информацию в текстовом, аудио, видео
										формате.
									</p>
								</div>
							</div>
							<div class="slider-cases-logo__item">
								<div class="slider-cases-logo__icon">
									<img
										src="images/dist/slider/slider-icons/unreal-2.svg"
									/>
								</div>
								<div class="slider-cases-logo__text">
									<p>
										Разработка велась на современных стеках технологий
										дополненной реальности, 3D моделировании, а также
										решение было доступно для платформ Android и IOS.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="swiper-slide slider-cases-logo__slide">
						<div class="slider-cases-logo__items">
							<div class="slider-cases-logo__item">
								<div class="slider-cases-logo__icon">
									<img
										src="images/dist/slider/slider-icons/dental-expo.svg"
									/>
								</div>
								<div class="slider-cases-logo__text">
									<p>
										Приложение разрабатывалось для конференции Dental expo
										2020.
									</p>
								</div>
							</div>
							<div class="slider-cases-logo__item">
								<div class="slider-cases-logo__icon">
									<img src="images/dist/slider/slider-icons/3d.svg" />
								</div>
								<div class="slider-cases-logo__text">
									<p>
										При наведении телефона на образец, он оживал в телефоне
										в виде 3D модели. Приложение имело интерактивное меню с
										которым пользователь может взаимодействовать в
										зависимости от образца на стенде, и получать
										исчерпывающую информацию в текстовом, аудио, видео
										формате.
									</p>
								</div>
							</div>
						</div>
					</div>

					<!--/  Slides -->
				</div>
			</div>
			</div>
	
		</div>
			`;
		}
		casesToHtml();

		const sliderCasesLogo = new Swiper(".slider-cases-logo", {
			loop: false,
			slidesPerView: 1,
			freeMode: false,
			watchSlidesProgress: false,
		});

		const sliderCases = new Swiper(".slider-cases", {
			modules: [Navigation, Thumbs],
			loop: false,
			slidesPerView: 1,
			freeMode: false,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: sliderCasesLogo,
			},
		});
	};

	function contactUsMessage() {
		const gameBody = document.querySelector(".message__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
		<div class="message__container contact-us">
		<div class="message__content">
			<p>
			Если вы готовы связаться с нами без прелюдий и изучения наших
			возможностей, сделайте это <span>прямо сейчас!</span>
			</p>
		</div>

		<div class="message__buttons">
		<button class="message__button button">Связаться с нами</button>
	</div>

		<div class="message__footer">
			We use cookies to enhance your expirience, analyze our traffice,
			and for security and marketing. By visiting our website you agree
			to our use of cookies.
			<a class="message__link" href="#">Cookie Policy</a>.
		</div>
	</div>
		`;
	}

	function cookieMessage() {
		const gameBody = document.querySelector(".message__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
		<div class="message__container">
		<div class="message__content">
			<h3>Мы используем сookie!</h3>
			<p>
				Во время посещения сайта «tadaimatech.com» вы соглашаетесь с
				тем, что мы обрабатываем ваши персональные данные с
				использованием метрических программ.
			</p>
		</div>

		<div class="message__buttons">
			<button class="message__button button">принять</button>
		</div>

		<div class="message__timer message-timer">
			<span id="timer" class="message-timer__time">0:21</span>
			<div class="message-timer__track">
				<span></span>
			</div>
		</div>
	</div>
		`;
	}

	function menuLinkMessage() {
		const gameBody = document.querySelector(".message__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
		<div class="message__container">
		<div class="message__content">
			<h3>Отлично, мы о Вас кое-что узнали, давайте мы расскажем о себе.</h3>
			<p>
			Перейдите в раздел меню &#9776; в правом верхнем углу, раздел — «О нас»
			</p>
		</div>

		<div class="message__buttons">
			<button class="message__button button">Перейти</button>
		</div>

		<div class="message__timer message-timer">	
			<span id="timer" class="message-timer__time">0:00</span>
			<div class="message-timer__track">
				<span ></span>
			</div>
		</div>
	</div>
		`;
	}

	function assistantMessage() {
		const gameBody = document.querySelector(".message__body");
		gameBody.innerHTML = "";
		gameBody.innerHTML = `
		<div class="message__container assistant-message">
		<div class="assistant-message__content">
			<div class="assistant-message__img">
				<img src="images/dist/assistant.png" alt="assistant" />
			</div>
			<div class="assistant-message__text">
				<p>
					Ваш личный помощник в разработке решения для Вашего бизнеса:
				</p>
				<h3>Леонид Орещенко</h3>
				<p>Продюсер цифровых решений</p>
			</div>
		</div>
		<div class="assistant-message__buttons">
			<button class="assistant-message__button button">
				написать на почту
			</button>
			<button class="assistant-message__button button">
				Написать в telegram
			</button>
		</div>
	</div>
		`;
	}

	function startContentToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
			<div class="game-content__start-block start-block">
				<div class="start-block__logo">
					<img src="images/dist/logo.png" alt="logo" />
				</div>
				<div class="start-block__title">
					<h1>tadaimatech</h1>
					<p>Спутник цифровых трансформаций Вашего бизнеса</p>
				</div>
	 	</div>
		`;
	}

	function aboutUsToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		<div class="page-content__container block-about-us">

		<div class="block-about-us__title">
			<div class="block-about-us__logo">
				<div class="block-about-us__logo-img">
					<img src="images/dist/logo.png" alt="logo">
				</div>
				<div class="block-about-us__logo-text">
					TADAIMATECH
				</div>
			</div>
			<div class="block-about-us__title-text">
				Спутник цифровых трансформаций Вашего бизнеса!
			</div>
		</div>
		<div class="block-about-us__row">
			<div class="block-about-us__content">
				<div class="block-about-us__item">
					<div class="block-about-us__item-img">
						<img src="images/dist/about-us.png" alt="about-us">
					</div>
					<p class="block-about-us__item-text">Мы — команда из 35 профессионалов в области разработки цифровых решений для бизнеса.</p>
				</div>
				<div class="block-about-us__item">
					<div class="block-about-us__item-img">
						<img src="images/dist/mission.png" alt="about-us">
					</div>
					<p class="block-about-us__item-text">Мы помогаем бизнесу и государственным организациям эффективно выстроить работу и коммуникации в цифровую эпоху.</p>
				</div>
			</div>
			<div class="block-about-us__contact">
				<div class="block-about-us__contact-img">
					<img src="images/dist/assistant.png" alt="assistant">
				</div>
				<p class="block-about-us__contact-subtitle">
					Ваш личный помощник в разработке решения для Вашего бизнеса:
				</p>
				<div class="block-about-us__contact-title">
					<h4>
						Леонид Орещенко	
					</h4>
					<p>Продюсер цифровых решений</p>
				</div>
				<div class="block-about-us__contact-buttons">
					<button class="block-about-us__contact-button button">написать на почту</button>
					<button class="block-about-us__contact-button button">Написать в telegram</button>
				</div>
			</div>
		</div>
	</div>
		`;
	}

	function teamToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		команда
		`;
	}

	function contactsToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
			<div class="page-content__container block-contacts">
			<div class="page-content__title page-title">
				<h2>Контакты</h2>
			</div>

			<div class="block-contacts__row">
				<div class="block-contacts__map">
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e7360dce579fbac469e7aeb98a2e2bae4ecc9dce4fd60c8a28a01c2af33cbcd&amp;source=constructor" width="840" height="700" frameborder="0"></iframe>
				</div>
				<div class="block-contacts__form contacts-form">
					<div class="contacts-form__title">
						<p>Остались вопросы?</p>
						<p>Заполните фору и мы с Вами свяжемся!</p>
					</div>

					<form>
						<input placeholder="Ваше имя" />
						<input placeholder="Ваш e-mail" />
						<textarea placeholder="Сообщение..."></textarea>
						<button class="contacts-form__button button">Отправить</button>
					</form>

					<div class="contacts-form__info form-info">
						<p class="form-info__address">141667, Московская обл, Клинский р-н, Спас-Заулок с, Сосновый Бор ул, д. 36</p>
						<p class="form-info__tel">+7 (968) 930-46-57</p>
					</div>
				</div>
			</div>
		</div>
		`;
	}

	function principlesOfOperationToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		<div class="page-content__container block-principles">
		<div class="page-content__title page-title">
			<h2>Как мы работаем</h2>
		</div>
		<div class="block-principles__row">
			<ul class="block-principles__menu">
				<li class="block-principles__menu-item _active">
					Этап Знакомства
				</li>
				<li class="block-principles__menu-item">
					Этап аналитики для крупных проектов
				</li>
				<li class="block-principles__menu-item">Этап разработки</li>
				<li class="block-principles__menu-item">
					Этап внедрения и сопровождения
				</li>
			</ul>

			<div class="block-principles__content">
				<div class="block-principles__content-items">
	
				</div>
				<div class="block-principles__content-photo">
					<img src="images/dist/principles/principles-1.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
		`;
	}

	function marketplaceToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		<div class="page-content__container block-shop">
		<div class="block-shop__row">
			<div class="block-shop__items">			
				<div class="block-shop__item shop-item">
					<div class="shop-item__img">
						<img src="images/dist/article.png" alt="">
					</div>
					<div class="shop-item__price">
						25 000
					</div>
					<div class="shop-item__title">
						BOKAI / Трусы
					</div>
					<div class="shop-item__footer">
						<div class="shop-item__checkbox">
							<input id="chk-1" type="checkbox">
							<label for="chk-1">хочу бонус</label>
						</div>
						<div class="shop-item__color gray">
							Цвет:
						</div>
					</div>
				</div>
				<div class="block-shop__item shop-item">
					<div class="shop-item__img">
						<img src="images/dist/article.png" alt="">
					</div>
					<div class="shop-item__price">
						25 000
					</div>
					<div class="shop-item__title">
						BOKAI / Трусы
					</div>
					<div class="shop-item__footer">
						<div class="shop-item__checkbox">
							<input id="chk-2" type="checkbox">
							<label for="chk-2">хочу бонус</label>
						</div>
						<div class="shop-item__color black">
							Цвет:
						</div>
					</div>
				</div>
				<div class="block-shop__item shop-item">
					<div class="shop-item__img">
						<img src="images/dist/article.png" alt="">
					</div>
					<div class="shop-item__price">
						25 000
					</div>
					<div class="shop-item__title">
						BOKAI / Трусы
					</div>
					<div class="shop-item__footer">
						<div class="shop-item__checkbox">
							<input id="chk-3" type="checkbox">
							<label for="chk-3">хочу бонус</label>
						</div>
						<div class="shop-item__color brown">
							Цвет:
						</div>
					</div>
				</div>
				<div class="block-shop__item shop-item">
					<div class="shop-item__img">
						<img src="images/dist/article.png" alt="">
					</div>
					<div class="shop-item__price">
						25 000
					</div>
					<div class="shop-item__title">
						BOKAI / Трусы
					</div>
					<div class="shop-item__footer">
						<div class="shop-item__checkbox">
							<input id="chk-4" type="checkbox">
							<label for="chk-4">хочу бонус</label>
						</div>
						<div class="shop-item__color gray">
							Цвет:
						</div>
					</div>
				</div>
				<div class="block-shop__item shop-item">
					<div class="shop-item__img">
						<img src="images/dist/article.png" alt="">
					</div>
					<div class="shop-item__price">
						25 000
					</div>
					<div class="shop-item__title">
						BOKAI / Трусы
					</div>
					<div class="shop-item__footer">
						<div class="shop-item__checkbox">
							<input id="chk-5" type="checkbox">
							<label for="chk-5">хочу бонус</label>
						</div>
						<div class="shop-item__color white">
							Цвет:
						</div>
					</div>
				</div>

				<div class="block-shop__item shop-item">
					<div class="shop-item__img">
						<img src="images/dist/article.png" alt="">
					</div>
					<div class="shop-item__price">
						25 000
					</div>
					<div class="shop-item__title">
						BOKAI / Трусы
					</div>
					<div class="shop-item__footer">
						<div class="shop-item__checkbox">
							<input id="chk-6" type="checkbox">
							<label for="chk-6">хочу бонус</label>
						</div>
						<div class="shop-item__color blue">
							Цвет:
						</div>
					</div>
				</div>
				<div class="block-shop__item shop-item">
					<div class="shop-item__img">
						<img src="images/dist/article.png" alt="">
					</div>
					<div class="shop-item__price">
						25 000
					</div>
					<div class="shop-item__title">
						BOKAI / Трусы
					</div>
					<div class="shop-item__footer">
						<div class="shop-item__checkbox">
							<input id="chk-7" type="checkbox">
							<label for="chk-7">хочу бонус</label>
						</div>
						<div class="shop-item__color black">
							Цвет:
						</div>
					</div>
				</div>
				<div class="block-shop__item shop-item">
					<div class="shop-item__img">
						<img src="images/dist/article.png" alt="">
					</div>
					<div class="shop-item__price">
						25 000
					</div>
					<div class="shop-item__title">
						BOKAI / Трусы
					</div>
					<div class="shop-item__footer">
						<div class="shop-item__checkbox">
							<input id="chk-8" type="checkbox">
							<label for="chk-8">хочу бонус</label>
						</div>
						<div class="shop-item__color yellow">
							Цвет:
						</div>
					</div>
				</div>
			</div>
			<div class="block-shop__panel shop-panel">
				<div class="shop-panel__top">
					<div class="shop-panel__your-bonus button">
						Ваши бонусы:<span>8</span>
					</div>
					<div class="shop-panel__result">
						Итого:<span>343 000</span>
					</div>
					<button class="shop-panel__purchase button">
						Купить комплект
					</button>
				</div>
				<div class="shop-panel__bottom">
					<div class="shop-panel__control panel-control">
						<button class="panel-control__button button-prew"></button>
						<div class="panel-control__value">
							<span>Шикарная</span>
						</div>
						<button class="panel-control__button button-next"></button>
					</div>
				</div>
			</div>
		</div>
	</div>
		`;
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



	const menuSettings = () => {
		const settingsBurger = document.querySelector("#settings-burger");
		const headerLeft = document.querySelector(".header__left");
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
		if(sessionStorage.getItem("menuButton")) {
			pageContent(sessionStorage.getItem("menuButton"))
			addActiveItem(sessionStorage.getItem("menuButton"))
		} else {
			startContentToHtml()
			addActiveItem('home')
		}
		
	};
	currentPageToHTML();

	

	const changeActiveItem = (indexClickedItem) => {
		const menuItems = document.querySelectorAll('[data-menu]')
        menuItems.forEach((item, index) => {
            item.classList.remove('_active');
            if (index === indexClickedItem) {
                item.classList.add('_active')
            }
        })        
    }

	function addActiveItem(dataActiveItem) {
		const menuItems = document.querySelectorAll('[data-menu]')
        menuItems.forEach(item => {
			let dataValue = item.attributes['data-menu'].value	
            item.classList.remove('_active');
            if (dataValue === dataActiveItem) {
                item.classList.add('_active')
            }
        })        
    }
	
	function navigation() {
		const menuItems = document.querySelectorAll('[data-menu]')
		const navBurger = document.querySelector("#nav-burger");
		const navigation = document.querySelector(".navigation");
		const body = document.querySelector("body");
		const bodyOverlay = document.querySelector(".body-overlay");

		menuItems.forEach((item, index) => {
			item.addEventListener('click', () => {
				let dataValue = item.attributes['data-menu'].value		
				pageContent(dataValue);
				sessionStorage.setItem("menuButton", dataValue);
				changeActiveItem(index)
				navBurger.classList.remove("_active");
				navigation.classList.remove("_active");
				body.classList.remove("_lock");
				bodyOverlay.classList.remove("_active");
			})
		})
	}
	navigation();

	function pageContent(page) {
		
		page === "home" && startContentToHtml()				
		page === "about-us" && aboutUsToHtml()
		page === "services" && sliderServices()
		page === "team" && teamToHtml()
		page === "cases" && sliderCases()
		page === "contacts" && contactsToHtml()
		page === "principles" && principlesOfOperationToHtml() & principles()
		page === "marketplace" && marketplaceToHtml()
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

	function principles () {
		const tabsOptions = [
			{
				articles: [
					'Знакомство, обсуждение задач, намерений и пожеланий клиента',
					'Создание рабочей группы проекта и организация трехсторонней встречи',
					'Готовим персональное решение задач с учетом внутренних процессов',
					'Подписываем договор о гарантии безопасности коммерческой информации',
					'Финализируем условия, подписываем договор и приступаем к работе'
				],
				image: [
					'images/dist/principles/principles-1.jpg'
				]
			},
			{
				articles: [
					'Анализируем рынок, изучаем конкурентов, внешние и внутренние факторы успеха проекта',
					'Исследуем  аудитории, фиксируем портреты клиентов и его поведение',
					'Проводим комплекс интервью с собственниками и ТОП-менеджерами',
					'Исследуем  аудитории, фиксируем портреты клиентов и его поведение',
					'Анализируем рынок, изучаем конкурентов, внешние и внутренние факторы успеха проекта'
				],
				image: [
					'images/dist/slider/services-4.jpg'
				]
			},
			{
				articles: [
					'Разрабатываем детальное Тех. задание адаптивное для распределенных команд',
					'Используем актуальные технологии в разработки ПО, применяем блокчейн и нейросети',
					'Используем  распределенные масштабируемые команды для эффективной и быстрой работы',
					'Используем в проектах современные технологии безопасности данных',
					'Во время процесса разработки гибко подходим к изменениям в Тех. задании'
				],
				image: [
					'images/dist/principles/principles-1.jpg'
				]
			},
			{
				articles: [
					'Разрабатываем программу обучения и мотивации сотрудников для нового ПО',
					'Внедряем геймификацию в процесс обучение и тестирования сотрудников',
					'Дорабатываем цифровое решение работая с обратной связью клиентов и сотрудников',
					'Проводим консультации по узким местам внедрения и сопровождения',
					'Всегда находимся рядом с клиентом на всем промежутке использования ПО'
				],
				image: [
					'images/dist/slider/services-4.jpg'
				]
			}			
		]

		
		function principlesContentItem (item) {
			return `
			<div class="block-principles__content-item">
				<p>
					${item}
				</p>
			</div>
		`
		}

		const principlesContentRender = principlesItems => {
			const blockPrinciplesContentItems = document.querySelector('.block-principles__content-items')
			blockPrinciplesContentItems.innerHTML = principlesItems.map(principlesContentItem).join('')
		}

		const principlesImgRender = principlesSrc => {
			const principlesImg = document.querySelector('.block-principles__content-photo img')
			principlesImg.src = principlesSrc
		}

		function principlesContentItems(itemId) {
			let art = tabsOptions.filter((item, id) => id == itemId)
			art.forEach(item => {
				principlesContentRender(item.articles)
				principlesImgRender(item.image[0])
			})
		}
		principlesContentItems('0')

		const blockPrinciplesMenuItems = document.querySelectorAll('.block-principles__menu-item')
		if(blockPrinciplesMenuItems) {
			const changeActiveItem = (indexClickedItem) => {
				blockPrinciplesMenuItems.forEach((item, index) => {
					item.classList.remove('_active');
					if (index === indexClickedItem) {
						item.classList.add('_active')
					}
				})        
			}
		
			function addActiveItem(dataActiveItem) {
				blockPrinciplesMenuItems.forEach((item, index) => {
					item.classList.remove('_active');
					if (index === dataActiveItem) {
						item.classList.add('_active')
					}
				})        
			}
			

			function principlesTab() {
				blockPrinciplesMenuItems.forEach((item, index) => {
					item.addEventListener('click', () => {
						sessionStorage.setItem("principlesbutton", index);
						changeActiveItem(index)
						principlesContentItems(index)
					})
				})
			}
			principlesTab()
		}
	}
	
});

//JSON.parse(localStorage.getItem('goods'))
//localStorage.setItem('goods', JSON.stringify(array))

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
			el.closest("#nav-icon") && toggleNavActive();
			el.closest(".menu-item") && toggleNavActive();
			el.closest(".body-overlay") && toggleNavActive();
			el.closest(".menu-game__item") && toggleNavActive();
		});

		const toggleNavActive = () => {
			menuButton.classList.toggle("_active");
			navigation.classList.toggle("_active");
			body.classList.toggle("_lock");
			bodyOverlay.classList.toggle("_active");
		};
	};
	menu();

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
	//preloaderToHtml()

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
	//settingsToHtml()

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
	//startContentToHtml()

	function aboutUsToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
			о нас
		`;
	}

	function servicesToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
			услуги
		`;
	}

	function teamToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		команда
		`;
	}

	function casesToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		кейсы
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
					<img src="images/dist/map.png" alt="map" />
				</div>
				<div class="block-contacts__form contacts-form">
					<div class="contacts-form__title">
						<p>Остались вопросы?</p>
						<p>Заполните фору и мы с Вами свяжемся!</p>
					</div>

					<form action="">
						<input placeholder="Ваше имя" />
						<input placeholder="Ваш e-mail" />
						<textarea placeholder="Сообщение..."></textarea>
						<button class="contacts-form__button button">Отправить</button>
					</form>

					<div class="contacts-form__info form-info">
						<p class="form-info__address">Москва, ул. *название улицы и номер дома*</p>
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
		принципы работы
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
							<label for="chk-1"></label>
							<span>хочу бонус</span>
						</div>
						<div class="shop-item__color">
							Цвет:
							<span></span>
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
							<label for="chk-2"></label>
							<span>хочу бонус</span>
						</div>
						<div class="shop-item__color">
							Цвет:
							<span></span>
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
							<label for="chk-3"></label>
							<span>хочу бонус</span>
						</div>
						<div class="shop-item__color">
							Цвет:
							<span></span>
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
							<label for="chk-4"></label>
							<span>хочу бонус</span>
						</div>
						<div class="shop-item__color">
							Цвет:
							<span></span>
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
							<label for="chk-5"></label>
							<span>хочу бонус</span>
						</div>
						<div class="shop-item__color">
							Цвет:
							<span></span>
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
							<label for="chk-6"></label>
							<span>хочу бонус</span>
						</div>
						<div class="shop-item__color">
							Цвет:
							<span></span>
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
							<label for="chk-7"></label>
							<span>хочу бонус</span>
						</div>
						<div class="shop-item__color">
							Цвет:
							<span></span>
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
							<label for="chk-8"></label>
							<span>хочу бонус</span>
						</div>
						<div class="shop-item__color">
							Цвет:
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		`;
	}

	const currentPageToHTML = () => {
		sessionStorage.getItem("menuButton")
			? pageContent(sessionStorage.getItem("menuButton"))
			: startContentToHtml();
			settingsToHtml()
	};
	currentPageToHTML();

	function navigation() {
		const menu = document.querySelector(".navigation");
	
		menu.addEventListener("click", (e) => {
			e.preventDefault();
			let element = e.target;
			pageContent(element.textContent.toLowerCase());
			sessionStorage.setItem("menuButton", element.textContent.toLowerCase());
			console.log(element.textContent.toLowerCase())
		});
	}
	navigation();

	function pageContent(page) {
		page === "главная" && startContentToHtml();
		page === "о нас" && aboutUsToHtml();
		page === "услуги" && servicesToHtml();
		page === "команда" && teamToHtml();
		page === "кейсы" && casesToHtml();
		page === "контакты" && contactsToHtml();
		page === "принципы работы" && principlesOfOperationToHtml();
		page === "маркетплейс" && marketplaceToHtml()

		
	}
});

//JSON.parse(localStorage.getItem('goods'))
//localStorage.setItem('goods', JSON.stringify(array))

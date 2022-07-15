export function contactUsMessage() {
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

export function cookieMessage() {
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

export function soonMessage() {
	const gameBody = document.querySelector(".message__body");
	gameBody.innerHTML = "";
	gameBody.innerHTML = `
		<div class="message__container">
		<div class="message__content">
			<h3>Геймификация бизнес-процессов.</h3>
			<p>
				Скоро мы прямо на сайте покажем как мы умеем автоматизировать и геймифицировать бизнес-процессы в компании. 				
			</p>
			<p>А пока можете задать интересующие вопросы нашему эксперту!</p>
		</div>

		<div class="message__buttons">
			<button id="soon" class="message__button button">ЗАДАТЬ ВОПРОС</button>
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

export function menuLinkMessage() {
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

export function assistantMessage() {
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

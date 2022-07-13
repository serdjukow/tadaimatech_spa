const contacts = () => {
	function contactsToHtml( contacts ) {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
            <div class="page-content__container block-contacts">
            <div class="page-content__title page-title">
                <h2>${contacts.pageTitle}</h2>
            </div>
    
            <div class="block-contacts__row">
                <div class="block-contacts__map">
									${contacts.mapIframe}
                </div>
                <div class="block-contacts__form contacts-form">
                    <div class="contacts-form__title">
                        <p>Остались вопросы?</p>
                        <p>Заполните фору и мы с Вами свяжемся!</p>
                    </div>
    
                    <form>
                        <input placeholder="Ваше имя" />
                        <input placeholder="Ваш e-mail" />
                        <textarea placeholder="Сообщение..." rows="15"></textarea>
                        <button class="contacts-form__button button">Отправить</button>
                    </form>
    
                    <div class="contacts-form__info form-info">
												<a href="${contacts.detailsLink}" class="form-info__doc" target="_blank">Реквизиты</a>
                        <p class="form-info__address">${contacts.address}</p>
                        <p class="form-info__tel">${contacts.phone}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
	}
	

	const sendRequest = async () => {
		const url = "./db/pages.json";
		try {			
			const response = await fetch(url);
			const bd = await response.json();
			const { contacts } = bd[0];
			contactsToHtml( contacts );
		} catch (e) {
			console.error(e.message);
		}
	};
	sendRequest();
};

export default contacts;

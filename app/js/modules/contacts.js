const contacts = () => {
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
    contactsToHtml()
}

export default contacts
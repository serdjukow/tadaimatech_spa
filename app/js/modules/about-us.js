const aboutUs = () => {
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
    aboutUsToHtml()

}


export default aboutUs
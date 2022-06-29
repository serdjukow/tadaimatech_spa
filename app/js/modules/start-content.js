const startContent = () => {
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
                <button class="start-block__button button">Связаться с нами</button>
             </div>
        `;
    }
    startContentToHtml()
}
export default startContent
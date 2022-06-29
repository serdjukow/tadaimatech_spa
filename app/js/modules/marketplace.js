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

export default marketplaceToHtml
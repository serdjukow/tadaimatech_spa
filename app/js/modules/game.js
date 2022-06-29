export function preloaderToHtml() {
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

export function acquaintanceToHtml() {
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

export function acquaintanceFormNameToHtml() {
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

export function acquaintanceFormRoleToHtml() {
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

export function settingsToHtml() {
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
            <img src="images/dist/gamer.png" alt="gamer" />
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
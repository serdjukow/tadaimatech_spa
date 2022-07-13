const marketplace = () => {
	const hostName = location.hostname;
	const pathName = location.pathname;
	console.log(pathName);
	const sendRequest = async () => {
		const url = `./db/marketplace.json`;
		try {
			const response = await fetch(url);
			const bd = await response.json();
			const { marketplace } = bd[0];
			marketplaceContent(marketplace);
		} catch (e) {
			console.error(e.message);
		}
	};
	sendRequest();

	function marketplaceContent(marketplace) {
		const bd = marketplace;

		function marketplaceToHtml() {
			const pageBody = document.querySelector(".page-content");
			pageBody.innerHTML = "";
			pageBody.innerHTML = `
			<div class="page-content__container block-shop">
						<div class="block-shop__row">
								<div class="block-shop__items">
										
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
																<span></span>
														</div>
														<button class="panel-control__button button-next"></button>
												</div>
										</div>
								</div>
						</div>
				</div>
			`;
		}
		marketplaceToHtml();

		const itemToHtml = (itemValue, id) => `
			<div class="block-shop__item shop-item">
				<div class="shop-item__img">
						<img src="images/dist/${itemValue.cardImg || ""}" alt="${
			itemValue.cardTitle || ""
		}">
				</div>
				<div class="shop-item__price">
					${itemValue.cardPrice || ""}
				</div>
				<div class="shop-item__title">
					${itemValue.cardTitle || ""}
				</div>
				<div class="shop-item__footer">
						<div class="shop-item__checkbox">
								<input id="chk-${id}" type="checkbox">
								<label for="chk-${id}">хочу бонус</label>
						</div>
						<div class="shop-item__color">
								Цвет:
								<span style="background-color: ${itemValue.cardColor || ""};"></span>
						</div>
				</div>
			</div>
		`;

		const marketplaceRender = (title, items) => {
			const blockShopStems = document.querySelector(".block-shop__items");
			const panelControlValue = document.querySelector(
				".panel-control__value span"
			);

			blockShopStems.innerHTML = items
				.map((item, id) => itemToHtml(item, id))
				.join("");
			panelControlValue.textContent = title;
		};

		function marketplaceChangeContent() {
			const shopPanelControl = document.querySelector(".shop-panel__control");
			let currentValue = 0;
			shopPanelControl.addEventListener("click", (event) => {
				event.preventDefault();
				let e = event.target;
				if (e.closest(".button-prew") && currentValue > 0) {
					currentValue = currentValue - 1;
					marketplaceFilter(currentValue);
				} else if (e.closest(".button-next") && currentValue < bd.length - 1) {
					currentValue = currentValue + 1;
					marketplaceFilter(currentValue);
				}
			});
		}
		marketplaceChangeContent();

		function marketplaceFilter(setId = 0) {
			let set = bd.filter((item, id) => id == setId);
			let { setCards } = set[0];
			let { setTitle } = set[0];
			marketplaceRender(setTitle, setCards);
		}
		marketplaceFilter();
	}
};

export default marketplace;

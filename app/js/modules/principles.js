function principles() {


	function principlesContent(principles) {
		

		function principlesOfOperationToHtml() {
			const pageBody = document.querySelector(".page-content");
			pageBody.innerHTML = "";
			pageBody.innerHTML = `
			<div class="page-content__container block-principles">
			<div class="page-content__title page-title">
				<h2>${principles.pageTitle || ""}</h2>
			</div>
			<div class="block-principles__row">
				<ul class="block-principles__menu">
					
				</ul>	
				<div class="block-principles__content">
					<div class="block-principles__content-items">
						
					</div>
					<div class="block-principles__content-photo">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
			`;
		}
		principlesOfOperationToHtml();

		const menuTohtml = (el) => `
			<li class="block-principles__menu-item">
				${el.menuItem}
			</li>
	`;
		const menuRender = () => {
			const blockMenu = document.querySelector(".block-principles__menu");
			blockMenu.innerHTML = principles.tabsOptions.map(menuTohtml).join("");
		};
		menuRender();

		const principlesContentItem = (item) => `
				<div class="block-principles__content-item">
						<p>
								${item.art}
						</p>
				</div>
		`;

		const contentRender = (contentItems) => {
			const blockContent = document.querySelector(
				".block-principles__content-items"
			);
			blockContent.innerHTML = contentItems.map(principlesContentItem).join("");
		};

		const principlesImgRender = (principlesSrc) => {
			const principlesImg = document.querySelector(
				".block-principles__content-photo img"
			);
			principlesImg.src =`images/dist/principles/${principlesSrc}`;
		};

		function principlesContentItems(activeTab) {
			let art = principles.tabsOptions.filter((item, id) => id == activeTab);
			art.forEach((item) => {
				contentRender(item.articles);
			});
			principlesImgRender(art[0].image)
		}

		const blockPrinciplesMenuItems = document.querySelectorAll(
			".block-principles__menu-item"
		);
		const changeActiveItem = (indexClickedItem) => {
			blockPrinciplesMenuItems.forEach((item, index) => {
				item.classList.remove("_active");
				if (index == indexClickedItem) {
					item.classList.add("_active");
				}
			});
		};

		function addActiveItem(dataActiveItem) {
			let clickedTab = sessionStorage.getItem("clickedTab");
			let activeTab = clickedTab ? clickedTab : "0";
			blockPrinciplesMenuItems.forEach((item, index) => {
				if (index == dataActiveItem) {
					changeActiveItem(dataActiveItem)
					principlesContentItems(dataActiveItem);
				} else if (index == activeTab) {
					changeActiveItem(activeTab)
					principlesContentItems(activeTab);
				}
			});
		}
		addActiveItem();

		function principlesTab() {
			blockPrinciplesMenuItems.forEach((item, index) => {
				item.addEventListener("click", () => {
					sessionStorage.setItem("clickedTab", index);
					changeActiveItem(index);
					principlesContentItems(index);
				});
			});
		}
		principlesTab();
	}

	const sendRequest = async () => {
		const url = "./db/pages.json";
		try {
			const response = await fetch(url);
			const bd = await response.json();
			const { principles } = bd[0]
			principlesContent( ...principles );
		} catch (e) {
			console.error(e.message);
		}
	};
	sendRequest();
}
export default principles;

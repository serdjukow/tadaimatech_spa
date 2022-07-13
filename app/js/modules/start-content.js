const startContent = () => {
	function startContentToHtml(el) {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
            <div class="game-content__start-block start-block">
                <div class="start-block__logo">
                    <img src="images/dist/${el.logoImg || ''}" alt="logo" />
                </div>
                <div class="start-block__title">
                    <h1>${el.title  || ''}</h1>
                    <p>${el.subtitle  || ''}</p>
                </div>
                <a href="${el.buttonLink  || ''}" class="start-block__button button">${el.buttonValue  || ''}</a>
             </div>
        `;
	}

	const sendRequest = async () => {
		const url = "./db/pages.json";
		try {			
			const response = await fetch(url);
			const bd = await response.json();
			const { home } = bd[0];
			startContentToHtml(home);
		} catch (e) {
			console.error(e.message);
		}
	};
	sendRequest();
};
export default startContent;

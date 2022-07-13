const aboutUs = () => {
    function aboutUsToHtml( aboutUs ) {
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
                ${ aboutUs.pageTitle || '' }
            </div>
        </div>
        <div class="block-about-us__row">
            <div class="block-about-us__content">
                <div class="block-about-us__item">
                    <div class="block-about-us__item-img">
                        <img src="images/dist/about-us.png" alt="about-us">
                    </div>
                    <p class="block-about-us__item-text">
											${ aboutUs.company || '' }
										</p>
                </div>
                <div class="block-about-us__item">
                    <div class="block-about-us__item-img">
                        <img src="images/dist/mission.png" alt="about-us">
                    </div>
                    <p class="block-about-us__item-text">
										${ aboutUs.mission || '' }
										</p>
                </div>
            </div>
            <div class="block-about-us__contact">
                <div class="block-about-us__contact-img">
                    <img src="images/dist/${ aboutUs.consultant.photo || '' }" alt="assistant">
                </div>
                <p class="block-about-us__contact-subtitle">
									${ aboutUs.consultant.text || '' }
                </p>
                <div class="block-about-us__contact-title">
                    <h4>
											${ aboutUs.consultant.name || '' }
                    </h4>
                    <p>${ aboutUs.consultant.post || '' }</p>
                </div>
                <div class="block-about-us__contact-buttons">
                    <a href="mailto:${ aboutUs.consultant.mailLink || '' }" class="block-about-us__contact-button button">написать на почту</a>
                    <a href="${ aboutUs.consultant.tgLink || '' }" class="block-about-us__contact-button button">Написать в telegram</a>
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
				const  { aboutUs }  = bd[0]
				aboutUsToHtml( aboutUs )
			} catch (e) {
				console.error(e.message);
			}
		};
		sendRequest();

}


export default aboutUs
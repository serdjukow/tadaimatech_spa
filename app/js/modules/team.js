import Swiper, { Navigation, Thumbs } from "swiper";
const team = () => {
	function teamToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
        <section class="page-content__container showcase">
        <div class="showcase__content-wrapper">
            <div class="showcase__content">

                <div class="showcase-carousel">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide showcase-carousel__item">
                            <div class="showcase-carousel__image-wrapper">
                                <div class="showcase-carousel__image-left">
                                    <div class="showcase-carousel__image" style="background-image: url(images/dist/team/1.png);"></div>
                                </div>
                                <div class="showcase-carousel__image-right">
                                    <div class="showcase-carousel__image" style="background-image: url(images/dist/team/1.png);"></div>
                                </div>
                            </div>
                            <p>Front</p>
                        </div>

                        <div class="swiper-slide showcase-carousel__item">
                            <div class="showcase-carousel__image-wrapper">
                                <div class="showcase-carousel__image-left">
                                    <div class="showcase-carousel__image" style="background-image: url(images/dist/team/2.png);"></div>
                                </div>
                                <div class="showcase-carousel__image-right">
                                    <div class="showcase-carousel__image" style="background-image: url(images/dist/team/2.png);"></div>
                                </div>
                            </div>
                            <p>Front Two</p>
                        </div>

                        <div class="swiper-slide showcase-carousel__item">
                            <div class="showcase-carousel__image-wrapper">
                                <div class="showcase-carousel__image-left">
                                    <div class="showcase-carousel__image" style="background-image: url(images/dist/team/3.png);"></div>
                                </div>
                                <div class="showcase-carousel__image-right">
                                    <div class="showcase-carousel__image" style="background-image: url(images/dist/team/3.png);"></div>
                                </div>
                            </div>
                            <p>Side</p>
                        </div>

                        <div class="swiper-slide showcase-carousel__item">
                            <div class="showcase-carousel__image-wrapper">
                                <div class="showcase-carousel__image-left">
                                    <div class="showcase-carousel__image" style="background-image: url(images/dist/team/4.png);"></div>
                                </div>
                                <div class="showcase-carousel__image-right">
                                    <div class="showcase-carousel__image" style="background-image: url(images/dist/team/4.png);"></div>
                                </div>
                            </div>
                            <p>Back</p>
                        </div>

                    </div>

                </div>

                <div class="showcase-navigation">
                    <div class="showcase-navigation__prev"></div>
                    <div class="showcase-navigation__next"></div>
                </div>

            </div>
        </div>

        <video src="images/dist/team/smoke-background-optimized.mp4" class="showcase__video" autoplay loop muted></video>

    </section>
		`;
	}
    teamToHtml()

    const showSlider = new Swiper('.showcase-carousel', {
        modules: [Navigation],
        loop: true,
        slidesPerView: 3,
        speed: 1800,
        centeredSlides: true,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        }
    })

    document.querySelector('video') && (document.querySelector('video').playbackRate = 2)
}
export default team
import Swiper, { Navigation, Thumbs, Pagination } from "swiper";
const sliderServices = () => {
    function servicesToHtml() {
        const pageBody = document.querySelector(".page-content");
        pageBody.innerHTML = "";
        pageBody.innerHTML = `
        <div class="page-content__container block-services">
        <div class="page-content__title page-title">
            <h2>Мы разрабатываем</h2>
        </div>
        <div class="block-services__container">
				<div class="swiper-pagination"></div>
        <!-- Slider main container -->
        <div class="swiper slider-services">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide slider-services__slide">
                    <div class="slider-services__img">
                        <img src="images/dist/slider/services-4.jpg" alt="" />
                    </div>
                    <div class="slider-services__title">
                        <h3>Решения виртуальной и дополненной реальности</h3>
                        <p>
                            VR, AR приложения для бизнеса, метавселенные, игры
                            дополненной реальности, NFT платформы
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slider-services__img">
                        <img src="images/dist/slider/services-1.jpg" alt="" />
                    </div>
                    <div class="slider-services__title">
                        <h3>Системы Автоматизации и Геймификации бизнеса</h3>
                        <p>
                            Автоматизация и геймификация бизнес процессов любых
                            масштабов, ERP, CRM, API интеграции разных систем
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slider-services__img">
                        <img src="images/dist/slider/services-2.jpg" alt="" />
                    </div>
                    <div class="slider-services__title">
                        <h3>Уникальные сайты, приложения и маркетплейсы</h3>
                        <p>
                            Приложения для IOS и Android, сайты корпоративные,
                            высоконагруженные маркетплейсы и порталы
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slider-services__img">
                        <img src="images/dist/slider/services-3.jpg" alt="" />
                    </div>
                    <div class="slider-services__title">
                        <h3>Решения виртуальной и дополненной реальности</h3>
                        <p>
                            VR, AR приложения для бизнеса, метавселенные, игры
                            дополненной реальности, NFT платформы
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div thumbsSlider="" class="swiper slider-services-logo">
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide slider-services-logo__slide">
                    <div class="slider-services-logo__items">
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/unreal.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/swift.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/unity.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/blockchain.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/kotlin.svg" />
                        </div>
                    </div>
                </div>
                <div class="swiper-slide slider-services-logo__slide">
                    <div class="slider-services-logo__items">
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/web.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/mysql.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/aws.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/api.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/1c.svg" />
                        </div>
                    </div>
                </div>
                <div class="swiper-slide slider-services-logo__slide">
                    <div class="slider-services-logo__items">
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/web.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/ispring.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/moodle.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/getcourse.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/webinar.svg" />
                        </div>
                    </div>
                </div>
                <div class="swiper-slide slider-services-logo__slide">
                    <div class="slider-services-logo__items">
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/web.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/mysql.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/swift.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/kotlin.svg" />
                        </div>
                        <div class="slider-services-logo__item">
                            <img src="images/dist/slider/slider-icons/aws.svg" />
                        </div>
                    </div>
                </div>


                <!--/  Slides -->
            </div>
        </div>
        </div>

    </div>
        `;
    }
    servicesToHtml();

    const sliderServicesLogo = new Swiper(".slider-services-logo", {
        loop: false,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
    });

    const sliderServices = new Swiper(".slider-services", {
        modules: [Navigation, Thumbs, Pagination],
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
				pagination: {
          el: ".swiper-pagination",
					clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        thumbs: {
            swiper: sliderServicesLogo,
        },
    });
};

export default sliderServices
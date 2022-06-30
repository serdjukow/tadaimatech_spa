import Swiper, { Navigation, Thumbs } from "swiper";
const sliderCases = () => {
	function casesToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
        <div class="page-content__container block-cases">
        <div class="page-content__title page-title">
            <h2>Наши кейсы</h2>
            <p>
                Кейсы нашей команды ярко показывают возможности технологических
                решений, которые могут усилить Ваш бизнес.
            </p>
        </div>
        <div class="block-cases__container">
        <!-- Slider main container -->
        <div class="swiper slider-cases">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->

                <div class="swiper-slide slider-cases__slide">
                    <div class="slider-cases__video">
                        <video
                            controls="controls"
                            poster=""
                            autoplay
                            loop
                            muted
                        >
                            <source src="images/dist/video/oral-b.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="slider-cases__title">
                        <p>
                            Промо приложение электрической щетки IQ для Oral-B с
                            технологией дополненной реальности.
                        </p>
                    </div>
                </div>

                <div class="swiper-slide slider-cases__slide">
                    <div class="slider-cases__video">
                        <video
                            controls="controls"
                            poster=""
                            autoplay
                            loop
                            muted
                        >
                            <source src="images/dist/video/vtb.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="slider-cases__title">
                        <p>
												Геймификация групповых квестов новогоднего  корпоратива Банка ВТБ.
                        </p>
                    </div>
                </div>

								<div class="swiper-slide slider-cases__slide">
								<div class="slider-cases__video">
										<video
												controls="controls"
												poster=""
												autoplay
												loop
												muted
										>
												<source src="images/dist/video/agc.mp4" type="video/mp4" />
										</video>
								</div>
								<div class="slider-cases__title">
										<p>
										Виртуальный симулятор адаптации и обучения персонала крупнейшего стекольного завода России.
										</p>
								</div>
							</div>

							<div class="swiper-slide slider-cases__slide">
							<div class="slider-cases__video">
									<video
											controls="controls"
											poster=""
											autoplay
											loop
											muted
									>
											<source src="images/dist/video/concept.mp4" type="video/mp4" />
									</video>
							</div>
							<div class="slider-cases__title">
									<p>
									Прототип маркетплейса для дизайнеров интерьера с дополненной реальностью.
									</p>
							</div>
						</div>

						<div class="swiper-slide slider-cases__slide">
						<div class="slider-cases__video">
								<video
										controls="controls"
										poster=""
										autoplay
										loop
										muted
								>
										<source src="images/dist/video/concept.mp4" type="video/mp4" />
								</video>
						</div>
						<div class="slider-cases__title">
								<p>
								Уникальный в своем роде маркетплейс яхтсменов Runduk.Shop
								</p>
						</div>
					</div>

                <!--/  Slides -->
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div thumbsSlider="" class="swiper slider-cases-logo">
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide slider-cases-logo__slide">
                    <div class="slider-cases-logo__items">
                        <div class="slider-cases-logo__item">
                            <div class="slider-cases-logo__icon">
                                <img
                                    src="images/dist/slider/slider-icons/dental-expo.svg"
                                />
                            </div>
                            <div class="slider-cases-logo__text">
                                <p>
                                    Приложение разрабатывалось для конференции Dental expo
                                    2020.
                                </p>
                            </div>
                        </div>
                        <div class="slider-cases-logo__item">
                            <div class="slider-cases-logo__icon">
                                <img src="images/dist/slider/slider-icons/3d.svg" />
                            </div>
                            <div class="slider-cases-logo__text">
                                <p>
                                    При наведении телефона на образец, он оживал в телефоне
                                    в виде 3D модели. Приложение имело интерактивное меню с
                                    которым пользователь может взаимодействовать в
                                    зависимости от образца на стенде, и получать
                                    исчерпывающую информацию в текстовом, аудио, видео
                                    формате.
                                </p>
                            </div>
                        </div>
                        <div class="slider-cases-logo__item">
                            <div class="slider-cases-logo__icon">
                                <img
                                    src="images/dist/slider/slider-icons/unreal-2.svg"
                                />
                            </div>
                            <div class="slider-cases-logo__text">
                                <p>
                                    Разработка велась на современных стеках технологий
                                    дополненной реальности, 3D моделировании, а также
                                    решение было доступно для платформ Android и IOS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide slider-cases-logo__slide">
                    <div class="slider-cases-logo__items">
                        <div class="slider-cases-logo__item">
                            <div class="slider-cases-logo__icon">
                                <img
                                    src="images/dist/slider/slider-icons/vtb.svg"
                                />
                            </div>
                            <div class="slider-cases-logo__text">
                                <p>
																Решение разрабатывалось для визуализации и геймификации квестов, приуроченных новогодним праздникам Банка ВТБ. 
                                </p>
                            </div>
                        </div>
                        <div class="slider-cases-logo__item">
                            <div class="slider-cases-logo__icon">
                                <img src="images/dist/slider/slider-icons/vr.svg" />
                            </div>
                            <div class="slider-cases-logo__text">
                                <p>
																Сотрудникам предлагалось участие в новогоднем корпоративе с виртуальным барменом и интерактивным командным участием в поиске скрытых предметов на трех локациях.
                                </p>
                            </div>
                        </div>
												<div class="slider-cases-logo__item">
												<div class="slider-cases-logo__icon">
														<img src="images/dist/slider/slider-icons/cloud.svg" />
												</div>
												<div class="slider-cases-logo__text">
														<p>
														Для разработки использовалась высоконагруженная облачная инфраструктура и современные стеки WEB разработки.
														</p>
												</div>
										</div>
                    </div>
                </div>

								 <div class="swiper-slide slider-cases-logo__slide">
                    <div class="slider-cases-logo__items">
                        <div class="slider-cases-logo__item">
                            <div class="slider-cases-logo__icon">
                                <img
                                    src="images/dist/slider/slider-icons/helmet.svg"
                                />
                            </div>
                            <div class="slider-cases-logo__text">
                                <p>
																Решение разрабатывалось как удаленная экскурсия гостей завода и удаленное обучение сотрудников технике безопасности на заводе с помощью шлема  виртуальной реальности и ручных контроллеров.
                                </p>
                            </div>
                        </div>
                        <div class="slider-cases-logo__item">
                            <div class="slider-cases-logo__icon">
                                <img src="images/dist/slider/slider-icons/agc.svg" />
                            </div>
                            <div class="slider-cases-logo__text">
                                <p>
																Завод AGC смоделирован настолько точно, что позволило передать максимальное погружение в процессы производства.
                                </p>
                            </div>
                        </div>
												<div class="slider-cases-logo__item">
												<div class="slider-cases-logo__icon">
														<img src="images/dist/slider/slider-icons/unreal.svg" />
												</div>
												<div class="slider-cases-logo__text">
														<p>
														Разработка на VR технологии, движок Unreal Engine 5, под устройство Oculus Quest 2.
														</p>
												</div>
										</div>
                    </div>
                </div>

								<div class="swiper-slide slider-cases-logo__slide">
								<div class="slider-cases-logo__items">
										<div class="slider-cases-logo__item">
												<div class="slider-cases-logo__icon">
														<img
																src="images/dist/slider/slider-icons/mvp.svg"
														/>
												</div>
												<div class="slider-cases-logo__text">
														<p>
														Приложение разрабатывалось в рамках MVP модели крупного маркетплейса дизайнерской мебели, позволяющее в реальном времени примерить любой образец мебели к существующему интерьеру квартиры или дома клиента.
														</p>
												</div>
										</div>
										<div class="slider-cases-logo__item">
												<div class="slider-cases-logo__icon">
														<img src="images/dist/slider/slider-icons/android-ios.svg" />
												</div>
												<div class="slider-cases-logo__text">
														<p>
														Разработка велась на современных стеках технологий дополненной реальности, 3D моделировании, а также решение доступно для платформ Android и IOS.
														</p>
												</div>
										</div>
								</div>
						</div>

						<div class="swiper-slide slider-cases-logo__slide">
						<div class="slider-cases-logo__items">
						<div class="slider-cases-logo__item">
						<div class="slider-cases-logo__icon">
								<img
										src="images/dist/slider/slider-icons/cms.svg"
								/>
						</div>
						<div class="slider-cases-logo__text">
								<p>
								Разработанная на базе WP CMS система маркетплейса с интеграцией платежных систем, личный кабинет с удобным интерфейсом административной части. 
								</p>
						</div>
				</div>
								<div class="slider-cases-logo__item">
										<div class="slider-cases-logo__icon">
												<img
														src="images/dist/slider/slider-icons/arttube.svg"
												/>
										</div>
										<div class="slider-cases-logo__text">
												<p>
												Команда заказчика - участник многих международных регат ARTTUBE RUS-1.
												</p>
										</div>
								</div>
								<div class="slider-cases-logo__item">
										<div class="slider-cases-logo__icon">
												<img src="images/dist/slider/slider-icons/cloud.svg" />
										</div>
										<div class="slider-cases-logo__text">
												<p>
												Для разработки использовалась высоконагруженная облачная инфраструктура и современные стеки WEB разработки.
												</p>
										</div>
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
	casesToHtml();

	const sliderCasesLogo = new Swiper(".slider-cases-logo", {
		loop: false,
		slidesPerView: 1,
		freeMode: false,
		watchSlidesProgress: false,
	});

	const sliderCases = new Swiper(".slider-cases", {
		modules: [Navigation, Thumbs],
		loop: false,
		slidesPerView: 1,
		freeMode: false,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: sliderCasesLogo,
		},
	});
};

export default sliderCases;

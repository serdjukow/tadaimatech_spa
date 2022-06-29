function principles () {
    const tabsOptions = [
        {
            articles: [
                'Знакомство, обсуждение задач, намерений и пожеланий клиента',
                'Создание рабочей группы проекта и организация трехсторонней встречи',
                'Готовим персональное решение задач с учетом внутренних процессов',
                'Подписываем договор о гарантии безопасности коммерческой информации',
                'Финализируем условия, подписываем договор и приступаем к работе'
            ],
            image: [
                'images/dist/principles/principles-1.jpg'
            ]
        },
        {
            articles: [
                'Анализируем рынок, изучаем конкурентов, внешние и внутренние факторы успеха проекта',
                'Исследуем  аудитории, фиксируем портреты клиентов и его поведение',
                'Проводим комплекс интервью с собственниками и ТОП-менеджерами',
                'Исследуем  аудитории, фиксируем портреты клиентов и его поведение',
                'Анализируем рынок, изучаем конкурентов, внешние и внутренние факторы успеха проекта'
            ],
            image: [
                'images/dist/slider/services-4.jpg'
            ]
        },
        {
            articles: [
                'Разрабатываем детальное Тех. задание адаптивное для распределенных команд',
                'Используем актуальные технологии в разработки ПО, применяем блокчейн и нейросети',
                'Используем  распределенные масштабируемые команды для эффективной и быстрой работы',
                'Используем в проектах современные технологии безопасности данных',
                'Во время процесса разработки гибко подходим к изменениям в Тех. задании'
            ],
            image: [
                'images/dist/principles/principles-1.jpg'
            ]
        },
        {
            articles: [
                'Разрабатываем программу обучения и мотивации сотрудников для нового ПО',
                'Внедряем геймификацию в процесс обучение и тестирования сотрудников',
                'Дорабатываем цифровое решение работая с обратной связью клиентов и сотрудников',
                'Проводим консультации по узким местам внедрения и сопровождения',
                'Всегда находимся рядом с клиентом на всем промежутке использования ПО'
            ],
            image: [
                'images/dist/slider/services-4.jpg'
            ]
        }			
    ]

    function principlesOfOperationToHtml() {
		const pageBody = document.querySelector(".page-content");
		pageBody.innerHTML = "";
		pageBody.innerHTML = `
		<div class="page-content__container block-principles">
		<div class="page-content__title page-title">
			<h2>Как мы работаем</h2>
		</div>
		<div class="block-principles__row">
			<ul class="block-principles__menu">
				<li class="block-principles__menu-item _active">
					Этап Знакомства
				</li>
				<li class="block-principles__menu-item">
					Этап аналитики для крупных проектов
				</li>
				<li class="block-principles__menu-item">Этап разработки</li>
				<li class="block-principles__menu-item">
					Этап внедрения и сопровождения
				</li>
			</ul>

			<div class="block-principles__content">
				<div class="block-principles__content-items">
	
				</div>
				<div class="block-principles__content-photo">
					<img src="images/dist/principles/principles-1.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
		`;
	}
    principlesOfOperationToHtml()
    
    function principlesContentItem (item) {
        return `
        <div class="block-principles__content-item">
            <p>
                ${item}
            </p>
        </div>
    `
    }

    const principlesContentRender = principlesItems => {
        const blockPrinciplesContentItems = document.querySelector('.block-principles__content-items')
        blockPrinciplesContentItems.innerHTML = principlesItems.map(principlesContentItem).join('')
    }

    const principlesImgRender = principlesSrc => {
        const principlesImg = document.querySelector('.block-principles__content-photo img')
        principlesImg.src = principlesSrc
    }

    function principlesContentItems(itemId) {
        let art = tabsOptions.filter((item, id) => id == itemId)
        art.forEach(item => {
            principlesContentRender(item.articles)
            principlesImgRender(item.image[0])
        })
    }
    principlesContentItems('0')

    const blockPrinciplesMenuItems = document.querySelectorAll('.block-principles__menu-item')
    if(blockPrinciplesMenuItems) {
        const changeActiveItem = (indexClickedItem) => {
            blockPrinciplesMenuItems.forEach((item, index) => {
                item.classList.remove('_active');
                if (index === indexClickedItem) {
                    item.classList.add('_active')
                }
            })        
        }
    
        function addActiveItem(dataActiveItem) {
            blockPrinciplesMenuItems.forEach((item, index) => {
                item.classList.remove('_active');
                if (index === dataActiveItem) {
                    item.classList.add('_active')
                }
            })        
        }
        

        function principlesTab() {
            blockPrinciplesMenuItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    sessionStorage.setItem("principlesbutton", index);
                    changeActiveItem(index)
                    principlesContentItems(index)
                })
            })
        }
        principlesTab()
    }
}
export default principles
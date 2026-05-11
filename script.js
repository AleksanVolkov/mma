document.addEventListener('DOMContentLoaded', function () {
  // 1. Ищем основной контейнер слайдера
  const sliderEl = document.querySelector('#hero-slider');

  // Если слайдера нет на странице — просто выходим из функции
  if (!sliderEl) return;

  // 2. Инициализация слайдера (передаем найденный элемент, а не селектор)
  const splide = new Splide(sliderEl, {
    type: 'fade',
    rewind: true,
    arrows: false,
    pagination: false,
    speed: 800,
  });

  // 3. Получаем элементы кастомной навигации
  const currentNumEl = document.querySelector('.current-num');
  const totalNumEl = document.querySelector('.total-num');
  const progressFill = document.querySelector('.nav-progress-fill');
  const prevBtn = document.querySelector('.prev-arrow');
  const nextBtn = document.querySelector('.next-arrow');

  function formatNumber(number) {
    return number < 10 ? '0' + number : number;
  }

  // 4. Функция обновления UI с проверкой на наличие элементов
  function updateSliderNav() {
    const total = splide.length;
    const current = splide.index + 1;

    if (currentNumEl) currentNumEl.textContent = formatNumber(current);
    if (totalNumEl) totalNumEl.textContent = formatNumber(total);

    if (progressFill) {
      const progressRate = current / total;
      progressFill.style.width = (progressRate * 100) + '%';
    }
  }

  // 5. Привязываем события и монтируем
  splide.on('mounted move', updateSliderNav);
  splide.mount();

  // 6. Безопасная привязка кликов
  if (prevBtn) {
    prevBtn.addEventListener('click', () => splide.go('<'));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => splide.go('>'));
  }
});

    // 2. Инициализация слайдера тренеров
    const trainersSliderElem = document.querySelector('#trainers-slider');

if (trainersSliderElem) {
    new Splide(trainersSliderElem, {
        type: 'slide',
        perPage: 3,
        gap: '12px',
        pagination: false,
        arrows: true,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
                gap: 0,
                // Настройки сетки должны быть внутри объекта grid
                grid: {
                    rows: 3, 
                    cols: 1,
                    gap: {
                        row: '10px',
                        col: '0px',
                    },
                },
            },
        },
    }).mount(window.splide.Extensions); // ВАЖНО: монтируем с расширениями
}

 // 3. Инициализация слайдера тренеров на странице тренеров
    const trainersSliderElemPage = document.querySelector('#coaches-slider');

if (trainersSliderElemPage) {
    new Splide(trainersSliderElemPage, {
        type: 'slide',
        perPage: 1,
        grid: {
                    rows: 2, 
                    cols: 3,
                    gap: {
                        row: '30px',
                        col: '20px',
                    },
                },
        gap: '12px',
        pagination: false,
        arrows: false,
        breakpoints: {
            1024: {
                arrows: true,
                perPage: 1,
            },
            600: {
                perPage: 1,
                gap: 0,
                // Настройки сетки должны быть внутри объекта grid
                grid: {
                    rows: 3, 
                    cols: 1,
                    gap: {
                        row: '10px',
                        col: '0px',
                    },
                },
            },
        },
    }).mount(window.splide.Extensions); // ВАЖНО: монтируем с расширениями
}




// 3. Инициализация слайдера турниры (без сетки)
const turnirsSliderElem = document.querySelector('#tournaments-slider');
const parenttTur= document.querySelector('.turnaments_page'); 


if (parenttTur && turnirsSliderElem.parentElement.parentElement === parenttTur) {
    new Splide(turnirsSliderElem, {
        type   : 'slide',
        perPage: 1,      // 3 карточки на десктопе
        grid: {
                    rows: 3, 
                    cols: 2,
                    gap: {
                        row: '380px',
                        col: '20px',
                    },
                }, 
        pagination: false,
        arrows : false,
        breakpoints: {
            1024: {
                perPage: 1,
                grid: {
                    rows: 3, 
                    cols: 2,
                    gap: {
                        row: '250px',
                        col: '8px',
                    },
                }, 
                arrows : true,  
            },
            
        },
    }).mount(window.splide.Extensions); // Здесь Extensions больше не нужны, если Grid не используется
}else if (turnirsSliderElem) {
    new Splide(turnirsSliderElem, {
        type   : 'slide',
        perPage: 2,      // 3 карточки на десктопе
        gap    : '12px',
        pagination: false,
        arrows : true,
        breakpoints: {
            1024: {
                perPage: 2, // 2 карточки на планшетах
            },
            768: {
                perPage: 2, // 1 карточка на мобильных
                gap    : '10px', // небольшой отступ, чтобы было видно край следующего слайда (опционально)
            },
        },
    }).mount(); // Здесь Extensions больше не нужны, если Grid не используется
}
// 3. Инициализация слайдера новости (без сетки)
const newsSliderElem = document.querySelector('#news-slider');
const parentt= document.querySelector('.news_page'); 





if (newsSliderElem && newsSliderElem.parentElement.parentElement === parentt) {
    new Splide(newsSliderElem, {
        type   : 'slide',
        perPage: 1, 
        grid: {
                    rows: 3, 
                    cols: 3,
                    gap: {
                        row: '280px',
                        col: '12px',
                    },
                },     // 3 карточки на десктопе
    
        pagination: false,
        arrows : false,
        breakpoints: {
            1024: {
                perPage: 1,
                grid: {
                    rows: 3, 
                    cols: 2,
                    gap: {
                        row: '150px',
                        col: '12px',
                    },
                }, 
                arrows : true, // 2 карточки на планшетах
            },
            
            // 768: {
            //     perPage: 2, // 1 карточка на мобильных
            //     gap    : '10px', // небольшой отступ, чтобы было видно край следующего слайда (опционально)
            // },
        }
    }).mount(window.splide.Extensions); // Здесь Extensions больше не нужны, если Grid не используется
}else if( newsSliderElem){

new Splide(newsSliderElem, {
        type   : 'slide',
        perPage: 3,      // 3 карточки на десктопе
        gap    : '12px',
        pagination: false,
        arrows : true,
        breakpoints: {
            1024: {
                perPage: 2, // 2 карточки на планшетах
            },
            768: {
                perPage: 2, // 1 карточка на мобильных
                gap    : '10px', // небольшой отступ, чтобы было видно край следующего слайда (опционально)
            },
        },
    }).mount(); // Здесь Extensions больше не нужны, если Grid не используется
}









    // Примечание: Для слайдеров "Следующий турнир" и "Последние новости" 
    // создайте аналогичные вызовы new Splide() с нужными селекторами.

    // 3. Логика работы FAQ (Аккордеон)
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Закрываем все открытые вкладки (опционально, если нужен только 1 открытый)
            faqItems.forEach(el => {
                el.classList.remove('active');
                el.querySelector('.faq__answer').style.maxHeight = null;
            });

            // Если кликнули по закрытому — открываем
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

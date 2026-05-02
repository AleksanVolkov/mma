document.addEventListener('DOMContentLoaded', function () {
  // 1. Инициализация слайдера
  const splide = new Splide('#hero-slider', {
    type: 'fade',       // Для главного баннера обычно используется fade
    rewind: true,       // Зацикливание
    arrows: false,      // Отключаем стандартные стрелки
    pagination: false,  // Отключаем стандартные точки
    speed: 800,
  });

  // 2. Получаем элементы нашей кастомной навигации
  const currentNumEl = document.querySelector('.current-num');
  const totalNumEl = document.querySelector('.total-num');
  const progressFill = document.querySelector('.nav-progress-fill');
  const prevBtn = document.querySelector('.prev-arrow');
  const nextBtn = document.querySelector('.next-arrow');

  // Вспомогательная функция для добавления "0" спереди (1 -> 01)
  function formatNumber(number) {
    return number < 10 ? '0' + number : number;
  }

  // 3. Функция обновления UI
  function updateSliderNav() {
    const total = splide.length;
    const current = splide.index + 1; // Индекс начинается с 0, поэтому +1

    // Обновляем текст
    currentNumEl.textContent = formatNumber(current);
    totalNumEl.textContent = formatNumber(total);

    // Вычисляем процент заполнения прогресс-бара
    const progressRate = current / total;
    progressFill.style.width = (progressRate * 100) + '%';
  }

  // 4. Привязываем события Splide
  // Событие 'mounted' срабатывает при загрузке, 'moved' - после смены слайда
  splide.on('mounted move', updateSliderNav);

  // Монтируем слайдер
  splide.mount();

  // 5. Привязываем клики по нашим кастомным стрелкам к методам Splide
  prevBtn.addEventListener('click', () => {
    splide.go('<'); // Идем на предыдущий
  });

  nextBtn.addEventListener('click', () => {
    splide.go('>'); // Идем на следующий
  });
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




// 3. Инициализация слайдера турниры (без сетки)
const turnirsSliderElem = document.querySelector('#tournaments-slider');

if (turnirsSliderElem) {
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

if (newsSliderElem) {
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

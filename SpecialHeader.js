class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
        <div class="container">
            <div class="header-top">
                <div class="header-side">
                    <!-- Email -->
                    <div class="contact-block">
                        <div class="contact-icon">
                            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        </div>
                        <div class="contact-info">
                            <div class="main-text"><a href="mailto:info@newgfc.ru">info@newgfc.ru</a></div>
                            <div class="sub-text">Почта для связи</div>
                        </div>
                    </div>
                    <!-- Address -->
                    <div class="contact-block">
                        <div class="contact-icon">
                            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        </div>
                        <div class="contact-info">
                            <div class="main-text">Г.Раменское, совхоз,</div>
                            <div class="sub-text">улица школьная 1/6</div>
                        </div>
                    </div>
                </div>

                <!-- Center Logo -->
                <a href="./index.html" class="logo-center">
                    <!-- Замените src на путь к вашему логотипу -->
                    <img src="./images/logo.svg" alt="Анкалав 47">
                </a>

                <div class="header-side right">
                    <!-- Phone -->
                    <div class="contact-block">
                        <div class="contact-icon">
                            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                        </div>
                        <div class="contact-info">
                            <div class="main-text"><a href="tel:+79999030408">+7 (999) 903-04-08</a></div>
                            <div class="sub-text">Ежедневно с 10:00 до 20:00</div>
                        </div>
                    </div>
                    <!-- Button -->
                    <button class="btn js-open-modal">Пробное занятие</button>
                </div>
            </div>

            <nav class="header-bottom">
                <ul class="nav-list">
                    <li><a href="#" class="nav-item">О клубе</a></li>
                    <ul class="nav-list">
                        <li class="nav-item has-dropdown">
                        <span class="nav-link">Направления</span>
                            <ul class="dropdown-menu">
                                <li><a href="./napravlenie.html">Бокс</a></li>
                                <li><a href="#">Кикбоксинг</a></li>
                                <li><a href="#">Дзюдо</a></li>
                            </ul>
                        </li>
                    </ul>
                    <li><a href="./coaches.html" class="nav-item">Тренеры</a></li>
                    <li><a href="#" class="nav-item">Абонементы</a></li>
                    <li><a href="#" class="nav-item">Расписание</a></li>
                    <li><a href="#" class="nav-item">Галерея</a></li>
                    <li><a href="#" class="nav-item">Новости</a></li>
                    <li><a href="#" class="nav-item">Контакты</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Mobile Header -->
    <header class="header-mobile">
        <a href="./index.html" class="logo-mobile">
            <!-- Замените src на путь к вашему логотипу -->
            <img src="./images/logo.svg" alt="Анкалав 47">
        </a>
        
        <div class="mobile-contact">
            <div class="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            <div class="contact-info" style="text-align: left;">
                <div class="main-text">+7 (999) 903-04-08</div>
                <div class="sub-text">Ежедневно с 10:00 до 20:00</div>
            </div>
        </div>

        <button class="burger-btn js-open-menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>

    <!-- Mobile Fullscreen Menu -->
    <div class="mobile-menu-overlay" id="mobileMenu">
        <div class="mobile-menu-header">
            <button class="close-menu-btn js-close-menu">&times;</button>
        </div>
        <ul class="mobile-nav-list">
            <li><a href="#">О клубе</a></li>
            <ul class="nav-list">
                        <li class="nav-item has-dropdown">
                        <span class="nav-link">Направления</span>
                            <ul class="dropdown-menu">
                                <li><a href="./napravlenie.html">Бокс</a></li>
                                <li><a href="#">Кикбоксинг</a></li>
                                <li><a href="#">Дзюдо</a></li>
                            </ul>
                        </li>
                    </ul>
            <li><a href="./coaches.html">Тренеры</a></li>
            <li><a href="#">Абонементы</a></li>
            <li><a href="#">Расписание</a></li>
            <li><a href="#">Галерея</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Контакты</a></li>
            <!-- Кнопка в мобильном меню, если нужна -->
            <li style="margin-top: 20px;">
                <button class="btn js-open-modal" style="width: 100%;">Пробное занятие</button>
            </li>
        </ul>
    </div>

    <!-- Modal Window -->
    <div class="modal-overlay" id="trialModal">
        <div class="modal-content">
            <button class="close-modal-btn js-close-modal">&times;</button>
            <h2>Записаться на<br>занятие прямо сейчас</h2>
            <form action="#">
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="Ваше имя" required>
                </div>
                <div class="form-group">
                    <input type="tel" class="form-input" placeholder="Номер телефона" required>
                </div>
                <button type="submit" class="btn">Записаться на занятие</button>
                <div class="checkbox-group">
                    <input type="checkbox" id="privacy" checked required>
                    <label for="privacy">Согласие на обработку персональных данных</label>
                </div>
            </form>
        </div>
    </div>
        `;
    }
}

// Регистрируем новый элемент
customElements.define('special-header', SpecialHeader);

document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Logic
            const btnOpenMenu = document.querySelector('.js-open-menu');
            const btnCloseMenu = document.querySelector('.js-close-menu');
            const mobileMenu = document.getElementById('mobileMenu');

            btnOpenMenu.addEventListener('click', () => {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden'; // Запрет прокрутки сайта
            });

            btnCloseMenu.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = ''; 
            });

            // Modal Logic
            const btnsOpenModal = document.querySelectorAll('.js-open-modal');
            const btnCloseModal = document.querySelector('.js-close-modal');
            const modal = document.getElementById('trialModal');

            btnsOpenModal.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    // Если модалка открывается из мобильного меню, закрываем меню
                    if(mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                    }
                });
            });

            btnCloseModal.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });

            // Закрытие модального окна по клику вне области контента
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        
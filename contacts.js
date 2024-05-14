document.addEventListener("DOMContentLoaded", function () {
  function updateContent() {
    var windowWidth = window.innerWidth;
    var contentElement = document.getElementById("body3");

    if (windowWidth <= 580) {
      contentElement.innerHTML = `   
      
      <div class="tablet-center">
      <header class="mobile_header">
        <div class="mobile_header__inner">
          <a class="header__logo text18--display-regular" href="*"
            >Константин Дедов</a
          >

          <nav class="tablet_header__menu">
            <!-- <ul class="tablet_header__menu-list">
              <li class="tablet_header__menu-item text-up">
                <a class="tablet_header__menu-link text18--light" href="*"
                  >Обо мне</a
                >
              </li>
              <li class="tablet_header__menu-item text-up">
                <a
                  class="tablet_header__menu-link text18--light"
                  href="blog.html"
                  >Блог</a
                >
              </li>
              <li class="tablet_header__menu-item text-up">
                <a
                  class="tablet_header__menu-link text18--light"
                  href="contacts.html"
                  id="top"
                  >Контакты</a
                >
              </li>
              <li class="tablet_header__menu-item">
                <input
                  type="checkbox"
                  class="theme-checkbox"
                  id="switch-theme__button"
                />
              </li>
            </ul> -->
          </nav>
        </div>
        <div class="tablet_header__burger">
          <img src="./images/burger.svg" alt="menu" />
        </div>
      </header>
      <main>
        <div class="mobile_contacts-info">
          <div class="mobile_contacts-info__phone">
            <h2 class="contacts-info__phone-label text16--light">Телефон:</h2>
            <a
              href="tel:+375295221218"
              class="contacts-info__phone-value text16--light text-up"
            >
              +375295221218
            </a>
          </div>
          <div class="mobile_contacts-info__email">
            <h2 class="contacts-info__email-label text16--light">Email:</h2>
            <h2 class="contacts-info__email-value text16--light text-up">
              konstantindedovblog@gmail.com
            </h2>
          </div>
          <div class="mobile_contacts-info__adress">
            <h2 class="contacts-info__adress-label text16--light">Адреc:</h2>
            <a
              href="https://www.google.com/maps/place/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9+%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B8+%D0%B8+%D1%80%D0%B0%D0%B4%D0%B8%D0%BE%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8/@53.9188088,27.593404,18.75z/data=!4m7!3m6!1s0x46dbcfa7bec46317:0x3efd8e8ffb993d!4b1!8m2!3d53.9188056!4d27.5937052!16zL20vMDRfNmpj?entry=ttu"
              target="_blank"
              class="contacts-info__adress-value text16--light text-up"
            >
              ул. Петруся Бровки 6, Минск
            </a>
          </div>
          <img src="./images/univer.png" alt="univer" />
        </div>
      </main>
      <footer class="mobile_footer">
        <div class="mobile_footer-inner">
          <a
            class="tablet_footer-inner__contact text12--light text-up"
            href="#top"
            >Контакты</a
          >
          <p class="tablet_footer-inner__adress text12--light text-up">
            2024 konstantindedovblog.com
          </p>
        </div>
      </footer>
    </div>
      
      `;

      let clickmarker = 0;
      const burger = document.querySelector(".tablet_header__burger");
      burger.addEventListener("click", function () {
        if (clickmarker == 0) {
          const burgerMenu = document.querySelector(".tablet_header__menu");
          burgerMenu.innerHTML = `                   <ul class="tablet_header__menu-list">
      <li class="tablet_header__menu-item text-up">
        <a class="tablet_header__menu-link text20--light" href="*"
          >Обо мне</a
        >
      </li>
      <li class="tablet_header__menu-item text-up">
        <a
          class="tablet_header__menu-link text20--light"
          href="blog.html"
          >Блог</a
        >
      </li>
      <li class="tablet_header__menu-item text-up">
        <a
          class="tablet_header__menu-link text20--light"
          href="contacts.html"
          id="top"
          >Контакты</a
        >
      </li>
      <li class="tablet_header__menu-item">
        <input
          type="checkbox"
          class="theme-checkbox"
          id="switch-theme__button"
        />
      </li>
    </ul> `;

          let switchThemeButton = document.getElementById(
            "switch-theme__button"
          ); //находим кнопку "сменить тему"
          switchThemeButton.addEventListener("click", function () {
            // вешаем на нее прослушку события "click"
            let theme = document.getElementById("theme"); // находим <link rel="stylesheet" href="main.css" id="theme" />
            if (theme.getAttribute("href") == "main.css") {
              theme.href = "main-dark.css"; // меняю на файл с темной темой
              //меняем все значки комментариев на белые
              const commentsElements =
                document.querySelectorAll(".post__comments");
              commentsElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/posts comments white.svg";
              });
              //меняем все значки стрелок назад на белые
              const ArrLeftElements = document.querySelectorAll(
                ".posts__slider-prev"
              );
              ArrLeftElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/arr left white.svg";
              });
              //меняем все значки стрелок вперед на белые
              const ArrRightElements = document.querySelectorAll(
                ".posts__slider-next"
              );
              ArrRightElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/arr right white.svg";
              });
              //меняем все крестики на белые
              const CrossElements = document.querySelectorAll(
                ".log-form__cross-inner"
              );
              CrossElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/cross white.svg";
              });
              //меняем все значки настроек на белые
              const SettingsElements = document.querySelectorAll(
                ".get-comment-up__settings-blok"
              );
              SettingsElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/settings white.svg";
              });
            } else {
              theme.href = "main.css";
              //меняем все значки комментариев на черные
              const commentsElements =
                document.querySelectorAll(".post__comments");
              commentsElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/posts comments.svg";
              });
              //меняем все значки стрелок назад на черные
              const ArrLeftElements = document.querySelectorAll(
                ".posts__slider-prev"
              );
              ArrLeftElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/arr left.svg";
              });
              //меняем все значки стрелок вперед на черные
              const ArrRightElements = document.querySelectorAll(
                ".posts__slider-next"
              );
              ArrRightElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/arr right.svg";
              });
              //меняем все крестики на черные
              const CrossElements = document.querySelectorAll(
                ".log-form__cross-inner"
              );
              CrossElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/cross.svg";
              });
              //меняем все значки настроек на черные
              const SettingsElements = document.querySelectorAll(
                ".get-comment-up__settings-blok"
              );
              SettingsElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/settings.svg";
              });
            }
          });
          clickmarker = 1;
        } else {
          const burgerMenu = document.querySelector(".tablet_header__menu");
          burgerMenu.innerHTML = ``;

          clickmarker = 0;
        }
      });
    } else if (windowWidth > 580 && windowWidth < 1080) {
      // HTML-разметка для мобильных устройств
      contentElement.innerHTML = `
    
      <div class="tablet-center">
      <header class="tablet_header">
        <div class="tablet_header__inner">
          <a class="header__logo text20--display-regular" href="./index.html"
            >Константин Дедов</a
          >

          <nav class="tablet_header__menu">
            <!-- <ul class="tablet_header__menu-list">
                <li class="tablet_header__menu-item text-up">
                  <a class="tablet_header__menu-link text20--light" href="*"
                    >Обо мне</a
                  >
                </li>
                <li class="tablet_header__menu-item text-up">
                  <a
                    class="tablet_header__menu-link text20--light"
                    href="blog.html"
                    >Блог</a
                  >
                </li>
                <li class="tablet_header__menu-item text-up">
                  <a
                    class="tablet_header__menu-link text20--light"
                    href="contacts.html"
                    id="top"
                    >Контакты</a
                  >
                </li>
                <li class="tablet_header__menu-item">
                  <input
                    type="checkbox"
                    class="theme-checkbox"
                    id="switch-theme__button"
                  />
                </li>
              </ul> -->
          </nav>
        </div>
        <div class="tablet_header__burger">
          <img src="./images/burger.svg" alt="menu" />
        </div>
      </header>
      <main>
        <div class="tablet_contacts-info">
          <div class="tablet_contacts-info__phone">
            <h2 class="contacts-info__phone-label text20--light">Телефон:</h2>
            <a
              href="tel:+375295221218"
              class="contacts-info__phone-value text20--light text-up"
            >
              +375295221218
            </a>
          </div>
          <div class="tablet_contacts-info__email">
            <h2 class="contacts-info__email-label text20--light">Email:</h2>
            <h2 class="contacts-info__email-value text20--light text-up">
              konstantindedovblog@gmail.com
            </h2>
          </div>
          <div class="tablet_contacts-info__adress">
            <h2 class="contacts-info__adress-label text20--light">Адреc:</h2>
            <a
              href="https://www.google.com/maps/place/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9+%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B8+%D0%B8+%D1%80%D0%B0%D0%B4%D0%B8%D0%BE%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8/@53.9188088,27.593404,18.75z/data=!4m7!3m6!1s0x46dbcfa7bec46317:0x3efd8e8ffb993d!4b1!8m2!3d53.9188056!4d27.5937052!16zL20vMDRfNmpj?entry=ttu"
              target="_blank"
              class="contacts-info__adress-value text20--light text-up"
            >
              ул. Петруся Бровки 6, Минск
            </a>
          </div>
          <img src="./images/univer.png" alt="univer" />
        </div>
      </main>
      <footer class="tablet_footer">
        <div class="tablet_footer-inner">
          <a
            class="tablet_footer-inner__contact text14--light text-up"
            href="#top"
            >Контакты</a
          >
          <p class="tablet_footer-inner__adress text14--light text-up">
            2024 konstantindedovblog.com
          </p>
        </div>
      </footer>
    </div>
    
          
          `;

      let clickmarker = 0;
      const burger = document.querySelector(".tablet_header__burger");
      burger.addEventListener("click", function () {
        if (clickmarker == 0) {
          const burgerMenu = document.querySelector(".tablet_header__menu");
          burgerMenu.innerHTML = `                   <ul class="tablet_header__menu-list">
            <li class="tablet_header__menu-item text-up">
              <a class="tablet_header__menu-link text20--light" href="*"
                >Обо мне</a
              >
            </li>
            <li class="tablet_header__menu-item text-up">
              <a
                class="tablet_header__menu-link text20--light"
                href="blog.html"
                >Блог</a
              >
            </li>
            <li class="tablet_header__menu-item text-up">
              <a
                class="tablet_header__menu-link text20--light"
                href="contacts.html"
                id="top"
                >Контакты</a
              >
            </li>
            <li class="tablet_header__menu-item">
              <input
                type="checkbox"
                class="theme-checkbox"
                id="switch-theme__button"
              />
            </li>
          </ul> `;

          let switchThemeButton = document.getElementById(
            "switch-theme__button"
          ); //находим кнопку "сменить тему"
          switchThemeButton.addEventListener("click", function () {
            // вешаем на нее прослушку события "click"
            let theme = document.getElementById("theme"); // находим <link rel="stylesheet" href="main.css" id="theme" />
            if (theme.getAttribute("href") == "main.css") {
              theme.href = "main-dark.css"; // меняю на файл с темной темой
              //меняем все значки комментариев на белые
              const commentsElements =
                document.querySelectorAll(".post__comments");
              commentsElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/posts comments white.svg";
              });
              //меняем все значки стрелок назад на белые
              const ArrLeftElements = document.querySelectorAll(
                ".posts__slider-prev"
              );
              ArrLeftElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/arr left white.svg";
              });
              //меняем все значки стрелок вперед на белые
              const ArrRightElements = document.querySelectorAll(
                ".posts__slider-next"
              );
              ArrRightElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/arr right white.svg";
              });
              //меняем все крестики на белые
              const CrossElements = document.querySelectorAll(
                ".log-form__cross-inner"
              );
              CrossElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/cross white.svg";
              });
              //меняем все значки настроек на белые
              const SettingsElements = document.querySelectorAll(
                ".get-comment-up__settings-blok"
              );
              SettingsElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/settings white.svg";
              });
            } else {
              theme.href = "main.css";
              //меняем все значки комментариев на черные
              const commentsElements =
                document.querySelectorAll(".post__comments");
              commentsElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/posts comments.svg";
              });
              //меняем все значки стрелок назад на черные
              const ArrLeftElements = document.querySelectorAll(
                ".posts__slider-prev"
              );
              ArrLeftElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/arr left.svg";
              });
              //меняем все значки стрелок вперед на черные
              const ArrRightElements = document.querySelectorAll(
                ".posts__slider-next"
              );
              ArrRightElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/arr right.svg";
              });
              //меняем все крестики на черные
              const CrossElements = document.querySelectorAll(
                ".log-form__cross-inner"
              );
              CrossElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/cross.svg";
              });
              //меняем все значки настроек на черные
              const SettingsElements = document.querySelectorAll(
                ".get-comment-up__settings-blok"
              );
              SettingsElements.forEach((element) => {
                const imgElement = element.querySelector("img");
                imgElement.src = "./images/settings.svg";
              });
            }
          });
          clickmarker = 1;
        } else {
          const burgerMenu = document.querySelector(".tablet_header__menu");
          burgerMenu.innerHTML = ``;

          clickmarker = 0;
        }
      });
    } else {
      // HTML-разметка для настольных устройств
      contentElement.innerHTML = `    
        
  
      <header class="header">
      <div class="header__inner">
        <a class="header__logo text24--light text-up" href="index.html"
          >Константин Дедов</a
        >

        <nav class="header__menu">
          <ul class="header__menu-list">
            <li class="header__menu-item text-up">
              <a class="header__menu-link text24--light" href="*">Обо мне</a>
            </li>
            <li class="header__menu-item text-up">
              <a class="header__menu-link text24--light" href="blog.html"
                >Блог</a
              >
            </li>
            <li class="header__menu-item text-up">
              <a
                class="header__menu-link text24--display-regular"
                href="contacts.html"
                id="top"
                >Контакты</a
              >
            </li>
            <li class="header__menu-item">
              <input
                type="checkbox"
                class="theme-checkbox"
                id="switch-theme__button"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <div class="contacts-info">
        <div class="contacts-info__phone">
          <h2 class="contacts-info__phone-label text24--light">Телефон:</h2>
          <a
            href="tel:+375295221218"
            class="contacts-info__phone-value text24--light text-up"
          >
            +375295221218
          </a>
        </div>
        <div class="contacts-info__email">
          <h2 class="contacts-info__email-label text24--light">Email:</h2>
          <h2 class="contacts-info__email-value text24--light text-up">
            konstantindedovblog@gmail.com
          </h2>
        </div>
        <div class="contacts-info__adress">
          <h2 class="contacts-info__adress-label text24--light">Адреc:</h2>
          <a
            href="https://www.google.com/maps/place/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9+%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B8+%D0%B8+%D1%80%D0%B0%D0%B4%D0%B8%D0%BE%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8/@53.9188088,27.593404,18.75z/data=!4m7!3m6!1s0x46dbcfa7bec46317:0x3efd8e8ffb993d!4b1!8m2!3d53.9188056!4d27.5937052!16zL20vMDRfNmpj?entry=ttu"
            target="_blank"
            class="contacts-info__adress-value text24--light text-up"
          >
            ул. Петруся Бровки 6, Минск
          </a>
        </div>
      </div>
      <img src="./images/univer.png" alt="univer" />
      <footer class="footer">
        <div class="footer-inner">
          <a class="footer-inner__contact text14--light text-up" href="#top"
            >Контакты</a
          >
          <p class="footer-inner__adress text14--light text-up">
            2024 konstantindedovblog.com
          </p>
        </div>
      </footer>
    </main>
  
  
  
    
          `;

      let switchThemeButton = document.getElementById("switch-theme__button"); //находим кнопку "сменить тему"
      switchThemeButton.addEventListener("click", function () {
        // вешаем на нее прослушку события "click"
        let theme = document.getElementById("theme"); // находим <link rel="stylesheet" href="main.css" id="theme" />
        if (theme.getAttribute("href") == "main.css") {
          theme.href = "main-dark.css"; // меняю на файл с темной темой

          //меняем все значки комментариев на белые
          const commentsElements = document.querySelectorAll(".post__comments");
          commentsElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/posts comments white.svg";
          });

          //меняем все значки стрелок назад на белые
          const ArrLeftElements = document.querySelectorAll(
            ".posts__slider-prev"
          );
          ArrLeftElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/arr left white.svg";
          });
          //меняем все значки стрелок вперед на белые
          const ArrRightElements = document.querySelectorAll(
            ".posts__slider-next"
          );
          ArrRightElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/arr right white.svg";
          });

          //меняем все крестики на белые
          const CrossElements = document.querySelectorAll(
            ".log-form__cross-inner"
          );
          CrossElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/cross white.svg";
          });

          //меняем все значки настроек на белые
          const SettingsElements = document.querySelectorAll(
            ".get-comment-up__settings-blok"
          );
          SettingsElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/settings white.svg";
          });
        } else {
          theme.href = "main.css";

          //меняем все значки комментариев на черные
          const commentsElements = document.querySelectorAll(".post__comments");
          commentsElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/posts comments.svg";
          });

          //меняем все значки стрелок назад на черные
          const ArrLeftElements = document.querySelectorAll(
            ".posts__slider-prev"
          );
          ArrLeftElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/arr left.svg";
          });
          //меняем все значки стрелок вперед на черные
          const ArrRightElements = document.querySelectorAll(
            ".posts__slider-next"
          );
          ArrRightElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/arr right.svg";
          });

          //меняем все крестики на черные
          const CrossElements = document.querySelectorAll(
            ".log-form__cross-inner"
          );
          CrossElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/cross.svg";
          });

          //меняем все значки настроек на черные
          const SettingsElements = document.querySelectorAll(
            ".get-comment-up__settings-blok"
          );
          SettingsElements.forEach((element) => {
            const imgElement = element.querySelector("img");
            imgElement.src = "./images/settings.svg";
          });
        }
      });

      let offset = 0;
      const sliderLine = document.querySelectorAll(".posts__slider-line");
      const nexts = document.querySelectorAll(".posts__slider-next");
      const prevs = document.querySelectorAll(".posts__slider-prev");

      nexts[0].addEventListener("click", function () {
        offset += 508;
        if (offset > 1524) {
          offset = 0;
        }
        switch (offset) {
          case 0:
            marker1.style.backgroundColor = "#666";
            marker2.style.backgroundColor = "#666";
            marker3.style.backgroundColor = "#FFF";
            marker4.style.backgroundColor = "#FFF";
            marker5.style.backgroundColor = "#FFF";
            break;
          case 508:
            marker1.style.backgroundColor = "#FFF";
            marker2.style.backgroundColor = "#666";
            marker3.style.backgroundColor = "#666";
            marker4.style.backgroundColor = "#FFF";
            marker5.style.backgroundColor = "#FFF";
            break;
          case 1016:
            marker1.style.backgroundColor = "#FFF";
            marker2.style.backgroundColor = "#FFF";
            marker3.style.backgroundColor = "#666";
            marker4.style.backgroundColor = "#666";
            marker5.style.backgroundColor = "#FFF";
            break;
          case 1524:
            marker1.style.backgroundColor = "#FFF";
            marker2.style.backgroundColor = "#FFF";
            marker3.style.backgroundColor = "#FFF";
            marker4.style.backgroundColor = "#666";
            marker5.style.backgroundColor = "#666";
            break;
        }
        sliderLine[0].style.left = -offset + "px";
      });

      prevs[0].addEventListener("click", function () {
        offset -= 508;
        if (offset < 0) {
          offset = 1524;
        }
        switch (offset) {
          case 0:
            marker1.style.backgroundColor = "#666";
            marker2.style.backgroundColor = "#666";
            marker3.style.backgroundColor = "#FFF";
            marker4.style.backgroundColor = "#FFF";
            marker5.style.backgroundColor = "#FFF";
            break;
          case 508:
            marker1.style.backgroundColor = "#FFF";
            marker2.style.backgroundColor = "#666";
            marker3.style.backgroundColor = "#666";
            marker4.style.backgroundColor = "#FFF";
            marker5.style.backgroundColor = "#FFF";
            break;
          case 1016:
            marker1.style.backgroundColor = "#FFF";
            marker2.style.backgroundColor = "#FFF";
            marker3.style.backgroundColor = "#666";
            marker4.style.backgroundColor = "#666";
            marker5.style.backgroundColor = "#FFF";
            break;
          case 1524:
            marker1.style.backgroundColor = "#FFF";
            marker2.style.backgroundColor = "#FFF";
            marker3.style.backgroundColor = "#FFF";
            marker4.style.backgroundColor = "#666";
            marker5.style.backgroundColor = "#666";
            break;
        }
        sliderLine[0].style.left = -offset + "px";
      });

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      nexts[1].addEventListener("click", function () {
        offset += 508;
        if (offset > 1524) {
          offset = 0;
        }
        switch (offset) {
          case 0:
            marker6.style.backgroundColor = "#666";
            marker7.style.backgroundColor = "#666";
            marker8.style.backgroundColor = "#FFF";
            marker9.style.backgroundColor = "#FFF";
            marker10.style.backgroundColor = "#FFF";
            break;
          case 508:
            marker6.style.backgroundColor = "#FFF";
            marker7.style.backgroundColor = "#666";
            marker8.style.backgroundColor = "#666";
            marker9.style.backgroundColor = "#FFF";
            marker10.style.backgroundColor = "#FFF";
            break;
          case 1016:
            marker6.style.backgroundColor = "#FFF";
            marker7.style.backgroundColor = "#FFF";
            marker8.style.backgroundColor = "#666";
            marker9.style.backgroundColor = "#666";
            marker10.style.backgroundColor = "#FFF";
            break;
          case 1524:
            marker6.style.backgroundColor = "#FFF";
            marker7.style.backgroundColor = "#FFF";
            marker8.style.backgroundColor = "#FFF";
            marker9.style.backgroundColor = "#666";
            marker10.style.backgroundColor = "#666";
            break;
        }
        sliderLine[1].style.left = -offset + "px";
      });

      prevs[1].addEventListener("click", function () {
        offset -= 508;
        if (offset < 0) {
          offset = 1524;
        }
        switch (offset) {
          case 0:
            marker6.style.backgroundColor = "#666";
            marker7.style.backgroundColor = "#666";
            marker8.style.backgroundColor = "#FFF";
            marker9.style.backgroundColor = "#FFF";
            marker10.style.backgroundColor = "#FFF";
            break;
          case 508:
            marker6.style.backgroundColor = "#FFF";
            marker7.style.backgroundColor = "#666";
            marker8.style.backgroundColor = "#666";
            marker9.style.backgroundColor = "#FFF";
            marker10.style.backgroundColor = "#FFF";
            break;
          case 1016:
            marker6.style.backgroundColor = "#FFF";
            marker7.style.backgroundColor = "#FFF";
            marker8.style.backgroundColor = "#666";
            marker9.style.backgroundColor = "#666";
            marker10.style.backgroundColor = "#FFF";
            break;
          case 1524:
            marker6.style.backgroundColor = "#FFF";
            marker7.style.backgroundColor = "#FFF";
            marker8.style.backgroundColor = "#FFF";
            marker9.style.backgroundColor = "#666";
            marker10.style.backgroundColor = "#666";
            break;
        }
        sliderLine[1].style.left = -offset + "px";
      });

      nexts[2].addEventListener("click", function () {
        offset += 508;
        if (offset > 1524) {
          offset = 0;
        }
        switch (offset) {
          case 0:
            marker11.style.backgroundColor = "#666";
            marker12.style.backgroundColor = "#666";
            marker13.style.backgroundColor = "#FFF";
            marker14.style.backgroundColor = "#FFF";
            marker15.style.backgroundColor = "#FFF";
            break;
          case 508:
            marker11.style.backgroundColor = "#FFF";
            marker12.style.backgroundColor = "#666";
            marker13.style.backgroundColor = "#666";
            marker14.style.backgroundColor = "#FFF";
            marker15.style.backgroundColor = "#FFF";
            break;
          case 1016:
            marker11.style.backgroundColor = "#FFF";
            marker12.style.backgroundColor = "#FFF";
            marker13.style.backgroundColor = "#666";
            marker14.style.backgroundColor = "#666";
            marker15.style.backgroundColor = "#FFF";
            break;
          case 1524:
            marker11.style.backgroundColor = "#FFF";
            marker12.style.backgroundColor = "#FFF";
            marker13.style.backgroundColor = "#FFF";
            marker14.style.backgroundColor = "#666";
            marker15.style.backgroundColor = "#666";
            break;
        }
        sliderLine[2].style.left = -offset + "px";
      });

      prevs[2].addEventListener("click", function () {
        offset -= 508;
        if (offset < 0) {
          offset = 1524;
        }
        switch (offset) {
          case 0:
            marker11.style.backgroundColor = "#666";
            marker12.style.backgroundColor = "#666";
            marker13.style.backgroundColor = "#FFF";
            marker14.style.backgroundColor = "#FFF";
            marker15.style.backgroundColor = "#FFF";
            break;
          case 508:
            marker11.style.backgroundColor = "#FFF";
            marker12.style.backgroundColor = "#666";
            marker13.style.backgroundColor = "#666";
            marker14.style.backgroundColor = "#FFF";
            marker15.style.backgroundColor = "#FFF";
            break;
          case 1016:
            marker11.style.backgroundColor = "#FFF";
            marker12.style.backgroundColor = "#FFF";
            marker13.style.backgroundColor = "#666";
            marker14.style.backgroundColor = "#666";
            marker15.style.backgroundColor = "#FFF";
            break;
          case 1524:
            marker11.style.backgroundColor = "#FFF";
            marker12.style.backgroundColor = "#FFF";
            marker13.style.backgroundColor = "#FFF";
            marker14.style.backgroundColor = "#666";
            marker15.style.backgroundColor = "#666";
            break;
        }
        sliderLine[2].style.left = -offset + "px";
      });

      const marker1 = document.querySelector("#marker1");
      const marker2 = document.querySelector("#marker2");
      const marker3 = document.querySelector("#marker3");
      const marker4 = document.querySelector("#marker4");
      const marker5 = document.querySelector("#marker5");
      const marker6 = document.querySelector("#marker6");
      const marker7 = document.querySelector("#marker7");
      const marker8 = document.querySelector("#marker8");
      const marker9 = document.querySelector("#marker9");
      const marker10 = document.querySelector("#marker10");
      const marker11 = document.querySelector("#marker11");
      const marker12 = document.querySelector("#marker12");
      const marker13 = document.querySelector("#marker13");
      const marker14 = document.querySelector("#marker14");
      const marker15 = document.querySelector("#marker15");

      marker1.addEventListener("click", function () {
        offset = 0;
        sliderLine[0].style.left = -offset + "px";
        marker1.style.backgroundColor = "#666";
        marker2.style.backgroundColor = "#666";
        marker3.style.backgroundColor = "#FFF";
        marker4.style.backgroundColor = "#FFF";
        marker5.style.backgroundColor = "#FFF";
      });
      marker2.addEventListener("click", function () {
        offset = 508;
        sliderLine[0].style.left = -offset + "px";
        marker1.style.backgroundColor = "#FFF";
        marker2.style.backgroundColor = "#666";
        marker3.style.backgroundColor = "#666";
        marker4.style.backgroundColor = "#FFF";
        marker5.style.backgroundColor = "#FFF";
      });
      marker3.addEventListener("click", function () {
        offset = 1016;
        sliderLine[0].style.left = -offset + "px";
        marker1.style.backgroundColor = "#FFF";
        marker2.style.backgroundColor = "#FFF";
        marker3.style.backgroundColor = "#666";
        marker4.style.backgroundColor = "#666";
        marker5.style.backgroundColor = "#FFF";
      });
      marker4.addEventListener("click", function () {
        offset = 1524;
        sliderLine[0].style.left = -offset + "px";
        marker1.style.backgroundColor = "#FFF";
        marker2.style.backgroundColor = "#FFF";
        marker3.style.backgroundColor = "#FFF";
        marker4.style.backgroundColor = "#666";
        marker5.style.backgroundColor = "#666";
      });
      marker5.addEventListener("click", function () {
        offset = 1524;
        sliderLine[0].style.left = -offset + "px";
        marker1.style.backgroundColor = "#FFF";
        marker2.style.backgroundColor = "#FFF";
        marker3.style.backgroundColor = "#FFF";
        marker4.style.backgroundColor = "#666";
        marker5.style.backgroundColor = "#666";
      });

      marker6.addEventListener("click", function () {
        offset = 0;
        sliderLine[1].style.left = -offset + "px";
        marker6.style.backgroundColor = "#666";
        marker7.style.backgroundColor = "#666";
        marker8.style.backgroundColor = "#FFF";
        marker9.style.backgroundColor = "#FFF";
        marker10.style.backgroundColor = "#FFF";
      });
      marker7.addEventListener("click", function () {
        offset = 508;
        sliderLine[1].style.left = -offset + "px";
        marker6.style.backgroundColor = "#FFF";
        marker7.style.backgroundColor = "#666";
        marker8.style.backgroundColor = "#666";
        marker9.style.backgroundColor = "#FFF";
        marker10.style.backgroundColor = "#FFF";
      });
      marker8.addEventListener("click", function () {
        offset = 1016;
        sliderLine[1].style.left = -offset + "px";
        marker6.style.backgroundColor = "#FFF";
        marker7.style.backgroundColor = "#FFF";
        marker8.style.backgroundColor = "#666";
        marker9.style.backgroundColor = "#666";
        marker10.style.backgroundColor = "#FFF";
      });
      marker9.addEventListener("click", function () {
        offset = 1524;
        sliderLine[1].style.left = -offset + "px";
        marker6.style.backgroundColor = "#FFF";
        marker7.style.backgroundColor = "#FFF";
        marker8.style.backgroundColor = "#FFF";
        marker9.style.backgroundColor = "#666";
        marker10.style.backgroundColor = "#666";
      });
      marker10.addEventListener("click", function () {
        offset = 1524;
        sliderLine[1].style.left = -offset + "px";
        marker6.style.backgroundColor = "#FFF";
        marker7.style.backgroundColor = "#FFF";
        marker8.style.backgroundColor = "#FFF";
        marker9.style.backgroundColor = "#666";
        marker10.style.backgroundColor = "#666";
      });

      marker11.addEventListener("click", function () {
        offset = 0;
        sliderLine[2].style.left = -offset + "px";
        marker11.style.backgroundColor = "#666";
        marker12.style.backgroundColor = "#666";
        marker13.style.backgroundColor = "#FFF";
        marker14.style.backgroundColor = "#FFF";
        marker15.style.backgroundColor = "#FFF";
      });
      marker12.addEventListener("click", function () {
        offset = 508;
        sliderLine[2].style.left = -offset + "px";
        marker11.style.backgroundColor = "#FFF";
        marker12.style.backgroundColor = "#666";
        marker13.style.backgroundColor = "#666";
        marker14.style.backgroundColor = "#FFF";
        marker15.style.backgroundColor = "#FFF";
      });
      marker13.addEventListener("click", function () {
        offset = 1016;
        sliderLine[2].style.left = -offset + "px";
        marker11.style.backgroundColor = "#FFF";
        marker12.style.backgroundColor = "#FFF";
        marker13.style.backgroundColor = "#666";
        marker14.style.backgroundColor = "#666";
        marker15.style.backgroundColor = "#FFF";
      });
      marker14.addEventListener("click", function () {
        offset = 1524;
        sliderLine[2].style.left = -offset + "px";
        marker11.style.backgroundColor = "#FFF";
        marker12.style.backgroundColor = "#FFF";
        marker13.style.backgroundColor = "#FFF";
        marker14.style.backgroundColor = "#666";
        marker15.style.backgroundColor = "#666";
      });
      marker15.addEventListener("click", function () {
        offset = 1524;
        sliderLine[2].style.left = -offset + "px";
        marker11.style.backgroundColor = "#FFF";
        marker12.style.backgroundColor = "#FFF";
        marker13.style.backgroundColor = "#FFF";
        marker14.style.backgroundColor = "#666";
        marker15.style.backgroundColor = "#666";
      });

      const logFormToReg = document.querySelector(".log-form__link");
      const logFormToLog = document.querySelector(".reg-form__link");
      const logCross = document.querySelectorAll(".log-form__cross-inner");
      const logForms = document.querySelectorAll(".log-form");
      const logButton = document.querySelector(".user-menu__buttom");
      logButton.addEventListener("click", function () {
        logForms[0].style.display = "flex";
      }); // появляеться форма входа
      logCross[0].addEventListener("click", function () {
        logForms[0].style.display = "none";
      }); //закрываеться фомма входа
      logCross[1].addEventListener("click", function () {
        logForms[1].style.display = "none";
      }); //закрываеться фомма регистрации
      logFormToReg.addEventListener("click", function () {
        logForms[0].style.display = "none";
        logForms[1].style.display = "flex";
      }); // переход с формы входа к форме регистрации
      logFormToLog.addEventListener("click", function () {
        logForms[1].style.display = "none";
        logForms[0].style.display = "flex";
      }); // переход с формы регистрации к форме входа

      const userMenuLinks = document.querySelectorAll(".user-menu__link");
      const userMenualert = document.querySelectorAll(".user-menu__alert");
      userMenuLinks[0].addEventListener("click", function () {
        if (markerForData == 1) {
          userMenuLinks[0].style.fontWeight = "350";
          userMenuLinks[1].style.fontWeight = "300";
          userMenuLinks[2].style.fontWeight = "300";
          userMenuLinks[3].style.fontWeight = "300";
          userMenualert[0].innerHTML = `          <div class="user-menu__profile-inner">
              <div class="user-menu__profile">
                <img src="./images/Artem.svg" alt="image" />
                <h1 class="text24--light">davidovichkonstantin@gmail.com</h1>
              </div>
              <p class="user-menu__profile-desc text20--light">
                Я инженер кафедры инженерной психологии и эргономики,а теперь еще
                и ассистент кафедры инженерной психологии и эргономики
              </p>
              <div class="user-menu__profile-menu">
                <p class="user-menu__profile-menu--comments text20--light-blue">
                  Комментарии — 23
                </p>
                <p class="user-menu__profile-menu--answers text20--light-blue">
                  Ответы — 15
                </p>
                <p class="user-menu__profile-menu--favorites text20--light-blue">
                  Избранное — 4
                </p>
              </div>
            </div>`;
        } else {
          const userMenuAlertText = document.querySelector(
            ".user-menu__alert-text"
          );
          userMenuAlertText.style.transform = "translateY(-20px)";
          setTimeout(function () {
            userMenuAlertText.style.transform = "translateY(0)";
          }, 100);
        }
      });

      userMenuLinks[1].addEventListener("click", function () {
        if (markerForData == 1) {
          userMenuLinks[0].style.fontWeight = "300";
          userMenuLinks[1].style.fontWeight = "350";
          userMenuLinks[2].style.fontWeight = "300";
          userMenuLinks[3].style.fontWeight = "300";
          userMenualert[0].innerHTML = `          <div class="user-menu__comments-inner">
              <p class="user-menu__comments-item text20--light">
                Конечно при нападении рыси на человека, есть возможность вы...
              </p>
              <p class="user-menu__comments-item text20--light">
                Свойство box-shadow позволяет добавить тень вокруг элемент...
              </p>
              <p class="user-menu__comments-item text20--light">
                Общее устройство автомобиля раньше преподавали в автошколе...
              </p>
              <p class="user-menu__comments-item text20--light">
                Собаки, попавшие в список, считаются самыми послушными. Од...
              </p>
            </div>`;
        } else {
          const userMenuAlertText = document.querySelector(
            ".user-menu__alert-text"
          );
          userMenuAlertText.style.transform = "translateY(-20px)";
          setTimeout(function () {
            userMenuAlertText.style.transform = "translateY(0)";
          }, 100);
        }
      });
      userMenuLinks[2].addEventListener("click", function () {
        if (markerForData == 1) {
          userMenuLinks[0].style.fontWeight = "300";
          userMenuLinks[1].style.fontWeight = "300";
          userMenuLinks[2].style.fontWeight = "350";
          userMenuLinks[3].style.fontWeight = "300";
          userMenualert[0].innerHTML = `          <div class="user-menu__comments-inner">
              <p class="user-menu__comments-item text20--light">
                Конечно при нападении рыси на человека, есть возможность вы...
              </p>
              <p class="user-menu__comments-item text20--light">
                Свойство box-shadow позволяет добавить тень вокруг элемент...
              </p>
              <p class="user-menu__comments-item text20--light">
                Общее устройство автомобиля раньше преподавали в автошколе...
              </p>
              <p class="user-menu__comments-item text20--light">
                Собаки, попавшие в список, считаются самыми послушными. Од...
              </p>
            </div>`;
        } else {
          const userMenuAlertText = document.querySelector(
            ".user-menu__alert-text"
          );
          userMenuAlertText.style.transform = "translateY(-20px)";
          setTimeout(function () {
            userMenuAlertText.style.transform = "translateY(0)";
          }, 100);
        }
      });
      userMenuLinks[3].addEventListener("click", function () {
        if (markerForData == 1) {
          userMenuLinks[0].style.fontWeight = "300";
          userMenuLinks[1].style.fontWeight = "300";
          userMenuLinks[2].style.fontWeight = "300";
          userMenuLinks[3].style.fontWeight = "350";
          userMenualert[0].innerHTML = `          <div class="user-menu__settings-inner">
              <p class="user-menu__settings-item text20--light-blue">
                Сменить аккаунт
              </p>
              <p class="user-menu__settings-item text20--light-blue">
                Удалить аккаунт
              </p>
              <p class="user-menu__settings-item text20--light-blue">
                Изменить аватарку
              </p>
              <p class="user-menu__settings-item text20--light-blue">
                Изменить описание
              </p>
            </div>`;
        } else {
          const userMenuAlertText = document.querySelector(
            ".user-menu__alert-text"
          );
          userMenuAlertText.style.transform = "translateY(-20px)";
          setTimeout(function () {
            userMenuAlertText.style.transform = "translateY(0)";
          }, 100);
        }
      });

      const logFormButtons = document.querySelectorAll(".log-form__button"); //находим кнопки войти и зарегистрироваться на формах
      const logFormInputs = document.querySelectorAll(".log-form__input"); // находим все 5 input на формах, чтобы сверять от туда данные
      let markerForData = 0; // для проверки, ввели ли мы данные
      logFormButtons[0].addEventListener("click", function () {
        if (
          logFormInputs[0].value == "davidovichkonstantin@gmail.com" &&
          logFormInputs[1].value == "konstantin123"
        ) {
          markerForData = 1;
          userMenuLinks[0].style.fontWeight = "350";
          userMenuLinks[1].style.fontWeight = "300";
          userMenuLinks[2].style.fontWeight = "300";
          userMenuLinks[3].style.fontWeight = "300";

          userMenualert[0].innerHTML = `          <div class="user-menu__profile-inner">
              <div class="user-menu__profile">
                <img src="./images/Artem.svg" alt="image" />
                <h1 class="text24--light">davidovichkonstantin@gmail.com</h1>
              </div>
              <p class="user-menu__profile-desc text20--light">
                Я инженер кафедры инженерной психологии и эргономики,а теперь еще
                и ассистент кафедры инженерной психологии и эргономики
              </p>
              <div class="user-menu__profile-menu">
                <p class="user-menu__profile-menu--comments text20--light-blue">
                  Комментарии — 23
                </p>
                <p class="user-menu__profile-menu--answers text20--light-blue">
                  Ответы — 15
                </p>
                <p class="user-menu__profile-menu--favorites text20--light-blue">
                  Избранное — 4
                </p>
              </div>
            </div>`;
          logForms[0].style.display = "none";
          logButton.innerHTML = `Вход выполнен`;
        } else {
          alert("Неверные логин или пароль");
        }
      });
    }
  }

  // Вызов функции при загрузке страницы
  updateContent();

  // Вызов функции при изменении размера окна браузера
  window.addEventListener("resize", function () {
    updateContent();
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

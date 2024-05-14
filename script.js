document.addEventListener("DOMContentLoaded", function () {
  function updateContent() {
    var windowWidth = window.innerWidth;
    var contentElement = document.getElementById("body1");

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
        <div class="mobile_posts">
          <div class="mobile_posts__inner">
            <h1 class="text16--light">Важные посты</h1>
            <div class="mobile_posts__container">
              <button class="posts__slider-prev text-up">
                <img src="./images/arr left.svg" alt="Prev" />
              </button>

              <div class="mobile_post">
                <div class="post__info">
                  <div class="post__date text14--light text-up">05-12-2023</div>
                  <div class="post__comments text-up">
                    <img src="./images/posts comments.svg" alt="Comments" />
                    <div class="post__comments-counter text14--light">413</div>
                  </div>
                </div>
                <div class="mobile_post__card change-color">
                  <h1 class="mobile_card__header text14--display-regular">
                    База данных, содержащая более 10 миллионов журналов, книг и
                    справочных изданий.
                  </h1>
                  <p class="mobile_card__text text14--light">
                    Здесь вы найдете исследования по химии, экономике,
                    географии, истории, и другим.
                  </p>
                </div>
              </div>

              <button class="posts__slider-next text-up">
                <img src="./images/arr right.svg" alt="Next" />
              </button>
            </div>
            <div class="posts-markers">
              <div class="posts-markers__inner">
                <div class="marker text-up__3" id="tablet_marker1"></div>
                <div class="marker text-up__3" id="tablet_marker2"></div>
                <div class="marker text-up__3" id="tablet_marker3"></div>
                <div class="marker text-up__3" id="tablet_marker4"></div>
                <div class="marker text-up__3" id="tablet_marker5"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile_posts">
          <div class="mobile_posts__inner">
            <h1 class="text16--light">Популярные посты</h1>
            <div class="mobile_posts__container">
              <button class="posts__slider-prev text-up">
                <img src="./images/arr left.svg" alt="Prev" />
              </button>

              <div class="mobile_post">
                <div class="post__info">
                  <div class="post__date text14--light text-up">05-12-2023</div>
                  <div class="post__comments text-up">
                    <img src="./images/posts comments.svg" alt="Comments" />
                    <div class="post__comments-counter text14--light">413</div>
                  </div>
                </div>
                <div class="mobile_post__card change-color">
                  <h1 class="mobile_card__header text14--display-regular">
                    База данных, содержащая более 10 миллионов журналов, книг и
                    справочных изданий.
                  </h1>
                  <p class="mobile_card__text text14--light">
                    Здесь вы найдете исследования по химии, экономике,
                    географии, истории, и другим.
                  </p>
                </div>
              </div>

              <button class="posts__slider-next text-up">
                <img src="./images/arr right.svg" alt="Next" />
              </button>
            </div>
            <div class="posts-markers">
              <div class="posts-markers__inner">
                <div class="marker text-up__3" id="tablet_marker1"></div>
                <div class="marker text-up__3" id="tablet_marker2"></div>
                <div class="marker text-up__3" id="tablet_marker3"></div>
                <div class="marker text-up__3" id="tablet_marker4"></div>
                <div class="marker text-up__3" id="tablet_marker5"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile_posts">
          <div class="mobile_posts__inner">
            <h1 class="text16--light">Последние посты</h1>
            <div class="mobile_posts__container">
              <button class="posts__slider-prev text-up">
                <img src="./images/arr left.svg" alt="Prev" />
              </button>

              <div class="mobile_post">
                <div class="post__info">
                  <div class="post__date text14--light text-up">05-12-2023</div>
                  <div class="post__comments text-up">
                    <img src="./images/posts comments.svg" alt="Comments" />
                    <div class="post__comments-counter text14--light">413</div>
                  </div>
                </div>
                <div class="mobile_post__card change-color">
                  <h1 class="mobile_card__header text14--display-regular">
                    База данных, содержащая более 10 миллионов журналов, книг и
                    справочных изданий.
                  </h1>
                  <p class="mobile_card__text text14--light">
                    Здесь вы найдете исследования по химии, экономике,
                    географии, истории, и другим.
                  </p>
                </div>
              </div>

              <button class="posts__slider-next text-up">
                <img src="./images/arr right.svg" alt="Next" />
              </button>
            </div>
            <div class="posts-markers">
              <div class="posts-markers__inner">
                <div class="marker text-up__3" id="tablet_marker1"></div>
                <div class="marker text-up__3" id="tablet_marker2"></div>
                <div class="marker text-up__3" id="tablet_marker3"></div>
                <div class="marker text-up__3" id="tablet_marker4"></div>
                <div class="marker text-up__3" id="tablet_marker5"></div>
              </div>
            </div>
          </div>
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
          <a class="header__logo text20--display-regular" href="*"
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
        <div class="posts">
          <div class="tablet_posts__inner">
            <h1 class="text20--light">Важные посты</h1>
            <div class="posts__container">
              <button class="posts__slider-prev text-up">
                <img src="./images/arr left.svg" alt="Prev" />
              </button>
              <div class="tablet_posts__slider">
                <div class="posts__slider-line">
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        05-12-2023
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          413
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        База данных, содержащая более 10 миллионов журналов,
                        книг и справочных изданий.
                      </h1>
                      <p class="card__text text20--light">
                        Здесь вы найдете исследования по химии, экономике,
                        географии, истории, и другим областям знаний.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        22-10-2023
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          173
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Нападение рыси на человека. Мифы и реальность
                      </h1>
                      <p class="card__text text20--light">
                        Среди людей ходит достаточно много баек и легенд о
                        страшных лесных хищниках, особенно много слухов идет от
                        костровых баек охотников...
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        15-09-2022
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          98
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        3 способа использовать box-shadow в CSS
                      </h1>
                      <p class="card__text text20--light">
                        Свойство box-shadow позволяет добавить тень вокруг
                        элемента на веб-странице. Тень подсказывает
                        пользователю, является ли элемент — интерактивным.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        13-07-2024
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          134
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Общее устройство автомобиля: изучаем строение машины
                      </h1>
                      <p class="card__text text20--light">
                        Общее устройство автомобиля раньше преподавали в
                        автошколе. Но сегодня многие не представляют, из чего
                        состоит машина.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        13-07-2024
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          134
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Самые умные породы собак
                      </h1>
                      <p class="card__text text20--light">
                        В рейтинге самых умных пород собак участвует ТОП-10 по
                        версии Корена. Собаки, попавшие в список, считаются
                        самыми послушными. Однако способны действовать
                        самостоятельно.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="posts__slider-next text-up">
                <img src="./images/arr right.svg" alt="Next" />
              </button>
            </div>
            <div class="posts-markers">
              <div class="posts-markers__inner">
                <div class="marker text-up__3" id="tablet_marker1"></div>
                <div class="marker text-up__3" id="tablet_marker2"></div>
                <div class="marker text-up__3" id="tablet_marker3"></div>
                <div class="marker text-up__3" id="tablet_marker4"></div>
                <div class="marker text-up__3" id="tablet_marker5"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="posts">
          <div class="tablet_posts__inner">
            <h1 class="text20--light">Популярные посты</h1>
            <div class="posts__container">
              <button class="posts__slider-prev text-up">
                <img src="./images/arr left.svg" alt="Prev" />
              </button>
              <div class="tablet_posts__slider">
                <div class="posts__slider-line">
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        05-12-2023
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          413
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        База данных, содержащая более 10 миллионов журналов,
                        книг и справочных изданий.
                      </h1>
                      <p class="card__text text20--light">
                        Здесь вы найдете исследования по химии, экономике,
                        географии, истории, и другим областям знаний.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        22-10-2023
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          173
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Нападение рыси на человека. Мифы и реальность
                      </h1>
                      <p class="card__text text20--light">
                        Среди людей ходит достаточно много баек и легенд о
                        страшных лесных хищниках, особенно много слухов идет от
                        костровых баек охотников...
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        15-09-2022
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          98
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        3 способа использовать box-shadow в CSS
                      </h1>
                      <p class="card__text text20--light">
                        Свойство box-shadow позволяет добавить тень вокруг
                        элемента на веб-странице. Тень подсказывает
                        пользователю, является ли элемент — интерактивным.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        13-07-2024
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          134
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Общее устройство автомобиля: изучаем строение машины
                      </h1>
                      <p class="card__text text20--light">
                        Общее устройство автомобиля раньше преподавали в
                        автошколе. Но сегодня многие не представляют, из чего
                        состоит машина.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        13-07-2024
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          134
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Самые умные породы собак
                      </h1>
                      <p class="card__text text20--light">
                        В рейтинге самых умных пород собак участвует ТОП-10 по
                        версии Корена. Собаки, попавшие в список, считаются
                        самыми послушными. Однако способны действовать
                        самостоятельно.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="posts__slider-next text-up">
                <img src="./images/arr right.svg" alt="Next" />
              </button>
            </div>
            <div class="posts-markers">
              <div class="posts-markers__inner">
                <div class="marker text-up__3" id="tablet_marker1"></div>
                <div class="marker text-up__3" id="tablet_marker2"></div>
                <div class="marker text-up__3" id="tablet_marker3"></div>
                <div class="marker text-up__3" id="tablet_marker4"></div>
                <div class="marker text-up__3" id="tablet_marker5"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="posts">
          <div class="tablet_posts__inner">
            <h1 class="text20--light">Последние посты</h1>
            <div class="posts__container">
              <button class="posts__slider-prev text-up">
                <img src="./images/arr left.svg" alt="Prev" />
              </button>
              <div class="tablet_posts__slider">
                <div class="posts__slider-line">
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        05-12-2023
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          413
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        База данных, содержащая более 10 миллионов журналов,
                        книг и справочных изданий.
                      </h1>
                      <p class="card__text text20--light">
                        Здесь вы найдете исследования по химии, экономике,
                        географии, истории, и другим областям знаний.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        22-10-2023
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          173
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Нападение рыси на человека. Мифы и реальность
                      </h1>
                      <p class="card__text text20--light">
                        Среди людей ходит достаточно много баек и легенд о
                        страшных лесных хищниках, особенно много слухов идет от
                        костровых баек охотников...
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        15-09-2022
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          98
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        3 способа использовать box-shadow в CSS
                      </h1>
                      <p class="card__text text20--light">
                        Свойство box-shadow позволяет добавить тень вокруг
                        элемента на веб-странице. Тень подсказывает
                        пользователю, является ли элемент — интерактивным.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        13-07-2024
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          134
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Общее устройство автомобиля: изучаем строение машины
                      </h1>
                      <p class="card__text text20--light">
                        Общее устройство автомобиля раньше преподавали в
                        автошколе. Но сегодня многие не представляют, из чего
                        состоит машина.
                      </p>
                    </div>
                  </div>
                  <div class="post">
                    <div class="post__info">
                      <div class="post__date text20--light text-up">
                        13-07-2024
                      </div>
                      <div class="post__comments text-up">
                        <img src="./images/posts comments.svg" alt="Comments" />
                        <div class="post__comments-counter text20--light">
                          134
                        </div>
                      </div>
                    </div>
                    <div class="post__card change-color">
                      <h1 class="card__header text20--display-regular">
                        Самые умные породы собак
                      </h1>
                      <p class="card__text text20--light">
                        В рейтинге самых умных пород собак участвует ТОП-10 по
                        версии Корена. Собаки, попавшие в список, считаются
                        самыми послушными. Однако способны действовать
                        самостоятельно.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="posts__slider-next text-up">
                <img src="./images/arr right.svg" alt="Next" />
              </button>
            </div>
            <div class="posts-markers">
              <div class="posts-markers__inner">
                <div class="marker text-up__3" id="tablet_marker1"></div>
                <div class="marker text-up__3" id="tablet_marker2"></div>
                <div class="marker text-up__3" id="tablet_marker3"></div>
                <div class="marker text-up__3" id="tablet_marker4"></div>
                <div class="marker text-up__3" id="tablet_marker5"></div>
              </div>
            </div>
          </div>
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
      contentElement.innerHTML = `    <header class="header">
      <div class="header__inner">
        <a class="header__logo text24--display-regular text-up" href="*"
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
                class="header__menu-link text24--light"
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
      <div class="posts">
        <div class="posts__inner">
          <h1 class="text24--light">Важные посты</h1>
          <div class="posts__container">
            <button class="posts__slider-prev text-up">
              <img src="./images/arr left.svg" alt="Prev" />
            </button>
            <div class="posts__slider">
              <div class="posts__slider-line">
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      05-12-2023
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        413
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      База данных, содержащая более 10 миллионов журналов, книг
                      и справочных изданий.
                    </h1>
                    <p class="card__text text20--light">
                      Здесь вы найдете исследования по химии, экономике,
                      географии, истории, и другим областям знаний.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      22-10-2023
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        173
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Нападение рыси на человека. Мифы и реальность
                    </h1>
                    <p class="card__text text20--light">
                      Среди людей ходит достаточно много баек и легенд о
                      страшных лесных хищниках, особенно много слухов идет от
                      костровых баек охотников...
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      15-09-2022
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">98</div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      3 способа использовать box-shadow в CSS
                    </h1>
                    <p class="card__text text20--light">
                      Свойство box-shadow позволяет добавить тень вокруг
                      элемента на веб-странице. Тень подсказывает пользователю,
                      является ли элемент — интерактивным.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      13-07-2024
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        134
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Общее устройство автомобиля: изучаем строение машины
                    </h1>
                    <p class="card__text text20--light">
                      Общее устройство автомобиля раньше преподавали в
                      автошколе. Но сегодня многие не представляют, из чего
                      состоит машина.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      13-07-2024
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        134
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Самые умные породы собак
                    </h1>
                    <p class="card__text text20--light">
                      В рейтинге самых умных пород собак участвует ТОП-10 по
                      версии Корена. Собаки, попавшие в список, считаются самыми
                      послушными. Однако способны действовать самостоятельно.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button class="posts__slider-next text-up">
              <img src="./images/arr right.svg" alt="Next" />
            </button>
          </div>
          <div class="posts-markers">
            <div class="posts-markers__inner">
              <div class="marker text-up__3" id="marker1"></div>
              <div class="marker text-up__3" id="marker2"></div>
              <div class="marker text-up__3" id="marker3"></div>
              <div class="marker text-up__3" id="marker4"></div>
              <div class="marker text-up__3" id="marker5"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="user-menu">
        <div class="user-menu__inner">
          <nav class="user-menu__nav">
            <ul class="user-menu__list">
              <li class="user-menu__item text-up">
                <p class="user-menu__link text24--light">Профиль</p>
              </li>
              <li class="user-menu__item text-up">
                <p class="user-menu__link text24--light">Комментарии</p>
              </li>
              <li class="user-menu__item text-up">
                <p class="user-menu__link text24--light">Избранное</p>
              </li>
              <li class="user-menu__item text-up">
                <p class="user-menu__link text24--light">Настройки</p>
              </li>
            </ul>
          </nav>
          <button class="user-menu__buttom text24--light change-color">
            Вход/Регистрация
          </button>
        </div>
        <div class="user-menu__alert">
          <p class="user-menu__alert-text text24--display-regular">
            Чтобы использовать меню, войдите в аккаунт или заведите новый
          </p>
        </div>
      </div>

      <div class="log-form">
        <div class="log-form__cross-inner">
          <img src="./images/cross.svg" alt="Cross" />
        </div>
        <div class="log-form__inner">
          <div class="log-form__header text24--light">
            Приятно снова вас видеть!
          </div>
          <div class="log-form__input-form">
            <input
              type="text"
              class="log-form__input"
              placeholder="Введите почту"
            />
            <input
              type="text"
              class="log-form__input"
              placeholder="Введите пароль"
            />
          </div>
          <div class="log-form__button-inner">
            <button class="log-form__button text24--light change-color">
              Вход
            </button>
            <p class="log-form__link text20--light-blue">Регистрация</p>
          </div>
        </div>
      </div>

      <div class="log-form">
        <div class="log-form__cross-inner">
          <img src="./images/cross.svg" alt="Cross" />
        </div>
        <div class="log-form__inner">
          <div class="reg-form__header text24--light">
            Приятно познакомиться!<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
              </head>
              <body></body>
            </html>
          </div>
          <div class="reg-form__input-form">
            <input
              type="text"
              class="log-form__input"
              placeholder="Введите почту"
            />
            <input
              type="text"
              class="log-form__input"
              placeholder="Введите пароль"
            />
            <input
              type="text"
              class="log-form__input"
              placeholder="Подтвердите пароль"
            />
          </div>
          <div class="reg-form__button-inner">
            <button class="log-form__button text24--light change-color">
              Регистрация
            </button>
            <p class="reg-form__link text20--light-blue">Вход</p>
          </div>
        </div>
      </div>

      <div class="posts">
        <div class="posts__inner">
          <h1 class="text24--light">Важные посты</h1>
          <div class="posts__container">
            <button class="posts__slider-prev text-up">
              <img src="./images/arr left.svg" alt="Prev" />
            </button>
            <div class="posts__slider">
              <div class="posts__slider-line">
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      05-12-2023
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        413
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      База данных, содержащая более 10 миллионов журналов, книг
                      и справочных изданий.
                    </h1>
                    <p class="card__text text20--light">
                      Здесь вы найдете исследования по химии, экономике,
                      географии, истории, и другим областям знаний.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      22-10-2023
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        173
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Нападение рыси на человека. Мифы и реальность
                    </h1>
                    <p class="card__text text20--light">
                      Среди людей ходит достаточно много баек и легенд о
                      страшных лесных хищниках, особенно много слухов идет от
                      костровых баек охотников...
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      15-09-2022
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">98</div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      3 способа использовать box-shadow в CSS
                    </h1>
                    <p class="card__text text20--light">
                      Свойство box-shadow позволяет добавить тень вокруг
                      элемента на веб-странице. Тень подсказывает пользователю,
                      является ли элемент — интерактивным.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      13-07-2024
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        134
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Общее устройство автомобиля: изучаем строение машины
                    </h1>
                    <p class="card__text text20--light">
                      Общее устройство автомобиля раньше преподавали в
                      автошколе. Но сегодня многие не представляют, из чего
                      состоит машина.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      13-07-2024
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        134
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Самые умные породы собак
                    </h1>
                    <p class="card__text text20--light">
                      В рейтинге самых умных пород собак участвует ТОП-10 по
                      версии Корена. Собаки, попавшие в список, считаются самыми
                      послушными. Однако способны действовать самостоятельно.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button class="posts__slider-next text-up">
              <img src="./images/arr right.svg" alt="Next" />
            </button>
          </div>
          <div class="posts-markers">
            <div class="posts-markers__inner">
              <div class="marker text-up__3" id="marker6"></div>
              <div class="marker text-up__3" id="marker7"></div>
              <div class="marker text-up__3" id="marker8"></div>
              <div class="marker text-up__3" id="marker9"></div>
              <div class="marker text-up__3" id="marker10"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="posts">
        <div class="posts__inner">
          <h1 class="text24--light">Важные посты</h1>
          <div class="posts__container">
            <button class="posts__slider-prev text-up">
              <img src="./images/arr left.svg" alt="Prev" />
            </button>
            <div class="posts__slider">
              <div class="posts__slider-line">
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      05-12-2023
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        413
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      База данных, содержащая более 10 миллионов журналов, книг
                      и справочных изданий.
                    </h1>
                    <p class="card__text text20--light">
                      Здесь вы найдете исследования по химии, экономике,
                      географии, истории, и другим областям знаний.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      22-10-2023
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        173
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Нападение рыси на человека. Мифы и реальность
                    </h1>
                    <p class="card__text text20--light">
                      Среди людей ходит достаточно много баек и легенд о
                      страшных лесных хищниках, особенно много слухов идет от
                      костровых баек охотников...
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      15-09-2022
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">98</div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      3 способа использовать box-shadow в CSS
                    </h1>
                    <p class="card__text text20--light">
                      Свойство box-shadow позволяет добавить тень вокруг
                      элемента на веб-странице. Тень подсказывает пользователю,
                      является ли элемент — интерактивным.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      13-07-2024
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        134
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Общее устройство автомобиля: изучаем строение машины
                    </h1>
                    <p class="card__text text20--light">
                      Общее устройство автомобиля раньше преподавали в
                      автошколе. Но сегодня многие не представляют, из чего
                      состоит машина.
                    </p>
                  </div>
                </div>
                <div class="post">
                  <div class="post__info">
                    <div class="post__date text20--light text-up">
                      13-07-2024
                    </div>
                    <div class="post__comments text-up">
                      <img src="./images/posts comments.svg" alt="Comments" />
                      <div class="post__comments-counter text20--light">
                        134
                      </div>
                    </div>
                  </div>
                  <div class="post__card change-color">
                    <h1 class="card__header text20--display-regular">
                      Самые умные породы собак
                    </h1>
                    <p class="card__text text20--light">
                      В рейтинге самых умных пород собак участвует ТОП-10 по
                      версии Корена. Собаки, попавшие в список, считаются самыми
                      послушными. Однако способны действовать самостоятельно.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button class="posts__slider-next text-up">
              <img src="./images/arr right.svg" alt="Next" />
            </button>
          </div>
          <div class="posts-markers">
            <div class="posts-markers__inner">
              <div class="marker text-up__3" id="marker11"></div>
              <div class="marker text-up__3" id="marker12"></div>
              <div class="marker text-up__3" id="marker13"></div>
              <div class="marker text-up__3" id="marker14"></div>
              <div class="marker text-up__3" id="marker15"></div>
            </div>
          </div>
        </div>
      </div>

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

    <script src="script.js"></script>

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

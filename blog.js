document.addEventListener("DOMContentLoaded", function () {
  function updateContent() {
    var windowWidth = window.innerWidth;
    var contentElement = document.getElementById("body2");

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
        <div class="mobile_blog-post">
          <h1 class="blog-post__header text16--display-regular">
            Нападение рыси на человека. Мифы и реальность
          </h1>
          <p class="blog-post_paragraph text14--light">
            Среди людей ходит достаточно много баек и легенд о страшных лесных
            хищниках, особенно много слухов идет от костровых баек охотников.
            Так существует два устойчивых мнения, первое, что рысь - это
            опаснейший зверь который не может пройти мимо присевшего человека и
            нападает с всегда с дерева. Ну и второе мнение, что нет ни одного
            реального случая нападения здорового зверя на человека. Мы говорим
            именно о здоровом звере. Как правило такие животные крайне осторожны
            и всеми силами избегают встречи с человеком. Нападения же животных,
            больных бешенством, периодически происходят на просторах СНГ, так в
            2019 году, подобные случаи были зафиксированы в Башкирии и
            Иволгинском районе Республики Бурятия.
          </p>
          <img src="./images/picture1.png" alt="Picture" />
          <p class="blog-post_paragraph text14--light">
            Тема эта появилась в ходе обсуждения одной из статей в Яндекс Дзене.
            Дело в том, что я собственно лично знаком с одной из жертв нападения
            кошки, на момент нападения я был еще в достаточно нежном возрасте и
            естественно всех обстоятельств уже и не помню, но готов удостоверить
            факт что оно таки было. Оппонент же утверждает что рысь животинка
            миролюбивая и на крупного зверя, коим является и человек нападать не
            будет. Мнение оппонента достаточно обоснованное и близкое к
            реальности, вес кошек этой породы, в среднем, это 15-20 кг. Редко
            когда встречаются откормленные "мутанты" в 30-40 кг, но, повторюсь,
            это редкость, я во всяком случае таких зверей не видел. Исходя из
            своей массы и способностей, прыгать на животину больше и тяжелее
            себя для рыси невместно... животное умное, понимает что огрести при
            таком неравенстве гораздо проще, чем плотно закусить.
          </p>
          <img src="./images/picture2.png" alt="Picture" />
          <p class="blog-post_paragraph text14--light">
            Но, что делать, мнение свое нужно чем то обосновать, при этом словам
            обычно веры нет, нужны более веские доказательства. Полез в
            литературу и интернет. Упоминания есть, в том числе и от людей
            которым можно доверять, в том числе и от своего земляка, который, к
            слову также не мог объяснить нападение. Ниже вставляю картинку с
            описанием взятую в архивах форума guns.ru
          </p>
          <img src="./images/picture3.png" alt="Picture" />
          <p class="blog-post_paragraph text14--light">
            Вот исходя из этого и понимаешь, что кошачьи - это достаточно
            непредсказуемые существа, и что им стрельнет под кисточки, несколько
            непонятно. Соответственно есть еще различные публикации в СМИ,
            газетах и интернете, но вот у меня веры больше предъявленному
            рассказу. Особенно учитывая тот момент, что моя односельчанка никуда
            не делась и ее "форс-мажор" остался ей на память, в виде склоненной
            набок головы, в ходе нападения было повреждено сухожилие на шее.
            Вообще в ходе изучения литературы у меня сложилось стойкое
            впечатление, что изучением рыси вплотную не занимался ни один из
            отечественных естествоиспытателей. Совместно или попутно, каждый
            второй, а вот плотно, вдумчиво и серьезно... вот и расходятся
            легенды о миролюбивом хищнике или о прыжках его с деревьев. Так что
            #развеиваем мифы , рысь не только нападает на людей, пусть и редко,
            но и атакует и ходит, в основном, по земле, не обезьян, в общем, это
            и не домашняя кошечка, которую можно погладить. Да и приучаются
            рыси, по отзывам достаточно плохо, так что домашнего котенка из нее
            не выйдет.
          </p>
          <p class="blog-post_paragraph text14--display-regular">
            Уважаемые читатели. С удовольствием выслушаю ваше мнение по этому
            вопросу! Буду рад каждому аргументированному комментарию или
            рассказу из личного опыта.
          </p>
          <p class="blog-post_paragraph text16--display-regular">
            На сим все, спасибо за прочтение!
          </p>
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
        <div class="tablet_blog-post">
          <h1 class="blog-post__header text20--display-regular">
            Нападение рыси на человека. Мифы и реальность
          </h1>
          <p class="tablet_blog-post_paragraph text16--light">
            Среди людей ходит достаточно много баек и легенд о страшных лесных
            хищниках, особенно много слухов идет от костровых баек охотников.
            Так существует два устойчивых мнения, первое, что рысь - это
            опаснейший зверь который не может пройти мимо присевшего человека и
            нападает с всегда с дерева. Ну и второе мнение, что нет ни одного
            реального случая нападения здорового зверя на человека. Мы говорим
            именно о здоровом звере. Как правило такие животные крайне осторожны
            и всеми силами избегают встречи с человеком. Нападения же животных,
            больных бешенством, периодически происходят на просторах СНГ, так в
            2019 году, подобные случаи были зафиксированы в Башкирии и
            Иволгинском районе Республики Бурятия.
          </p>
          <img src="./images/picture1.png" alt="Picture" />
          <p class="blog-post_paragraph text16--light">
            Тема эта появилась в ходе обсуждения одной из статей в Яндекс Дзене.
            Дело в том, что я собственно лично знаком с одной из жертв нападения
            кошки, на момент нападения я был еще в достаточно нежном возрасте и
            естественно всех обстоятельств уже и не помню, но готов удостоверить
            факт что оно таки было. Оппонент же утверждает что рысь животинка
            миролюбивая и на крупного зверя, коим является и человек нападать не
            будет. Мнение оппонента достаточно обоснованное и близкое к
            реальности, вес кошек этой породы, в среднем, это 15-20 кг. Редко
            когда встречаются откормленные "мутанты" в 30-40 кг, но, повторюсь,
            это редкость, я во всяком случае таких зверей не видел. Исходя из
            своей массы и способностей, прыгать на животину больше и тяжелее
            себя для рыси невместно... животное умное, понимает что огрести при
            таком неравенстве гораздо проще, чем плотно закусить.
          </p>
          <img src="./images/picture2.png" alt="Picture" />
          <p class="blog-post_paragraph text16--light">
            Но, что делать, мнение свое нужно чем то обосновать, при этом словам
            обычно веры нет, нужны более веские доказательства. Полез в
            литературу и интернет. Упоминания есть, в том числе и от людей
            которым можно доверять, в том числе и от своего земляка, который, к
            слову также не мог объяснить нападение. Ниже вставляю картинку с
            описанием взятую в архивах форума guns.ru
          </p>
          <img src="./images/picture3.png" alt="Picture" />
          <p class="blog-post_paragraph text16--light">
            Вот исходя из этого и понимаешь, что кошачьи - это достаточно
            непредсказуемые существа, и что им стрельнет под кисточки, несколько
            непонятно. Соответственно есть еще различные публикации в СМИ,
            газетах и интернете, но вот у меня веры больше предъявленному
            рассказу. Особенно учитывая тот момент, что моя односельчанка никуда
            не делась и ее "форс-мажор" остался ей на память, в виде склоненной
            набок головы, в ходе нападения было повреждено сухожилие на шее.
            Вообще в ходе изучения литературы у меня сложилось стойкое
            впечатление, что изучением рыси вплотную не занимался ни один из
            отечественных естествоиспытателей. Совместно или попутно, каждый
            второй, а вот плотно, вдумчиво и серьезно... вот и расходятся
            легенды о миролюбивом хищнике или о прыжках его с деревьев. Так что
            #развеиваем мифы , рысь не только нападает на людей, пусть и редко,
            но и атакует и ходит, в основном, по земле, не обезьян, в общем, это
            и не домашняя кошечка, которую можно погладить. Да и приучаются
            рыси, по отзывам достаточно плохо, так что домашнего котенка из нее
            не выйдет.
          </p>
          <p class="blog-post_paragraph text16--display-regular">
            Уважаемые читатели. С удовольствием выслушаю ваше мнение по этому
            вопросу! Буду рад каждому аргументированному комментарию или
            рассказу из личного опыта.
          </p>
          <p class="blog-post_paragraph text20--display-regular">
            На сим все, спасибо за прочтение!
          </p>
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
              <a
                class="header__menu-link text24--display-regular"
                href="blog.html"
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
      <div class="blog-post">
        <h1 class="blog-post__header text24--display-regular">
          Нападение рыси на человека. Мифы и реальность
        </h1>
        <p class="blog-post_paragraph text20--light">
          Среди людей ходит достаточно много баек и легенд о страшных лесных
          хищниках, особенно много слухов идет от костровых баек охотников. Так
          существует два устойчивых мнения, первое, что рысь - это опаснейший
          зверь который не может пройти мимо присевшего человека и нападает с
          всегда с дерева. Ну и второе мнение, что нет ни одного реального
          случая нападения здорового зверя на человека. Мы говорим именно о
          здоровом звере. Как правило такие животные крайне осторожны и всеми
          силами избегают встречи с человеком. Нападения же животных, больных
          бешенством, периодически происходят на просторах СНГ, так в 2019 году,
          подобные случаи были зафиксированы в Башкирии и Иволгинском районе
          Республики Бурятия.
        </p>
        <img src="./images/picture1.png" alt="Picture" />
        <p class="blog-post_paragraph text20--light">
          Тема эта появилась в ходе обсуждения одной из статей в Яндекс Дзене.
          Дело в том, что я собственно лично знаком с одной из жертв нападения
          кошки, на момент нападения я был еще в достаточно нежном возрасте и
          естественно всех обстоятельств уже и не помню, но готов удостоверить
          факт что оно таки было. Оппонент же утверждает что рысь животинка
          миролюбивая и на крупного зверя, коим является и человек нападать не
          будет. Мнение оппонента достаточно обоснованное и близкое к
          реальности, вес кошек этой породы, в среднем, это 15-20 кг. Редко
          когда встречаются откормленные "мутанты" в 30-40 кг, но, повторюсь,
          это редкость, я во всяком случае таких зверей не видел. Исходя из
          своей массы и способностей, прыгать на животину больше и тяжелее себя
          для рыси невместно... животное умное, понимает что огрести при таком
          неравенстве гораздо проще, чем плотно закусить.
        </p>
        <img src="./images/picture2.png" alt="Picture" />
        <p class="blog-post_paragraph text20--light">
          Но, что делать, мнение свое нужно чем то обосновать, при этом словам
          обычно веры нет, нужны более веские доказательства. Полез в литературу
          и интернет. Упоминания есть, в том числе и от людей которым можно
          доверять, в том числе и от своего земляка, который, к слову также не
          мог объяснить нападение. Ниже вставляю картинку с описанием взятую в
          архивах форума guns.ru
        </p>
        <img src="./images/picture3.png" alt="Picture" />
        <p class="blog-post_paragraph text20--light">
          Вот исходя из этого и понимаешь, что кошачьи - это достаточно
          непредсказуемые существа, и что им стрельнет под кисточки, несколько
          непонятно. Соответственно есть еще различные публикации в СМИ, газетах
          и интернете, но вот у меня веры больше предъявленному рассказу.
          Особенно учитывая тот момент, что моя односельчанка никуда не делась и
          ее "форс-мажор" остался ей на память, в виде склоненной набок головы,
          в ходе нападения было повреждено сухожилие на шее. Вообще в ходе
          изучения литературы у меня сложилось стойкое впечатление, что
          изучением рыси вплотную не занимался ни один из отечественных
          естествоиспытателей. Совместно или попутно, каждый второй, а вот
          плотно, вдумчиво и серьезно... вот и расходятся легенды о миролюбивом
          хищнике или о прыжках его с деревьев. Так что #развеиваем мифы , рысь
          не только нападает на людей, пусть и редко, но и атакует и ходит, в
          основном, по земле, не обезьян, в общем, это и не домашняя кошечка,
          которую можно погладить. Да и приучаются рыси, по отзывам достаточно
          плохо, так что домашнего котенка из нее не выйдет.
        </p>
        <p class="blog-post_paragraph text20--display-regular">
          Уважаемые читатели. С удовольствием выслушаю ваше мнение по этому
          вопросу! Буду рад каждому аргументированному комментарию или рассказу
          из личного опыта.
        </p>
        <p class="blog-post_paragraph text24--display-regular">
          На сим все, спасибо за прочтение!
        </p>
      </div>
      <div class="user-reactions">
        <div class="user-reactions-left">
          <div class="user-reaction__like-blok">
            <img src="./images/like.svg" alt="Like" class="text-up" />
            <p class="user-reaction__like-counter text24--light">1.2K</p>
          </div>

          <div class="user-reaction__comments-blok">
            <button class="bookmarkBtn">
              <span class="IconContainer">
                <svg fill="white" viewBox="0 0 512 512" height="1em">
                  <path
                    d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
                  ></path>
                </svg>
              </span>
              <p class="text">Comment</p>
            </button>
            <p class="user-reaction__comments-counter text24--light">412</p>
          </div>

          <button type="button" class="share-button">
            <span class="button__text">Share</span>
            <span class="button__icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 134 134"
                class="svg"
              >
                <circle
                  stroke-width="13"
                  stroke="white"
                  r="20.5"
                  cy="27"
                  cx="107"
                ></circle>
                <circle
                  stroke-width="13"
                  stroke="white"
                  r="20.5"
                  cy="107"
                  cx="107"
                ></circle>
                <circle
                  stroke-width="13"
                  stroke="white"
                  r="20.5"
                  cy="67"
                  cx="27"
                ></circle>
                <line
                  stroke-width="13"
                  stroke="white"
                  y2="36.1862"
                  x2="88.0931"
                  y1="56.1862"
                  x1="48.0931"
                ></line>
                <line
                  stroke-width="13"
                  stroke="white"
                  y2="97.6221"
                  x2="89.0893"
                  y1="78.1486"
                  x1="48.8304"
                ></line>
              </svg>
            </span>
          </button>
        </div>
        <div class="user-reactions-right">
          <img src="./images/dislike.svg" alt="dislike" class="text-up" />
        </div>
      </div>

      <div class="get-comment">
        <div class="get-comment-up">
          <div class="get-comment-up__header-blok">
            <h1 class="get-comment-up__header text24--display-regular">
              Комментарии
            </h1>
            <h1 class="get-comment-up__header text24--light">412</h1>
          </div>

          <div class="get-comment-up__settings-blok text-up">
            <h1 class="get-comment-up__settings text20--light">
              Сначала популярные
            </h1>
            <img src="./images/settings.svg" alt="Settings" />
          </div>
        </div>
        <div class="get-comment-down">
          <input
            type="text"
            class="get-comment__input"
            placeholder="Написать Комментарий"
          />
          <div class="get-comment__input-img">
            <img src="./images/smile.svg" alt="Smile" class="text-up" />
            <img src="./images/photo.svg" alt="Photo" class="text-up" />
            <img src="./images/send.svg" alt="Send" class="text-up" />
          </div>
        </div>
      </div>

      <div class="written-comments">
        <div class="written-comment">
          <div class="written-comment__main">
            <div class="written-comment__name-block">
              <img src="./images/Olya.svg" alt="Photo" class="text-up" />
              <h2 class="written-comment__name text20--display-regular text-up">
                Оля Аморалова
              </h2>
              <h2 class="written-comment__date text20--display-regular__666">
                3г
              </h2>
            </div>
            <div class="written-comment__comment-block">
              <p class="written-comment__comment text20--light">
                https://www.youtube.com/watch?v=hkL1Y9ibb0U
              </p>
              <p class="written-comment__comment text20--light">
                https://www.youtube.com/watch?v=QfxB9nIvVZk
              </p>
            </div>
          </div>
          <div class="written-comment__reactions">
            <p
              class="written-comment__reactions-answer text20--light__666 text-up"
            >
              Ответить
            </p>
            <div class="written-comment__reactions-like-block">
              <img src="./images/like mini.svg" alt="Like" class="text-up" />
              <p
                class="written-comment__reactions-like-counter text20--light__666"
              >
                16
              </p>
            </div>
            <img
              src="./images/dislike mini.svg"
              alt="Dislike"
              class="text-up"
            />
          </div>
          <div class="written-comment__answers">
            <div class="written-comment__answers-dash"></div>
            <p
              class="written-comment__answers-view-answers text20--display-regular text-up"
            >
              Показать 1 ответ
            </p>
          </div>
        </div>

        <div class="written-comment">
          <div class="written-comment__main">
            <div class="written-comment__name-block">
              <img src="./images/Artem.svg" alt="Photo" class="text-up" />
              <h2 class="written-comment__name text20--display-regular text-up">
                ARTEM2012
              </h2>
              <h2 class="written-comment__date text20--display-regular__666">
                3г
              </h2>
            </div>
            <div class="written-comment__comment-block">
              <p class="written-comment__comment text20--light">
                В этом предложении что-то неправильно: "Случаи с нападением
                больными бешенством зверями из этой подборки стоит исключить,
                так как они встречаются достаточно часто."
              </p>
              <p class="written-comment__comment text20--light">
                Зверь достаточно серьёзный, если почувствовал, что рысь за тобой
                следит, нужно принимать меры. Помню как дядька поучал меня и
                двоюродных братьев: " Увидел след волка, сразу же уходи. Не верь
                тому, что в книжках пишут, что они не нападают... Зверь очень
                серьезный! До хрена народа из тайги не вышло и никто не знает
                почему." Дядька у меня из Сибири, был промысловиком. Замени
                волка на рысь и поучай молодежь дальше.
              </p>
            </div>
          </div>
          <div class="written-comment__reactions">
            <p
              class="written-comment__reactions-answer text20--light__666 text-up"
            >
              Ответить
            </p>
            <div class="written-comment__reactions-like-block">
              <img src="./images/like mini.svg" alt="Like" class="text-up" />
              <p
                class="written-comment__reactions-like-counter text20--light__666"
              >
                206
              </p>
            </div>
            <img
              src="./images/dislike mini.svg"
              alt="Dislike"
              class="text-up"
            />
          </div>
          <div class="written-comment__answers">
            <div class="written-comment__answers-dash"></div>
            <p
              class="written-comment__answers-view-answers text20--display-regular text-up"
            >
              Показать 25 ответов
            </p>
          </div>
        </div>

        <div class="written-comment">
          <div class="written-comment__main">
            <div class="written-comment__name-block">
              <img src="./images/Petya.svg" alt="Photo" class="text-up" />
              <h2 class="written-comment__name text20--display-regular text-up">
                ПЕТЯШЛЕПОВ
              </h2>
              <h2 class="written-comment__date text20--display-regular__666">
                3г
              </h2>
            </div>
            <div class="written-comment__comment-block">
              <p class="written-comment__comment text20--light">
                Чтобы просто увидеть рысь в лесу, нужно упорство, терпение,
                знание повадок зверя и куча времени. Многие ли из нас, охотников
                или любителей погулять по лесу, видели этого зверя в природе?
                Единицы! В добром уме и трезвой памяти рысь рванет куда-нибудь
                подальше, только лишь причуяв человеческий запах.
              </p>
              <p class="written-comment__comment text20--light">
                Любой зверь опасается человека. Человек, как пищевой объект,
                хищными зверями не рассматривается в принципе. Те экземпляры,
                которые были с этим не согласны, нашли свой конец на рогатинах
                или с картечью в организме и потомства с такими вредными идеями
                не оставили. Поэтому любое нападение волка, медведя или рыси -
                это редкий эксцесс. Или это самка с детенышами, посчитавшая
                человека опасностью для своего потомства, или больное (раненое)
                животное, или это зверь с травмированной или нездоровой
                психикой. Такие тоже изредка встречаются.
              </p>
            </div>
          </div>
          <div class="written-comment__reactions">
            <p
              class="written-comment__reactions-answer text20--light__666 text-up"
            >
              Ответить
            </p>
            <div class="written-comment__reactions-like-block">
              <img src="./images/like mini.svg" alt="Like" class="text-up" />
              <p
                class="written-comment__reactions-like-counter text20--light__666"
              >
                58
              </p>
            </div>
            <img
              src="./images/dislike mini.svg"
              alt="Dislike"
              class="text-up"
            />
          </div>
          <div class="written-comment__answers">
            <div class="written-comment__answers-dash"></div>
            <p
              class="written-comment__answers-view-answers text20--display-regular text-up"
            >
              Показать 6 ответов
            </p>
          </div>
        </div>
        <h2 class="written-comments-more text20--display-regular__666 text-up">
          Еще 50 комментариев из 123
        </h2>
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
    <script src="blog.js"></script>



  
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

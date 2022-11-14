import React from 'react'
import { Col, Container, Image, Row} from 'react-bootstrap'

import me from './media/images/me.jpg'

function App() {
  return (
    <div className="App">

      <div className="resume">
        <Container>
          <Row>
            <Col>
              <p className="resume__body"></p>
              <p className="resume__title">Выборный Михаил Викторович</p>
              <p>Мужчина, 28&nbsp;лет, родился <text>20</text> <text>января</text> <text>1994</text></p><br/>
              <p>+7&nbsp;(916)&nbsp;3978142<span className="info"> — предпочитаемый способ связи</span></p>
              <p>misha.vybornyy@gmail.com</p>
              <p>LinkedIn: https://www.linkedin.com/in/mikhail-vybornyy-2a510a253/</p>
              <p>Другой сайт: https://github.com/MishaVyb</p><br/>
              <p>Проживает: Москва</p>
              <p>Гражданство: Россия, есть разрешение на работу: Россия</p>
              <p>Готов к переезду, готов к командировкам</p>
              <p className="resume__block">Желаемая должность и зарплата</p>
              <p className="resume__position">Backend-разработчик</p>
              <p>Специализации:</p>
              <ul className="resume-profession-roles">
                <li className="resume-profession-role">Программист, разработчик</li>
              </ul><br/>
              <p></p>
              <p>Занятость: полная занятость</p>
              <p>График работы: полный день</p>
              <p></p>
            </Col>
            <Col className='pt-5'>
              <Image fluid src={me} />
            </Col>
          </Row>
        </Container>



        <p>Желательное время в пути до работы: не имеет значения</p>
        <p className="resume__block">Опыт работы — 6 лет 5 месяцев</p>
        <ul>
          <li className="resume-experience"><span className="resume-experience__company">Яндекс.Практикум</span>
            <p className="info">practicum.yandex.ru/</p>
            <p className="bloko-form-hint">Апрель 2022 — настоящее время 8 месяцев</p>
            <p className="resume-experience__position">Python-разработчик (обучение)</p>
            <p>
              <description>В работе использую следующие инструменты и технологии: Python, Django, DRF, Pytest,
                        MyPy, Flake8, Black, Git, HTML, CSS, Bootstrap, Bash. Все проекты проходят код-ревью.<br/><br/>—
                        Реализованные проекты — <br/>YaTube. Социальная сеть для написание коротких постов, есть
                        возможность подписки на авторов, загрузка изображений, редактирование постов и тп. При создании
                        приложения получил опыт реализации всех CRUD операций через Django Forms в связке с Django
                        Views. Реализовал полноценный веб-интерфейс на основе Django Templates.<br/><br/>GitHub:
                        https://github.com/MishaVyb/YaTube<br/><br/>YaMDB. Rest API для приложения, которое содержит
                        пользовательские отзывы на книги фильмы или музыку. Командная работа в группе из трех человек.
                        Получил опыт совместной разработки, разрешение конфликтов, слияние веток, тд. Реализовал
                        аутентификацию пользователей с различным уровнем доступа на основе JWT и Сustom
                        Permitions.<br/><br/>GitHub: https://github.com/MishaVyb/YaMDB</description>
            </p>
          </li>
          <li className="resume-experience"><span className="resume-experience__company">Самостоятельная разработка /
                    Фриланс</span>
          <p className="info">github.com/MishaVyb/</p>
          <p className="bloko-form-hint">Март 2022 — настоящее время 9 месяцев</p>
          <p className="resume-experience__position">Программист Python</p>
          <p>
            <description>В работе использую следующие инструменты и технологии: Python, Django, DRF, Pytest,
                        Git, JavaScript, React, CSS, Bootstrap, Bash.<br/><br/>— Реализованные проекты —
            <br/>Bizarre-Poker. Веб-преложение для игры в карточный покер с альтернативными правилами.
                        Получил опыт самостоятельного создания приложения от этапа идеи до рабочего прототипа.
                        Реализовал полное сохранение состояния игрового процесса на серверной стороне. Реализовал
                        фронтед на React.js, который связан с сервером через API. Получил опыт покрытия всего проекта
                        автотестами. <br/><br/>GitHub https://github.com/MishaVyb/bizarre-poker<br/><br/>Bart-Bot. Telegram
                        bot для общения со своим домашним питомцем. Реализовал удаленное хранение сообщений пользователя
                        (через API Yandex.disk). Получил опыт работы с библиотекой python-telegram-bot и опыт деплоя
                        проекта на облачном сервесе (Heroku).<br/><br/>GitHub https://github.com/MishaVyb/bart-bot
            </description>
          </p>
          </li>
          <li className="resume-experience"><span className="resume-experience__company">Индивидуальное предпринимательство /
                    частная практика / фриланс</span>
          <p className="info">vybornyy.com/</p>
          <p>СМИ, маркетинг, реклама, BTL, PR, дизайн, продюсирование</p>
          <ul>
            <li className="resume-subindustry">Маркетинговые, рекламные, BTL, дизайнерские, Event-, PR-агентства,
                        организация выставок</li>
          </ul>
          <p className="bloko-form-hint">Июнь 2017 — Июнь 2022 5 лет 1 месяц</p>
          <p className="resume-experience__position">Видеооператор</p>
          <p>
            <description>Работа в сфере видеопроизводства. Кино и реклама. Разработка визуальной концепции
                        проекта, организация технической группы и контроль создания контента на всех этапах
                        производства.<br/><br/>За все время работы снял 5 коротких метров (игровых и документальных).
                        Разработал и поставил несколько ютуб-шоу. А так же множество рекламных роликов и различного
                        диджитал-контента.</description>
          </p>
          </li>
          <li className="resume-experience"><span className="resume-experience__company">Enty Films</span>
            <p className="info"></p>
            <p className="bloko-form-hint">Май 2016 — Март 2017 11 месяцев</p>
            <p className="resume-experience__position">Видеооператор</p>
            <p>
              <description>Проведение процесса видео-съемки. Подготовка технического оснащения. </description>
            </p>
          </li>
        </ul>
        <p className="resume__block">Образование</p>
        <ul>
          <li>Неоконченное высшее</li>
          <li className="resume-education"><span className="resume-education__name">Московский институт электроники и
                    математики им. А.Н. Тихонова</span>
          <p className="bloko-form-hint">2015</p>
          </li>
          <p>Информационные технологии</p>
        </ul>
        <p className="resume__block">Повышение квалификации, курсы</p>
        <ul>
          <li className="resume-education"><span className="resume-education__name">Основы Python</span>
            <p className="bloko-form-hint">2022</p>
          </li>
          <p>Яндекс.Практикум, В рамках курса &quotPython разработчик&quot</p>
          <li className="resume-education"><span className="resume-education__name">Бэкенд на Django</span>
            <p className="bloko-form-hint">2022</p>
          </li>
          <p>Яндекс.Практикум, В рамках курса &quotPython разработчик&quot</p>
          <li className="resume-education"><span className="resume-education__name">API: Django Rest Framework</span>
            <p className="bloko-form-hint">2022</p>
          </li>
          <p>Яндекс.Практикум, В рамках курса &quotPython разработчик&quot</p>
          <li className="resume-education"><span className="resume-education__name">Основы структуры данных и
                    сортировки</span>
          <p className="bloko-form-hint">2022</p>
          </li>
          <p>Яндекс.Практикум, В рамках курса &quotPython разработчик&quot</p>
        </ul>
        <p className="resume__block">Ключевые навыки</p>
        <ul>
          <li className="resume-skils"><span className="bloko-form-hint">Знание языков</span>
            <ul className="resume-skils__item">
              <li>Русский<span className="info"> — Родной</span></li>
              <li>Английский<span className="info"> — B2 — Средне-продвинутый</span></li>
            </ul>
          </li>
          <li className="resume-skils"><span className="bloko-form-hint">Навыки</span>
            <p className="resume-skils__item"><span>Python; </span><span>SQL; </span><span>Git; </span><span>HTML;
            </span><span>ООП; </span><span>Английский язык; </span><span>JavaScript; </span><span>CSS;
            </span><span>Django; </span><span>Django Rest Framework; </span><span>DRF; </span><span>REST API;
            </span><span>Bash; </span><span>SQLite; </span><span>Алгоритмы; </span><span>Структуры данных</span>
            </p>
          </li>
        </ul>
        <p className="resume__block">Опыт вождения</p>Права категории&nbsp;B<p className="resume__block">Дополнительная
            информация</p>
        <ul>
          <li className="resume-skils"><span className="bloko-form-hint">Обо мне</span>
            <p className="resume-skils__item">
              <string>Разработка — это возможность реализовать любые проекты без каких либо ограничений. В этом
                        моя мотивация. Благодаря информационным технологиям обычному человеку доступны безграничные
                        возможности, нужно только немного усилий. И мне очень нравится прикладывать эти усилия, искать
                        оптимальные решения для написания того или иного модуля, реализовать покрытие кода тестами или
                        написать абстрактный инструмент, который будет использоваться в различных частях
                        проекта.<br/><br/>Так как я только начинаю свой путь развития в IT, мне сложно представить все
                        возможные опции. И все же, в большей степени мне интересны любые клиентские сервисы, которые
                        помогают людям жить легче. Будь это доставка еды или интернет магазин. Мне интересно как
                        разрабатывать приложение с нуля, так и встраиваться в большую структуру.<br/><br/>Основной мой
                        метод развития — это практика. Я мало читаю статей или литературы на общие темы, но зато много
                        пишу, ищу ответы в документации или в исходном коде. <br/><br/>Благодаря предыдущей профессии, у
                        меня хорошо развит навык командной работы. Мне постоянно приходилось коммуницировать с командой
                        в поиске наилучшего решения. Зачастую моя работа заключалось в том, чтобы &quotугадать&quot, что хочет
                        клиент, так как он не может сформулировать это сам. Также приходилось руководить технической
                        группой от нескольких человек до десятка. Делегировать задачи. Планировать рабочий
                        график.<br/><br/>Большую часть я работал на чужие идеи, но мне всегда был важен общий результат.
                        Чувствую личную ответственность за то, как проект выглядит в общем итоге и какую идею он несет,
                        даже если моя часть не так велика.<br/><br/>В свободное от работы время люблю гулять, природа или
                        городские пейзажи отличное место для размышлений и поиска вдохновения.</string>
            </p>
          </li>
        </ul>
        <p></p>
      </div>
    </div>
  )
}

export default App

ТОDO :
2 вида юзеров:
   анонимный 
      сохраниение проектов в локал сторедж
   зареганный
      сохранение проектов в фаербэйс облоко
      личный кабинет
нужно будет заморочитсься с асинхронными запросами из стора 
в облако что даст тебе крутую практику


# React.js Website Builder
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

:ru: created by BlackTminOil
 
The application is created using [REACT.JS](https://vuejs.org/)
and is the simplest site constructor, with conceptions
[SPA](https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0 % BD% D0% B8% D1% 87% D0% BD% D0% BE% D0% B5_% D0% BF% D1% 80% D0% B8% D0% BB% D0% BE% D0% B6% D0% B5 % D0% BD% D0% B8% D0% B5)
and [PWA](https://web.dev/progressive-web-appsis/) applications. 

:tada: [Demo](https://github.io/website-builder-react/)

:triangular_ruler: [Общие принципы работы приложения](#architecture)

:hammer: [Список использованных технологий и инструментов](#tools)

:wrench: [Локальный запуск проекта](#dev)

:rocket: [Деплой на Github Pages](#deploy)

## <a name="architecture"></a>General principles of the application work

The application uses [Redux] (https://vuex.vuejs.org/) as a centralized data warehouse
For all components. To ensure the persistence of data within one browser used
[Localstorage] (https://developer.mozilla.org/ru/docs/web/api/window/localstorage).
Data in Redux is automatically saved in localstorage using
[Redux-presist] (https://github.com/robinvdvleten/vuex-persistedstate).

ФИЧИ:
  creating new sites
  save sites
  view/edit previosly created sites
The application is available as creating new sites and their presistence in history.
With the ability to view and edit previously created sites.
The maximum possible number of saved sites is limited by the size of LocalStorage.
<a href="https://storyset.com/web">Web illustrations by Storyset</a>
Architecturally, each prototype of the site (witch store in redux) is an object containing a set of fields
with meta information (ID, site name, creation time, etc.), an object with the current settings of the designer and
An array with a list of used blocks. Using an array for storing block information allows
Guarantee while maintaining the order of them (Order).

Each unit in turn also represents an object with a meta information
and an embedded array with the attribute list (the list will differ for different blocks),
which is necessary for the rendering of the component.
Using the attribute list allows you to unify the creation of blocks,
After making all the unique logic into separate block components.

Such a hierarchical structure allows you to flexibly scale the application,
Easily add new entities (for example, user, domain, etc.)

Inline editing text in blocks is made without using libraries on pure React.
To display on the page and the ability to persist storage, all images are encoded.
In [Base64] (https://ru.wikipedia.org/wiki/base64).

## <a name="tools"></a>Список использованных технологий и инструментов

- [React](https://Reactjs.org/)
- [react-router-dom](https://router.Reactjs.org/)
- [Redux Toolkit](https://Reactx.Reactjs.org/) +
[redux-persist](https://github.com/robinvdvleuten/Reactx-persistedstate) +
- [Materila UI](https://pugjs.org/api/getting-started.html)
- Graphic [StorySet](https://storyset.com/web">)
- [Github Pages](https://pages.github.com/)
- [Travis CI](https://travis-ci.org/)

## <a name="dev"></a>Локальный запуск проекта

1. **Загрузка проекта на локальную машину**

    ```
    git clone https://github.com/mikhail-shpakov/website-builder-vuejs.git
    ```

2. **Установка зависимостей**

    ```
    npm ci
    ```

    Использование `npm ci` вместо `npm i` позволит гарантировать корректные версии устанавливаемых `npm` пакетов,
    так как они будут взяты из `package-lock.json`.  

3. **Запуск сервера для разработки**

    В качестве сервера для разработки используется
    [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

    Для его запуска выполните из корневой директории проекта:

    ```
    npm run serve
   ```

    После этого приложение будет доступно по адресу `localhost:8080`.

    Во время разработки изменения в файлах будут отслеживаться автоматически,
    при этом будет вызываться линтер и сервер будет перезапускаться.

    Также доступны следующие команды:

    ```
    npm run build // сборка приложения Vue для развёртывания на production
    npm run lint // ручной запуск линтера
    ```

## <a name="deploy"></a>Деплой на Github Pages

Для публикации приложения на [Github Pages](https://pages.github.com/)
с помощью [Travis CI](https://travis-ci.org/), требуется:
1. Зарегистрировать аккаунт на [Travis CI](https://travis-ci.org/) и добавить в него проект Github.
2. Получить персональный токен доступ на Github ([инструкция](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)) 
и добавить в Travis переменную окружения $GITHUB_TOKEN.
3. Создать в корне проекта файл с описанием опций публикации с названием `.travis.yml`.
Описание опций можно найти [здесь](https://docs.travis-ci.com/user/deployment/pages/).
4. Для корректного роутинга SPA на [Github Pages](https://pages.github.com/)
требуется выполнить инструкции из [репозитория](https://github.com/rafgraph/spa-github-pages).

После этого, при каждом коммите в отслеживаемую ветку
(указывается в `.travis.yml`) при условии успешного прохождения CI
(эта стадия может отсутствовать, как, например, в этом проекте)
проект будет автоматически опубликован на [Github Pages](https://pages.github.com/)
и по умолчанию будет доступен по адресу `http(s)://<user>.github.io/<repository>`.

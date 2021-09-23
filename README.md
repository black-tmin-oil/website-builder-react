# React.js Website Builder
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

:black_heart: created by BlackTminOil
 
The application is created using [React.js](https://vuejs.org/)
and is the simplest site constructor, with conceptions of
[SPA](https://wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0)
and [PWA](https://web.dev/progressive-web-appsis/) applications. 

## <a name="architecture"></a>General principles of the application work

The application uses [Redux](https://vuex.vuejs.org/) as a centralized data warehouse
For all components. To ensure the persistence of data within one browser used
[Localstorage](https://developer.mozilla.org/ru/docs/web/api/window/localstorage).
Data in Redux is automatically saved in localstorage using
[Redux-presist](https://github.com/robinvdvleten/vuex-persistedstate).

ФИЧИ: основная магия происходит в сторе редак поэтому можно установить расширение и понаблюдать
  creating new sites
  save sites
  view/edit previosly created sites
The application is available as creating new sites and their presistence in history.
With the ability to view and edit previously created sites.
The maximum possible number of saved sites is limited by the size of LocalStorage.

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
In [Base64](https://ru.wikipedia.org/wiki/base64).

## <a name="tools"></a>Список использованных технологий и инструментов

- [React](https://Reactjs.org/)
- [react-router-dom](https://router.Reactjs.org/)
- [Redux Toolkit](https://Reactx.Reactjs.org/) +
[redux-persist](https://github.com/robinvdvleuten/Reactx-persistedstate) +
- [Materila UI](https://pugjs.org/api/getting-started.html)
- Images [StorySet.com](https://storyset.com/web)
- [Github Pages](https://pages.github.com/)

## <a name="dev"></a>Локальный запуск проекта

1. **Загрузка проекта на локальную машину**

    ```
    git clone https://github.com/mikhail-shpakov/website-builder-vuejs.git
    ```

2. **Установка зависимостей**

    ```
    yarn add
    ```

3. **Запуск сервера для разработки**

    В качестве сервера для разработки используется
    [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

    Для его запуска выполните из корневой директории проекта:

    ```
    yarn start
   ```

    После этого приложение будет доступно по адресу `localhost:8080`.

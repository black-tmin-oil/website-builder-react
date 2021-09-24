# React.js Website Builder

:black_heart: created by BlackTminOil
 
The application is created using [React.js](https://reactjs.org/)
and is the simplest site constructor, with conceptions of
[SPA](https://wikipedia.org/wiki/)
and [PWA](https://web.dev/progressive-web-appsis/) applications. 

## <a name="architecture"></a>General principles of the application work

The application uses [Redux](https://redux.js.org/) as a centralized data warehouse
For all components. To ensure the persistence of data within one browser used
[Localstorage](https://developer.mozilla.org/en/docs/web/api/window/localstorage).
Data in Redux is automatically saved in localstorage using
[Redux-persist](https://github.com/rt2zz/redux-persist).

The application allows creat new sites and presist them in history.
With the ability to view and edit previously created sites.
The maximum possible number of saved sites is limited by the size of LocalStorage.

Architecturally, each prototype of the site (witch store in redux) is an object containing a set of fields
with meta information (ID, site name, creation time, etc.), an object with the current settings of the designer and
An array with a list of used blocks.

Such a hierarchical structure allows you to flexibly scale the application,
Easily add new entities (for example, user, etc.)

Inline editing text in blocks is made without using libraries on pure React.
To display on the page and the ability to persist storage, all images are encoded
in [Base64](https://en.wikipedia.org/wiki/base64).

## <a name="tools"></a>List of used technologies and tools

- [React](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com)
- [Redux Toolkit](https://redux-toolkit.js.org/) +
[redux-persist](https://github.com/rt2zz/redux-persist) +
- [Materila UI](https://mui.com/)
- Images [StorySet.com](https://storyset.com/web)
- [Github Pages](https://pages.github.com/)

## <a name="dev"></a>Launching the project

1. **Uploading a project to a local machine**

    ```
    git clone https://github.com/black-tmin-oil/website-builder-react.git
    ```

2. **Install dependencies**

    ```
    yarn add
    ```

3. **Run project**

    from the root directory of the project:

    ```
    yarn start
   ```
   After that, the application will be available at `localhost: 3000`. 


## <a name="tools"></a>TODO

- add user auth with saving in firebase
- update ui design
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import {  persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
let persistor = persistStore(store)

ReactDOM.render(  
<Provider store={store}>    
<PersistGate loading={null} persistor={persistor}>      
<App />    
</PersistGate>  
</Provider>,  
document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
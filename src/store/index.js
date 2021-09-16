import {  
  persistReducer,  
  FLUSH,  
  REHYDRATE,  
  PAUSE,  
  PERSIST,  
  PURGE,  
  REGISTER,} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import { configureStore } from '@reduxjs/toolkit'
import builderReducer from './builderSlice'

const persistConfig = {  
  key: 'root',  
  version: 1,  
  storage,
}

const persistedReducer = persistReducer(persistConfig, builderReducer)

export default configureStore({  
  reducer: {builder: persistedReducer},  
  middleware: (getDefaultMiddleware) =>    
  getDefaultMiddleware({      
    serializableCheck: {        
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],      
    },    
  }),
})

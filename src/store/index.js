import { configureStore } from '@reduxjs/toolkit'
import builderReducer from './builderSlice'
export default configureStore({
  reducer: {
    builder: builderReducer
  }
})

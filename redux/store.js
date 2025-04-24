import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/addProducts'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
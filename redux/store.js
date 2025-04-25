import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/addProducts'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
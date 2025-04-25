import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/addProducts'
import userReducer from './reducers/users'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer,
  },
})
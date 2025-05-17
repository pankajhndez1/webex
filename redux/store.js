import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/addProducts'
import userReducer from './reducers/users'
import authReducer from './reducers/auth'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer,
    auth:authReducer
  },
})
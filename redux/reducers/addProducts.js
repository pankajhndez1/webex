import { auth } from "@/lib/firebase"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  submittedData: [],
  totalCartItems: 0,
};




export const storeUserProducts = createAsyncThunk(
  "users/products",
  async (data, thunkAPI) => {
    console.log(data,',,,,ye hai data')
    try {
      const user = auth.currentUser;
      console.log(user,'user')

      if (!user) {
        throw new Error("User not authenticated.");
      }

      const idToken = await user.getIdToken();

      console.log(idToken,'<<<===idToken')

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FIREBASE_DB}/cart.json?auth=${idToken}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response,'hahahahha');

      if (!response.ok) {
        throw new Error("Failed to store data.");
      }

      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setTotalCartItems: (state, action) => {
      state.totalCartItems = action.payload;
    },
    resetCart: (state) => {
      state.totalCartItems = 0;
      state.submittedData = [];
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addToCart: (state, action) => {
      state.submittedData.push(action.payload);
    },
    removeFromCart: (state) => {
      state.submittedData.pop();
    },
    setCart: (state, action) => {
      state.submittedData = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addToCart,
  removeFromCart,
  setCart,
  setTotalCartItems,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;

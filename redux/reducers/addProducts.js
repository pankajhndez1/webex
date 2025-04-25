import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  submittedData: [],
  totalCartItems: 0,
};

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
    resetCart:(state)=>{
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

export const { increment, decrement, incrementByAmount, addToCart, removeFromCart, setCart ,setTotalCartItems,resetCart} = cartSlice.actions;

export default cartSlice.reducer;

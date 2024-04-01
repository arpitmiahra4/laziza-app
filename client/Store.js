import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/Cart'
import { restaurantSlice } from './slices/Restaurant'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Accessing the reducer property of the slice
    restaurant: restaurantSlice.reducer // Accessing the reducer property of the slice
  },
})

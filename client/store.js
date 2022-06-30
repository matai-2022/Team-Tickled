import { configureStore } from '@reduxjs/toolkit'
import items from './slices/items'
import loader from './slices/loader'
const store = configureStore({
  reducer: {
    items,
    loader,
  },
})

export default store

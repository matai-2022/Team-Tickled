import { configureStore } from '@reduxjs/toolkit'
import items from './slices/items'

const store = configureStore({
  reducer: {
    items,
  },
})

export default store

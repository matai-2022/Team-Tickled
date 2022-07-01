import { createSlice } from '@reduxjs/toolkit'
import { createNewItem, fetchItems } from './items'

const slice = createSlice({
  name: 'loader',
  initialState: false,
  extraReducers: {
    // [fetchItems.pending || createNewItem.pending]: () => true,
    // [fetchItems.fulfilled || createNewItem.fulfilled]: () => false,

    [fetchItems.rejected || createNewItem.rejected]: () => false,
  },
})

export default slice.reducer

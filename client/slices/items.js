import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItems } from '../apis/items'

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  //in api
  return await getItems()
})

const slice = createSlice({
  name: 'Items',
  initialState: [],
  reducers: {},
  extraReducers: {
    [Items.fulfilled]: (state, { payload }) => payload,
  },
})

//export const selectItems = (state) => state.Items
export default slice.reducer

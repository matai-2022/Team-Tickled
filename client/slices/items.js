import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItems, addNewItem } from '../apis/items'

//fetches to the components (dispatch(fetchItems))
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  //in api
  const items = await getItems()
  return items
})

export const createNewItem = createAsyncThunk(
  'items/createNewItem',
  async (newItem) => {
    await addNewItem(newItem)
  }
)

const slice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchItems.fulfilled]: (state, { payload }) => payload,
  },
})

//export const selectItems = (state) => state.Items
export default slice.reducer

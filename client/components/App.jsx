import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchItems, createNewItem } from '../slices/items'

import Form from './Form'
import List from './List'
// import Loader from './Loader'


//not too sure where i got this items const from..
//look again in the am

function App() {
  const items = useSelector(createNewItem)
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(fetchItems())
  }, [])

  return (
    <>
      <div className="app">
      <Form />
      <List />
      {/* <Loader /> */}
      </div>
    </>
  )
}

export default App

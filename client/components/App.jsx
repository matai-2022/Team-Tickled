import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import items, { fetchItems, createNewItem } from '../slices/items'

import Form from './Form'
import List from './List'
import Loader from './Loader'


//not too sure where i got this items const from..
//look again in the am

function App() {
  // const items = useSelector(createNewItem)
  // const dispatch = useDispatch()
  const waiting = useSelector((state) => state.loader)

  // useEffect(async () => {
  //   await dispatch(fetchItems())
  // }, [])

  return (
    <>
      <div className="app">
        { waiting && <Loader/>}
      <Form />
      <List />
      </div>
    </>
  )
}

export default App

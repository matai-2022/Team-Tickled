import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getItems } from '../apis/items'
import { fetchItems } from '../slices/items'

function List() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items)

  useEffect(async () => {
    dispatch(fetchItems())
  }, [])

  return (
    <div>
      <div className="list-div">
        {items.map((elm) => (
          <div key={elm.id}>
            <hr></hr>
            <h5 className="item-name">{elm.item}</h5>
           
            <p className="item-des">{elm.des}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List

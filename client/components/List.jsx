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
      <div className="listDiv">
        {items.map((elm) => (
          <div key={elm.id}>
            <h5 className="itemName">{elm.item}</h5>
            <p className="itemDes">{elm.des}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List

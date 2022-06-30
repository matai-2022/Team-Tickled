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
        {items.map((item) => (
          <div key={item.id} className>
            
              <h5 className="itemName">
                {item.name}
              </h5>
              <p className="itemDes">{item.des}</p>
            </div>
          
        ))}
      </div>
    </div>
  )
}

export default List

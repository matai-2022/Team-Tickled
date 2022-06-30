import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../slices/items'

function List() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items)

  useEffect(async () => {
    dispatch(fetchItems())
  }, [])

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-evenly mt-5">
        {items.map((item) => (
          <div key={item.id} className>
            
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                {item.name}
              </h5>
              <p className="text-gray-700 text-base mb-4">{item.quote}</p>
            </div>
          
        ))}
      </div>
    </div>
  )
}

export default List

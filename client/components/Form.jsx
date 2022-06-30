import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createNewItem, fetchItems } from '../slices/items'

function Form() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    
    item: '',
    description: '',
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.item]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    // await dispatch(fakeAction())
    //from slices
    await dispatch(createNewItem(form))
    await dispatch(fetchItems())
  }
  return (
<div className="title-div">
      <h1 className="add-item-text">Add item</h1>
      <h1 className="add-item-and-des-text">Add new items w descriptions</h1>
      <form id="form" noValidate>
        <div className="item-div">
          <input
            type="text"
            name="item"
            placeholder="motorcycle"
            value={form.items}
            onChange={handleChange}
            className="input-item-box"
          />
          <label
            htmlFor="name"
            className="item-label"
          >
            Enter item 
          </label>
        </div>

        <div className="des-div">
          <input
            type="text"
            name="des"
            placeholder="vroom vroom"
            value={form.des}
            onChange={handleChange}
            className="input-des-box"
          />
          <label
            htmlFor="password"
            className="label-des"
          >
            Enter description
          </label>
        </div>
      </form>
      <div className="button-div">
        <button
          type="button"
          onClick={handleSubmit}
          className="add-button"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default Form 
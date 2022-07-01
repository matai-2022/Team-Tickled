import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewItem, fetchItems } from '../slices/items'

function Form() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    item: '',
    des: '',
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    //console.log(form)
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
      <h1 className="add-item-text">Listy</h1>
      <h1 className="add-item-and-des-text">
        Add new items with a description
      </h1>
      <form id="form" noValidate>
        <div className="item-div">
          <input
            type="text"
            name="item"
            placeholder="Enter Item"
            value={form.items}
            onChange={handleChange}
            className="input-item-box"
          />
          <label 
          htmlFor="name" 
          className="item-label">
          </label>
        </div>

        <div className="des-div">
          <input
            type="text"
            name="des"
            placeholder="Enter description"
            value={form.des}
            onChange={handleChange}
            className="input-des-box"
          />
          <label 
          htmlFor="password" 
          className="label-des">  
          </label>
        </div>
      </form>
      <div className="button-div">
        <button
          type="button"
          onClick={handleSubmit}
          className="add-button cube cube-hover"
        >
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Add</div>
        </button>
      </div>
    </div>
  )
}

export default Form

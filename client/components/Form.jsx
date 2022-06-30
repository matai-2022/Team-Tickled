import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

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
    await dispatch(createNewFilm(form))
    await dispatch(fetchFilms())
  }
  return (


  )
}
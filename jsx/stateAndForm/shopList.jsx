import React, { useState } from 'react'

const ShopList = () => {

  const [cart, setCart] = useState([])
  const [SL, setSL] = useState({
    item: "",
    quality: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSL({ ...SL, [name]: value })
  }

  const handleSubmit = (e) => {
    // if you dont write this form get submited on every button press
    e.preventDefault()

    if (SL.item && SL.quality) {
      setCart([...cart, SL])
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          placeholder="item"
          onChange={handleChange} />

        <input
          type="text"
          name="quality"
          placeholder="quality"
          onChange={handleChange} />

        <button type='submit'>Submit form</button>
      </form>
      <ui>
        {cart.map((element, index) => {
          return (
            <li
              key={index}>
              {`item: ${element.item} quality: ${element.quality}`}
            </li>
          )
        })}
      </ui>
    </>
  )
}

export default ShopList

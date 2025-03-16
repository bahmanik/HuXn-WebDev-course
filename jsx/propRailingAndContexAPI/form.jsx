import React, { createContext } from 'react'
import { useState } from 'react'
import Profile from './profile'

export const Data = createContext()

const Form = () => {
  const [SL, setSL] = useState({
    name: "",
    age: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSL({ ...SL, [name]: value })
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange} />

        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={handleChange} />

      </div>

      <Data.Provider value={SL}>
        <Profile />
      </Data.Provider>
    </>
  )

}

export default Form

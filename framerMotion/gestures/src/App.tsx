import { useState } from 'react'
import { motion } from 'framer-motion'
import "./App.css"

function App() {

  const vari = {
    hover: {
      scale: 1.2,
      rotate: 10,
    },
    tap: {
      scale: 0.8,
      rotate: 0,
      backgroundColor: "crimson"
    }
  }

  return (
    <>
      <motion.button
        className='box'
        variants={vari}
        whileHover="hover"
        whileTap="tap"
        transition={{ type: "spring", stiffness: 300 }}
        drag="x"
        dragConstraints={{ left: 50, right: -50 }}
      // drag # this by default make it dragable but with no boundry
      />
    </>
  )
}

export default App

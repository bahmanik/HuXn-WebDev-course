import { useState } from 'react'
import { motion } from 'framer-motion'
import "./App.css"

function App() {

  return (
    <>
      <motion.div
        animate={{
          //x: 100,
          //y: "90%",
          //rotateX: 60,
          //rotateY: 60,
          //rotate: 60,
          //scaleX: 1.5,
          //scale: 2,
          //skew: 20,
          //skewX: 20,
          //skewY: 20,
        }}
        className='box'>
      </motion.div>
    </>
  )
}

export default App

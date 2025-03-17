import { useState } from 'react'
import { motion } from 'framer-motion'
import "./App.css"

function App() {

  return (
    <>
      <motion.div
        animate={{ x: 200 }}
        initial={{ x: 0 }}
        transition={{
          //delay: 1,
          //delay: 2,
          duration: 1,
          //duration: 2,
          //ease: "linear",
          ease: "easeOut"
        }}
        className='box'>
      </motion.div>
    </>
  )
}

export default App

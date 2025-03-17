import { useState } from 'react'
import { motion } from 'framer-motion'
import "./App.css"

function App() {

  return (
    <>
      <motion.div
        animate=
        {{
          //x: [0, 200, 200, 300, 200, 0],
          rotate: [0, 0, 270, 270, 0]
        }}
        transition={{
          duration: 2
        }}
        className='box'>
      </motion.div>
    </>
  )
}

export default App

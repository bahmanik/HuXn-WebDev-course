import { useState } from 'react'
import { motion } from 'framer-motion'
import "./App.css"

function App() {

  const parVariant = {
    H: {},
    V: {
      transition: { staggerChildren: 0.5 },
    }
  }

  const chiVaraint = {
    H: {
      opacity: 0,
      y: 20
    },
    V: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <>
      <motion.div variants={parVariant} initial="H" animate="V">
        {[...Array(5)].map((_, index) =>
        (<motion.div
          variants={chiVaraint}
          className='box mt-[2rem]'
          key={index}
        />)
        )}
      </motion.div >
    </>
  )
}

export default App

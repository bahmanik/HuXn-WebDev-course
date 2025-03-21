import { useState } from 'react'
import { motion } from 'framer-motion'
import "./App.css"

function App() {
  const [click, setClicked] = useState(false)

  const vari = {
    startAnimation: {
      scale: 0.8,
      opacity: 0
    },
    Animation: {
      scale: 1,
      opacity: 1
    },
    endAnimation: {
      scale: 0.8,
      opacity: 0
    }
  }

  return (
    <>
      <motion.button
        className='box text-black'
        variants={vari}
        initial="startAnimation"
        animate={click ? "endAnimation" : "Animation"}
        exit="endAnimation"

        onClick={() => { setClicked(!click) }}
      >
        click me
      </motion.button >
    </>
  )
}

export default App

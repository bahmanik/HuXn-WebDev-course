import { motion, useMotionValue } from "framer-motion"
import "./App.css"
import { ChangeEvent } from "react"

function App() {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(+e.target.value / 3)
  }

  const scale = useMotionValue(1)

  return (
    <>
      <motion.div className="box" style={{ scale }}>
      </motion.div>

      <input className="mt-[6rem]" type="range" step={0.01} min={0.5} max={5} onChange={changeHandler} />
    </>

  )
}

export default App

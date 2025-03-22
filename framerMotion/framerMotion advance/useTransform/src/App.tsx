import { motion, useSpring, useTransform } from "framer-motion"
import "./App.css"
import { ChangeEvent } from "react"

function App() {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(+e.target.value)
  }

  const scale = useSpring(1)
  const backgroundColor = useTransform(scale, [0.5, 2], ["#ff0000", "#00ff00"])

  return (
    <>
      <motion.div className="box" style={{ scale, backgroundColor }}>
      </motion.div>

      <input className="mt-[6rem]" type="range" step={0.01} min={0.5} max={2} onChange={changeHandler} />
    </>

  )
}

export default App

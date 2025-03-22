import "./App.css"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
function App() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 600], [1, 3])
  const opacity = useTransform(scrollY, [0, 600], [.5, 1])

  useMotionValueEvent(scrollY, "change", (L) => {
    console.log(L)
  })
  return (
    <>
      <div className="flex justify-center items-start mt-[120vh]">
        <div className="h-[200vh] w-full flex justify-center items-center">
          <motion.div
            className="box"
            style={{ opacity, scale }}
          />
        </div>
      </div>
    </>
  )
}

export default App

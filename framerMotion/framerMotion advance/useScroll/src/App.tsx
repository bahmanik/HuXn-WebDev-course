import "./App.css"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function App() {
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (L) => {
    console.log(L)
  })
  return (
    <>
      <div className="flex justify-center items-start mt-[120vh]">
        <div className="h-[200vh] w-full flex justify-center items-center">
          hello
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from "react";
import "./App.css"
import { motion } from "framer-motion";

const App = () => {
  const [isLarge, setLarge] = useState(false)

  const handleStart = () => setLarge(true)
  const handleEnd = () => setLarge(false)
  console.log(isLarge)
  return (
    <>
      <motion.button
        className="p-8 text-2xl bg-blue-700 rounded-2xl"
        onTapStart={handleStart}
        // The onTapCancel callback in Framer Motion only fires when a tap gesture is canceled—for example, if you press down and then move the pointer outside the element before releasing
        onTapCancel={handleEnd}
        onTap={handleEnd}

        animate={isLarge ? { scale: 3 } : { scale: 1 }}
      >
        Click me
      </motion.button>
    </>
  )
};

export default App;

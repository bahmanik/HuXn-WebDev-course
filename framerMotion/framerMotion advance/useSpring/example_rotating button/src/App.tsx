import "./App.css"
import { motion, useSpring } from "framer-motion";

const App = () => {
  const rotate = useSpring(0)

  return (
    <motion.button
      onClick={() => { rotate.set(rotate.get() + 45) }}
      className="w-32 h-32 bg-amber-300 text-black text-2xl"
      style={{ rotate }}
    >
      click me
    </motion.button>
  )
};

export default App;

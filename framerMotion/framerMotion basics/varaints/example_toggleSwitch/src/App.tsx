import { useState } from "react";
import "./App.css"
import { motion } from "framer-motion";

const pVariants = { A: { x: 77 }, B: { x: 0 } }
const App = () => {
  const [togle, setTogle] = useState(false)
  return (
    <>
      <motion.div className="flex items-center h-16 w-36 bg-gray-200 rounded-4xl">
        <motion.button
          onClick={() => setTogle(!togle)}
          variants={pVariants}
          animate={togle ? "A" : "B"}
          //transition={{ type: "spring", stiffness: 300 }}
          className="mx-1 h-15 w-15 bg-blue-700 rounded-full">

        </motion.button>
      </motion.div>
    </>
  )
};

export default App;

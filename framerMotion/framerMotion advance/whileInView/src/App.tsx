import "./App.css"
import { motion } from "framer-motion";

const App = () => {

  const pVar = { H: { opacity: 0 }, V: { opacity: 1, } }

  return (
    <div className="h-[400vh] w-[100vw] flex justify-center items-center">
      <motion.div
        className="h-[10vh] w-[100vw] flex justify-center mt-300 items-center"
        variants={{
          V: {
            transition: { staggerChildren: .5 }
          }
        }}

        initial="H"
        whileInView="V"
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            variants={pVar}
            key={index}
            className="w-20 h-20 bg-pink-400 rounded-full m-8"
          >

          </motion.div>
        ))}
      </motion.div>
    </div>
  )
};

export default App;

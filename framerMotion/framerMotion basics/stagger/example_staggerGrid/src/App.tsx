import "./App.css"
import { motion } from "framer-motion";
const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const App = () => {

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.2 }
        }
      }}
      className="grid grid-cols-3 gap-4">
      {[...Array(6)].map((_, index) => (
        <motion.div
          variants={staggerVariants}
          className="bg-gray-200 w-9 h-9 rounded"
          key={index}>
        </motion.div>))}
    </motion.div>
  )
};

export default App;

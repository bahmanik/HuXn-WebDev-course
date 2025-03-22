import "./App.css"
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      animate={{ y: ["40vh", "-40vh", "40vh"] }}
      transition={{ duration: 1, ease: "linear", repeat: Infinity }}
      className="box"></motion.div>
  );
};

export default App;

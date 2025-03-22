import { useState } from "react";
import "./App.css"
import { motion } from "framer-motion";

type item = { title: string, des: string }

const itemList: Array<item> = [
  { title: "item1", des: "this is item1 description" },
  { title: "item2", des: "this is item2 description" },
  { title: "item3", des: "this is item3 description" },
  { title: "item4", des: "this is item4 description" },
  { title: "item5", des: "this is item5 description" },
]

const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <button className="bg-blue-500 p-6 rounded-xl" onClick={() => setVisible(!visible)}>click me</button>
      <motion.div className="overflow-hidden bg-gray-800 rounded-xl"
        animate={visible ? { height: 75 * itemList.length } : { height: 0 }}
      >
        {itemList.map(e => (
          <div
            key={e.title}
            className="p-3"
          >
            <h4>{e.title}</h4>
            <p>{e.des}</p>
          </div>
        ))}
      </motion.div >
    </>
  )
};

export default App;

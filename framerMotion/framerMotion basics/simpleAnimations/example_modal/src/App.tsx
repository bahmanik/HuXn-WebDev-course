import { useState } from "react";
import { AnimatePresence } from 'framer-motion'
import "./App.css"
import Modal from "./components/Modal";

const App = () => {
  const [modal, setModal] = useState(false)
  return (
    <>
      {!modal && <button onClick={() => { setModal(!modal) }}>open Modal</button>}

      <AnimatePresence>
        {modal && <Modal className="bg-gray-100 text-black p-[10rem]">
          modal
          <button className="block bg-red-500" onClick={() => setModal(false)}> close modal</button>
        </Modal>}
      </AnimatePresence>
    </>
  )
};

export default App;

import React, { useReducer, useState } from 'react'
import { counterReducer, inisialState } from './counterReducer'

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, inisialState)
  const [inputValue, setInput] = useState("0")

  const handleIncreament = () => { dispatch({ type: "increament" }) }
  const handleDecreament = () => { dispatch({ type: "decreament" }) }
  const handleBulkIncreament = () => { dispatch({ type: "bulk increament", bulk: +inputValue }) }
  const handleBulkDecreament = () => { dispatch({ type: "bulk decreament", bulk: +inputValue }) }
  const handleReset = () => { dispatch({ type: "reset" }) }

  return (
    <div>
      {`count is ${state.count}`}
      <div>
        <button onClick={handleIncreament}>+</button>
        <button onClick={handleDecreament}>-</button>
        <button onClick={handleReset}>reset</button>
      </div>
      <div>
        <input type="number" value={inputValue} onChange={(e) => { setInput(e.target.value) }} />
        <button onClick={handleBulkIncreament}>increase by</button>
        <button onClick={handleBulkDecreament}>decrease by</button>
      </div>
    </div >
  )
}

export default Counter

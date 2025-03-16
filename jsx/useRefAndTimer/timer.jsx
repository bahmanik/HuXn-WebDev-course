import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((pc) => pc + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <div>{`time: ${count}`}</div>
      <button>stop</button>
    </div>
  )
}

export default Timer

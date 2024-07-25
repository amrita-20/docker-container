import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <>
     <div>Docker Container with react</div>
     <button type="butto" onClick={handleIncrement}>+</button>
     <button type="button" onClick={handleDecrement}>-</button>
     <div>{count}</div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(preCount => preCount + 1)
  }
  const decrementCount = () => {
    if(count > 0) {
      setCount(preCount => preCount - 1)
    }
  }
  return (
    <div className='counter'>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App

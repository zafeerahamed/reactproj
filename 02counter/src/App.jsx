import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const addValue = () => {
    setCount(count+1)
  }

  const removeValue = () => {
    if (count == 0) {
      setCount(count = 0)
    }
    else{
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Zafeer</h1>
      <h2>Count value : {count}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

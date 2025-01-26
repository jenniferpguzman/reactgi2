import { useState } from 'react'
import './App.css'
import MyButton from './Components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <MyButton onClick={() => setCount((count) => count + 1)} title="Increment"/>
        <MyButton onClick={() => setCount((count) => count - 1)} title="Decrement" />
      </div>
      <div className="text">
        <p><strong>Count is: {count}</strong></p>
        </div>
    </>
  )
}

export default App

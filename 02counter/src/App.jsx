import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  return (
    <>
      <h1> React tutorial with Lucky! </h1>
      <h2> Counter Value: {counter} </h2>
      <button onClick={() => setCounter((value) => value + 1)}>
        Add Value
      </button>
      <button onClick={() => setCounter((value) => value - 1)}>
        Remove Value
      </button>
      <p> Footer: {counter} </p>
    </>
  )
}

export default App

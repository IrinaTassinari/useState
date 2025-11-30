import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState('blue')
  
  function decrementCount() {
    // setCount(count-1) //incorrect
    setCount(prevCount => prevCount-1)
    setTheme('green')
  }

  function incrementCount () {
    setCount(prevCount => prevCount+1)
    setTheme('red')
  }

  return (
    <>
    <div style={{backgroundColor:theme, padding: '20px'}}>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div> 
    </>
  )
}

export default App

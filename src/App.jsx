import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(12)
  
  const addValue = () =>{
    // console.log((Math.random()))
    // counter = counter + 1
    // console.log((Math.random()))
    setCounter(counter+1)
  }

  const decValue = () =>{
    if(counter >= 1){
      setCounter(counter-1)
    }
    else alert("value can't be negative");
  }

  return (
    <>
      <h1>React with Coffee</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Inc</button>
      <br></br>
      <br></br>
      <button onClick={decValue}>Dec</button>
    </>
  )
}

export default App

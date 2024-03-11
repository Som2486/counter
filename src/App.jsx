import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter]=useState(0)

  const addvalue=()=>{
    console.log("Clicked", counter)
    setcounter(counter+1)
  }
  
  const subvalue=()=>{
    setcounter(counter-1)
  }

  
 

  return (
    <>
      <h1>
        Hello I just started React
      </h1>

      <h2>
      Counter: {counter}
      </h2>
      <button 
      onClick={(addvalue)}>
        Increase {counter}
      </button>
      <br />
      <button  
      onClick={(subvalue)}>Decrease {counter}</button>

    </>
  )
}

export default App

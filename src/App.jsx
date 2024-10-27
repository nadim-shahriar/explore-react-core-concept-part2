import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './User'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    console.log("Button 1 Clicked")
  }
  const handleClick2 = () =>{
    console.log("Button 2 Clicked")
  }
  const addFive= (num) =>{
    alert(num+5)
    console.log('Forth Button')
  }
  return (
    <>
      <h2>Explore React Concept</h2>

      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click ME</button>
      <button onClick={handleClick2}>Click ME 2</button>
      <button onClick={() =>{
        alert('Third Button Clicked')
        console.log('third button')
      }}>Third</button>
      <button onClick={()=> addFive(3)}>Four</button>
      
    </>
  )
}

export default App

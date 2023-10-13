
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(0)

  

  // let counter = 5

  let addValue = ()=>{
    /*setCounter(counter+1)
    setCounter(counter+1)         //Interview question
    setCounter(counter+1)
    setCounter(counter+1)*/


    /*setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)                    //Interview question
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)*/



    // (counter<20)?setCounter(counter+1):setCounter(counter) //assignment restructing upper limit to 20
    // setCounter(counter+1)
  }

  let removeValue = ()=>{

    (counter>0)?setCounter(counter-1):setCounter(counter) // restructing lower limit to 0
    // setCounter(counter-1)
  }

  return (
    <>
     <h1>react counter</h1>
     <h2> counter value : {counter} </h2>

     <button
     onClick={addValue}
     >add value</button>

     <br />

     <button
     onClick={removeValue }
     >remove value</button>
    </>
  )
}

export default App

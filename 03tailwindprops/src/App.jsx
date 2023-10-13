import { useState } from 'react'

import './App.css'
import Card from './components/Card';

function App() {
 

  return (
    <>
        <h1 className='bg-green-400 mb-5'>Tailwind test</h1>
        <Card userName="flora" btnText="click me"/>
        <Card userName="mili" />
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Skills from './Skills'

import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Navbar from './components/Navbar'
import State from './hooks/State'
import Form from './hooks/Form'
import Effect from './hooks/Effect'
import Reducer from './hooks/Reducer'
function App() {
  const [count, setCount] =useState(0)
  return (
    <>
    <Navbar />

    <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/state' element={<State />}/>
    <Route path='/form' element={<Form />}/>
        <Route path='/effect' element={<Effect/>}/>
         <Route path='/reducer' element={<Reducer/>}/>
    </Routes>

    </>
  )
}

export default App

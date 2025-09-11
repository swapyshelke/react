import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header' 
import 'bootstrap/dist/css/bootstrap.min.css';

import CardsDetails from './components/CardsDetails'
import Cards from "./components/Cards"
import { Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Cards />} /> 
        <Route path='/cart' element={<CardsDetails />} /> 
      </Routes>
    </>
  )
}

export default App

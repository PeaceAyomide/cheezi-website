import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Potfolio from './components/Portfolio/Potfolio'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Potfolio/>
    </> 
  )
}

export default App
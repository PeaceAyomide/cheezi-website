import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Potfolio from './components/Portfolio/Potfolio'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Potfolio />
      <Contact/>
    </> 
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Buycoins from './pages/Buycoins'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SignInButton } from '@clerk/clerk-react'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<Buycoins />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
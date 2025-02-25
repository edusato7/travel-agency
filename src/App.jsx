import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './components/Login'

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/galeria' element={<Gallery />}></Route>
        <Route path='/contato' element={<Contact />}></Route>
        <Route path='/sobre' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App

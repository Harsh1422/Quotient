import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Productivity from './pages/Productivity'
import FAQ from './pages/FAQ'
import Price from './pages/Price'
import Potential from './pages/Potential'
import Footer from './components/Footer'
import "./App.css"
function App() {
  return (
    <div className='boddy'>
      <Header />
      <Home />
      <Discover />
      <Productivity />
      <FAQ />
      <Price />
      <Potential />
      <Footer />
    </div>
  )
}

export default App
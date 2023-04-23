import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { About } from './components/About/About.jsx'
import { Search } from './components/Search/Search'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
     <Navbar/>
     <About />
     <Search />
     <Footer />
    </div>
  )
}

export default App

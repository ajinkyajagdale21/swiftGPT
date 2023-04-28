import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { About } from './components/About/About.jsx'
import { Search } from './components/Search/Search'
import { Footer } from './components/Footer/Footer'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [result,setResult]=useState(null)
  return (
    <div className='App'>
     <Navbar/>
     <About />
     <Search result={result} setResult={setResult} />
     <Footer />
     <ToastContainer />
    </div>
  )
}

export default App

import { } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Middle from "./components/Middle"
import Work from "./components/Work"
import Footer from './components/Footer'
function App() {


  return (
      <div className="wrapper">
        <Navbar/>
        <Middle/>
        <Work/>
        <Footer/>

      </div>
  )
}

export default App

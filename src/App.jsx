import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './Routing'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routing />
      <Footer />
    </BrowserRouter>
  )
}

export default App

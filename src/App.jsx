import './App.css'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NavBar from "./components/Navbar/NavBar"
import Regsiter from './components/RegisterSection/Regsiter'
import About from './components/Revolution/About'
import Service from './components/Service/Service'

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Service />
      <Regsiter />
      <Contact />
    </div>
  )
}

export default App

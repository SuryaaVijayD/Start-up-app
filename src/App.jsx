import './App.css'
import { useState, useEffect } from 'react'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NavBar from "./components/Navbar/NavBar"
import Regsiter from './components/RegisterSection/Regsiter'
import About from './components/Revolution/About'
import Loader from './components/Loader/Loader'
import Service from './components/Service/Service'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
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

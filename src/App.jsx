import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experince from './components/Experince';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
      <Navbar />
      <div className="container">
      <Home />
      <Experince />
      <Skills/>
      <Projects />
      <Contact/>
      </div>
      {/* <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/experience' element={<Experince/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router> */}

      
    </div>
  )
}

export default App

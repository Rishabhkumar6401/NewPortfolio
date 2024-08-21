import React, { useEffect, useRef } from 'react'
import pdf from "./pdf/rishabh_kumar.pdf"
import hero from "./Data/hero.json"
import Typed from "typed.js"


const Home = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
    const options = {
      strings:["Welcome to my profile", "My Name is Rishabh Kumar","I am a Full-Stack Developer", "React Developer", "Nodejs Developer","Digital Marketing Executive"],
      typeSpeed:50,
      backspeed:50,
      loop:true
    }
    const typed = new Typed(typedRef.current, options);
    return ()=>{
      typed.destroy();
    }

  },[])
  return (

    <>
    <div className="container home" id='home'>
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>
        <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
        <img src={`./src/assets/${hero.imgSrc}`} alt="imgggg" />
        </div>
      </div>
    </div>

      
    </>
  )
}

export default Home

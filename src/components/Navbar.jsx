import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='container nav_bar' data-aos="fade-down" data-aos-duration="1000">
        <div className='left navbar_items'>Portfolio</div>
        <div className='right'>
          <a href='#home' className='navbar_items'>Home</a>
          <a href='#experience' className='navbar_items'>Experience</a>
          <a href='#skills' className='navbar_items'>Skills</a>
          <a href='#projects' className='navbar_items'>Projects</a>
          <a href='#contact' className='navbar_items'>Contact me</a>
        </div>
      
    </div>
    </>
  )
}

export default Navbar

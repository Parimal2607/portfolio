import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className='my-navbar'>
      {/* <a href="#" className="logo" target="_blank">
        <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
      </a> */}
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label for="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-me">About</Link></li>
          <li><Link to="/testimonial">Testimonial</Link></li>
          <li><Link to="/contact-me">Contact</Link></li>
        </ul>
      </nav>

      <div className="section-center content">
        <h1 className="mb-0 ">Hello, I'm Parimal Sharma.<br />I'm Frontend Developer.</h1>
      </div>
      </div>
      </>
  )
}

export default Navbar
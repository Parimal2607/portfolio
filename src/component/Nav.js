import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
       <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label for="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li><Link to="/portfolio">Home</Link></li>
          <li><Link to="/about-me">About</Link></li>
          <li><Link to="/testimonial">Testimonial</Link></li>
          <li><Link to="/contact-me">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
import React from 'react'
import { Icon } from '@iconify/react';
import AnimatedBg from './AnimatedBg';
function MyInfo() {
  return (
    <>
      <AnimatedBg />
      <div className='container'>
      <div className='my-info '>
        <div className="card-container mx-auto  ">
          <span className="pro">PRO</span>
          <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <h3>Parimal Sharma</h3>
          <h6>India</h6>
          <p>User interface designer and <br /> front-end developer</p>
          {/* <div className="buttons">
          <button className="primary">
            Message
          </button>
          <button className="primary ghost">
            Following
          </button>
        </div> */}
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              {/* <li>Node</li> */}
            </ul>
          </div>
        </div>

      </div>
      
  
    </div>
     
    </>
  )
}

export default MyInfo
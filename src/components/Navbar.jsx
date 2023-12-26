import React from 'react'
import Navitem from './Navitem';

function Navbar() {


  

    return (
      <nav>
              <ul>
               <Navitem item="Home" tolink="/" ></Navitem>
              <Navitem item="About" tolink="/about" ></Navitem>
              <Navitem item="Education" tolink="/education" ></Navitem>
              <Navitem item="Skills" tolink="/skills" ></Navitem>
              <Navitem item="Contact" tolink="/contact" ></Navitem> 
              </ul>
              </nav>
    )
  }
  
  export default Navbar
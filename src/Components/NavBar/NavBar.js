import "./NavBar.css"
import { AiOutlineBars, AiOutlineClose} from "react-icons/ai"
import React,{ useRef } from 'react'
import {Link} from "react-router-dom"


const NavBar = () => {

const navRef = useRef()

const showNavBar = () => {
 navRef.current.classList.toggle("responsive-nav") 
 
}
  return (
    <header>
      <div className='logo'>
        <h3><Link to="/">PDev<span className='logo-span'>{` />`}</span></Link></h3>
      </div>
      <nav ref={navRef}>
      
          <Link to="/home">Home</Link>
          <Link to='/repos'>Repos</Link>
          <Link to='*'>Resume</Link>
          <Link to='/testerror'>TestError</Link>
         
      <button onClick={showNavBar} className='nav-btn' id='close-btn'>
          <AiOutlineClose />
        </button>
      </nav>
      <button onClick={showNavBar} className='nav-btn' >
       
        <AiOutlineBars />
      </button>
    </header>
  )
}

export default NavBar

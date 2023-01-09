import React from 'react'
import {Link} from "react-router-dom"

const Logo = () => {
  return (
    <header>
      <div className='logo'>
        <h3><Link to="/home">PDev<span className='logo-span'>{` />`}</span></Link></h3>
      </div>
    </header>
  )
}

export default Logo

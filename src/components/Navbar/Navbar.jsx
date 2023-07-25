import React from 'react'
import { logo } from '../../assets/index'

function Navbar() {
  return (
    <nav className='flex justify-center md:justify-start'>
        <img className='w-1/3 md:w-48' src={logo} alt="logo" />
    </nav>
  )
}

export default Navbar
import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
        <header className='header'>
            <div className='logo'>Movies App</div>
            <div className='navbar'> <a href='/movies'>Movies</a> <a href='/about'>About</a></div>
        </header>
    </div>
  )
}

export default Header
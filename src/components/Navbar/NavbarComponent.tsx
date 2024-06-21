import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../logo.svg'
import './NavbarComponent.css'

function NavbarComponent() {
  return (
    <div className="app-container">
        <header className="page-wrapper">
          <nav className='navbar'>
            <div className='navbar-items'>
              <div className='nav-logo'>
                <NavLink to='/'>
                  <img className='logo' src={logo} />
                  <span className='logo-text'>String Checker</span>
                </NavLink>
              </div>

              <div className='nav-links'>
              <NavLink to='/' className={({ isActive }) => isActive ? 'link active' : 'link'}>Home</NavLink>
              <NavLink to='/checker' className={({ isActive }) => isActive ? 'link active' : 'link'}>Checker</NavLink>
              </div>
            </div>
          </nav>
        </header>
      </div>
  )
}

export default NavbarComponent
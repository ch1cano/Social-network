import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom'

const getActiveLink = (isActive) => ({ color: isActive ? 'var(--color-active)' : 'white' })

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" style={({ isActive }) => getActiveLink(isActive)}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" style={({ isActive }) => getActiveLink(isActive)}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' style={({ isActive }) => getActiveLink(isActive)}>News</NavLink>
      </div>
      <div>
        <NavLink to='/music' style={({ isActive }) => getActiveLink(isActive)}>Music</NavLink>
      </div>
      <div>
        <NavLink to='/sattings' style={({ isActive }) => getActiveLink(isActive)}>Sattings</NavLink>
      </div>
      <div>
        <NavLink to='/frends' style={({ isActive }) => getActiveLink(isActive)}>Frends</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
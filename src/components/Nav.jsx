import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink 
      className={({ isActive }) => ( isActive ? 'selected' : null )} 
      to='/'>
        home
      </NavLink>
      <NavLink 
      className={({ isActive }) => ( isActive ? "selected": null)} 
      to='/atanagildo/atanagildo'>
        atanagildo
      </NavLink>
      <NavLink 
      className={({ isActive }) => ( isActive ? "selected": null)} 
      to='/ataulfo/ataulfo'>
        ataulfo
      </NavLink>
      <NavLink 
      className={({ isActive }) => ( isActive ? "selected": null)} 
      to='/ervigio/ervigio'>
        ervigio
      </NavLink>
      <NavLink 
      className={({ isActive }) => ( isActive ? "selected": null)} 
      to='/leovigildo/leovigildo'>
        leovigildo
      </NavLink>
      
      
    </nav>
  )
}

export default Nav

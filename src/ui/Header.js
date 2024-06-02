import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-end gap-3 p-5 bg-red-300 h-14'>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/api'>Api</NavLink>
    </div>
  )
}

export default Header

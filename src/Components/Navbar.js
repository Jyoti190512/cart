// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <p>Shopping Cart</p>
      <div>
        <NavLink to='/'>Home Page</NavLink>
        <NavLink to='/cart'>Cart Page</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;

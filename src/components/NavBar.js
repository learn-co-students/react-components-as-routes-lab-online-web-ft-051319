import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink style={{padding: '12px'}} to='/'>Home</NavLink>
      <NavLink style={{padding: '12px'}} to='/movies'>Movies</NavLink>
      <NavLink style={{padding: '12px'}} to='/directors'>Directors</NavLink>
      <NavLink style={{padding: '12px'}} to='/actors'>Actors</NavLink>
    </div>
  );
};

export default NavBar;

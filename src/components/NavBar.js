import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#a99afc',
  textDecoration: 'none',
  color: 'white',
  }

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: '#7961ff'
      }}
      >Home</NavLink>
      <NavLink
      to="/movies"
      exact
      style={link}
      activeStyle={{
        background: '#7961ff'
      }}
      >Movies</NavLink>
      <NavLink
      to="/directors"
      exact
      style={link}
      activeStyle={{
        background: '#7961ff'
      }}
      >Directors</NavLink>
      <NavLink
      to="/actors"
      exact
      style={link}
      activeStyle={{
        background: '#7961ff'
      }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavbarIcons() {
  return (
    <nav>
      <li>
        <NavLink to='/' style={{ textDecoration: 'none' }} exact>
          <i className='fas fa-home' />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' style={{ textDecoration: 'none' }}>
          <i className='far fa-user' />
          <span>About</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/skills' style={{ textDecoration: 'none' }}>
          <i className='fas fa-cog' />
          <span>Skills</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/work' style={{ textDecoration: 'none' }}>
          <i className='far fa-eye' />
          <span>Projects</span>
        </NavLink>
      </li>
    </nav>
  );
}

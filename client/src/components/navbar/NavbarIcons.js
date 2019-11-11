import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavbarIcons() {
  return (
    <nav>
      <NavLink
        to='/'
        style={{ textDecoration: 'none', fontWeight: 'bold' }}
        exact
        activeClassName='activeNavIcon'
      >
        <li>
          <i className='fas fa-home' />
          <span>Home</span>
        </li>
      </NavLink>

      <NavLink
        to='/about'
        style={{ textDecoration: 'none', fontWeight: 'bold' }}
        activeClassName='activeNavIcon'
      >
        <li>
          <i className='far fa-user' />
          <span>About</span>
        </li>
      </NavLink>

      <NavLink
        to='/skills'
        style={{ textDecoration: 'none', fontWeight: 'bold' }}
        activeClassName='activeNavIcon'
      >
        <li>
          <i className='fas fa-cog' />
          <span>Skills</span>
        </li>
      </NavLink>

      <NavLink
        to='/work'
        style={{ textDecoration: 'none', fontWeight: 'bold' }}
        activeClassName='activeNavIcon'
      >
        <li>
          <i className='far fa-eye' />
          <span>Projects</span>
        </li>
      </NavLink>
    </nav>
  );
}

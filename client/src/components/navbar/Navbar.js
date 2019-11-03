import React from 'react';
import Cool_J from '../../Cool_J.svg';

import NavbarIcons from './NavbarIcons';
import { Link } from 'react-router-dom';

import { NavbarContainer, NavbarLogo } from './styles';

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NavbarLogo>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <img src={Cool_J} alt='Logo' />
          </Link>
        </NavbarLogo>

        <NavbarIcons />

        <ul>
          <a
            href='https://www.linkedin.com/in/jacksonmalloy/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin-in' />
          </a>
          <a
            href='https://github.com/JacksonMalloy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github' />
          </a>
        </ul>
      </NavbarContainer>
    </>
  );
}

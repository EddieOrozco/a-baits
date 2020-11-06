import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      class='navbar navbar-expand-lg navbar-light'
      style={{ backgroundColor: '#fff', padding: '25px 0' }}
    >
      <div className='container'>
        <a class='navbar-brand' href='#'>
          A-Baits
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div
          class='collapse navbar-collapse justify-content-end'
          id='navbarNavDropdown'
        >
          <ul class='navbar-nav'>
            <li class='nav-item active'>
              <Link to='/' class='nav-link'>
                Home <span class='sr-only'>(current)</span>
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='/about' class='nav-link'>
                About
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='/baits' class='nav-link'>
                Baits
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='/lines' class='nav-link'>
                Lines
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='/terminalTackle' class='nav-link'>
                Terminal Tackle
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='/gear' class='nav-link'>
                Gear
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='/antiques' class='nav-link'>
                Antiques
              </Link>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

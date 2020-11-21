import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light sticky-top'>
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
          class='collapse navbar-collapse justify-content-end navbar-style'
          id='navbarNavDropdown'
        >
          <ul class='navbar-nav'>
            <li class='nav-item active'>
              <Link to='/' class='nav-link letter-style'>
                Home <span class='sr-only'>(current)</span>
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='/about' class='nav-link letter-style'>
                About
              </Link>
            </li>
            <li class='nav-item '>
              <Link to='/bait' class='nav-link letter-style'>
                Baits
              </Link>
            </li>
            <li class='nav-item '>
              <Link to='/lines' class='nav-link letter-style'>
                Lines
              </Link>
            </li>
            <li class='nav-item '>
              <Link to='/rodsReels' class='nav-link letter-style'>
                Rods Reels
              </Link>
            </li>
            <li class='nav-item '>
              <Link to='/terminalTackle' class='nav-link letter-style'>
                Terminal Tackle
              </Link>
            </li>
            <li class='nav-item '>
              <Link to='/gear' class='nav-link letter-style'>
                Gear
              </Link>
            </li>
            <li class='nav-item '>
              <Link to='/antiques' class='nav-link letter-style'>
                Antiques
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

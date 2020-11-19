import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='jumbotron jumbotron-fluid main-image'>
      <div className='bg-shadow'>
        <div className='container'>
          <h1 className='display-4 main-title'>A-Baits & Tackle</h1>
          <p className='lead main-lead'>
            Cast out and Catch us at our Lockport Location
          </p>
          {/* <a class='btn btn-primary btn-lg' href='#' role='button'>
            Learn more
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

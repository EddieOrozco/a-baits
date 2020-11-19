import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p className=' chat'>Lets Chat </p>
        <p className='footer-quote'>
          A-Baits has everything you need for your tackle box{' '}
        </p>
        <div class='row'>
          <div class='col-sm-4'>
            <div class='card' style={{ backgroundColor: 'black' }}>
              <div class='card-body'>
                <h5 class='card-title'>Shop Hours</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-4'>
            <div class='card' style={{ backgroundColor: 'black' }}>
              <div class='card-body'>
                <h5 class='card-title'>Location</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-4'>
            <div class='card' style={{ backgroundColor: 'black' }}>
              <div class='card-body'>
                <h5 class='card-title'>Contact Info</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='social'>
          <Link
            to='https://www.facebook.com/A-Baits-Bait-and-Tackle-171426449546667/'
            target='_blank'
          >
            <i class='fab fa-facebook-square'></i>
          </Link>
          <Link to='' target='_blank'>
            <i class='fab fa-google'></i>
          </Link>
        </div>

        <div className='copyright'>
          <strong>
            &copy; <span>2020</span> <span>EddTheDev</span>
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p className=' chat'>Lets Chat </p>
        <div class='row'>
          <div class='col-sm-4 '>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Shop Hours</h5>
                <p class='card-text'>Monday-Friday 6:00 AM - 6:00 PM</p>
                <p class='card-text'>Saturday 6:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          <div class='col-sm-4'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Location</h5>
                <p class='card-text'>1134 E 9th St, Lockport, IL 60441</p>
                <p class='card-text'>Come In Check Us Out</p>
              </div>
            </div>
          </div>
          <div class='col-sm-4'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Contact Info</h5>
                <p class='card-text'>Phone: (815) 838-2904</p>
                <div className='social'>
                  <a
                    href='https://www.facebook.com/A-Baits-Bait-and-Tackle-171426449546667/'
                    target='_blank'
                  >
                    <i class='fab fa-facebook-square'></i>
                  </a>
                  <a
                    href='https://www.google.com/search?client=firefox-b-1-d&q=a+baits+and+tackle'
                    target='_blank'
                  >
                    <i class='fab fa-google'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='copyright'>
          <strong>
            &copy; <span>2020</span> <span>A-Baits A Fishing Company </span>
          </strong>
        </div>
        <div className='copyright'>
          <strong>
            <span>Developed by:</span> <span>EddTheDev</span>
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

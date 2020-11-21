import React from 'react';

import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ title, imageUrl, linkUrl, description }) => {
  return (
    <div class='col-sm-4'>
      <div class='card'>
        <img className='card-img-top rounded-0' src={imageUrl} alt='' />
        <div class='card-body'>
          <h5 class='card-title'>{title}</h5>
          {/* <p class='card-text'>{description}</p> */}
          <Link to={linkUrl} class='custom-btn'>
            View Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

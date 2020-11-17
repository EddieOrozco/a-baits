import React from 'react';

import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ title, imageUrl, linkUrl, description }) => {
  return (
    <div class='col-4'>
      <div class='card' style={{ width: '22rem' }}>
        <img className='card-img-top' src={imageUrl} alt='' />
        <div class='card-body'>
          <h5 class='card-title'>{title}</h5>
          <p class='card-text'>{description}</p>
          <Link to={linkUrl} class='btn btn-primary'>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

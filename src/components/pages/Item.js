import React from 'react';
import '../cards/Card.scss';

const Item = ({ title, imageUrl, linkUrl, description }) => {
  return (
    <div className='col-sm-4'>
      <div class='card-group'>
        <div class='card'>
          <img
            class='card-img-top rounded-0'
            src={imageUrl}
            alt='Card image cap'
          />
          <div class='card-body'>
            <h5 class='card-title'>{title}</h5>
            <p class='card-text'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

import React from 'react';
import './Item.scss';

const Item = ({ title, imageUrl, linkUrl, price, price_two }) => {
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
            <h6 class='card-text'>
              {price} {price_two}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

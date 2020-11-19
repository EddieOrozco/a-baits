import React from 'react';
import './ImageTitle.scss';

const ImageTitle = ({ imageTitle }) => {
  return (
    <div>
      <div class='jumbotron jumbotron-fluid section-image'>
        <div className='bg-shadow'>
          <div class='container'>
            <h1 class='display-4'>{imageTitle}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTitle;

import React from 'react';
import ImageTitle from '../image-title/ImageTitle';

const Lines = () => {
  let imageTitle = 'Lines';
  return (
    <div className='main'>
      <ImageTitle imageTitle={imageTitle} />

      <div>
        <h1 className='linksTitle'>Line</h1>
      </div>
    </div>
  );
};

export default Lines;

import React from 'react';
import ImageTitle from '../image-title/ImageTitle';

const Gear = () => {
  let imageTitle = 'Gear';
  return (
    <div className='main'>
      <ImageTitle imageTitle={imageTitle} />

      <div>
        <h1 className='linksTitle'>Gear</h1>
      </div>
    </div>
  );
};

export default Gear;

import React from 'react';
import ImageTitle from '../image-title/ImageTitle';

const RodsReels = () => {
  let imageTitle = 'Rods & Reels';
  return (
    <div className='main'>
      <ImageTitle imageTitle={imageTitle} />

      <div>
        <h1 className='linksTitle'>Rods & Reels</h1>
      </div>
    </div>
  );
};

export default RodsReels;

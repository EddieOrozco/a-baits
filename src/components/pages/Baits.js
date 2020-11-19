import React from 'react';
import ImageTitle from '../image-title/ImageTitle';

const Baits = () => {
  let imageTitle = 'Baits';
  return (
    <div className='main'>
      <ImageTitle imageTitle={imageTitle} />

      <div>
        <h1 className='linksTitle'>Live and Hand Crafted Baits</h1>
      </div>
    </div>
  );
};

export default Baits;

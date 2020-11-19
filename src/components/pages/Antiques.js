import React from 'react';
import ImageTitle from '../image-title/ImageTitle';

const Antiques = () => {
  let imageTitle = 'Antiques';
  return (
    <div className='main'>
      <ImageTitle imageTitle={imageTitle} />

      <div>
        <h1 className='linksTitle'>Antiques</h1>
      </div>
    </div>
  );
};

export default Antiques;

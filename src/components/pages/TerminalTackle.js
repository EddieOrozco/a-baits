import React from 'react';
import ImageTitle from '../image-title/ImageTitle';

const TerminalTackle = () => {
  let imageTitle = 'Terminal Tackle';
  return (
    <div className='main'>
      <ImageTitle imageTitle={imageTitle} />

      <div>
        <h1 className='linksTitle'>Terminal Tackle</h1>
      </div>
    </div>
  );
};

export default TerminalTackle;

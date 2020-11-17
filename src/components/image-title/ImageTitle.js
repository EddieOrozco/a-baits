import React from 'react';
import './ImageTitle.scss';

const ImageTitle = () => {
  return (
    <div>
      <div
        class='jumbotron jumbotron-fluid section-image'
        style={{
          background: '#fff',
          textAlign: 'center',
          backgroundImage: `url('//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3jkudlc7u70kh.cloudfront.net%2Ffish-fact.jpg&f=1&nofb=1')`,
          backgroundRepeat: ' no-repeat',
          width: '100%',
          backgroundSize: '100% 100%',
          height: '450px',
          marginBottom: '6rem',
        }}
      >
        <div class='container'>
          <h1
            class='display-4'
            style={{
              paddingTop: '100px',
            }}
          >
            Page Title
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageTitle;

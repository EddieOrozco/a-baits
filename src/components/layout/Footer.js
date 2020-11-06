import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'black',
        color: '#fff',
        hight: '50px',
        textAlign: 'center',
        padding: '50px 0',
      }}
    >
      <div className='container'>
        <div>
          <p>Footer</p>
          <ul>
            <li>Facebook</li>
          </ul>
        </div>
        <div className='copyright'>
          <strong>
            &copy; <span>2020</span> <span>EddTheDev</span>
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

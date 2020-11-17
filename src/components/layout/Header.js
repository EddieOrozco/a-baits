import React from 'react';

const Header = () => {
  return (
    <div
      className='jumbotron jumbotron-fluid '
      style={{
        height: '100vh',
        background: 'black',
        textAlign: 'center',
        paddingTop: '250px',
        color: '#fff',
        borderRadius: 'none',
      }}
    >
      {/* <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/396137_442183322470977_1839066107_n.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=WhzcEZbtOnIAX9_VsyZ&_nc_ht=scontent-dfw5-2.xx&oh=e6b24faaf1e0e0016e5b83cd422308cb&oe=5FC7CA8A" alt=""/> */}
      <div className='container'>
        <h1 className='display-4'>A Baits & Tackle</h1>
        <p className='lead'>Cast out and Catch us at our Lockport Location</p>
        {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
      </div>
    </div>
  );
};

export default Header;

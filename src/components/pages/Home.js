import React from 'react';
import Header from '../layout/Header';
import Cards from '../cards/Cards';
import AntiquesReminder from '../layout/AntiquesReminder';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Cards />
      <AntiquesReminder />
    </div>
  );
};

export default Home;

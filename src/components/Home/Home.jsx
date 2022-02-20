import React from 'react';
// letters
import RRSS from '../components/Home/RRSS';

const Home = () => {
  return (
    <div className='container-red'>
      <section className='home base-container'>
        <RRSS />
        <div className='home__name'>
          <span>A</span>
          <span>N</span>
          <span>G</span>
          <span>E</span>
          <span>L</span>
          <span>A</span>
        </div>
      </section>
    </div>
  );
};

export default Home;

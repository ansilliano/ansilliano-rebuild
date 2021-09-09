import React from 'react';
// letters
import RRSS from '../components/Home/RRSS';

const Home = () => {
  return (
    <div className='container-red'>
      <section className='home base-container'>
        <RRSS />
        <div className='home__name'>
          <p>Angela</p>
          <p>Illiano</p>
          {/* <Angela width='900' /> */}
          {/* <Illiano width='1158' /> */}
        </div>
      </section>
    </div>
  );
};

export default Home;

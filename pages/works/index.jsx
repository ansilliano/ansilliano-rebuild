import Image from 'next/image';
import React from 'react';
import Contact from '../../src/components/Contact';
import CustomHead from '../../src/components/Utils/CustomHead';
import CardWork from '../../src/components/Works/CardWork';
import DailyUI from '../../src/components/Works/icons/DailyUI';
import Pika from '../../src/components/Works/icons/Pika';
import RocketFroz from '../../src/components/Works/icons/RocketFroz';
// db
import db from '../../src/db.json';
// icons components
import doodle from '/public/assets/img/work-doodle.svg';

// icons
const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const Works = () => {
  return (
    <>
      <CustomHead title='Experiments' />

      <div className='base-container'>
        <Contact />
        <section className='about base-container'>
          <h2 className='h2-title'>This is my work!</h2>
          <div className='text-intro'>
            <article className='about__intro'>
              <div className='work__text'>
                <p>
                  Most of my experience is linked to the area of{' '}
                  <span>architecture</span>, however, I’ve done freelance work
                  related more to graphic design, branding, and UX/UI design.
                </p>
                <p>
                  Since I began to educate myself and become more involved with
                  the tech world, I could immediately realize that this is where
                  I want to be due to its <strong>exponential growth</strong>. I
                  don&lsquo;t know what the future will hold but I do know that
                  with the best disposition on my part and thirst for knowledge,
                  it is an industry in which you never stop growing..
                </p>
              </div>
            </article>
          </div>
          <div className='doodle-img'>
            <Image src={doodle} alt='about-doodle' />
          </div>
        </section>
        <div className='cards-works'>
          <section className='grid-works'>
            {db.projects.map(
              ({ id, color, title, hoverColor, Children, route }) => (
                <CardWork
                  path='works'
                  key={id}
                  id={id}
                  color={color}
                  title={title}
                  route={route}
                  Children={React.createElement(icons[Children], {})}
                  hoverColor={hoverColor}
                />
                // eslint-disable-next-line comma-dangle
              )
            )}
            <CardWork />
          </section>
        </div>
      </div>
    </>
  );
};

export default Works;

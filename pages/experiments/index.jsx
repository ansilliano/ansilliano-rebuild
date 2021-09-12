import Image from 'next/image';
import React from 'react';
import Contact from '../../src/components/Contact';
import Branding from '../../src/components/Experiments/icons/Branding';
import Illustration from '../../src/components/Experiments/icons/Illustration';
import Sketching from '../../src/components/Experiments/icons/Sketching';
import Windsurf from '../../src/components/Experiments/icons/Windsurf';
import CustomHead from '../../src/components/Utils/CustomHead';
import CardWork from '../../src/components/Works/CardWork';
// db
import db from '../../src/db.json';
// icons components
import doodle from '/public/assets/img/experiments-doodle.svg';

// icons
const icons = {
  illustration: Illustration,
  branding: Branding,
  windsurf: Windsurf,
  sketching: Sketching,
};

const Experiments = () => (
  <>
    <CustomHead title='Experiments' />

    <div className='base-container'>
      <Contact />
      <section className='about base-container'>
        <h2 className='h2-title'>some experiments!</h2>
        <div className='text-intro'>
          <article className='about__intro'>
            <div className='work__text'>
              <p>
                There are those who say that we must find our passion but with
                so many options in life, how to choose just one?.
              </p>
              <p>
                I consider myself a curious, creative person and always with the
                active <span>desire to learn</span> new things. That is why in
                my life I like to constantly experiment in different fields
                (personal, professional, academic, etc.)
              </p>
              <p>
                I decided to create this space to share those experiments that
                I’ve enjoyed in life and that have helped me to be the{' '}
                <span>Angela</span> that I am today.
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
          {db.experiments.map(
            ({ id, color, title, hoverColor, Children, route }) => (
              <CardWork
                path='experiments'
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

export default Experiments;

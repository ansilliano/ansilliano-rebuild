import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import React, { useContext } from 'react';
import Education from '../../src/components/About/Education/Education';
import Experiencie from '../../src/components/About/Experiencie';
import Aiesec from '../../src/components/About/Experiencie/Aiesec';
import Future from '../../src/components/About/Experiencie/Future';
import Petararte from '../../src/components/About/Experiencie/Petararte';
import Platzi from '../../src/components/About/Experiencie/Platzi';
import Spain from '../../src/components/About/Experiencie/Spain';
import Tecma from '../../src/components/About/Experiencie/Tecma';
import Contact from '../../src/components/Contact';
import Modal from '../../src/components/Modal';
import { AppContext } from '../../src/context/AppContext';
import doodle from '/public/assets/img/about-me-doodle.svg';

const components = {
  future: Future,
  petararte: Petararte,
  platzi: Platzi,
  tecma: Tecma,
  spain: Spain,
  aiesec: Aiesec,
};

const About = () => {
  const router = useRouter();

  console.log(router);

  const { state, handleModal, removeModal } = useContext(AppContext);
  const { isOpen, element } = state;

  if (!router.isReady) {
    return <h1>...loading</h1>;
  }

  return (
    <>
      <Head>
        <title>Angela Illiano | About</title>
      </Head>
      <div className='base-container'>
        <Contact />
        <section className='about base-container'>
          <h2 className='h2-title'>this is about me</h2>
          <div className='text-intro'>
            <article className='about__intro'>
              <div className='intro__text'>
                <p>Hello!</p>
                <p>
                  I&#39;m <b>Angela Illiano</b>. UI Designer, Architect, and
                  Product Designer in progress.
                </p>
                <p>
                  During my academic career, most of the works were linked to
                  urban design, social projects, and interventions in public
                  space, however, in the world of work, the architecture
                  industry (especially in construction) was not what I expected
                  for me. For this reason, I am <strong>pivoting</strong>{' '}
                  towards the technology area with the aim of merging my
                  knowledge about architecture and my passion for design.
                </p>
                <p>...and leave the world better than I found it</p>
              </div>
            </article>
          </div>
          <div className='doodle-img'>
            <Image src={doodle} alt='about-doodle' />
          </div>
          <div className='experiencie-container'>
            <h2 className='h2-title'>experiencie...</h2>
            <span>(this is not a time line)</span>
            <article className='about__experiencie'>
              <Modal id='modal' isOpen={isOpen} removeModal={removeModal} />
              <Experiencie handleModal={handleModal}>
                {element && React.createElement(components[element.id])}
              </Experiencie>
            </article>
          </div>
          <div className='education-container '>
            <h2 className='h2-title'>Education...</h2>
            <article className='about__education'>
              <Education />
            </article>
          </div>
          <div className='tools-container'>
            <article className='about__tools container_aux'>
              <div className='tools__container'>
                <div className='tool'>
                  <h3 className='h2-small'>tools</h3>
                  <div>Figma</div>
                  <div>Illustrator</div>
                  <div>Adobe XD</div>
                  <div>Photoshop</div>
                  <div>Paper & Pencil</div>
                  <div>
                    CSS / HTML <span>(basic)</span>
                  </div>
                  <div>AutoCad</div>
                </div>
                <div className='skill'>
                  <h3 className='h2-small'>skills</h3>
                  <div>Visual Design</div>
                  <div>Wireframing</div>
                  <div>Prototyping</div>
                  <div>Branding</div>
                  <div>User Research</div>
                </div>
                <div className='general'>
                  <h3 className='h2-small'>general</h3>
                  <div>Adaptability</div>
                  <div>
                    Creativity
                    <span>and humorous</span>
                  </div>
                  <div>Critical Thinking</div>
                  <div>Patience</div>
                  <div>Empathy</div>
                  <div>Resiliencie</div>
                  <div>Desire to Learn</div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

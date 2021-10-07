// component
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Contact from '../../src/components/Contact';
import CardWork from '../../src/components/Works/CardWork';
import DailyUI from '../../src/components/Works/icons/DailyUI';
// icons
import Pika from '../../src/components/Works/icons/Pika';
import RocketFroz from '../../src/components/Works/icons/RocketFroz';
// db
import db from '../../src/db.json';
// doodle
import doodle from '/public/assets/img/work-doodle.svg';

const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

export async function getServerSideProps({ req, ...args }) {
  const { resolvedUrl } = args;

  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      isMobile,
    },
  };
}

const Works = ({ isMobile }) => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   if (isMobile) {
  //     document.location = `https://ansilliano.com/${router.pathname}`;
  //   }
  //   setLoading(false);
  // }, [isMobile, router.pathname]);

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      <Head>
        <title>Angela Illiano | Works</title>
      </Head>

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
              ({ color, title, Children, hoverColor, id, route }) => (
                <CardWork
                  path='works'
                  key={id}
                  id={id}
                  color={color}
                  title={title}
                  Children={React.createElement(icons[Children], {})}
                  hoverColor={hoverColor}
                  route={route}
                />
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

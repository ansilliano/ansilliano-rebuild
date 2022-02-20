import Head from 'next/head';
import { useState } from 'react';
import Footer from '../src/components/Footer';
import RRSS from '../src/components/Home/RRSS';
import NavLink from '../src/utils/NavLink';

export async function getServerSideProps({ req, ...args }) {
  const { resolvedUrl } = args;

  console.log(resolvedUrl);
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

export default function Home({ isMobile }) {
  const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   if (isMobile) {
  //     document.location = 'https://m.ansilliano.com/';
  //   }
  //   setLoading(false);
  // }, [isMobile]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      <Head>
        <meta charSet='utf-8' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Angela Illiano portafolio and website'
        />

        <title>Angela Illiano | Home</title>
      </Head>

      <div className='container-red'>
        <section className='home base-container mobile-home-container'>
          <RRSS />
          <div className='home__name home__name--mobile'>
            <div>
              <span className='letter_wave'>A</span>
              <span className='letter_wave'>N</span>
              <span className='letter_wave'>G</span>
              <span className='letter_wave'>E</span>
              <span className='letter_wave'>L</span>
              <span className='letter_wave'>A</span>
              <span className='letter_wave show hidden'></span>
              <span className='letter_wave show hidden'></span>
              <span className='letter_wave show hidden'></span>
              <span className='letter_wave'>I</span>
              <span className='letter_wave'>L</span>
              <span className='letter_wave'>L</span>
              <span className='letter_wave'>I</span>
              <span className='letter_wave'>A</span>
              <span className='letter_wave'>N</span>
              <span className='letter_wave'>O</span>
            </div>
          </div>
          <div className='home__menu--mobile menu__items--mobile'>
            <NavLink href='/about' activeClassName='active-link'>
              <a className='mobile-menu'>About me</a>
            </NavLink>
            <NavLink href='/works' activeClassName='active-link'>
              <a className='mobile-menu'>Works</a>
            </NavLink>
            <NavLink href='/experiments' activeClassName='active-link'>
              <a className='mobile-menu'>Experiments</a>
            </NavLink>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

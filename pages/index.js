import Head from 'next/head';
import RRSS from '../src/components/Home/RRSS';

export default function Home() {
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
        <section className='home base-container'>
          <RRSS />
          <div className='home__name'>
            <p>
              Angela
              {/* <span>A</span>
              <span>N</span>
              <span>G</span>
              <span>E</span>
              <span>L</span>
              <span>A</span> */}
            </p>
            <p>
              Illiano
              {/* <span>I</span>
              <span>L</span>
              <span>L</span>
              <span>I</span>
              <span>A</span>
              <span>N</span>
              <span>O</span> */}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

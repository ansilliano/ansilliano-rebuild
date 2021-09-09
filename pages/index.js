import Head from 'next/head';
import RRSS from '../src/components/Home/RRSS';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='../public/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Angela Illiano portafolio and website'
        />
        <link rel='manifest' href='/public/manifest.json' />

        <title>Angela Illiano | Home</title>
      </Head>

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
    </>
  );
}

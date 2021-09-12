import Head from 'next/head';
import Layout from '../src/components/Layout';
import AppProvider from '../src/context/AppContext';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='../public/assets/images/favicon.svg'
        />
        <link
          rel='icon'
          type='image/png'
          href='../public/assets/images/favicon.png'
        />
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp;

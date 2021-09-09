import Layout from '../src/components/Layout';
import AppProvider from '../src/context/AppContext';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;

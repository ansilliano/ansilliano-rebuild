import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Header />
      {children}

      {pathname !== '/' && (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;

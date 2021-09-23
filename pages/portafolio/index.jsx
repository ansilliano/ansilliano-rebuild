import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Loader from '../../src/components/Loader/Loader';

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

const Portafolio = ({ isMobile }) => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isMobile) {
      document.location = `https://m.ansilliano.com/`;
    } else {
      document.location = `https://ansilliano.com/`;
    }
    setLoading(false);
  }, [isMobile, router.pathname]);

  if (isLoading) {
    return <Loader />;
  }

  return <Loader />;
};

export default Portafolio;

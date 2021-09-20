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

  // if (isMobile) {
  //   return {
  //     redirect: {
  //       destination: `mobile.ansilliano.com/${resolvedUrl}`,
  //     },
  //   };
  // }

  return {
    props: {
      isMobile,
    },
  };
}

const Portafolio = ({ isMobile }) => {
  const router = useRouter();

  useEffect(() => {
    if (isMobile) {
      document.location = `https://m.ansilliano.com/`;
    } else {
      document.location = `https://ansilliano.com/`;
    }
  }, [isMobile, router.pathname]);

  return <div>redirect...</div>;
};

export default Portafolio;

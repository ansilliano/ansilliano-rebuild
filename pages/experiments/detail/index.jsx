import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Contact from '../../../src/components/Contact';
import BrandingPage from '../../../src/components/Experiments/BrandingPage';
import BrandingIcon from '../../../src/components/Experiments/icons/Branding';
import IllustrationIcon from '../../../src/components/Experiments/icons/Illustration';
import SketchingIcon from '../../../src/components/Experiments/icons/Sketching';
import WindsurfIcon from '../../../src/components/Experiments/icons/Windsurf';
import IllustrationPage from '../../../src/components/Experiments/IllustrationPage';
import SketchingPage from '../../../src/components/Experiments/SketchingPage';
import WindsurfPage from '../../../src/components/Experiments/WindsurfPage';
import Loader from '../../../src/components/Loader/Loader';
import MenuWork from '../../../src/components/Menu/MenuWork';
import CustomHead from '../../../src/components/Utils/CustomHead';
// db
import db from '../../../src/db.json';
import { titleCase } from '../../../src/helpers/titlecase';

const pageComponent = {
  illustration: IllustrationPage,
  branding: BrandingPage,
  windsurf: WindsurfPage,
  sketching: SketchingPage,
};

const icons = {
  illustration: IllustrationIcon,
  branding: BrandingIcon,
  windsurf: WindsurfIcon,
  sketching: SketchingIcon,
};

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

const DetailExperiments = ({ isMobile }) => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   if (isMobile) {
  //     document.location = `https://m.ansilliano.com/${router.asPath}`;
  //   }
  //   setLoading(false);
  // }, [isMobile, router.asPath]);

  const id = router.query['id'];
  const project = router.query['path'];
  const path = 'experiments';

  const { experiments } = db;
  const { Children } = experiments.find((item) => item.id === Number(id));

  if (!id) {
    return <Loader />;
  }

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      <CustomHead title={titleCase(project)} />
      <div className='base-container'>
        <Contact />
        <MenuWork items={experiments} icons={icons} path={path} />
      </div>
      <section>{React.createElement(pageComponent[Children])}</section>
    </>
  );
};

export default DetailExperiments;

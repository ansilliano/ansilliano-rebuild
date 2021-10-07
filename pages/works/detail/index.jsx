import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import Contact from '../../../src/components/Contact';
import Loader from '../../../src/components/Loader/Loader';
import MenuWork from '../../../src/components/Menu/MenuWork';
import Modal from '../../../src/components/Modal';
import CustomHead from '../../../src/components/Utils/CustomHead';
import DailyUIPage from '../../../src/components/Works/DailyUI';
import Frozen from '../../../src/components/Works/Frozen';
import DailyUI from '../../../src/components/Works/icons/DailyUI';
import Pika from '../../../src/components/Works/icons/Pika';
import RocketFroz from '../../../src/components/Works/icons/RocketFroz';
import PikaPage from '../../../src/components/Works/Pika';
import { AppContext } from '../../../src/context/AppContext';
import db from '../../../src/db.json';
import { titleCase } from '../../../src/helpers/titlecase';

const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const pageComponent = {
  dailyui: DailyUIPage,
  pika: PikaPage,
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

const DetailWork = ({ isMobile }) => {
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
  const path = 'works';

  const { removeModal, state, handleModal } = useContext(AppContext);
  const { isOpen, openFrozen } = state;

  const { projects } = db;
  const { Children } = projects.find((item) => item.id === Number(id));

  if (!id) {
    return <Loader />;
  }

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      <CustomHead title={titleCase(project)} />
      <Modal id='modal' isOpen={isOpen} removeModal={removeModal}>
        <Frozen isVisible={openFrozen} left='110px' bottom='85px' />
      </Modal>
      <div className='base-container'>
        <Contact />
        <MenuWork
          items={projects}
          icons={icons}
          path={path}
          isOpen={isOpen}
          handleModal={handleModal}
        />
      </div>
      <section>{React.createElement(pageComponent[Children])}</section>
    </>
  );
};

export default DetailWork;

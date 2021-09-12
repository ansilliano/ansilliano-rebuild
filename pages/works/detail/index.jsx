import { useRouter } from 'next/router';
import React, { useContext } from 'react';
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

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const pageComponent = {
  dailyui: DailyUIPage,
  pika: PikaPage,
};

const DetailWork = () => {
  const router = useRouter();
  const id = router.query['id'];
  const project = router.query['path'];
  const path = 'works';

  const { removeModal, state, handleModal } = useContext(AppContext);
  const { isOpen, openFrozen } = state;

  const { projects } = db;

  if (!id) {
    return <Loader />;
  }

  const titleCase = (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  };

  const { Children } = projects.find((item) => item.id === Number(id));

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

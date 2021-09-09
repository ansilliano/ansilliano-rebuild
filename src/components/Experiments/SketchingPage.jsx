import React from 'react';
import { sketching } from '../../db.json';
import useModal from '../../hooks/useModal';
import Ai from '../icons/Ai';
import HandDrawing from '../icons/HandDrawing';
import Pencil from '../icons/Pencil';
import Ps from '../icons/Ps';
import Modal from '../Modal';
import ModalImg from '../ModalImg';
import One from '../Works/numbers/One';
import Two from '../Works/numbers/Two';
import TitleHeaders from '../Works/TitleHeaders';
import CardSketching from './CardSketching';

const SketchingPage = () => {
  const [modalState, handleOpen] = useModal();
  const { isOpen, uid, tag, keyTag } = modalState;

  return (
    <div className='work-detail'>
      <Modal id='modal' isOpen={isOpen} removeModal={handleOpen}>
        <ModalImg isOpen={isOpen} uid={uid} tag={tag} keyTag={keyTag} />
      </Modal>
      <div className='experiments'>
        <div className='main_container'>
          <div className='sketching__intro base-container-big'>
            <div className='experiments-container-without-margin work-detail'>
              <div className='sketching__intro--info'>
                <div className='experiments-name-project'>
                  <span>Sketching</span>
                </div>
              </div>
              <div className='line__black' />
              <div className='experiments__description'>
                <div className='project-tools'>
                  <h4>Tools</h4>
                  <div>
                    <Ai size={20} />
                    <Ps size={20} />
                    <HandDrawing size={20} />
                    <Pencil size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='layout-grid layout-max-width'>
          <TitleHeaders
            Children={React.createElement(One, {})}
            title='Sketching'
            subtitle='01_Introduction'
          />
          <div className='dailyUI__text'>
            <p>
              In this section I want to show you a compilation of drawings and
              sketches made in my free time. Drawing is something I like to do
              as a <strong>hobby</strong> and as part of experimenting with
              graphic representation. Drawing by hand is something I do both
              physically and digitally.
            </p>
          </div>
          <TitleHeaders
            side='left'
            Children={React.createElement(Two, { side: 'left' })}
            title='Hand Drawings'
            subtitle='02_Types'
          />
          <div className='dailyUI__container'>
            <div className='illustrations__grid'>
              {sketching.hand.map(
                ({ uid, title, filepath, gridColumn, tag }) => (
                  <CardSketching
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                )
              )}
            </div>
          </div>
          <TitleHeaders
            Children={React.createElement(Two, {})}
            title='Digital Drawings'
            subtitle='02_Types'
          />
          <div className='dailyUI__container grid__container--margin'>
            <div className='illustrations__grid'>
              {sketching.digital.map(
                ({ uid, title, filepath, gridColumn, fitObject, tag }) => (
                  <CardSketching
                    fitObject={fitObject}
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketchingPage;

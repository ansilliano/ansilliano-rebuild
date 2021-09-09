import React from 'react';
import Ai from '../../../src/components/icons/Ai';
import Figma from '../../../src/components/icons/Figma';
import Ps from '../../../src/components/icons/Ps';
import Xd from '../../../src/components/icons/Xd';
import Modal from '../../../src/components/Modal';
import ModalImg from '../../../src/components/ModalImg';
import ButtonLink from '../../../src/components/Works/ButtonLink';
import CardDaily from '../../../src/components/Works/CardDaily';
import One from '../../../src/components/Works/numbers/One';
import Two from '../../../src/components/Works/numbers/Two';
import TitleHeaders from '../../../src/components/Works/TitleHeaders';
// daily db
import { dailyUI } from '../../../src/db.json';
import useModal from '../../../src/hooks/useModal';

const DailyUIPage = () => {
  const [modalState, handleOpen] = useModal();
  const { isOpen, uid, tag, keyTag } = modalState;

  return (
    <div className='work-detail'>
      <div className='dailyUI'>
        <div className='main_container'>
          <div className='dailyUI__intro base-container-big'>
            <div className='base-container-without-margin work-detail'>
              <div className='dailyUI__intro--info'>
                <div className='project-name'>
                  <span>Daily</span>
                  <span>UI</span>
                </div>
              </div>
              <div className='line_black' />
              <div className='dailyUI__description'>
                <div className='project-task'>
                  <h4>Task</h4>
                  <p>Design 100 UI ideas in 100 days.</p>
                </div>
                <div className='project-tools'>
                  <h4>Tools</h4>
                  <div>
                    <Figma size={20} />
                    <Ai size={20} />
                    <Ps size={20} />
                    <Xd size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='layout-grid layout-max-width'>
          <TitleHeaders
            Children={React.createElement(One, {})}
            title='About Daily UI'
            subtitle='01_Introduction'
          />
          <div className='dailyUI__text'>
            <p>
              For <strong>100 days</strong>, I was designing 100 different user
              interface elements for mobile, tablet and web. This project was
              built to provide a fun engaging way to improve my skills as a
              designer, earn rewards, and get feedback from others.
            </p>
          </div>
          <TitleHeaders
            side='left'
            Children={React.createElement(Two, { side: 'left' })}
            title='Mobile'
            subtitle='02_Design'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__grid'>
              <Modal id='modal' isOpen={isOpen} removeModal={handleOpen}>
                <ModalImg isOpen={isOpen} uid={uid} tag={tag} keyTag={keyTag} />
              </Modal>
              {dailyUI.mobile.map(({ tag, uid, filename, filepath, title }) => (
                <CardDaily
                  handleModal={handleOpen}
                  tag={tag}
                  uid={uid}
                  image={filepath}
                  number={filename}
                  title={title}
                  key={uid}
                />
              ))}
            </div>
          </div>
          <TitleHeaders
            Children={React.createElement(Two, {})}
            title='Desktop'
            subtitle='02_Design'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__grid animate__animated'>
              {dailyUI.desktop.map(
                ({ tag, uid, filename, filepath, title }) => (
                  <CardDaily
                    handleModal={handleOpen}
                    tag={tag}
                    uid={uid}
                    image={filepath}
                    number={filename}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                )
              )}
            </div>
          </div>
          <TitleHeaders
            Children={React.createElement(Two, { side: 'left' })}
            title='Miscellaneous'
            subtitle='02_Design'
            side='left'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__grid'>
              {dailyUI.others.map(({ tag, uid, filename, filepath, title }) => (
                <CardDaily
                  handleModal={handleOpen}
                  tag={tag}
                  uid={uid}
                  image={filepath}
                  number={filename}
                  title={title}
                  key={uid}
                />
              ))}
            </div>
          </div>
          <TitleHeaders
            Children={React.createElement(Two, {})}
            title='Animation'
            subtitle='02_Design'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__grid'>
              {dailyUI.gif.map(({ tag, uid, filename, filepath, title }) => (
                <CardDaily
                  handleModal={handleOpen}
                  tag={tag}
                  uid={uid}
                  image={filepath}
                  number={filename}
                  title={title}
                  key={uid}
                />
              ))}
            </div>
          </div>
          <ButtonLink
            text='go to dribbble and see the 100 proposals'
            link='https://dribbble.com/ansilliano'
          />
        </div>
      </div>
    </div>
  );
};

export default DailyUIPage;

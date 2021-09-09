import React from 'react';
import { windsurf } from '../../db.json';
import useModal from '../../hooks/useModal';
import Ai from '../icons/Ai';
import Ps from '../icons/Ps';
import Windsurf from '../icons/Windsurf';
import Modal from '../Modal';
import ModalImg from '../ModalImg';
import One from '../Works/numbers/One';
import Three from '../Works/numbers/Three';
import Two from '../Works/numbers/Two';
import TitleHeaders from '../Works/TitleHeaders';
import CardWindsurf from './CardWindsurf';

const WindsurfPage = () => {
  const [modalState, handleOpen] = useModal();
  const { isOpen, uid, tag, keyTag } = modalState;

  return (
    <div className='work-detail'>
      <Modal id='modal' isOpen={isOpen} removeModal={handleOpen}>
        <ModalImg isOpen={isOpen} uid={uid} tag={tag} keyTag={keyTag} />
      </Modal>
      <div className='experiments'>
        <div className='main_container'>
          <div className='windsurf__intro base-container-big'>
            <div className='experiments-container-without-margin work-detail'>
              <div className='sketching__intro--info'>
                <div className='experiments-name-project'>
                  <span>Windsurf</span>
                </div>
              </div>
              <div className='line__black' />
              <div className='experiments__description'>
                <div className='experiments-project-task'>
                  <h4>Task</h4>
                  <p>Plan and teach basic courses.</p>
                </div>
                <div className='project-tools'>
                  <h4>Tools</h4>
                  <div>
                    <Ai size={20} />
                    <Ps size={20} />
                    <Windsurf size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='layout-grid layout-max-width'>
          <TitleHeaders
            Children={React.createElement(One, {})}
            title='Wissib'
            subtitle='01_Introduction'
          />
          <div className='dailyUI__text'>
            <p>
              The windsurf club at the university where I studied was called:
              <strong>Wissib</strong>. One of the best things I was able to do
              while studying was to belong to the WISSIB sports group. There we
              took care of organizing basic courses, planning the logistics of
              the trips and teaching the participants how to sail. During these
              years I was also in charge of create images to promote the courses
              and all our adventures.
            </p>
          </div>
          <TitleHeaders
            side='left'
            Children={React.createElement(Two, { side: 'left' })}
            title='Basic Courses'
            subtitle='02_Travels'
          />
          <div className='dailyUI__container'>
            <div className='illustrations__grid'>
              {windsurf.basic
                .slice(0, 2)
                .map(({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                ))}
            </div>
            <div className='dailyUI__text'>
              <p>
                Our adventure began at the Simon Bolivar University, where we
                met and got to know the participants a little. When we had given
                an introduction and the equipment were already in the cars, it
                was time to go.
              </p>
            </div>
          </div>
          <div className='dailyUI__container'>
            <div className='illustrations__grid'>
              {windsurf.basic
                .slice(2, 3)
                .map(({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                ))}
            </div>
            <div className='dailyUI__text'>
              <p>
                After 3 - 4 hours, we reached our destination: Morrocoy National
                Park.
              </p>
            </div>
          </div>
          <div className='dailyUI__container'>
            <div className='illustrations__grid'>
              {windsurf.basic
                .slice(3, 5)
                .map(({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                ))}
            </div>
            <div className='dailyUI__text'>
              <p>
                We would settle in an area called &quot;Punta Suánchez&quot; and
                we began to assemble the sails, the tent and all the equipment
                in general.
              </p>
            </div>
          </div>
          <div className='dailyUI__container'>
            <div className='illustrations__grid'>
              {windsurf.basic
                .slice(5, 10)
                .map(({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                ))}
            </div>
            <div className='dailyUI__text'>
              <p>
                Having all the equipment ready, we started the first
                introductory talk. There we talked about all the necessary
                theory about the equipment and the conditions to navigate. Also,
                some safety tips.
              </p>
            </div>
          </div>
          <div className='dailyUI__container'>
            <div className='illustrations__grid'>
              {windsurf.basic
                .slice(10, 13)
                .map(({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                ))}
            </div>
            <div className='dailyUI__text'>
              <p>
                First dip in the water! At this stage, our goal was for the
                participants to have their first contact with the windsurf board
                and practice their balance a bit before beginning to understand
                how to navigate.
              </p>
            </div>
          </div>
          <div className='dailyUI__container'>
            <div className='illustrations__grid'>
              {windsurf.basic
                .slice(13, 20)
                .map(({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                ))}
            </div>
            <div className='dailyUI__text'>
              <p>
                By this point everyone was excited and eager to sail so
                practical class began. In some cases, the participants achieved
                the basic functioning of the equipment when sailing in a few
                hours and in other cases, small accidents occurred that made the
                afternoon more fun.
              </p>
            </div>
          </div>
          <div className='dailyUI__container'>
            <div className='illustrations__grid'>
              {windsurf.basic
                .slice(20, 26)
                .map(({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
                    gridColumn={gridColumn}
                    handleModal={handleOpen}
                    uid={uid}
                    tag={tag}
                    image={filepath}
                    title={title}
                    key={uid}
                  />
                  // eslint-disable-next-line comma-dangle
                ))}
            </div>
          </div>
          <TitleHeaders
            Children={React.createElement(Two, {})}
            title='Miscellaneous'
            subtitle='02_Travels'
          />
          <div className='dailyUI__container'>
            <div className='dailyUI__text'>
              <p>
                The basic courses were not the only trips we made, every time we
                could visit Adícora, Lecherías and Playa El Yaque. Three amazing
                places. During these years I learned a lot about logistics,
                management, administration and pedagogy, but the greatest thing
                was having made friends with amazing people.
              </p>
            </div>
            <div className='illustrations__grid'>
              {windsurf.miscellaneous.map(
                ({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
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
            side='left'
            Children={React.createElement(Three, { side: 'left' })}
            title='Flyers'
            subtitle='03_Design'
          />
          <div className='dailyUI__container grid__container--margin'>
            <div className='dailyUI__text'>
              <p>
                One of the activities I also did was generate publicity for all
                the courses we did and for other events. I show you a
                compilation of some works
              </p>
            </div>
            <div className='illustrations__grid'>
              {windsurf.flyers.map(
                ({ uid, title, filepath, gridColumn, tag }) => (
                  <CardWindsurf
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

export default WindsurfPage;

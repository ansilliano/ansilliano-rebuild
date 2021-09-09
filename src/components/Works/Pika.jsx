import React from 'react';
import Ai from '../icons/Ai';
import Figma from '../icons/Figma';
import Ps from '../icons/Ps';
import Xd from '../icons/Xd';
import ImageLoad from '../ImageLoad';
import BoxMetodology from './BoxMetodology';
import ButtonLink from './ButtonLink';
import InfoPika from './InfoPika';
import One from './numbers/One';
import Three from './numbers/Three';
import Two from './numbers/Two';
import PikaLogo from './PikaLogo';
import Shape from './Shape';
import TitleHeaders from './TitleHeaders';

const PikaPage = () => {
  const implementation = [
    {
      subtitle: 'Testing',
      text: [
        { id: 1, text: 'Usability testing.' },
        { id: 2, text: 'Audit process.' },
      ],
    },
  ];
  const inspiration = [
    {
      itemId: 1,
      subtitle: 'Discovery',
      text: [
        { id: 1, text: 'Requirements understanding.' },
        { id: 2, text: 'Idea creation.' },
      ],
      grid: '1/2',
    },
    {
      itemId: 2,
      subtitle: 'Research',
      text: [
        { id: 1, text: 'User persona.' },
        { id: 2, text: 'User flow.' },
      ],
      grid: '2/-1',
    },
  ];
  const ideation = [
    {
      subtitle: 'Design',
      text: [
        { id: 1, text: 'Design guidelines.' },
        { id: 2, text: 'Sketch wireframing.' },
        { id: 3, text: 'Grayscale wireframing.' },
        { id: 4, text: 'Prototyping.' },
      ],
      grid: '2/-1',
    },
  ];
  const style = {
    gridTemplateRows: '300px',
  };
  return (
    <div className='work-detail'>
      <div className='dailyUI'>
        <div className='main_container'>
          <div className='pika__intro base-container-big'>
            <div className='base-container-without-margin work-detail'>
              <div className='pika__intro--info'>
                <PikaLogo />
              </div>
              <div className='pika_line'>
                <div />
              </div>
              <div className='dailyUI__description'>
                <div className='project-task'>
                  <h4>Task</h4>
                  <p>Design a website to rent apartments.</p>
                </div>
                <div className='project-tools'>
                  <h4>Role</h4>
                  <p>UI Designer.</p>
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
            title='About Pika'
            subtitle='01_Introduction'
          />
          <div className='pika__text'>
            <ImageLoad
              src='https://storage.googleapis.com/assets-portafolio/pika-assets/macbook-mockup.png'
              placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/macbook-mockup.png'
              alt='macbook-pika'
            />
            <div>
              <strong>Pika</strong> was created in 2020 as an exercise for the
              &quot;UI and UX Interface Design Fundamentals Course&quot;.
              <br />
              Applying design thinking as the main methodology, it was possible
              to know the needs of users regarding the search for an apartment
              in Chile.
            </div>
          </div>
          <Shape top='1040px' />
          <TitleHeaders
            side='left'
            Children={React.createElement(One, { side: 'left' })}
            title='Challenge'
            subtitle='01_Introduction'
          />
          <div className='dailyUI__text'>
            <p>
              Currently there are more than 10 online platforms that allow the
              search for houses, apartments or offices to buy, sell or rent and
              they are well positioned, however, beyond representing great
              competition, the main challenge is how to reduce the number of
              intermediaries in this process and how to be able to filter the
              search specifically to meet those particular needs of the users.
            </p>
          </div>
          <TitleHeaders
            side='right'
            Children={React.createElement(One)}
            title='Methodology'
            subtitle='01_Introduction'
          />
          <div className='pika__container pika-grid' style={style}>
            <BoxMetodology
              title='inspiration'
              list={inspiration}
              grid='1/7'
              height='100%'
              heightBox='65%'
            />
            <BoxMetodology
              title='ideation'
              list={ideation}
              grid='4/10'
              height='100%'
              heightBox='100%'
              marginTop='0px'
              contextGrid='2/-1'
            />
            <BoxMetodology
              title='implementation'
              list={implementation}
              grid='10/-1'
              height='100%'
              heightBox='65%'
              contextGrid='1/-1'
            />
          </div>
          <TitleHeaders
            side='left'
            Children={React.createElement(Two, { side: 'left' })}
            title='Context'
            subtitle='02_Problem Statement'
          />
          <div className='pika__container pika-grid'>
            <ImageLoad
              classStyle='context__container--img'
              src='https://storage.googleapis.com/assets-portafolio/pika-assets/context-illustration.svg'
              placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/context-illustration.svg'
              alt='context-illustration'
            />
            <div className='context__container'>
              <div className='context__container--problem'>
                <ul>
                  <li>Problem</li>
                  <li>○ Very high rents.</li>
                  <li>
                    ○ Little information about the departments and their
                    characteristics.
                  </li>
                  <li>○ Quality-price ratio.</li>
                </ul>
              </div>
              <div className='context__container--solution'>
                <ul>
                  <li>Solution</li>
                  <li>○ Enviroment-specific information.</li>
                  <li>
                    ○ Curatorship of all departments that join to the platform.
                  </li>
                  <li>○ Specific filtering section.</li>
                </ul>
              </div>
            </div>
          </div>
          <Shape top='3400px' transform={+true} />
          <TitleHeaders
            side='right'
            Children={React.createElement(Two)}
            title='User Persona'
            subtitle='02_Problem Statement'
          />
          <div className='pika__container pika-grid'>
            <div className='user__persona'>
              <ImageLoad
                classStyle='user__persona--img'
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/user-persona-image.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/user-persona-image.png'
                alt='user-persona'
              />
              <div className='user__persona--profile'>
                <p>Catalina Fajardo</p>
                <small>
                  &quot;I am entering a new stage in my life so I need a space
                  for myself and my pets.&quot;
                </small>
              </div>
            </div>
            <div className='user__persona--about'>
              <p>About</p>
              <p>
                Catalina is a designer and lives with her family on the
                outskirts of Santiago, Chile. She usually takes 2 to 3 hours to
                get to and from her work. She has been looking for an apartment
                for a couple of months but she has found it very difficult to
                find something that suits her needs, she has 2 dogs and 2 cats
                and they always reject her for that.
                <br />
                <br />
                <strong>
                  &quot;I am entering a new stage in my life so I need a space
                  for myself and my pets.&quot;
                </strong>
              </p>
            </div>
            <div className='user__persona--goals'>
              <p>Goals</p>
              <ul>
                <li>○ Live alone.</li>
                <li>○ Live close to her work.</li>
                <li>○ Have parks nearby for her pets.</li>
                <li>○ Get a comfortable place at a good price.</li>
              </ul>
            </div>
            <div className='user__persona--painpoints'>
              <p>Pain points</p>
              <ul>
                <li>○ First time renting an apartment.</li>
                <li>○ Very high rents.</li>
                <li>○ She doesn’t want to deal with real estate agents</li>
              </ul>
            </div>
          </div>
          <TitleHeaders
            side='left'
            Children={React.createElement(Two, { side: 'left' })}
            title='Project Goals'
            subtitle='02_Problem Statement'
          />
          <div className='pika__container pika-grid'>
            <InfoPika
              img='https://storage.googleapis.com/assets-portafolio/pika-assets/intuitive.jpg'
              title='Intuitive'
              text='Create a platform that allows the user to be directed exactly where they need it.'
              grid='1/5'
            />
            <InfoPika
              img='https://storage.googleapis.com/assets-portafolio/pika-assets/consistent.jpg'
              title='Consistent'
              text='All content will have the same information and will go through a filter before it can be published.'
              grid='5/9'
            />
            <InfoPika
              img='https://storage.googleapis.com/assets-portafolio/pika-assets/specific.jpg'
              title='Specific'
              text='Filtering section where the search can be optimized according to the needs of the users. In addition, there will always be context information.'
              grid='9/-1'
            />
          </div>
          <TitleHeaders
            side='right'
            Children={React.createElement(Three)}
            title='Wireframes'
            subtitle='03_Design'
          />
          <div className='pika__container pika-grid'>
            <div className='wireframe_home'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/Home.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/Home.png'
                alt='pika-home'
              />
            </div>
            <div className='wireframe_1'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/Home_1.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/Home_1.png'
                alt='pika-home'
              />
            </div>
            <div className='wireframe_central'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/Home_central.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/Home_central.png'
                alt='pika-central'
              />
            </div>
            <div className='wireframe_basic_end_left'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/Home_end_left.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/Home_end_left.png'
                alt='pika-home'
              />
            </div>
            <div className='wireframe_basic_end_right'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/Home_end_right.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/Home_end_right.png'
                alt='pika-home'
              />
            </div>
          </div>
          <Shape top='6950px' />
          <TitleHeaders
            side='left'
            Children={React.createElement(Three, { side: 'left' })}
            title='Guidelines'
            subtitle='03_Design'
          />
          <div className='pika__container pika-grid'>
            <div className='typography'>
              <p className='typography__title'>Typography</p>
              <div className='typography__details'>
                <div>
                  <p>AaBbCc123</p>
                  <p>Montserrat</p>
                </div>
                <div>
                  <p>
                    abcdefghijklmnopqrstuwxyz ABCDEFGHIJKLMNOPQRSTUWXYZ
                    £!@#$%^&*()_+-=[]{};’\,./:”|?
                  </p>
                </div>
              </div>
            </div>
            <div className='typography__info'>
              <div>
                <div className='thin'>
                  <span>AaBbCc123</span>
                  <span>Thin</span>
                </div>
                <div className='extralight'>
                  <span>AaBbCc123</span>
                  <span>ExtraLight</span>
                </div>
                <div className='light'>
                  <span>AaBbCc123</span>
                  <span>Light</span>
                </div>
                <div className='regular'>
                  <span>AaBbCc123</span>
                  <span>Regular</span>
                </div>
                <div className='medium'>
                  <span>AaBbCc123</span>
                  <span>Medium</span>
                </div>
              </div>
              <div>
                <div className='semibold'>
                  <span>AaBbCc123</span>
                  <span>SemiBold</span>
                </div>
                <div className='bold'>
                  <span>AaBbCc123</span>
                  <span>Bold</span>
                </div>
                <div className='extrabold'>
                  <span>AaBbCc123</span>
                  <span>ExtraBold</span>
                </div>
                <div className='black'>
                  <span>AaBbCc123</span>
                  <span>Black</span>
                </div>
              </div>
            </div>
            <p className='typography__text'>
              The old posters and signs in the traditional Montserrat
              neighborhood of Buenos Aires inspired Julieta Ulanovsky to design
              this typeface and rescue the beauty of urban typography that
              emerged in the first half of the twentieth century.
            </p>
            <p className='color'>Color guide</p>
            <div className='color__info'>
              <div>
                <div className='primary'>
                  <span />
                  <span>Primary</span>
                  <span>#902336</span>
                </div>
                <div className='secondary'>
                  <span />
                  <span>Secondary</span>
                  <span>#24556F</span>
                </div>
              </div>
              <div className='colors-grid'>
                <div className='colors'>
                  <span style={{ backgroundColor: '#b04458' }} />
                  <p>#B04458</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#d17989' }} />
                  <p>#D17989</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#e9b2bc' }} />
                  <p>#E9B2BC</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#f3dfe3' }} />
                  <p>#F3DFE3</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#407794' }} />
                  <p>#407794</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#6999b3' }} />
                  <p>#6999B3</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#9dc0d3' }} />
                  <p>#9DC0D3</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#e1f2fb' }} />
                  <p>#E1F2FB</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#868686' }} />
                  <p>#868686</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#afafaf' }} />
                  <p>#AFAFAF</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#d7d7d7' }} />
                  <p>#D7D7D7</p>
                </div>
                <div className='colors'>
                  <span style={{ backgroundColor: '#ebebeb' }} />
                  <p>#EBEBEB</p>
                </div>
              </div>
            </div>
            <TitleHeaders
              Children={React.createElement(Three)}
              title='Prototype'
              subtitle='03_Design'
              side='right'
            />
            <div className='wireframe_central'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/pika_prototype_home.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/pika_prototype_home.png'
                alt='prototype-home'
              />
            </div>
            <div className='wireframe_central'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/pika_prototype_4.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/pika_prototype_4.png'
                alt='prototype-4'
              />
            </div>
            <div className='wireframe_central'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/pika_prototype_3.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/pika_prototype_3.png'
                alt='prototype-3'
              />
            </div>
            <div className='wireframe_central'>
              <ImageLoad
                src='https://storage.googleapis.com/assets-portafolio/pika-assets/pika_prototype_2.png'
                placeholder='https://storage.googleapis.com/assets-portafolio/pika-assets/pika_prototype_2.png'
                alt='prototype-2'
              />
            </div>
          </div>
          <ButtonLink
            text='go to prototype'
            link='https://xd.adobe.com/view/f2a6ca61-22a5-4c8e-bc69-818785476879-a7f5/'
          />
        </div>
      </div>
    </div>
  );
};

export default PikaPage;

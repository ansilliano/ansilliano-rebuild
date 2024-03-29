import Image from 'next/image';
import React from 'react';
import Ai from '../icons/Ai';
import Figma from '../icons/Figma';
import Notion from '../icons/Notion';
import Ps from '../icons/Ps';
import Xd from '../icons/Xd';
import ImageLoad from '../ImageLoad';
import CustomHead from '../Utils/CustomHead';
import One from '../Works/numbers/One';
import Two from '../Works/numbers/Two';
import TitleHeaders from '../Works/TitleHeaders';
import Colors from './branding/Colors';
import Marca from './branding/Marca';
import DivergenteLogo from '/public/assets/branding/divergente_logo.svg';
import KemusLogo from '/public/assets/branding/kemus_logo.svg';

const BrandingPage = () => {
  const colors = [
    {
      id: 1,
      color: '#405D63',
    },
    {
      id: 2,
      color: '#5DACA9',
    },
    {
      id: 3,
      color: '#7B858E',
    },
    {
      id: 4,
      color: '#9E9BAB',
    },
    {
      id: 5,
      color: '#2B2B33',
    },
    {
      id: 6,
      color: '#E04B00',
    },
  ];
  const colorsKemus = [
    {
      id: 1,
      color: '#0E1C26',
    },
    {
      id: 2,
      color: '#12547B',
    },
    {
      id: 3,
      color: '#CBE4F7',
      colorText: '#363636',
    },
    {
      id: 4,
      color: '#F9F9F9',
      colorText: '#363636',
    },
    {
      id: 5,
      color: '#FDD13D',
      colorText: '#363636',
    },
  ];

  return (
    <>
      <CustomHead title='Branding' />
      <div className='work-detail'>
        <div className='dailyUI'>
          <div className='main_container'>
            <div className='branding__intro base-container-big'>
              <div className='experiments-container-without-margin work-detail'>
                <div className='sketching__intro--info'>
                  <div className='experiments-name-project'>
                    <span>Branding</span>
                  </div>
                </div>
                <div className='line__black' />
                <div className='experiments__description'>
                  <div className='experiments-project-task'>
                    <h4>Task</h4>
                    <p>Design a brand guidelines as a freelancer.</p>
                  </div>
                  <div className='project-tools'>
                    <h4>Tools</h4>
                    <div>
                      <Figma size={20} />
                      <Ai size={20} />
                      <Xd size={20} />
                      <Ps size={20} />
                      <Notion size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='layout-grid layout-max-width'>
            <TitleHeaders
              Children={React.createElement(One, {})}
              title='Brand Design'
              subtitle='01_Introduction'
            />
            <div className='dailyUI__text'>
              <p>
                In this section I want to show you a compilation of works
                related to <strong>Brand creation</strong> that I did as a
                freelance worker. I used tools like Notion, Figma and
                Illustrator to create the proposals and share with clients. I
                also applied design thinking as a methodology to understand the
                client&lsquo;s needs, explore possibilities and materialize a
                final proposal.
              </p>
            </div>
            <TitleHeaders
              side='left'
              Children={React.createElement(Two, { side: 'left' })}
              title='Convergente'
              subtitle='02_Design'
            />
            <div className='dailyUI__container'>
              <div className='divergente__logo'>
                <Image src={DivergenteLogo} alt='divergente--logo' />
              </div>
            </div>
            <div className='branding__container--line'>
              <p>Variaciones</p>
            </div>
            <div className='branding__container'>
              <Marca />
            </div>
            <div className='branding__container--line'>
              <p>Colores</p>
            </div>
            <div className='branding__colores branding__container'>
              {colors.map(({ color, id }) => (
                <Colors key={id} color={color} />
              ))}
            </div>
            <div className='branding__container--line'>
              <p>Tipografía</p>
            </div>
            <div className='branding__tipo branding__container'>
              <div className='tipography_one--jost'>
                <div className='typography--source'>
                  <p className='typography--source__title'>Jost</p>
                  <div className='typography--source__details'>
                    <div>
                      <p>AaBbCcDdEe123</p>
                    </div>
                    <div>
                      <p>
                        abcdefghijklmnopqrstuwxyz ABCDEFGHIJKLMNOPQRSTUWXYZ
                        £!@#$%^&*()_+-=[]{};’\,./:”|?
                      </p>
                    </div>
                  </div>
                  <div className='typography--source__info'>
                    <div>
                      <div className='thin'>
                        <span>Thin</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='extralight'>
                        <span>ExtraLight</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='light'>
                        <span>Light</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='medium'>
                        <span>Medium</span>
                        <span>AaBbCc123</span>
                      </div>
                    </div>
                    <div>
                      <div className='semibold'>
                        <span>SemiBold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='bold'>
                        <span>Bold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='extrabold'>
                        <span>ExtraBold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='black'>
                        <span>Black</span>
                        <span>AaBbCc123</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className='abc-container'>
                  <p>
                    ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžĂÂÊÔăâêô1234567890‘?’“!”%#@/&\+÷×®©$€£¥¢:;,.
                  </p>
                </div> */}
                </div>
              </div>
              <div className='center-line' />
              <div className='tipography_two--source'>
                <div className='typography--source'>
                  <p className='typography--source__title'>Source Serif Pro</p>
                  <div className='typography--source__details'>
                    <div>
                      <p>AaBbCcDdEe123</p>
                    </div>
                    <div>
                      <p>
                        abcdefghijklmnopqrstuwxyz ABCDEFGHIJKLMNOPQRSTUWXYZ
                        £!@#$%^&*()_+-=[]{};’\,./:”|?
                      </p>
                    </div>
                  </div>
                  <div className='typography--source__info'>
                    <div>
                      <div className='thin'>
                        <span>Thin</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='extralight'>
                        <span>ExtraLight</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='light'>
                        <span>Light</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='medium'>
                        <span>Medium</span>
                        <span>AaBbCc123</span>
                      </div>
                    </div>
                    <div>
                      <div className='semibold'>
                        <span>SemiBold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='bold'>
                        <span>Bold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='extrabold'>
                        <span>ExtraBold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='black'>
                        <span>Black</span>
                        <span>AaBbCc123</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className='abc-container'>
                  <p>
                    ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžĂÂÊÔăâêô1234567890‘?’“!”%#@/&\+÷×®©$€£¥¢:;,.
                  </p>
                </div> */}
                </div>
              </div>
            </div>
            <div className='branding__container--line'>
              <p>Aplicaciones de Marca</p>
            </div>
            <div className='branding__container brading__convergente'>
              <div style={{ gridColumn: '1/4' }}>
                <ImageLoad
                  src='https://storage.googleapis.com/ansilliano/branding/branding_01.png'
                  alt='Convergente-1'
                />
              </div>
              <div style={{ gridColumn: '4/-1' }}>
                <ImageLoad
                  src='https://storage.googleapis.com/ansilliano/branding/branding_05.png'
                  alt='Convergente-2'
                />
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <ImageLoad
                  src='https://storage.googleapis.com/ansilliano/branding/branding_04.png'
                  alt='Convergente-3'
                />
              </div>
            </div>
            <TitleHeaders
              Children={React.createElement(Two, {})}
              title='Kemus'
              subtitle='02_Design'
            />
            <div className='dailyUI__container'>
              <div className='divergente__logo' style={{boxShadow: "none"}}>
                <Image src={KemusLogo} alt='divergente--logo' />
              </div>
            </div>
            <div className='branding__container--line'>
              <p>Variacioness</p>
            </div>
            <div className='branding__container brading__convergente'>
              <div style={{ gridColumn: '1/-1' }}>
                <ImageLoad
                  src='https://storage.googleapis.com/ansilliano/branding/kemus_variaciones.png'
                  alt='kemus_variaciones'
                />
              </div>
            </div>
            <div className='branding__container--line'>
              <p>Colores</p>
            </div>
            <div className='branding__colores--kemus branding__container'>
              {colorsKemus.map(({ color, colorText, id }) => (
                <Colors
                  key={id}
                  color={color}
                  height='200px'
                  colorText={colorText}
                />
              ))}
            </div>
            <div className='branding__container--line'>
              <p>Tipografía</p>
            </div>
            <div className='branding__typography--kemus'>
              <div className='tipography_one--jost'>
                <div className='typography--source'>
                  <p className='typography--source__title'>Work Sans</p>
                  <div className='typography--source__details'>
                    <div>
                      <p>AaBbCcDdEe123</p>
                    </div>
                    <div>
                      <p>
                        abcdefghijklmnopqrstuwxyz ABCDEFGHIJKLMNOPQRSTUWXYZ
                        £!@#$%^&*()_+-=[]{};’\,./:”|?
                      </p>
                    </div>
                  </div>
                  <div className='typography--source__info'>
                    <div>
                      <div className='thin'>
                        <span>Thin</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='extralight'>
                        <span>ExtraLight</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='light'>
                        <span>Light</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='medium'>
                        <span>Medium</span>
                        <span>AaBbCc123</span>
                      </div>
                    </div>
                    <div>
                      <div className='semibold'>
                        <span>SemiBold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='bold'>
                        <span>Bold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='extrabold'>
                        <span>ExtraBold</span>
                        <span>AaBbCc123</span>
                      </div>
                      <div className='black'>
                        <span>Black</span>
                        <span>AaBbCc123</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className='abc-container'>
                  <p>
                    ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžĂÂÊÔăâêô1234567890‘?’“!”%#@/&\+÷×®©$€£¥¢:;,.
                  </p>
                </div> */}
                </div>
              </div>
            </div>
            <div className='branding__container--line'>
              <p>Aplicaciones de Marca</p>
            </div>
            <div
              className='branding__container brading__convergente'
              style={{ marginBottom: '50px' }}>
              <div style={{ gridColumn: '1/-1' }}>
                <ImageLoad
                  src='https://storage.googleapis.com/ansilliano/branding/branding_02.png'
                  alt='Kemus-1'
                />
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <ImageLoad
                  src='https://storage.googleapis.com/ansilliano/branding/branding_03.png'
                  alt='Kemus-2'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandingPage;

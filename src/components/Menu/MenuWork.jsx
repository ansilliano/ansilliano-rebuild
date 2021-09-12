import React from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
// import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Arrow from './Arrow';
import MenuItem from './MenuItem';

const MenuWork = ({
  items,
  icons,
  path,
  handleModal = null,
  setVisible = null,
  isOpen = null,
}) => {
  return (
    <div className='menu-work'>
      <div className='arrow-up back'>
        <Arrow deg='90' color='#fff' />
      </div>
      <Swiper
        modules={[Navigation]}
        direction='vertical'
        slidesPerView={3}
        spaceBetween={10}
        navigation={{
          prevEl: '.back',
          nextEl: '.next',
        }}>
        {items.map(({ color, Children, id, route, hoverColor }) => (
          <SwiperSlide key={id} className={`center-items`}>
            <MenuItem
              handleModal={handleModal}
              setVisible={setVisible}
              route={route}
              id={id}
              hoverColor={hoverColor}
              color={color}
              icon={icons[Children]}
              path={path}
              isOpen={isOpen}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='arrow-down  next'>
        <Arrow deg='180deg' color='#fff' />
      </div>
    </div>
  );
};

export default MenuWork;

/* <Swiper
        modules={[Navigation]}
        slidesPerGroup={3}
        slidesPerView={3}
        direction='vertical'
        navigation={{
          prevEl: '.arrow-up',
          nextEl: '.arrow-down',
        }}>
        {items.map(({ color, Children, id, route, hoverColor }) => (
          <SwiperSlide key={id}>
            <MenuItem
              handleModal={handleModal}
              setVisible={setVisible}
              route={route}
              id={id}
              hoverColor={hoverColor}
              color={color}
              icon={icons[Children]}
              path={path}
              isOpen={isOpen}
            />
          </SwiperSlide>
        ))}
      </Swiper> */

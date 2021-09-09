import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
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
  SwiperCore.use(Navigation);
  return (
    <div className='menu-work'>
      <div className='arrow-up'>
        <Arrow deg='90' color='#fff' />
      </div>
      <Swiper
        direction='vertical'
        slidesPerView={3}
        slidesPerGroup={3}
        loop={true}
        navigation={{
          prevEl: '.arrow-up',
          nextEl: '.arrow-down',
        }}>
        {items.map(({ color, Children, id, route, hoverColor }) => (
          <SwiperSlide>
            <MenuItem
              handleModal={handleModal}
              setVisible={setVisible}
              route={route}
              key={id}
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
      <div className='arrow-down'>
        <Arrow deg='180deg' color='#fff' />
      </div>
    </div>
  );
};

export default MenuWork;

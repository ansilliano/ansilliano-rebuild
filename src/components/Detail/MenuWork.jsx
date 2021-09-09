import React from 'react';
// db
import db from '../../db.json';
// icons
import DailyUI from '../Works/icons/DailyUI';
import Pika from '../Works/icons/Pika';
import RocketFroz from '../Works/icons/RocketFroz';
import Arrow from './Arrow';
import MenuItem from './MenuItem';

const icons = {
  dailyui: DailyUI,
  pika: Pika,
  rocketFroz: RocketFroz,
};

const MenuWork = () => {
  return (
    <div className='menu-work'>
      <div className='arrow-up'>
        <Arrow deg='0' />
      </div>
      <div className='carousel-container'>
        <div className='carousel'>
          {db.projects.map(({ color, Children, id }) => (
            <MenuItem key={id} id={id} color={color} icon={icons[Children]} />
          ))}
        </div>
      </div>
      <div className='arrow-down'>
        <Arrow deg='180deg' />
      </div>
    </div>
  );
};

export default MenuWork;

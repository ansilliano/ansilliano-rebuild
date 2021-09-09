import React from 'react';
import Arrow from '../Menu/Arrow';

const ButtonLink = ({ text, link }) => {
  return (
    <>
      <a className='button__link' href={link} target='_blank' rel='noreferrer'>
        {text}
        <Arrow deg='90deg' />
      </a>
    </>
  );
};

export default ButtonLink;

import React from 'react';
import ImageLoad from '../ImageLoad';

const InfoPika = ({ img, title, text, grid }) => {
  const style = {
    gridColumn: grid,
  };
  return (
    <div className='infoPika' style={style}>
      <p>{title}</p>
      <ImageLoad src={img} placeholder={img} alt={title} />
      <p>{text}</p>
    </div>
  );
};

export default InfoPika;

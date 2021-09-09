import React from 'react';
import { GrLocation } from 'react-icons/gr';

const DetailEducation = ({ data, classNameProps }) => {
  const { title, academy, location, year } = data;

  return (
    <div className={`${classNameProps} education__detail`}>
      <h4 className='h4-header'>{title}</h4>
      <div className='education__detail--info'>
        <p className='p-card'>{academy}</p>
        <p className='p-card'>
          <GrLocation />
          {location}
        </p>
        <p className='p-card'>{year}</p>
      </div>
    </div>
  );
};

export default DetailEducation;

import Image from 'next/image';
import React from 'react';
import { GrLocation } from 'react-icons/gr';
import dot from '/public/assets/timeline/dot.svg';

const ExperiencieDown = ({ data, handleModal }) => {
  const { icon, title, subtitle, location, year, label } = data;

  return (
    <div className='detailExperiencie'>
      <div className='detailExperiencie__year'>
        <Image src={icon} alt={title} />
        <p className='p-card'>{year}</p>
      </div>
      <div className='detailExperiencie__dot'>
        <Image src={dot} alt='dot' id={label} onClick={handleModal} />
      </div>
      <div className='detailExperiencie__info'>
        <h4 className='h4-header'>{title}</h4>
        <p className='p-card'>{subtitle}</p>
        <p className='p-card'>
          <GrLocation /> {location}
        </p>
      </div>
    </div>
  );
};

export default ExperiencieDown;

import Image from 'next/image';
import React from 'react';
import ExperiencieDown from './Experiencie/ExperiencieDown';
import computer from '/public/assets/timeline/computer.svg';
import curveLine from '/public/assets/timeline/curve-line.svg';
import globo from '/public/assets/timeline/globo.svg';
import timeline from '/public/assets/timeline/line_timeline.svg';
import pencils from '/public/assets/timeline/pencils.svg';
import tubes from '/public/assets/timeline/tubes.svg';

const downExperiencie = [
  {
    id: 1,
    icon: globo,
    title: 'AIESEC',
    subtitle: 'Volunteer',
    location: 'Medellín, Colombia',
    year: 2017,
    label: 'aiesec',
  },
  {
    id: 2,
    icon: computer,
    title: 'Spain Embassy',
    subtitle: 'Architect',
    location: 'Caracas, Venezuela',
    year: 2018,
    label: 'spain',
  },
  {
    id: 3,
    icon: computer,
    title: 'TECMA',
    subtitle: 'Architect',
    location: 'Santiago, Chile',
    year: 2019,
    label: 'tecma',
  },
  {
    id: 4,
    icon: globo,
    title: 'Pe+Arte',
    subtitle: 'Architect',
    location: 'Caracas, Venezuela',
    year: 2017,
    label: 'petararte',
  },
  {
    id: 5,
    icon: pencils,
    title: 'Platzi',
    subtitle: 'UI Designer',
    location: 'Remote',
    year: 2020,
    label: 'platzi',
  },
  {
    id: 6,
    icon: tubes,
    title: 'Amazing Projects',
    subtitle: 'Product Designer*',
    location: 'Remote',
    year: 2025,
    label: 'future',
  },
];

const Experiencie = ({ children, handleModal }) => {
  return (
    <>
      {children}
      <div className='experiencie_container'>
        <div className='curve-line'>
          <Image src={curveLine} alt='curve-line' />
        </div>
        <div className='timeline'>
          <Image src={timeline} alt='timeline' />
        </div>
        {downExperiencie.map((item) => (
          <ExperiencieDown
            data={item}
            key={item.id}
            handleModal={handleModal}
          />
        ))}
      </div>
    </>
  );
};

export default Experiencie;

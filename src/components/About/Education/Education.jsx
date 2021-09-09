import React from 'react';
import DetailEducation from './DetailEducation';

const education = [
  {
    id: 1,
    title: 'UI Design',
    academy: 'Platzi',
    location: 'Remote',
    year: 2020,
    propsClass: 'item',
  },
  {
    id: 2,
    title: 'Architecture',
    academy: 'Simon Bolivar University',
    location: 'Caracas, Venezuela',
    year: 2018,
    propsClass: 'item_1',
  },
  {
    id: 3,
    title: 'Design & Social Innovation',
    academy: 'CIAP -UCAB',
    location: 'Caracas, Venezuela ',
    year: 2018,
    propsClass: 'item_2',
  },
  {
    id: 4,
    title: 'English B1',
    academy: 'Centro Venezolano Americano',
    location: 'Caracas, Venezuela',
    year: 2017,
    propsClass: 'item_3',
  },
  {
    id: 5,
    title: 'Entrepreneurship',
    academy: 'Retro Manta',
    location: 'Caracas, Venezuela',
    year: 2017,
    propsClass: 'item_4',
  },
];

const Education = () => {
  return (
    <div className='education__grid'>
      {education.map((item) => (
        <DetailEducation
          classNameProps={item.propsClass}
          data={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Education;

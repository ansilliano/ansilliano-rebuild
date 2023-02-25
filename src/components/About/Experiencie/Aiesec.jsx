import Image from 'next/image';
import React from 'react';
import iconModal from '../../../../public/assets/img/experiencie/img-experience.png';

const Aiesec = () => {
  return (
    <div className='experiencie__aiesec experiencie-modal future-modal'>
      <svg
        width={650}
        height={300}
        viewBox='0 0 774 347'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M343.613 344.269c-41.964-1.562-83.054-3.437-132.013-5.937-5.683-.312-11.803-.625-17.485-.625-32.348-1.25-66.444-2.499-94.42-14.061-16.174-6.874-28.414-16.561-34.534-27.185-3.934-7.187-4.808-14.998-6.12-22.498-.437-4.062-.874-8.124-2.185-12.186-1.312-5-3.497-11.249-9.18-15.936-5.246-4.062-12.24-5.937-19.234-8.124-3.497-.938-6.994-1.875-10.49-3.125-8.306-2.812-14.426-8.124-16.612-13.124-1.311-3.75-.437-7.499 2.623-10.936.874-.938 2.186-1.25 3.497-1.25s2.623.625 3.497 1.562c4.808 6.25 12.24 8.124 17.485 8.437 9.617.625 20.983-2.812 27.102-8.437 13.114-11.561 12.24-27.185 10.492-41.871v-.625c-3.06-24.373-6.558-49.37 0-74.056 6.556-24.685 24.042-45.308 50.269-59.057 24.48-13.123 55.953-21.873 98.355-27.497 36.719-5 73.438-6.25 118.025-6.874C366.781.239 412.68-.074 459.016.239h38.03c30.599-.313 62.073-.625 93.109 1.562 34.533 2.187 70.378 5.312 101.852 17.186 30.599 11.561 54.204 32.81 66.881 59.682 7.868 16.248 11.365 34.684 10.928 56.245 2.623 19.373 3.934 39.371 3.934 58.744v1.25c0 30.935-.874 58.745-9.617 85.305-8.305 25.622-27.976 44.37-56.39 54.057-28.85 9.999-62.072 11.249-96.168 11.874-78.247.937-171.793 1.875-267.962-1.875z'
          fill='#fff'
        />
      </svg>
      <div  className='container-modal-left'>
        <Image src={'https://storage.googleapis.com/ansilliano/icons/icons_06.png'} alt='future-img' width={75} height={75} />
        <h5 className='title-card'>AIESEC</h5>
        <span>
          <p>
            We create 2 prototypes of home Ecological Gardens. The purpose of
            the project was to offer homeless an employment opportunity that
            would help them re-enter the labor and social sphere in their
            respective communities within the city of Medellín, Colombia.
          </p>
          <br />
          <p>
            Work team with young people belonging to other cultures. Knowledge
            about Colombian culture and its social reality.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Aiesec;

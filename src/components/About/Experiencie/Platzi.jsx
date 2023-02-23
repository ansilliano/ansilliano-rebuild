/* eslint-disable max-len */
import Image from 'next/image';
import React from 'react';
import iconModal from '/public/assets/img/experiencie/img-experience-4.png';

const Platzi = () => {
  return (
    <div className='experiencie__platzi experiencie-modal future-modal'>
      <svg
        width={650}
        height={323}
        viewBox='0 0 774 323'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M430.887 3.29c41.964 1.447 83.054 3.184 132.013 5.5 5.683.29 11.803.579 17.485.579 32.348 1.158 66.444 2.316 94.42 13.027 16.174 6.369 28.414 15.343 34.534 25.185 3.934 6.659 4.808 13.896 6.12 20.844.437 3.763.874 7.527 2.185 11.29 1.312 4.632 3.497 10.422 9.18 14.764 5.246 3.764 12.24 5.5 19.234 7.527 3.497.868 6.994 1.737 10.491 2.895 8.305 2.605 14.425 7.527 16.611 12.159 1.311 3.473.437 6.947-2.623 10.132-.874.868-2.186 1.158-3.497 1.158s-2.623-.579-3.497-1.448c-4.808-5.79-12.24-7.527-17.485-7.816-9.617-.579-20.983 2.605-27.102 7.816-13.114 10.711-12.24 25.186-10.492 38.792v.579c3.06 22.58 6.557 45.74 0 68.61-6.556 22.87-24.042 41.976-50.27 54.714-24.479 12.158-55.952 20.264-98.354 25.475-36.719 4.632-73.438 5.79-118.025 6.369-34.096.579-79.995.868-126.331.579h-38.03c-30.599.289-62.073.579-93.109-1.448-34.533-2.026-70.378-4.921-101.852-15.922-30.599-10.711-54.204-30.396-66.88-55.293-7.869-15.053-11.366-32.133-10.929-52.108C2.061 179.3.75 160.773.75 142.824v-1.158c0-28.659.874-54.424 9.617-79.03 8.305-23.74 27.976-41.109 56.39-50.083 28.85-9.264 62.072-10.422 96.168-11 78.247-.87 171.793-1.738 267.962 1.736z'
          fill='#fff'
        />
      </svg>
      <div  className='container-modal'>
        <Image src={iconModal} alt='future-img' />
        <h5 className='title-card'>Platzi</h5>
        <span>
          <p>
            With a main focus on the visual field of digital products, this
            career at Platzi allowed me to learn about everything related to
            digital interfaces, to understand beyond aesthetics and to optimize
            methodologies when creating products.
          </p>
          <br />
          <p>
            I also learned that good design solutions don’t depend on some
            technological tool but on the skills we have to solve problems.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Platzi;

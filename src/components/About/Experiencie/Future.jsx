/* eslint-disable max-len */
import Image from 'next/image';
import React from 'react';
import iconModal from '/public/assets/img/experiencie/img-experience-5.png';

const Future = () => {
  return (
    <div className='experiencie__future experiencie-modal future-modal'>
      <svg
        width={650}
        height={319}
        viewBox='0 0 774 319'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M430.887 316.233c41.964-1.434 83.054-3.154 132.013-5.449 5.683-.286 11.803-.573 17.485-.573 32.348-1.147 66.444-2.294 94.42-12.906 16.174-6.309 28.414-15.199 34.534-24.95 3.934-6.596 4.808-13.766 6.12-20.649.437-3.728.874-7.457 2.185-11.185 1.312-4.588 3.497-10.324 9.18-14.626 5.246-3.728 12.24-5.449 19.234-7.457 3.497-.86 6.994-1.72 10.491-2.867 8.305-2.581 14.425-7.457 16.611-12.046 1.311-3.441.437-6.882-2.623-10.037-.874-.86-2.186-1.147-3.497-1.147a5.127 5.127 0 00-3.497 1.434c-4.808 5.735-12.24 7.456-17.485 7.743-9.617.574-20.983-2.581-27.102-7.743-13.114-10.611-12.24-24.951-10.492-38.43v-.574c3.06-22.369 6.557-45.312 0-67.968-6.556-22.657-24.042-41.585-50.27-54.203-24.479-12.046-55.952-20.076-98.354-25.238-36.719-4.588-73.438-5.736-118.025-6.31C407.719.48 361.82.193 315.484.48h-38.03c-30.599-.287-62.073-.573-93.109 1.434-34.533 2.008-70.378 4.876-101.852 15.773C51.894 28.298 28.29 47.8 15.613 72.463 7.743 87.376 4.246 104.297 4.683 124.085 2.061 141.866.75 160.22.75 178.001v1.147c0 28.392.874 53.917 9.617 78.294 8.305 23.516 27.976 40.724 56.39 49.614 28.85 9.177 62.072 10.324 96.168 10.898 78.247.86 171.793 1.721 267.962-1.721z'
          fill='#fff'
        />
      </svg>
      <div div className='container-modal'>
        <Image src={iconModal} alt='future-img' />
        <h5 className='title-card'>Future</h5>
        <span>
          <p>
            My medium goal is to become a product designer, to be immersed in
            the area of technology, working on projects that help human beings
            to optimize their day-to-day or that make this world a more pleasant
            place to live.
          </p>
          <br />
          <p>
            What I enjoy the most about this process is being able to merge
            different passions in order to achieve a goal
          </p>
        </span>
      </div>
    </div>
  );
};

export default Future;

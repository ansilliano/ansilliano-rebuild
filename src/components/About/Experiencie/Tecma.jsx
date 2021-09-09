import Image from 'next/image';
import React from 'react';
import iconModal from '/public/assets/img/experiencie/img-experience-2.png';

const Tecma = () => {
  return (
    <div className='experiencie__tecma experiencie-modal future-modal'>
      <svg
        width={650}
        height={300}
        viewBox='0 0 774 378'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M343.613 3.634c-41.964 1.696-83.054 3.73-132.013 6.444-5.683.34-11.803.679-17.485.679-32.348 1.356-66.444 2.713-94.42 15.263C83.52 33.482 71.28 43.996 65.16 55.528c-3.934 7.802-4.808 16.281-6.12 24.421-.437 4.41-.874 8.819-2.185 13.228-1.312 5.427-3.497 12.211-9.18 17.299-5.246 4.409-12.24 6.444-19.234 8.818-3.497 1.018-6.994 2.035-10.49 3.392-8.306 3.053-14.426 8.819-16.612 14.246-1.311 4.07-.437 8.14 2.623 11.871.874 1.018 2.186 1.357 3.497 1.357s2.623-.679 3.497-1.696c4.808-6.784 12.24-8.819 17.485-9.158 9.617-.678 20.983 3.053 27.102 9.158 13.114 12.55 12.24 29.509 10.492 45.45v.678c-3.06 26.456-6.558 53.591 0 80.386 6.556 26.795 24.042 49.181 50.269 64.105 24.48 14.246 55.953 23.743 98.355 29.848 36.719 5.427 73.438 6.784 118.025 7.462 34.096.679 79.995 1.018 126.331.679h38.03c30.599.339 62.073.678 93.109-1.696 34.533-2.375 70.378-5.766 101.852-18.655 30.599-12.55 54.204-35.614 66.881-64.784 7.868-17.637 11.365-37.649 10.928-61.052 2.623-21.029 3.934-42.737 3.934-63.766v-1.357c0-33.579-.874-63.766-9.617-92.596-8.305-27.813-27.976-48.164-56.39-58.678-28.85-10.854-62.072-12.21-96.168-12.89C533.328.582 439.782-.435 343.613 3.635z'
          fill='#fff'
        />
      </svg>
      <div className='container-modal-left'>
        <Image src={iconModal} alt='future-img' />
        <h5 className='title-card'>Tecma</h5>
        <span>
          <p>
            In Tecma I dedicated myself to elaborate, design and manufacturing
            plans for wooden or aluminum windows, curtain wall and partition
            walls. To carry out surveys, project and cube planes.
          </p>
          <br />
          <p>
            Update information regarding the plans for each project and each
            system and I also learned to use a software called: TechDesign.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Tecma;

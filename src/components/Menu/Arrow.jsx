import React from 'react';

const Arrow = ({ size = '30px', deg, color = '#280206' }) => {
  const style = {
    transform: `rotate(${deg})`,
  };
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={style}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='prefix__feather prefix__feather-arrow-up-circle'
    >
      <circle cx={12} cy={12} r={10} />
      <path d='M16 12l-4-4-4 4M12 16V8' />
    </svg>
  );
};

export default Arrow;

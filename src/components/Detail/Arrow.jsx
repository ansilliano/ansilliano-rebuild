import React from 'react';

const Arrow = ({ size = '30px', deg }) => {
  const style = {
    rotate: deg,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 36 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
    >
      <path
        d='M34.0186 18.0193L17.9996 2.00001L1.9803 18.0193'
        stroke='#5C5C5C'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Arrow;

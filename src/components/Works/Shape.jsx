import React from 'react';

const Shape = ({ size = 1200, top = '1200px', transform = false }) => {
  const styles = {
    gridColumn: '1/-1',
    position: 'absolute',
    top,
  };

  const styleSVG = {
    transform: transform ? 'scaleX(-1) rotate(180deg)' : '',
  };

  return (
    <div style={styles}>
      <svg
        width={size}
        height={963}
        viewBox='0 0 1280 963'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={styleSVG}
      >
        <path
          opacity={0.15}
          d='M999.892 98.426C1078.62-10.89 1226.17-7.473 1280 7.9v954.13H.59V733.816c-7.992-55.227 62.077-166.363 406.282-169.096 430.255-3.416 494.604-329.651 593.02-466.294z'
          fill='#D5C1C1'
        />
      </svg>
    </div>
  );
};

export default Shape;

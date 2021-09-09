import React from 'react';

const TitleHeaders = ({ Children, subtitle, title, side }) => {
  const styles = {
    width: side === 'left' && '100%',
  };

  const pStyle = {
    right: side !== 'left' && 0,
  };

  return (
    <div className='dailyUI__title'>
      {Children}
      <span style={styles}>
        <p style={pStyle}>{subtitle}</p>
        <p style={pStyle}>{title}</p>
      </span>
    </div>
  );
};

export default TitleHeaders;

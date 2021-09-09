import React from 'react';

const Colors = ({ color = '', height = '', colorText = '' }) => {
  const style = {
    height,
    backgroundColor: color,
  };
  return (
    <div style={style} className='color__box'>
      <p style={{ color: colorText }}>{color}</p>
    </div>
  );
};

export default Colors;

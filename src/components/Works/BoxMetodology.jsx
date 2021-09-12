import React from 'react';
import BoxContent from './BoxContent';

const BoxMetodology = ({
  title,
  list,
  grid,
  height,
  heightBox,
  contextGrid,
  marginTop = '25px',
}) => {
  const gridStyles = {
    gridColumn: grid,
    height: heightBox,
    marginTop,
  };

  const box = {
    height,
  };

  return (
    <div className='box__metodology' style={gridStyles}>
      <h5>{title}</h5>
      <div className='box__metodology--info' style={box}>
        {list.map((item, index) => (
          <BoxContent key={index + 1} item={item} contextGrid={contextGrid} />
        ))}
      </div>
    </div>
  );
};

export default BoxMetodology;

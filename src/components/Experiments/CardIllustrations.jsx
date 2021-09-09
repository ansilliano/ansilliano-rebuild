/* eslint-disable operator-linebreak */
import React from 'react';
import useObserver from '../../hooks/useObserver';
import ImageLoad from '../ImageLoad';

const CardIllustrations = ({
  image,
  title,
  handleModal,
  uid,
  gridColumn,
  fitObject,
  tag,
}) => {
  const keyTag = 'illus';

  const [show, element] = useObserver();

  const style = {
    gridColumn,
  };

  return (
    <article
      ref={element}
      className='cardIllustrations--miscellaneous'
      style={style}
      onClick={() => handleModal({ uid, keyTag, tag })}
    >
      {show && (
        <>
          <ImageLoad src={image} alt={title} fitObject={fitObject} />
          <p>{title}</p>
        </>
      )}
    </article>
  );
};

export default CardIllustrations;

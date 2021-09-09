import React from 'react';
import useObserver from '../../hooks/useObserver';
import ImageLoad from '../ImageLoad';

const CardWindsurf = ({
  image,
  title,
  handleModal,
  uid,
  gridColumn,
  fitObject,
  tag,
}) => {
  const keyTag = 'windsurf';

  const [show, element] = useObserver();

  const style = {
    gridColumn,
  };

  return (
    <article
      ref={element}
      className='cardWindsurf'
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

export default CardWindsurf;

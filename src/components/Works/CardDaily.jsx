/* eslint-disable operator-linebreak */
import React from 'react';
import useObserver from '../../hooks/useObserver';
import ImageLoad from '../ImageLoad';

const CardDaily = ({ image, title, number, handleModal, uid, tag }) => {
  const keyTag = 'daily';
  const [show, element] = useObserver();

  return (
    <article
      ref={element}
      className='cardDaily'
      onClick={() => handleModal({ uid, tag, keyTag })}
    >
      {show && (
        <>
          <ImageLoad src={image} alt={title} />
          <p>
            # {number} | {title}
          </p>
        </>
      )}
    </article>
  );
};

export default CardDaily;

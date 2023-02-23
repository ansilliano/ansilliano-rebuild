/* eslint-disable @next/next/no-img-element */
/* eslint-disable operator-linebreak */
import React from 'react';
import { shimmer, toBase64 } from '../../helpers/blurplaceholder';
import useObserver from '../../hooks/useObserver';

const CardDaily = ({ image, title, number, handleModal, uid, tag }) => {
  const keyTag = 'daily';
  const [show, element] = useObserver();

  return (
    <article
      ref={element}
      className='cardDaily'
      onClick={() => handleModal({ uid, tag, keyTag })}>
      {show && (
        <>
          <img
            src={image}
            alt={title}
            placeholder='blur'
          />
          <p>
            # {number} | {title}
          </p>
        </>
      )}
    </article>
  );
};

export default CardDaily;

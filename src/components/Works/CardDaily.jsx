/* eslint-disable operator-linebreak */
import Image from 'next/image';
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
          <Image
            src={image}
            alt={title}
            layout='fill'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
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

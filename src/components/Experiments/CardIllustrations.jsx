/* eslint-disable operator-linebreak */
import Image from 'next/image';
import React from 'react';
import useObserver from '../../hooks/useObserver';

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
      onClick={() => handleModal({ uid, keyTag, tag })}>
      {show && (
        <>
          <Image src={image} alt={title} fitObject={fitObject} layout='fill' />
          <p>{title}</p>
        </>
      )}
    </article>
  );
};

export default CardIllustrations;

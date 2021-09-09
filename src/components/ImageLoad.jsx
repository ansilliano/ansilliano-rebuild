import React, { useEffect, useState } from 'react';

const ImageLoad = React.memo(
  ({
    src,
    placeholder = 'https://dummyimage.com/2000x2000/f5f5f5/f5f5f5.jpg',
    alt = '',
    fitObject,
    classStyle = '',
  }) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(placeholder);

    useEffect(() => {
      // start loading original image
      const imageToLoad = new Image();
      imageToLoad.src = src;
      imageToLoad.onload = () => {
        // When image is loaded replace the src and set loading to false
        setLoading(false);
        updateSrc(src);
      };
    }, [src]);

    return (
      <img
        className={classStyle}
        src={currentSrc}
        style={{
          opacity: loading ? 0.5 : 1,
          transition: 'opacity 0.15s linear',
          objectFit: fitObject,
        }}
        alt={alt}
      />
    );
    // eslint-disable-next-line comma-dangle
  }
);

export default ImageLoad;

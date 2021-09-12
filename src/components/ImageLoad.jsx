import React, { useEffect, useState } from 'react';

// eslint-disable-next-line react/display-name
const ImageLoad = React.memo(
  ({ src, alt = '', fitObject, classStyle = '' }) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(
      `https://dummyimage.com/1000x500/f5f5f5/f5f5f5.jpg`
    );

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
      // eslint-disable-next-line @next/next/no-img-element
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

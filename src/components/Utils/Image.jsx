import NextImage from 'next/image';
import { shimmer, toBase64 } from '../../helpers/blurplaceholder';

const Image = ({ src, alt, layout = 'fill', fitObject = '', ...props }) => {
  const style = {
    objectFit: fitObject,
  };

  return (
    <NextImage
      {...props}
      src={src}
      atl={alt}
      style={style}
      layout={layout}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      placeholder='blur'
    />
  );
};

export default Image;

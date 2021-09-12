/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import Image from 'next/image';
import React from 'react';
import db from '../db.json';
import { shimmer, toBase64 } from '../helpers/blurplaceholder';

const ModalImg = ({ uid = null, tag = null, keyTag = null }) => {
  let data = null;
  let item = null;
  if (keyTag === 'sketching') {
    data = db.sketching[tag];
    item = data.find((item) => item.uid === uid);
  }
  if (keyTag === 'illus') {
    data = db.illustrations[tag];
    item = data.find((item) => item.uid === uid);
  }

  if (keyTag === 'daily') {
    data = db.dailyUI[tag];
    item = data.find((daily) => daily.uid === uid);
  }

  if (keyTag === 'windsurf') {
    data = db.windsurf[tag];
    item = data.find((item) => item.uid === uid);
  }

  return (
    <div className='modal-image'>
      {uid && (
        <div>
          <Image
            alt={item.title}
            src={item.filepath}
            layout='fill'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            placeholder='blur'
          />
          <p>
            # {item.filename} | {item.title}
          </p>
        </div>
      )}
    </div>
  );
};
export default ModalImg;

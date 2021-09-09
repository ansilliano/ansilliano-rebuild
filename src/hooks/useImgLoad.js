import { useState } from 'react';

function useImgLoad() {
  const [imgLoad, setImgLoad] = useState(true);
  const handleLoadingImg = (e) => {
    if (!e.target.complete) {
      setImgLoad(true);
    } else {
      setImgLoad(false);
    }
  };

  return [imgLoad, handleLoadingImg];
}

export default useImgLoad;

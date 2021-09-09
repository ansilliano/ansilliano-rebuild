/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
import { useEffect, useRef, useState } from 'react';

function useObserver() {
  const element = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // console.log(element.current);
      const observer = new window.IntersectionObserver((entries) => {
        // console.log(entries);
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          // console.log('si')
          setShow(true);
          observer.disconnect();
        }
        // console.log({ isIntersecting })
      });
      observer.observe(element.current);
    });
    return () => {};
  }, [element]);

  return [show, element];
}

export default useObserver;

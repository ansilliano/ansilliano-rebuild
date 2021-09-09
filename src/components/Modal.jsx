import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, removeModal, children = null }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const style = {
    display: isOpen ? 'block' : 'none',
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isOpen) {
    const target = document.getElementById('modal');
    return createPortal(
      <div
        aria-hidden={true}
        role='button'
        style={style}
        className='modal'
        onClick={() => {
          removeModal({ uid: null });
        }}>
        {children}
      </div>,
      target
    );
  } else {
    return null;
  }
};

export default Modal;

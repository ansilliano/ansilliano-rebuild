import { useState } from 'react';

const useModal = () => {
  const [modalState, setModal] = useState({
    isOpen: false,
    uid: null,
    tag: null,
    keyTag: null,
  });

  const handleOpen = ({ uid, tag = null, keyTag = null }) => {
    setModal({
      ...modalState,
      isOpen: !modalState.isOpen,
      uid: uid || null,
      tag: tag || null,
      keyTag: keyTag || null,
    });
  };

  return [modalState, handleOpen];
};

export default useModal;

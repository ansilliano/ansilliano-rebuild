import { useState } from 'react';

const useInitialState = () => {
  const [state, setState] = useState({
    isOpen: false,
    element: null,
    openFrozen: false,
  });

  const handleModal = (e) => {
    setState({
      ...state,
      isOpen: true,
      element: e !== undefined ? e.target : null,
      openFrozen: true,
    });
  };

  const removeModal = () => {
    setState({
      ...state,
      isOpen: false,
      element: null,
      openFrozen: false,
    });
  };

  return {
    state,
    handleModal,
    removeModal,
  };
};

export default useInitialState;

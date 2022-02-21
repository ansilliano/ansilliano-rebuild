import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Modal from '../Modal';
import Frozen from '../Works/Frozen';

const MenuItem = ({
  icon: Icon,
  color,
  id,
  route,
  hoverColor,
  handleModal = null,
  path,
  className = '',
}) => {
  const { removeModal } = useContext(AppContext);
  const [isOpen, setOpen] = useState(false);
  const { push, query } = useRouter();
  const [isVisible, setVisible] = useState(false);

  const current = query['path'];
  const style = {
    backgroundColor: current === route ? hoverColor : color,
  };
  const handleClick = (id) => {
    if (path === 'works') {
      if (id !== undefined && id !== 3) {
        push(`detail/?path=${route}&id=${id}`);
      }
      if (id === 3) {
        // handleModal();
        setOpen(!isOpen);
        console.log(id);
        setVisible(!isVisible);
      }
    }
    if (path === 'experiments' && id !== undefined) {
      push(`detail/?path=${route}&id=${id}`);
    }
  };

  const classes = current === route && 'active-menu-item';
  return (
    <div
      onClick={() => handleClick(id)}
      role='button'
      tabIndex={0}
      className={`menu-item ${classes} ${className}`}
      style={style}>
      <Icon />
      <Modal id='modal' isOpen={isOpen} removeModal={removeModal} />
      {id === 3 && <Frozen isVisible={isVisible} />}
      {/* <Frozen isVisible={true} /> */}
    </div>
  );
};

export default MenuItem;

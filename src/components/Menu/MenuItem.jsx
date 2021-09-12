import { useRouter } from 'next/router';
import React from 'react';

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
  const { push, query } = useRouter();

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
        handleModal();
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
    </div>
  );
};

export default MenuItem;

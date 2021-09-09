import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const MenuItem = ({
  icon: Icon,
  color,
  id,
  route,
  hoverColor,
  handleModal = null,
  path,
}) => {
  const { pathname } = useLocation();
  const current = pathname.split('/')[2];
  const style = {
    backgroundColor: current === route ? hoverColor : color,
  };

  const history = useHistory();
  const handleClick = (id) => {
    if (path === 'works') {
      if (id !== undefined && id !== 3) {
        history.push(`/${path}/${route}/${id}/`);
      }
      if (id === 3) {
        handleModal();
      }
    }
    if (path === 'experiments' && id !== undefined) {
      history.push(`/${path}/${route}/${id}/`);
    }
  };

  const classes = current === route && 'active-menu-item';
  return (
    <div
      onClick={() => handleClick(id)}
      role='button'
      tabIndex={0}
      className={`menu-item ${classes}`}
      style={style}
    >
      <Icon />
    </div>
  );
};

export default MenuItem;

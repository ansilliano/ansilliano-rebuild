import Link from 'next/link';
import { useContext } from 'react';
import '../../../styles/components/menu/_menu.scss';
import { AppContext } from '../../context/AppContext';
import Icon from '../Icon';
import MobileIcon from '../mobile/MobileIcon/MobileIcon';

const MobileMenu = ({ color, dotColor }) => {
  const { handleMenuOpen } = useContext(AppContext);

  return (
    <nav className='menu'>
      <div className='line-left' />
      <div className='line-top' />
      <div className='icon' />
      <Link href='/'>
        <a className='menu__icon'>
          <Icon fillColor={color} dotColor={dotColor} />
        </a>
      </Link>
      <div className='menu__items' onClick={handleMenuOpen}>
        <MobileIcon />
      </div>
      <div className='line-right' />
      <div className='line-bottom' />
    </nav>
  );
};

export default MobileMenu;

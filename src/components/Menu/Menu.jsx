import Link from 'next/link';
import NavLink from '../../utils/NavLink';
import Icon from '../Icon';
import MobileIcon from './MobileIcon';

const Menu = ({ color, dotColor }) => {
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
      <div className='menu__items'>
        <div className='mobile-icon'>
          <MobileIcon />
        </div>
        <NavLink href='/about' activeClassName='active-link'>
          <a className='desk-menu'>About me</a>
        </NavLink>
        <NavLink href='/works' activeClassName='active-link'>
          <a className='desk-menu'>Works</a>
        </NavLink>
        <NavLink href='/experiments' activeClassName='active-link'>
          <a className='desk-menu'>Experiments</a>
        </NavLink>
      </div>
      <div className='line-right' />
      <div className='line-bottom' />
    </nav>
  );
};

export default Menu;

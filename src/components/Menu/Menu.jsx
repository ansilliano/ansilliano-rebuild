import Link from 'next/link';
import NavLink from '../../utils/NavLink';
import Icon from '../Icon';

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
        <NavLink href='/about' activeClassName='active-link'>
          <a>About me</a>
        </NavLink>
        <NavLink href='/works' activeClassName='active-link'>
          <a>Works</a>
        </NavLink>
        <NavLink href='/experiments' activeClassName='active-link'>
          <a>Experiments</a>
        </NavLink>
      </div>
      <div className='line-right' />
      <div className='line-bottom' />
    </nav>
  );
};

export default Menu;

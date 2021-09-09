import { useRouter } from 'next/router';
import Menu from './Menu/Menu';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <div
      className={`header main_container ${
        pathname === '/' ? 'bg-menu_red' : 'bg-menu_white'
      }`}>
      {pathname !== '/' ? (
        <Menu color='#660813' dotColor='#fff' />
      ) : (
        <Menu color='#660813' dotColor='#fff' />
      )}
    </div>
  );
};

export default Header;

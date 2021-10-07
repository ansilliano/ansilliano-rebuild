import Link from 'next/link';
import RRSS from '../Home/RRSS';

const MobileHome = () => {
  return (
    <div className='container-red m-base-container menu__container--red'>
      <ul className='menu__container--list'>
        <li>
          <Link href='/about'>
            <a>About me</a>
          </Link>
        </li>
        <li>
          <Link href='/works'>
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href='/experiments'>
            <a>Experiments</a>
          </Link>
        </li>
      </ul>
      <RRSS />
    </div>
  );
};

export default MobileHome;

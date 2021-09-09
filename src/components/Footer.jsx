import { useRouter } from 'next/router';
import React from 'react';
import SocialFooter from './SocialFooter';

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname !== '/' ? (
        <div className='footer-all'>
          <p>
            created with ♥ by Ans and developed by{' '}
            <a href='https://krlosaren.com' target='_blank' rel='noreferrer'>
              @krlosaren
            </a>
          </p>
          <SocialFooter />
        </div>
      ) : (
        <div className='footer-home'>
          <p>
            created with ♥ by Ans and developed by{' '}
            <a href='https://krlosaren.com' target='_blank' rel='noreferrer'>
              @krlosaren
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;

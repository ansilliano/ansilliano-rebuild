import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink = ({ href, children, activeClassName }) => {
  const router = useRouter();
  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} ${activeClassName}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
export default NavLink;

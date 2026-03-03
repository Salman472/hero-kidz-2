'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = href === '/' ? path === '/' : path.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative inline-block font-medium transition-colors duration-1000
        ${isActive ? 'text-primary' : 'text-base-content'}
        after:absolute after:left-1/2 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-primary
        after:transition-all after:duration-300
        after:-translate-x-1/2
        hover:after:w-full hover:text-primary
        ${isActive ? 'after:w-full' : ''}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-1'>
            <Image src={'/assets/logo.png'} alt='hero-kidz-logo' width={50} height={40}/>
            <h1 className='text-xl'>Hero <span className='text-primary'>Kidz</span></h1>
        </Link>
    );
};

export default Logo;
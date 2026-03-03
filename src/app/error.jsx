"use client"
import Link from 'next/link';
import React from 'react';
import { BiSolidError } from 'react-icons/bi';

const error = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 justify-center items-center'>
            <BiSolidError className='text-primary' size={200} />
            <h3>Something went wrong. Please try again</h3>
            <Link href={'/'} className='btn btn-primary btn-outline'>Go To Home</Link>
        </div>
        </div>
    );
};

export default error;
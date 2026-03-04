'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthBtn = () => {
    const session=useSession()
    return (
        <div>
             
            {session.status=='authenticated' ? <>
           <button onClick={()=>signOut()} className='btn btn-primary btn-outline'>Log Out</button>
            </> : <>
            <Link href={'/login'} className="btn btn-primary btn-outline">Login</Link>
            </>}
        </div>
    );
};

export default AuthBtn;
import Logo from '@/components/layout/Logo';
import React from 'react';

const loading = () => {
    return (
        <div className='animate-ping flex flex-col gap-2 justify-center items-center min-h-screen'>
            <Logo/>
        </div>
    );
};

export default loading;
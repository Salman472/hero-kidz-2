import ProductCardSkeleton from '@/components/skeleton/ProductCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                [...Array(12)].map((_, index)=>(
                    <ProductCardSkeleton key={index}/>
                ))
            }
        </div>
    );
};

export default loading;
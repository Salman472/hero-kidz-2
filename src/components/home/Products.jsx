import React from 'react';
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/server/product';
const Products = async() => {
    const products=await getProducts()
    console.log(products);
    return (
        <div className='space-y-10'>
            <h1 className='text-center text-5xl font-semibold'>Our <span className='text-primary'>Products</span></h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                products.map(product=><ProductCard key={product?._id} product={product}/>)
            }
        </div>
        </div>
    );
};

export default Products;
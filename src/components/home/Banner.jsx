import { banglaFont } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex-1 space-y-2' >
                <h1 className={`${banglaFont.className} text-5xl font-bold leading-15`}>আপনার শিশুকে দিন একটি <br />  <span className='text-primary'>সুন্দর ভবিষ্যৎ</span></h1>
                <h2>Buy Every Toy Up To 20% Discount</h2>
                <button className='btn btn-primary btn-outline'>Explore More</button>
            </div>
            <div className='flex-1'>
                <Image src={'/assets/hero.png'} alt='Buy Every Toy Up To 20% Discount' width={500} height={400}/>
            </div>
        </div>
    );
};

export default Banner;
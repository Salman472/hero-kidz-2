import { getSingleCard } from '@/actions/server/product';
import ProductCardDetails from '@/components/cards/ProductCardDetails';

import React from 'react';

export async function generateMetadata({ params }) {
  const {id}= await params;
  const product = await getSingleCard(id);

  return {
    title: product.title,
    description: product.description,

    alternates: {
      canonical: `/products/${product._id}`,
    },

    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://hero-kidz-ochre.vercel.app/products/${product._id}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}
 


const page =async ({params}) => {
    const {id}=await params
//    console.log(id);
   const product=await getSingleCard(id)
    // console.log(product);
    return (
        <div>
            <ProductCardDetails key={product?._id} product={product}/>
        </div>
    );
};

export default page;
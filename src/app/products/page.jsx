import Products from '@/components/home/Products';
import React from 'react';
export const metadata = {
  title: "All Products",
  description:
    "Browse all available products at Hero Kidz. Find the best deals and latest collections.",

  alternates: {
    canonical: "/products",
  },

  openGraph: {
    title: "All Products | Hero Kidz",
    description:
      "Browse all available products at Hero Kidz.",
    url: "https://yourdomain.com/products",
    images: [
      {
        url: "https://i.ibb.co.com/3YLkjpSt/products-page-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Products Page Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "All Products | Hero Kidz",
    description:
      "Browse all available products at Hero Kidz.",
    images: ["https://i.ibb.co.com/3YLkjpSt/products-page-preview.jpg"],
  },
};
const page = () => {
    return (
        <div>
            <Products/>
        </div>
    );
};

export default page;
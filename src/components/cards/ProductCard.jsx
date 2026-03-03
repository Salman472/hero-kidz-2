'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineOpenInNew } from 'react-icons/md';

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    _id,
  } = product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* image */}
      <figure className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {discount > 0 && (
          <span className="badge badge-secondary absolute top-2 left-2 z-10">
            -{discount}%
          </span>
        )}

        {/* hover overlay buttons */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
          
          <button className="btn btn-sm btn-primary gap-1">
            <FaShoppingCart />
            Add
          </button>

          <Link href={`/products/${_id}`} className="btn btn-sm btn-primary btn-outline text-white hover:border-primary border-white gap-1">
            <MdOutlineOpenInNew />
            Details
          </Link>

        </div>
      </figure>

      {/* body */}
      <div className="card-body p-4 space-y-2">
        
        {/* title */}
        <h2 className="font-semibold line-clamp-2 min-h-[48px]">
          {title}
        </h2>

        {/* rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-warning" />
          <span className="font-medium">{ratings}</span>
          <span className="text-base-content/60">
            ({reviews} reviews)
          </span>
        </div>

        {/* sold */}
        <p className="text-xs text-base-content/60">
          Sold: {sold}
        </p>

        {/* price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {discount > 0 && (
            <span className="text-sm line-through text-base-content/50">
              ৳{price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

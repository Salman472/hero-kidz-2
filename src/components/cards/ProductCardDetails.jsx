'use client';

import Image from 'next/image';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLocalShipping } from 'react-icons/md';
import CartBtn from '../buttons/CartBtn';

const ProductCardDetails = ({ product }) => {
  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    ratings,
    reviews,
    sold,
    info,
    qna,
  } = product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* LEFT — IMAGE */}
      <div className="bg-base-200 rounded-2xl p-4">
        <Image
          src={image}
          alt={title}
          width={600}
          height={500}
          className="w-full h-[380px] object-contain"
        />
      </div>

      {/* RIGHT — CONTENT */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          <p className="text-base-content/70">{bangla}</p>
        </div>

        {/* rating */}
        <div className="flex items-center gap-2">
          <FaStar className="text-warning" />
          <span className="font-semibold">{ratings}</span>
          <span className="text-base-content/60">
            ({reviews} reviews) • Sold {sold}
          </span>
        </div>

        {/* price */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {discount > 0 && (
            <>
              <span className="line-through text-base-content/50">
                ৳{price}
              </span>
              <span className="badge badge-secondary">
                -{discount}%
              </span>
            </>
          )}
        </div>

        {/* buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <CartBtn product={product}/>

          <button className="btn btn-primary btn-outline gap-2">
            <MdOutlineLocalShipping />
            Buy Now
          </button>
        </div>

        {/* info list */}
        <div className="bg-base-200 rounded-xl p-4">
          <h3 className="font-semibold mb-2">Key Features</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="md:col-span-2 space-y-4">
        <div className="bg-base-100 rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-base-content/80 whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* QNA */}
        <div className="bg-base-100 rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Q&A</h3>

          <div className="space-y-3">
            {qna?.map((item, i) => (
              <div key={i} className="border-b pb-2">
                <p className="font-medium">Q: {item.question}</p>
                <p className="text-base-content/70">
                  A: {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;

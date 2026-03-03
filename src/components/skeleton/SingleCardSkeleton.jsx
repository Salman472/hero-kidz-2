import React from 'react';

const SingleCardSkeleton = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-8 animate-pulse">
  {/* LEFT — IMAGE SKELETON */}
  <div className="bg-base-200 rounded-2xl p-4 h-[380px] w-full"></div>

  {/* RIGHT — CONTENT SKELETON */}
  <div className="space-y-4">
    {/* Title */}
    <div className="h-6 bg-base-300 rounded w-3/4"></div>
    <div className="h-4 bg-base-300 rounded w-1/2"></div>

    {/* Rating */}
    <div className="flex items-center gap-2">
      <div className="h-4 w-12 bg-base-300 rounded"></div>
      <div className="h-4 w-8 bg-base-300 rounded"></div>
    </div>

    {/* Price */}
    <div className="flex items-center gap-3">
      <div className="h-8 w-24 bg-base-300 rounded"></div>
      <div className="h-6 w-12 bg-base-300 rounded"></div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-3 pt-2">
      <div className="h-10 w-28 bg-base-300 rounded"></div>
      <div className="h-10 w-28 bg-base-300 rounded"></div>
    </div>

    {/* Info list */}
    <div className="bg-base-200 rounded-xl p-4 space-y-2">
      <div className="h-4 w-1/3 bg-base-300 rounded"></div>
      <div className="space-y-1">
        <div className="h-3 w-full bg-base-300 rounded"></div>
        <div className="h-3 w-5/6 bg-base-300 rounded"></div>
        <div className="h-3 w-4/6 bg-base-300 rounded"></div>
      </div>
    </div>
  </div>

  {/* DESCRIPTION SKELETON */}
  <div className="md:col-span-2 space-y-4">
    <div className="bg-base-100 rounded-xl p-5 shadow-sm space-y-2">
      <div className="h-5 w-1/4 bg-base-300 rounded"></div>
      <div className="h-4 w-full bg-base-300 rounded"></div>
      <div className="h-4 w-5/6 bg-base-300 rounded"></div>
      <div className="h-4 w-4/6 bg-base-300 rounded"></div>
    </div>

    {/* QNA SKELETON */}
    <div className="bg-base-100 rounded-xl p-5 shadow-sm space-y-3">
      <div className="h-5 w-1/4 bg-base-300 rounded"></div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-base-300 rounded"></div>
        <div className="h-4 w-5/6 bg-base-300 rounded"></div>
        <div className="h-4 w-4/6 bg-base-300 rounded"></div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCardSkeleton;
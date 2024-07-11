/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext';
import Link from 'next/link';

export default function Cart() {
    const {cart} = useContext(CartContext);
  return (
    <div className='h-[300px] w-[250px]
     bg-gray-100  z-10 rounded-md border 
     shadow-sm absolute mx-10 right-10 
     top-12 p-5 overflow-auto'>


  <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
    <span className="sr-only">Close cart</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  <div className="mt-4 space-y-6">
    <ul className="space-y-4">
        {cart?.map((item)=>(
            <li key={item?.id} className="flex items-center gap-4">
        <img
          src={item?.product?.attributes?.banner?.data?.attributes?.url}
           alt="item"
          className="size-16 rounded object-cover"
        />

        <div>
          <h3 className=" line-clamp-1 text-sm text-gray-900">{item?.product?.attributes?.title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Category:</dt>
              <dd className="inline">{item?.product?.attributes?.category}</dd>
            </div>

            <div>
              <dt className="inline">Price:</dt>
              <dd className="inline">{item?.product?.attributes?.price}</dd>
            </div>
          </dl>
        </div>
      </li>
))}

     
    </ul>

    <div className=" mt-5 space-y-4 text-center">
     
      <Link
        href="/cart"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
       View my cart ({cart?.length})
      </Link>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
  </div>
</div>






  )
}

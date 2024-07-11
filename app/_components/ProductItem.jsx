import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}) {
  return (
   
    <Link href={`/product-details/${product?.id}`} className='p-1 border-gray-200 
    rounded-lg hover:border 
    hover:shadow-md
hover: cursor-pointer'>
        <Image alt='Product Image' 
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400} height={350}
        className='rounded-t-lg h-[150px] object-cover'
        
        />
    <div className='flex justify-between p-3 items-center bg-gray-50 rounded-b-lg'>
    <div className=''>
        <h2 className='text-[12px] font-medium line-clamp-1'>
            {product?.attributes?.title}</h2>
        
        <h2 
        className='text-[10px] text-gray-400 flex gap-1 items-center'>
         <AlignJustify color="#38704e"  className='w-4 h-4'/>
        {product?.attributes.category}
        </h2>
    </div>
    <h2>
        {product?.attributes?.price}
    </h2>
    </div>




     </Link>

    
   
  )
}

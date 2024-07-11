'use client'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import React, { useContext } from 'react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from "../../_utils/CartApis"
import { CartContext } from '../../_context/CartContext'

export default function ProductInfo({product}) {
  const router = useRouter();
  const {user} = useUser();

  const {cart, setCart} = useContext(CartContext);
  const handleAddToCart = ()=>{
    if(!user){
router.push('/sign-in')
    }else{
      const data={
        data:{
          username: user.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          products: [product?.id]
        }
      }
      CartApis.addToCart(data).then(res=>{

        console.log('Cart created with success',res.data.data)
        setCart(oldCart =>[
          ...oldCart,
          {
             id: res?.data?.data?.id,
          product
          }
         

        ])
      }).catch(error=>{console.log('Errore', error)})
    }

  }
  return (
    <div>
      {product?.id ?
      <div>
      <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
      <h2 className='text-[15px] text-gray-400'>{product?.attributes?.category}</h2>
      <h2 className='text-[11px] mt-5'>{product?.attributes?.description[0]?.children[0].text}</h2>

<h2 className='text-[11px] text-gray-500 flex gap-2 mt-3 items-center'>
  {product?.attributes?.instantDelivery ?
   <BadgeCheck className='h-5 w-5 text-green-600'/>: <AlertOctagon className='h-5 w-5 text-red-400'/> 
   }
  Eligible For Instant Delivery
</h2>
      <h2 className='text-[30px] mt-3 text-primary'>$ {product?.attributes?.price}</h2>

      <button onClick={()=>handleAddToCart()} className='flex gap-2 p-3 text-white bg-primary hover:bg-teal-600 rounded-lg'>
          <ShoppingCart />Add To Cart
          </button>
  </div> :
  <SkeletonProductInfo />
    }
      

    
    </div>
  )
}

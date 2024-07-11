"use client";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext';
import CartApis from "../_utils/CartApis"
import Cart from "../_components/Cart"

export default function Header() {
  const [isLoggedIn, setIsLOggedIn] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  //let the initial value of the CartContext in the header
  const {cart, setCart} = useContext(CartContext);
  useEffect(() =>{
    //if the window.location.href includes sign-in
    //setIsLOggedIn will be true
    setIsLOggedIn(window.location.href.toString().includes('sign-in'))
  },[]);
  const {user} = useUser();
useEffect(() =>{
  user&&getCartItems();
},[user]);
  //call to the API of Cart
  const getCartItems=() =>{
   CartApis.getUserCartItems(user?.primaryEmailAddress?.emailAddress).then(res=>{
    console.log("Respose from cart items", res?.data?.data)
    res?.data?.data.forEach(citem=>{
      setCart((oldCart)=>[
        ...oldCart,
        {
          id: citem.id,
          product: citem?.attributes?.products?.data[0]
        }

      ])
    })
   })
  }
  return !isLoggedIn && (
    <header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
   
      <span className="sr-only">Home</span>
     <Image  src={'/logo.svg'} alt='logo' width={50} height={50}/>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Products </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About us </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact us </a>
          </li>

          
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {!user ?
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            href="/sign-in"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            href="#"
          >
            Register
          </a>
        </div> :
        <div className='flex items-center gap-5'>
<SignedIn>
        {/* Mount the UserButton component */}
        <h1 className='flex gap-1 cursor-pointer items-center'>
           <ShoppingCartIcon onClick={()=>setOpenCart(!openCart)} />
           <span class="bg-primary
            text-white text-xs h-4 w-5 
            font-medium px-1.5 rounded-full">
              {cart?.length}
              </span>

           </h1>
           
       
        <UserButton />
       {openCart && <Cart />} 
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
          </div>
      
      }
        

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

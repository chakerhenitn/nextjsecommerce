'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'

  export default function ProductSection() {
    //State to store the data coming from the API
    const [productList, setProductList] = useState([])
    //useeffect to updte the state of...
    useEffect(()=>{ 
      getLatestProducts_();
    },[])

    const getLatestProducts_ = ()=>{
      ProductApis.getLatestProducts().then(res=>{
        console.log(res.data.data);
        setProductList(res.data.data);
      })
    }
  return (

    <div className='px-10 md:px-20'>
      <h2 className='my-4 text-xl'>Our Product Section</h2>
      <ProductList productList={productList}/>
      </div>
  )
}

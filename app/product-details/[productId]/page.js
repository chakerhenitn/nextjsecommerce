"use client";

import React, { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import ProductApis from "../../_utils/ProductApis";
import { usePathname } from "next/navigation";
import BreadCrumbs from "../../_components/BreadCrumbs";

export default function ProductDetails({ params }) {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productByCategList, setProductByCategoryList] = useState([]);
  useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      console.log("Product Item", res.data.data);
      setProductDetails(res?.data?.data);
      //Call the function  getProductByCategory_
      getProductListByCategory_(res?.data?.data);
    });
  };

  const getProductListByCategory_ = (product) => {
    ProductApis.getProductByCategory(product?.attributes?.category).then(
      (res) => {
        console.log(res?.data?.data);
        setProductByCategoryList(res?.data?.data);
      }
    );
  };

  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumbs path={path} />
      <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div>
        <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
        <ProductList productList={productByCategList} />
      </div>
    </div>
  );
}

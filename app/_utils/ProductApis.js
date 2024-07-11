/* eslint-disable import/no-anonymous-default-export */
const { default: axiosClient } = require("./axiosClient");

//API to return all products available
const getLatestProducts = () => axiosClient.get("/products?populate=*");
//API to return product by ID
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);
//API to return product by category
const getProductByCategory = (category) =>
  axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

export default {
  getLatestProducts,
  getProductById,
  getProductByCategory,
};

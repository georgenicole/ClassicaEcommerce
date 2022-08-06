import React from "react";
import { createContext, useState } from "react";
export const ProductContext = createContext();

const ItemProvider = ({ children }) => {
const [productList, setProductList] = useState([])
const [productListFiltered, setProductListFiltered] = useState([])
const [category, setCategory] = useState([])
  const handleList = (params) => {
   setProductList(params)
  }
  return (
    <ProductContext.Provider value={{ productList, handleList, productListFiltered, setProductListFiltered, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ItemProvider;

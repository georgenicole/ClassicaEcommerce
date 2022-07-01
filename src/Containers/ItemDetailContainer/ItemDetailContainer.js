import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../Components/ItemDetail/ItemDetail";
import { baseUrl } from "../../constantes";

export const ItemDetailContainer = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`${baseUrl}/products/${id}`);
        const data = await response.json();
        console.log(data);
         setProductDetail(data)
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    getProduct();
  }, [id]);

  return <ItemDetail product={productDetail} />;
};

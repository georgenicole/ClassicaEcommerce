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
        const response = await fetch(
          `https://run.mocky.io/v3/c91d215f-5886-457b-b294-c17a64b57509`
        );
        const data = await response.json();
        console.log(id);
        const productoElegido = data.find(
          (producto) => producto.id === Number(id)
        );
        console.log(productoElegido);
        setProductDetail(productoElegido);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    getProduct();
  }, [id]);
  if (Object.keys(productDetail) !== 0) {
    return <ItemDetail product={productDetail} />;
  } else {
    return <h1>Cargando...</h1>;
  }
};

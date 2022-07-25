import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../Components/ItemDetail/ItemDetail";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", params.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.id);
          console.log("Document data:", docSnap.data());
          const productDetail = { id: docSnap.id, ...docSnap.data() };
          setProductDetail(productDetail);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    getProduct();
  }, [params]);
  if (Object.keys(productDetail) !== 0) {
    return <ItemDetail product={productDetail} />;
  } else {
    return <h1>Cargando...</h1>;
  }
};

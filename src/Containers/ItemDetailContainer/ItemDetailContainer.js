import React from "react";
import { doc, getDoc} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../Components/ItemDetail/ItemDetail";
import { db } from "../../firebase/config"


export const ItemDetailContainer = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [error, setError] = useState("");
  const params = useParams()


  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", params.id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log(docSnap.id)
          console.log("Document data:", docSnap.data());
          const productDetail = {id: docSnap.id, ...docSnap.data()}
          setProductDetail(productDetail)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }



        // const response = await fetch(
        //   `https://run.mocky.io/v3/c91d215f-5886-457b-b294-c17a64b57509`
        // );
        // const data = await response.json();
        // const productoElegido = data.find(
        //   (producto) => producto.id === Number(id)
        // );
        // console.log(productoElegido);
        // setProductDetail(productoElegido);
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

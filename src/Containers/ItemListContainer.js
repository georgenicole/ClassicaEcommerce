import React, { useEffect, useContext } from "react";
import "./Styles.css";
import ItemList from "../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { ProductContext } from "../Context/ItemContext";

const ItemListContainer = () => {
  const {productList, handleList, productListFiltered, setProductListFiltered, setCategory} = useContext(ProductContext)
  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          productos.push({ id: doc.id, ...doc.data() });
        });
        setProductListFiltered(productos);
        handleList(productos);
      } catch (error) {
        alert(error);
      }
    };
    getProductos();
  }, []);

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productList.filter(
        (producto) => producto.category === params.categoryId
      );
      setCategory(params.categoryId)
      setProductListFiltered(productosFiltrados);
    } else {
      setCategory(null)
      setProductListFiltered(productList);
    }
  }, [params, productList]);

  return (
    <div>
      {productList.length !== 0 ? (
        <ItemList  products={productListFiltered}/>
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 300 }}
        >
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            color="#BF9270"
            secondaryColor="#F9CF93"
          />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

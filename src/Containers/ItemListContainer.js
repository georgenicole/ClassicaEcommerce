import React, { useEffect, useState } from "react";
import "./Styles.css";
import ItemList from "../Components/ItemList/ItemList";
import { baseUrl } from "../constantes";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();

  console.log(params);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setProductos(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    };
    getProductos();
  }, []);

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(
        (producto) => producto.category === params.categoryId
      );
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(productos);
    }
  }, [params, productos]);

  console.log(productos);

  return (
    <div>
      {productos.length !== 0 ? (
        <ItemList products={productosFiltrados} />
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

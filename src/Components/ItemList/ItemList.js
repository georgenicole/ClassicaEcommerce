import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Shop } from "../../Context/ShopContext";
import Item from "../item/Item";
import "./styles.css";

const ItemList = ({ products }) => {
  const { setEstadoA } = useContext(Shop);

  const handleChangeState = () => {
    setEstadoA("other value");
  };

  return (
    <div className="itemContainer">
      {products?.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
      <Button variant="text" onClick={handleChangeState}>
        Cambio estado A
      </Button>
    </div>
  );
};

export default ItemList;

import { Button } from "@mui/material";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../Context/ShopContext";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({ product}) => {
  const navigate = useNavigate();
  const [qtyAdded, setQtyAdded] = useState(0);

  const { addItem } = useContext(Shop);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);

    addItem(product, qty);
  };
  const handleTerminate = () => {
    navigate("/cart");
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          src={product.image}
          alt="imageproducts"
          style={{ width: 400, height: 400, margin: 100, borderRadius: 10 }}
        />
      </div>
      <div style={{ margin: 100 }}>
        <h1>{product.title}</h1>
        <h5>{`Price: $ ${product.price}`}</h5>
        <section style={{ marginTop: 40 }}>
          <h4>Description:</h4>
          <p style={{ marginBotton: 30 }}>{product.description}</p>
        </section>
        <section>
          {!qtyAdded ? (
            <ItemCount onConfirm={handleConfirm} stock={product.stock} />
          ) : (
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FAEEE0",
                color: "#BF9270",
                width: 140,
                height: 38,
                marginTop: 40,
              }}
              onClick={handleTerminate}
            >
              checkout
            </Button>
          )}
        </section>
      </div>
    </div>
  );
};

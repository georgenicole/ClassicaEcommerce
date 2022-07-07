import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({ product }) => {
  const navigate = useNavigate();

  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };
  const handleTerminate = () => {
    navigate("/cart");
  };
  console.log(qtyAdded);
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
            <ItemCount onConfirm={handleConfirm} maxQuantity={product.stock} />
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

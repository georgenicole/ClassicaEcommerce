import { Button } from "@mui/material";
import React from "react";

export const ItemDetail = ({ product }) => {
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
          <p>{product.description}</p>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FAEEE0",
              color: "#BF9270",
              width: 140,
              height: 38,
              marginTop: 40,
            }}
          >
            Buy
          </Button>
        </section>
      </div>
    </div>
  );
};

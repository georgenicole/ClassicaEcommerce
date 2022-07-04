import { Button } from "@mui/material";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

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
          <p style={{ marginBotton: 30 }}>{product.description}</p>
        </section>
        <section>
          <ItemCount />
        </section>
      </div>
    </div>
  );
};

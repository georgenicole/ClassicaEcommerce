import React from "react";

export const ItemDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="imageproducts" />
      <h6>{`Price: $ ${product.price}`}</h6>
      <section>
        <p>{product.description}</p>
      </section>
    </div>
  );
};

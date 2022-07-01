import React from 'react'

export const ItemDetail = ({product}) => {
    console.log(product);
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt='imageproducts'/>
        <p>{product.price}</p>
    </div>
  )
}

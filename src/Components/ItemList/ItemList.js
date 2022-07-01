import React from 'react'
import Item from "../item/Item"
import "./styles.css"

const ItemList = ({products}) => {
  return(
    <div className='itemContainer'>
         {products?.map(prod => <Item key={prod.id} />)}
    </div>
  )
}

export default ItemList
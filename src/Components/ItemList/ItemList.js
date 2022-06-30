import React from 'react'
import Item from "../item/Item"
import "./styles.css"

const ItemList = ({info}) => {
  return (
    
    <div  className='itemContainer'>
        {info?.map(prod => <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
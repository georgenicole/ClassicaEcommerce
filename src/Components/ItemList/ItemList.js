import React from 'react'
import Item from "../item/Item"

const ItemList = ({info}) => {
  return (
    <div>
        {info?.map(prod => <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
import React from 'react'
import Item from "../item/Item"
import "./styles.css"

const ItemList = ({info}) => {
  return (
    <div className='Cards' style={{display:"flex", justifyContent:'space-around',}}>
        {info?.map(prod => <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
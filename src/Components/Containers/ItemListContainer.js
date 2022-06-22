import React from 'react'
import "./Styles.css"
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ({greeting, phrase}) => {

  const handleAdd = (quantity)=>{
console.log(`Se agrego al carrito ${quantity} unidades`)

  }
  
  return (
    
    <div>
        <h1 style={{marginLeft:"40%"}}>{greeting}</h1>
        <h3  style={{marginLeft:"15%"}}>{phrase}</h3>
        <ItemCount handleAdd={handleAdd} stock={10} />
    </div>
  )
}

export default ItemListContainer
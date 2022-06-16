import React from 'react'
import "./Styles.css"


const ItemListContainer = ({greeting, phrase}) => {
  return (
    <div>
        <h1 style={{marginLeft:"40%"}}>{greeting}</h1>
        <h3  style={{marginLeft:"15%"}}>{phrase}</h3>
    </div>
  )
}

export default ItemListContainer
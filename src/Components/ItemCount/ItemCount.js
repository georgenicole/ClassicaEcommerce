import React, {useState} from 'react'
import Button from "@mui/material/Button"


const ItemCount = ({handleAdd, stock}) => {

    const [count, setCount] = useState(0);
     
    const onAdd = () =>{
        setCount(count + 1  )
    }

    const onDecrement = () =>{
        setCount(count - 1 )
    }

  return (
  <div style={{width:200, height: 200, backgroundColor:"#F3F4FF", borderRadius:15, marginLeft:"40%"}} >
    <div  style={{display:"flex",flexDirection:"column", justifyContent:"center", padding:20}}>
     <p style={{display:"flex" ,justifyContent:"center"}}>{count}</p>
     <div style={{display:"flex",flexDirection:"row", justifyContent:"center", padding:20}}>
     <Button variant="outlined" onClick={onAdd}  disabled={count === stock}>+</Button>
    <Button variant="outlined" onClick={onDecrement} disabled={count <= 0}>-</Button>
     </div>
    <Button variant='contained' style={{backgroundColor:"#4E60FF"}} disabled={stock <= 0} onClick={() => handleAdd(count)} >Add to cart</Button>
    </div>
  </div>
  )
}

export default ItemCount;
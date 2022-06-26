import React from 'react'
import { Button, Card, Typography, } from '@mui/material'
import { Box } from '@mui/system'
import "./Styles.css"


const Item = ({prod}) => {
    const { title, price, image} = prod
  return (
    <div style={{ width:250, heigth:300, margin:50, flexWrap:'wrap'}}>
    <Card className='Product-Card' style={{ width:"100%",  backgroundColor:"#F3F4FF", borderRadius:10}}>
        <Box>{image}</Box>
    <Typography style={{display:'flex', justifyContent:'center', marginTop:10}}>{title}</Typography>
         <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center' ,height:80}} >
         <Typography>{price}</Typography>
        <Button variant='text' style={{width:150, height:20}}>Ver Detalle</Button>
         </div>
    </Card>
    </div>
  )


}

export default Item
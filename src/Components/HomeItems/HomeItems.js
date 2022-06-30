import React from 'react';
import { Box, Button } from "@mui/material";



const HomeItems = () => {
    return(
      <Box  sx={{marginLeft:100}}>
      <Button variant='text' style={{color:"#2B2B43"}}>Breads</Button>
      <Button variant='text'  style={{color:"#2B2B43"}}>Bread Pudding</Button>
      <Button variant='text'  style={{color:"#2B2B43"}}>donuts</Button>
      <Button variant='text'  style={{color:"#2B2B43"}}>My orders</Button>
    </Box>
    )
}


export default HomeItems;


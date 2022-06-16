import React from 'react';
import { Box, Button } from "@mui/material";



const HomeItems = () => {
    return(
      <Box  sx={{marginLeft:115}}>
      <Button variant='text' style={{color:"#2B2B43"}}>Restaurants</Button>
      <Button variant='text'  style={{color:"#2B2B43"}}>Deals</Button>
      <Button variant='text'  style={{color:"#2B2B43"}}>My orders</Button>
    </Box>
    )
}


export default HomeItems;


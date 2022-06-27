import React from 'react';
import { Box, Button } from "@mui/material";



const HomeItems = () => {
    return(
      <Box  sx={{marginLeft:110}}>
      <Button variant='text' style={{color:"#2B2B43"}}>Instruments</Button>
      <Button variant='text'  style={{color:"#2B2B43"}}>categories</Button>
      <Button variant='text'  style={{color:"#2B2B43"}}>My orders</Button>
    </Box>
    )
}


export default HomeItems;


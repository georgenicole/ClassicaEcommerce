import React from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { IconButton} from '@mui/material';

 const CarWidget = () => {
  return (
        <IconButton
            size="small"
            edge="start"
          >
             <LocalGroceryStoreIcon style={{color:"#4E60FF", backgroundColor:"#F3F4FF", width:35, height:35, borderRadius:10, marginLeft:8}}/>
          </IconButton>
  )
}
export default CarWidget;

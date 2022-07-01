import React from 'react';
import AvatarPhoto from "../Logo/AvatarPhoto.png"
import { IconButton } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const AvatarImage = () => {
    return(
        <IconButton
            size="small"
            edge="start"
          >
             <PersonOutlineIcon className='Icon-CardWidget' style={{color:"#BF9270", backgroundColor:"#FFEDDB", width:35, height:35, borderRadius:10, marginLeft:8}}/>
          </IconButton>
    )
}


export default AvatarImage;
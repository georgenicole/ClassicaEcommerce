import React from 'react';
import AvatarPhoto from "../Logo/AvatarPhoto.png"
import { Avatar } from '@mui/material';


const AvatarImage = () => {
    return(
        
         <Avatar alt="Remy Sharp" src={AvatarPhoto} sx={{ width: 42, height: 40, marginLeft:3}} variant="rounded" />
    )
}


export default AvatarImage;
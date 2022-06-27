import React from 'react'
import { Button, Card, Typography, CardMedia, CardContent, CardActions} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import "./Styles.css"


const Item = ({prod}) => {
    const { title, price, image} = prod
  return (
    
<Card sx={{ maxWidth: 345}} className='Card' >
     
      {image}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='AddtoCart-Button_Card' variant='text' style={{color:'#827397', marginRight:115}}>Add to Cart</Button>
        <IconButton
            size="small"
            edge="start"
          
           >
             <FavoriteBorderIcon  style={{color:'#4D4C7D'}} />
          </IconButton>
      </CardActions>
    </Card>
  )


}

export default Item
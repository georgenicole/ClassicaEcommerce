import React from 'react'
import { Button, Card, Typography, CardContent, CardActions, Grid} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import "./Styles.css"


const Item = ({prod}) => {
    const { title, price, image} = prod
  return (
    <div className='card' style={{widtd:"100%", height:"100%", display:'flex'}}>
    <div className='card__body' style={{}}>
    <Card sx={{ maxWidth: 300}} className='Card' >
      {image}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='card__title'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='card__btn' variant='text' style={{color:'#827397', marginRight:115}}>Add to Cart</Button>
        <IconButton
            size="small"
            edge="start"
          
           >
             <FavoriteBorderIcon  style={{color:'#4D4C7D'}} />
          </IconButton>
      </CardActions>
    </Card>
  
    </div>

    </div>

  )


}

export default Item
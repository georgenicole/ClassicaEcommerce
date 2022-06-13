import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "./Logo/logoprincipal.png";
import AvatarImage from "./Logo/avatarImage.png";
import { Avatar } from '@mui/material';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color='inherit' >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="logo" />
          <Box  sx={{marginLeft:115}}>
          <Button variant='text' color='primary'>Restaurants</Button>
          <Button variant='text' color='primary'>Deals</Button>
          <Button variant='text' color='primary'>My orders</Button>
          </Box>
          <Avatar alt="Remy Sharp" src={AvatarImage} sx={{ width: 42, height: 40 }} variant="rounded" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
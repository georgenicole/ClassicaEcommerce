import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AvatarImage from "../Avatar/Avatar";
import HomeItems from "../HomeItems/HomeItems";
import { LogoTienda } from "../LogoTienda/LogoTienda";
import CarWidget from "../CarWidget/CarWidget";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <LogoTienda />
          <HomeItems />
          <CarWidget />
          <AvatarImage />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

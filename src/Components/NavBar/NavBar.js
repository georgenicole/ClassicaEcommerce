import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HomeItems from "../HomeItems/HomeItems";
import { LogoTienda } from "../LogoTienda/LogoTienda";
import CarWidget from "../CarWidget/CarWidget";
import "./Navbar.css";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar className="toobar">
          <LogoTienda />
          <HomeItems />
          <CarWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
